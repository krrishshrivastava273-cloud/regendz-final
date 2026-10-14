"use client";

import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <p className="kicker mb-4">About</p>
          <h2 className="display text-[clamp(2rem,4.5vw,4.2rem)]">
            We don&apos;t just build digital products.
            <br />
            We build digital growth.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-4 text-mute">
            <p>
              Regendz IT is a digital solutions company focused on two things: web
              development and digital marketing. We start by understanding the business —
              size, goals, volume, and where it needs to go next.
            </p>
            <p>
              Then we build a presence that fits today without boxing in tomorrow. Technology
              and marketing stay connected, so the site and the demand around it scale as one
              system — as a long-term partnership, not a one-off delivery.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
