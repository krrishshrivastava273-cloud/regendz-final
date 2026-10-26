import { NextResponse } from "next/server";

type UpstreamPayload = { ok?: unknown; error?: unknown; stage?: unknown };

function isUpstreamPayload(value: unknown): value is UpstreamPayload {
  return Boolean(value) && typeof value === "object";
}

function responseFormat(contentType: string | null, body: string) {
  if (contentType?.includes("application/json")) return "json";
  if (!body.trim()) return "empty";
  if (body.trimStart().startsWith("<")) return "html";
  return "text";
}

function safeUpstreamCode(value: unknown, fallback: string) {
  return typeof value === "string" && /^[A-Z0-9_]{1,64}$/.test(value) ? value : fallback;
}

function safeUpstreamStage(value: unknown) {
  return typeof value === "string" && /^[a-z_]{1,64}$/.test(value)
    ? value
    : "not_provided";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const { name, email, contactNo, serviceType, message } = body as Record<string, unknown>;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    typeof serviceType !== "string" ||
    typeof contactNo !== "string"
  ) {
    return NextResponse.json({ ok: false, message: "Invalid form fields." }, { status: 400 });
  }

  if (!name.trim() || !email.trim() || !message.trim() || !serviceType.trim()) {
    return NextResponse.json({ ok: false, message: "Required fields are missing." }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
    return NextResponse.json({ ok: false, message: "Invalid email address." }, { status: 400 });
  }

  const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  const webhookSecret = process.env.CONTACT_WEBHOOK_SECRET;
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!appsScriptUrl || !webhookSecret || !spreadsheetId) {
    console.error("[contact] Google Apps Script configuration is incomplete.", {
      hasAppsScriptUrl: Boolean(appsScriptUrl),
      hasWebhookSecret: Boolean(webhookSecret),
      hasSpreadsheetId: Boolean(spreadsheetId),
    });
    return NextResponse.json(
      { ok: false, message: "Contact service is not configured yet." },
      { status: 503 },
    );
  }

  if (!/^[a-zA-Z0-9_-]{20,200}$/.test(spreadsheetId)) {
    console.error("[contact] Google Sheets spreadsheet ID is invalid.");
    return NextResponse.json(
      { ok: false, message: "Contact service is not configured yet." },
      { status: 503 },
    );
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        contactNo: contactNo.trim(),
        serviceType: serviceType.trim(),
        message: message.trim(),
        spreadsheetId,
        secret: webhookSecret,
      }),
      redirect: "follow",
      signal: controller.signal,
      cache: "no-store",
    });
    const responseBody = await response.text();
    const format = responseFormat(response.headers.get("content-type"), responseBody);
    let payload: unknown = null;

    try {
      payload = JSON.parse(responseBody);
    } catch {
      // The response category is logged below; never log the raw upstream body.
    }

    if (!response.ok || !isUpstreamPayload(payload) || payload.ok !== true) {
      const upstreamError = safeUpstreamCode(
        isUpstreamPayload(payload) ? payload.error : undefined,
        "UPSTREAM_REJECTED",
      );
      const upstreamStage = safeUpstreamStage(
        isUpstreamPayload(payload) ? payload.stage : undefined,
      );

      console.error("[contact] Google Apps Script did not confirm the enquiry save.", {
        upstreamStatus: response.status,
        upstreamFormat: format,
        upstreamError,
        upstreamDetails: isUpstreamPayload(payload) ? JSON.stringify(payload) : undefined,
        upstreamStage,
      });
      return NextResponse.json(
        { ok: false, message: "We could not save your enquiry. Please try again." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[contact] Google Apps Script request failed.", {
      errorType: error instanceof DOMException && error.name === "AbortError" ? "timeout" : "network_error",
    });
    return NextResponse.json(
      { ok: false, message: "We could not reach the contact service. Please try again." },
      { status: 502 },
    );
  } finally {
    clearTimeout(timeoutId);
  }

  return NextResponse.json({ ok: true });
}
