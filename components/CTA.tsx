"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="py-10 md:py-16">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-lime px-8 py-16 text-ink md:px-16 md:py-24">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-ink/10" />
            <div className="absolute -bottom-16 left-1/3 h-64 w-64 rounded-full bg-ink/10 blur-2xl" />
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink/70">Next</p>
            <h2 className="display mt-4 max-w-4xl text-[clamp(2.4rem,6vw,5.4rem)]">
              Ready to build what&apos;s next?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-ink/75">
              Tell us where your business is today. We&apos;ll help you build where it needs
              to go tomorrow.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <MagneticButton href="#contact" className="bg-ink text-white">
                Start your project
              </MagneticButton>
              <MagneticButton href="mailto:hello@regendzit.com" className="border border-ink/20 bg-transparent text-ink">
                Talk to us
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
