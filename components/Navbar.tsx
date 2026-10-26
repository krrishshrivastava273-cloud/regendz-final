"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/brand/Logo";
import MagneticButton from "@/components/ui/MagneticButton";
import { navLinks } from "@/lib/content";

/* ─── Brand Dropdown Data ─────────────────────────────────────── */
const brandItems = [
  {
    id: "slitcode",
    name: "slitcode",
    category: "Web & Software Development",
    href: "/services/slitcode",
    accent: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.08)",
    accentBorder: "rgba(139,92,246,0.2)",
    logo: (
      <span className="flex items-center">
        <Image
          src="/images/slitcode-logo.png"
          alt="slitcode logo"
          width={936}
          height={276}
          className="h-5 w-auto max-w-[110px] object-contain"
        />
      </span>
    ),
  },
  {
    id: "forwai",
    name: "Forwai",
    category: "Business Consultancy & Data Analytics",
    href: "/services/forwai",
    accent: "#F59E0B",
    accentBg: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.2)",
    logo: (
      <span className="flex items-center">
        <Image
          src="/images/forwai-logo.png"
          alt="Forwai logo"
          width={952}
          height={186}
          className="h-4 w-auto max-w-[105px] object-contain"
        />
      </span>
    ),
  },
  {
    id: "groadvertx",
    name: "GROADVERTX",
    category: "Branding, Creatives & Digital Marketing",
    href: "/services/groadvertx",
    accent: "#E11D48",
    accentBg: "rgba(225,29,72,0.08)",
    accentBorder: "rgba(225,29,72,0.2)",
    logo: (
      <span className="flex items-center gap-2">
        <Image
          src="/images/groadvertx-logo.png"
          alt="Groadvertx symbol"
          width={645}
          height={1024}
          className="h-5 w-auto object-contain"
        />
        <span className="font-bold text-white text-sm">GROADVERTX</span>
      </span>
    ),
  },
] as const;

/* ─── Brands Dropdown ─────────────────────────────────────────── */
function BrandsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        id="brands-dropdown-trigger"
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="brands-dropdown-menu"
        className="flex items-center gap-1.5 text-sm text-mute transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707] rounded-md px-1 py-0.5"
      >
        Our Brands
        <svg
          viewBox="0 0 12 12"
          className={`h-3 w-3 fill-current transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M6 8L1 3h10L6 8z" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        id="brands-dropdown-menu"
        role="menu"
        aria-labelledby="brands-dropdown-trigger"
        className={`absolute right-0 top-full mt-3 w-72 rounded-2xl border border-white/10 bg-[#0c0c0e]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 origin-top-right ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="p-2">
          {/* Header */}
          <div className="px-3 py-2 mb-1">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
              Regendz IT — Brands
            </p>
          </div>

          {/* Brand items */}
          {brandItems.map((brand) => (
            <Link
              key={brand.id}
              href={brand.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-white/5 focus:outline-none focus-visible:bg-white/5"
              style={{
                outline: "none",
              }}
            >
              {/* Accent dot */}
              <div
                className="mt-0.5 h-2 w-2 shrink-0 rounded-full mt-[9px]"
                style={{ background: brand.accent }}
              />
              <div className="min-w-0">
                <div className="mb-0.5">{brand.logo}</div>
                <p className="text-[10px] text-white/35 leading-relaxed group-hover:text-white/50 transition-colors truncate">
                  {brand.category}
                </p>
              </div>
              {/* Arrow */}
              <span
                className="ml-auto shrink-0 mt-1 text-white/20 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white/60 text-sm"
              >
                →
              </span>
            </Link>
          ))}

          {/* Divider + back to main services */}
          <div className="mx-3 my-2 h-px bg-white/5" />
          <a
            href="#services"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] text-white/30 hover:text-white/60 transition-colors"
          >
            <span className="text-xs">←</span>
            All services overview
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Navbar ──────────────────────────────────────────────────── */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);

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
          {navLinks
            .filter((l) => l.label !== "Contact")
            .map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-mute transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          <a
            href="/#contact"
            className="text-sm text-mute transition-colors hover:text-white"
          >
            Contact
          </a>
          {/* Brands dropdown — right of nav links */}
          <BrandsDropdown />
          <MagneticButton href="/#contact" className="bg-lime text-ink hover:shadow-[0_0_32px_rgba(200,255,0,0.45)]">
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

      {/* Mobile nav */}
      {open && (
        <div id="mobile-nav" className="border-t border-white/5 bg-ink px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {navLinks
              .filter((l) => l.label !== "Contact")
              .map((l) => (
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
              href="/#contact"
              className="display text-3xl"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>

            {/* Mobile brands section */}
            <div>
              <button
                type="button"
                onClick={() => setMobileDropOpen((v) => !v)}
                className="display text-3xl flex items-center gap-3 w-full text-left"
                aria-expanded={mobileDropOpen}
              >
                Our Brands
                <svg
                  viewBox="0 0 12 12"
                  className={`h-4 w-4 fill-current transition-transform ${mobileDropOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 8L1 3h10L6 8z" />
                </svg>
              </button>
              {mobileDropOpen && (
                <div className="mt-4 ml-2 flex flex-col gap-3">
                  {brandItems.map((brand) => (
                    <Link
                      key={brand.id}
                      href={brand.href}
                      onClick={() => {
                        setMobileDropOpen(false);
                        setOpen(false);
                      }}
                      className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-4"
                    >
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ background: brand.accent }}
                      />
                      <div>
                        <div>{brand.logo}</div>
                        <p className="text-[11px] text-white/35 mt-0.5">{brand.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/#contact"
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
