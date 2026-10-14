"use client";

import Reveal from "@/components/ui/Reveal";
import { funnel } from "@/lib/content";

export default function Marketing() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-shell">
        <Reveal>
          <p className="kicker mb-4">Web + marketing</p>
          <h2 className="display max-w-3xl text-[clamp(2rem,4.6vw,4.2rem)]">
            A great website gets you online. Great marketing gets people to it.
          </h2>
          <p className="mt-5 max-w-2xl text-mute">
            Development and digital marketing are designed as one system. The site is built
            for the journeys marketing will send. The campaigns are built for the pages they
            land on.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-3 md:grid-cols-5">
          {funnel.map((step, i) => (
            <Reveal key={step.id} delay={i * 0.06} className="h-full">
              <article className="relative h-full overflow-hidden rounded-[28px] border border-white/8 bg-surface p-6">
                <span className="font-mono text-lime">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display mt-8 text-3xl">{step.label}</h3>
                <p className="mt-3 text-sm text-mute">{step.copy}</p>
                {i < funnel.length - 1 && (
                  <span className="absolute right-3 top-6 hidden text-lime md:block">→</span>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
