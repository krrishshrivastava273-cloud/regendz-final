"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/brand/Logo";
import MagneticButton from "@/components/ui/MagneticButton";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "bg-ink/80 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="container-shell flex h-[76px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-mute transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <MagneticButton href="#contact" className="bg-lime text-ink hover:shadow-[0_0_32px_rgba(200,255,0,0.45)]">
            Start a project
          </MagneticButton>
        </nav>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-px w-5 bg-white transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-white transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="border-t border-white/5 bg-ink px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="display text-3xl"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink"
            >
              Start a project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
