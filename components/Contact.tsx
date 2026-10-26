"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";

const field =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-dim focus:border-lime/60";

const serviceTypes = [
  "Website Design & Development",
  "Web Applications & Custom Software",
  "Responsive UI/UX Design",
  "Business-Specific Digital Solutions",
  "Technical Integrations & Deployment",
  "Business Consultancy & Growth Strategy",
  "Sales & Marketing Strategy",
  "Operations & Process Optimization",
  "Business Performance Analysis",
  "Data Analytics & Business Intelligence",
  "KPI Reporting & Dashboard Support",
  "Branding & Visual Identity",
  "Graphic Design & Creative Content",
  "Social Media Creatives",
  "Digital Marketing",
  "Content & Campaign Development",
  "Creative UI Support",
  "AI Automation & Workflow Integration",
  "AI Agents & Business Process Automation",
  "Other / Not Sure Yet",
];

type FormErrors = Partial<Record<"name" | "email" | "serviceType" | "message", string>>;

export default function Contact({ embedded = false }: { embedded?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState("");
  const isSubmittingRef = useRef(false);

  useEffect(() => {
    const scrollToContact = () => {
      if (window.location.hash !== "#contact") return;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    };

    scrollToContact();
    window.addEventListener("hashchange", scrollToContact);
    return () => window.removeEventListener("hashchange", scrollToContact);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmittingRef.current) return;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      contactNo: String(formData.get("contactNo") ?? "").trim(),
      serviceType: String(formData.get("serviceType") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };
    const nextErrors: FormErrors = {};

    if (!data.name) nextErrors.name = "Please enter your name.";
    if (!data.email) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!data.serviceType) nextErrors.serviceType = "Please choose a service type.";
    if (!data.message) nextErrors.message = "Please tell us about your project.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      setErrorMessage("");
      return;
    }

    setErrors({});
    setErrorMessage("");
    isSubmittingRef.current = true;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload: unknown = await res.json().catch(() => null);
      if (!res.ok || !payload || typeof payload !== "object" || (payload as { ok?: unknown }).ok !== true) {
        throw new Error(
          payload && typeof payload === "object" && typeof (payload as { message?: unknown }).message === "string"
            ? (payload as { message: string }).message
            : "Something went wrong. Email hello@regendzit.com.",
        );
      }
      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Email hello@regendzit.com.");
    } finally {
      isSubmittingRef.current = false;
    }
  }

  const content = (
    <div id="contact" className="grid scroll-mt-32 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className={`mb-4 font-mono text-xs uppercase tracking-[0.22em] ${embedded ? "text-ink/70" : "text-lime"}`}>
            Contact
          </p>
          <h2 className={`display text-[clamp(2.2rem,4.4vw,3.96rem)] ${embedded ? "text-ink" : "text-white"}`}>
            Let&apos;s build together.
          </h2>
          <p className={`mt-4 ${embedded ? "text-ink/75" : "text-mute"}`}>
            Share where the business is now. We&apos;ll come back with a path that can scale.
          </p>
          <a
            href="mailto:hello@regendzit.com"
            className={`mt-8 inline-block font-mono text-sm ${embedded ? "text-ink underline decoration-ink/30 underline-offset-4" : "text-lime"}`}
          >
            hello@regendzit.com
          </a>
          {embedded && (
            <div className="mt-16 max-w-xs border-t border-ink/20 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
                Let&apos;s talk about your next project
              </p>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            noValidate
            className={embedded ? "rounded-[32px] border border-ink/20 bg-ink/[0.94] p-6 shadow-2xl md:p-8" : "glass rounded-[32px] p-6 md:p-8"}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
                Name
                <input required name="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} className={field} autoComplete="name" />
                {errors.name && <span id="contact-name-error" className="text-[11px] normal-case tracking-normal text-red-400">{errors.name}</span>}
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
                Email
                <input required type="email" name="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} className={field} autoComplete="email" />
                {errors.email && <span id="contact-email-error" className="text-[11px] normal-case tracking-normal text-red-400">{errors.email}</span>}
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
                Contact no
                <input name="contactNo" type="tel" className={field} autoComplete="tel" />
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
                Service type
                <select required name="serviceType" aria-invalid={Boolean(errors.serviceType)} aria-describedby={errors.serviceType ? "contact-service-error" : undefined} className={`${field} bg-ink`} defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  {serviceTypes.map((serviceType) => (
                    <option key={serviceType} value={serviceType}>{serviceType}</option>
                  ))}
                </select>
                {errors.serviceType && <span id="contact-service-error" className="text-[11px] normal-case tracking-normal text-red-400">{errors.serviceType}</span>}
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
              Message
              <textarea required name="message" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} rows={5} className={`${field} resize-y`} />
              {errors.message && <span id="contact-message-error" className="text-[11px] normal-case tracking-normal text-red-400">{errors.message}</span>}
            </label>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <MagneticButton
                type="submit"
                disabled={status === "sending"}
                className="bg-lime text-ink"
              >
                {status === "sending" ? "Sending…" : "Let's build together"}
              </MagneticButton>
              {status === "sent" && (
                <p className="text-sm text-lime">Received. We&apos;ll be in touch.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  {errorMessage || "Something went wrong. Email hello@regendzit.com."}
                </p>
              )}
            </div>
          </form>
        </Reveal>
    </div>
  );

  return embedded ? content : <section className="py-20 md:py-28"><div className="container-shell">{content}</div></section>;
}
