"use client";

import Contact from "@/components/Contact";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="py-10 md:py-16">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-lime px-8 py-16 text-ink md:px-16 md:py-24">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-ink/10" />
            <div className="absolute -bottom-16 left-1/3 h-64 w-64 rounded-full bg-ink/10 blur-2xl" />
            <Contact embedded />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
