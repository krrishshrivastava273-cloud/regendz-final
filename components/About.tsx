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
              Regendz iT is a digital solutions company bringing together technology, creativity and business strategy under one ecosystem. Through our three specialist verticals, we help businesses build their digital presence, strengthen their market position and develop smarter ways to operate and grow.
            </p>
            <p>
              Whether it&apos;s developing digital products, building brand visibility or optimising business operations, our approach begins with understanding what each business needs. We bring the right capabilities together to create solutions that work today, adapt tomorrow and support sustainable growth over time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
