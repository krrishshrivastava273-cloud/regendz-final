"use client";

import Reveal from "@/components/ui/Reveal";
import { whyCards } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-shell">
        <Reveal>
          <p className="kicker mb-4">Why Regendz IT</p>
          <h2 className="display max-w-4xl text-[clamp(2rem,4.6vw,4.3rem)]">
            Why businesses choose Regendz IT
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((card, i) => (
            <Reveal key={card.n} delay={i * 0.05}>
              <article
                data-cursor
                className="group h-full rounded-[28px] border border-white/8 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-1 hover:border-lime/40 hover:shadow-[0_20px_80px_rgba(200,255,0,0.08)]"
              >
                <span className="font-mono text-lime">{card.n}</span>
                <h3 className="display mt-8 text-2xl md:text-3xl">{card.title}</h3>
                <p className="mt-3 text-mute">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
