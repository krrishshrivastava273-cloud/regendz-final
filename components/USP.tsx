"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { uspPath } from "@/lib/content";

export default function USP() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-20 md:py-28">
      <div className="overflow-hidden border-y border-white/5 bg-lime py-3 text-ink">
        <div className="marquee-track flex w-max gap-10 font-mono text-xs uppercase tracking-[0.28em]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>Built around your business</span>
              <span>Designed to scale with you</span>
              <span>Your website should grow with it</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-shell mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="kicker mb-4">The USP</p>
          <h2 className="display text-[clamp(2rem,4.4vw,4.1rem)]">
            Not just a website. A digital system built to scale.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 text-lg leading-relaxed text-mute">
            <p>We don&apos;t build websites just to look good.</p>
            <p>
              We build them around your business model, customer journey and future growth.
            </p>
            <p>
              Whether you&apos;re a startup, growing business or established company, your
              digital presence should evolve as you scale.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="container-shell mt-14">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {uspPath.map((step, i) => {
            const on = i === active;
            return (
              <button
                key={step.id}
                type="button"
                data-cursor
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`rounded-3xl border p-6 text-left transition duration-500 ${
                  on
                    ? "border-lime/50 bg-lime text-ink shadow-[0_0_50px_rgba(200,255,0,0.18)]"
                    : "border-white/8 bg-white/[0.03] text-white hover:border-white/20"
                }`}
              >
                <span className={`kicker ${on ? "!text-ink/70" : ""}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-6 text-3xl">{step.label}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${on ? "text-ink/75" : "text-mute"}`}>
                  {step.copy}
                </p>
              </button>
            );
          })}
        </div>
        <div className="mt-4 hidden h-px bg-gradient-to-r from-lime via-white/20 to-lime lg:block" />
      </div>
    </section>
  );
}
