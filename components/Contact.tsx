"use client";

import { useState, type FormEvent } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";

const field =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-dim focus:border-lime/60";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="kicker mb-4">Contact</p>
          <h2 className="display text-[clamp(2rem,4vw,3.6rem)]">Let&apos;s build together.</h2>
          <p className="mt-4 text-mute">
            Share where the business is now. We&apos;ll come back with a path that can scale.
          </p>
          <a
            href="mailto:hello@regendzit.com"
            className="mt-8 inline-block font-mono text-sm text-lime"
          >
            hello@regendzit.com
          </a>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="glass rounded-[32px] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
                Name
                <input required name="name" className={field} autoComplete="name" />
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
                Email
                <input required type="email" name="email" className={field} autoComplete="email" />
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
                Phone
                <input name="phone" type="tel" className={field} autoComplete="tel" />
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
                Company
                <input name="company" className={field} autoComplete="organization" />
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
                Service required
                <select required name="service" className={`${field} bg-ink`} defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>Both</option>
                </select>
              </label>
              <label className="grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
                Budget
                <select name="budget" className={`${field} bg-ink`} defaultValue="">
                  <option value="">Prefer to discuss</option>
                  <option>Under ₹1L</option>
                  <option>₹1L – ₹3L</option>
                  <option>₹3L – ₹8L</option>
                  <option>₹8L+</option>
                </select>
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-xs uppercase tracking-[0.16em] text-dim">
              Message
              <textarea required name="message" rows={5} className={`${field} resize-y`} />
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
                  Something went wrong. Email hello@regendzit.com.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
