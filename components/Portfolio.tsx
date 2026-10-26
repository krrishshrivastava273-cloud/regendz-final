"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

/* ── Case Study Data ─────────────────────────────────────────── */

const caseStudies = [
  {
    code: "01",
    name: "Launch Presence",
    category: "EARLY-STAGE VENTURES · WEB DEVELOPMENT",
    description:
      "A conversion-focused landing platform concept showcasing clear positioning, dynamic value architecture, and responsive lead generation for seed-stage startups.",
    visual: "website" as const,
    href: "/work/launch-presence",
    serviceTag: "slitcode engine",
  },
  {
    code: "02",
    name: "Corporate System",
    category: "PROFESSIONAL SERVICES · WEB DEVELOPMENT",
    description:
      "An enterprise website architecture concept engineered for professional services, featuring multi-tier navigation, executive proof blocks, and institutional credibility.",
    visual: "corporate" as const,
    href: "/work/corporate-system",
    serviceTag: "enterprise stack",
  },
  {
    code: "03",
    name: "Commerce Engine",
    category: "RETAIL & D2C · WEB DEVELOPMENT",
    description:
      "A modern headless e-commerce storefront concept prioritizing instant catalog discovery, curated product cards, fluid cart interactions, and frictionless checkout.",
    visual: "commerce" as const,
    href: "/work/commerce-engine",
    serviceTag: "headless commerce",
  },
  {
    code: "04",
    name: "Demand Engine",
    category: "GROWTH-STAGE BRANDS · DIGITAL MARKETING",
    description:
      "A full-funnel marketing intelligence dashboard concept integrating multi-channel attribution, live campaign pacing, and high-signal conversion telemetry.",
    visual: "analytics" as const,
    href: "/work/demand-engine",
    serviceTag: "growth analytics",
  },
];

/* ── Component ────────────────────────────────────────────────── */

export default function Portfolio() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="kicker">Selected work</p>
            <div className="flex items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
              Interactive Concept Systems
            </div>
          </div>
          <h2 className="display mt-4 text-[clamp(2rem,4.6vw,4.4rem)]">
            Built to make an impact.
          </h2>
          <p className="mt-4 max-w-xl text-mute">
            Explore four production-grade concept architectures demonstrating how we
            structure digital identity, corporate credibility, commerce velocity, and demand analytics.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((item, i) => (
            <Reveal key={item.code} delay={i * 0.08}>
              <CaseStudyCard study={item} />
            </Reveal>
          ))}
        </div>

        {/* Compact CTA Below Grid */}
        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/[0.08] bg-gradient-to-r from-white/[0.03] via-white/[0.01] to-white/[0.03] p-6 sm:flex-row sm:px-8 sm:py-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-lime/25 bg-lime/10 text-lime">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white tracking-tight">
                  Have an idea? Let&apos;s build it.
                </p>
                <p className="text-xs text-white/50">
                  Custom web engineering, data intelligence, and growth engines tailored to your vision.
                </p>
              </div>
            </div>
            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-lime px-6 py-2.5 font-sans text-xs font-semibold tracking-wide text-ink transition-all duration-300 hover:bg-lime-deep hover:shadow-[0_0_24px_rgba(200,255,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              Start a Conversation
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Case Study Card ──────────────────────────────────────────── */

function CaseStudyCard({
  study,
}: {
  study: (typeof caseStudies)[number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <article
      ref={cardRef}
      data-cursor
      onMouseMove={handleMouseMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a0a0a] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-lime/30 hover:shadow-[0_12px_48px_rgba(200,255,0,0.06)]"
    >
      {/* Cursor-following gradient */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(200,255,0,0.04), transparent 50%)`,
        }}
      />

      {/* Visual Area */}
      <div className="relative isolate h-64 overflow-hidden sm:h-72">
        {/* Dark base + subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0f] via-[#09090b] to-[#060607]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,255,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.4) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Soft radial lime glow */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.03] blur-3xl transition-all duration-700 group-hover:bg-lime/[0.07] group-hover:scale-110" />

        {/* Realistic Product Mockup Window */}
        <div className="absolute inset-4 z-10 transition-transform duration-700 ease-out group-hover:scale-[1.015]">
          <MockupVisual type={study.visual} />
        </div>

        {/* Concept Project Badge + Number */}
        <div className="absolute left-6 top-6 z-20 flex items-center gap-2 pointer-events-none">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-lime">
            {study.code}
          </span>
          <span className="rounded-md border border-lime/25 bg-[#0a0a0a]/90 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-lime/90 shadow-sm backdrop-blur-md">
            CONCEPT PROJECT
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between gap-2">
          <h3 className="display text-[clamp(1.4rem,2.5vw,1.8rem)] leading-tight text-white">
            {study.name}
          </h3>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-white/50">
            {study.serviceTag}
          </span>
        </div>

        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-lime/80">
          {study.category}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-white/60">
          {study.description}
        </p>

        <div className="mt-auto pt-6 border-t border-white/[0.05]">
          <Link
            href={study.href}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 transition-colors duration-300 group-hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
          >
            View case study
            <motion.span
              className="inline-block text-lime"
              initial={false}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ── Distinct Realistic Product UI Previews ──────────────────── */

function MockupVisual({ type }: { type: string }) {
  // ── CARD 01 — Launch Presence: Light-bg SaaS / Startup Landing Page ──
  if (type === "website") {
    return (
      <div
        className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl flex flex-col"
        style={{ background: "#f8fafc", fontFamily: "system-ui, sans-serif" }}
      >
        {/* Nav */}
        <div
          className="flex items-center justify-between px-3 py-2 border-b"
          style={{ borderColor: "#e2e8f0", background: "#ffffff" }}
        >
          <div className="flex items-center gap-1.5">
            <span
              className="h-4 w-4 rounded flex items-center justify-center text-white text-[8px] font-black"
              style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}
            >
              N
            </span>
            <span className="text-[10px] font-black tracking-tight" style={{ color: "#0f172a" }}>
              nova<span style={{ color: "#10b981" }}>.</span>ai
            </span>
          </div>
          <div className="flex items-center gap-3 text-[8px] font-medium" style={{ color: "#64748b" }}>
            <span>Product</span>
            <span>Pricing</span>
            <span>Docs</span>
          </div>
          <span
            className="rounded-full px-2.5 py-0.5 text-[8px] font-bold text-white"
            style={{ background: "#10b981" }}
          >
            Get started →
          </span>
        </div>

        {/* Hero */}
        <div className="flex-1 flex flex-col items-center justify-center px-3 py-2 text-center">
          <span
            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[7.5px] font-semibold mb-1.5"
            style={{ background: "#ecfdf5", color: "#059669", border: "1px solid #a7f3d0" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#10b981" }}
            />
            Now in public beta
          </span>
          <h2
            className="text-[15px] font-black leading-tight tracking-tight mb-1"
            style={{ color: "#0f172a" }}
          >
            Ship faster with<br />
            <span style={{ color: "#10b981" }}>AI-powered</span> infra
          </h2>
          <p className="text-[8px] leading-relaxed mb-2.5" style={{ color: "#64748b", maxWidth: 180 }}>
            Deploy edge-native apps in seconds. Built for teams that move at startup speed.
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="rounded-lg px-3 py-1 text-[8px] font-bold text-white"
              style={{ background: "#10b981" }}
            >
              Start free trial
            </span>
            <span
              className="rounded-lg px-2.5 py-1 text-[8px] font-medium"
              style={{ background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0" }}
            >
              View demo
            </span>
          </div>
        </div>

        {/* Dashboard preview strip */}
        <div
          className="mx-2 mb-2 rounded-xl overflow-hidden border"
          style={{ borderColor: "#e2e8f0", background: "#fff" }}
        >
          <div
            className="flex items-center gap-1 px-2 py-1 border-b"
            style={{ borderColor: "#f1f5f9", background: "#f8fafc" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#f87171" }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#fbbf24" }} />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#34d399" }} />
            <span className="ml-1 text-[7px]" style={{ color: "#94a3b8" }}>app.nova.ai/dashboard</span>
          </div>
          <div className="flex gap-1.5 p-2">
            {[
              { label: "Requests/sec", val: "48.2K", up: true },
              { label: "Latency p99", val: "11ms", up: false },
              { label: "Uptime", val: "100%", up: false },
            ].map((k) => (
              <div
                key={k.label}
                className="flex-1 rounded-lg p-1.5"
                style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
              >
                <p className="text-[6.5px] font-medium mb-0.5" style={{ color: "#94a3b8" }}>{k.label}</p>
                <p className="text-[10px] font-black" style={{ color: k.up ? "#10b981" : "#0f172a" }}>{k.val}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex items-center justify-center gap-1.5 pb-2">
          {["Edge Deploy", "Auto-Scale", "SOC 2"].map((f) => (
            <span
              key={f}
              className="rounded-full px-2 py-0.5 text-[7px] font-semibold"
              style={{ background: "#ecfdf5", color: "#059669", border: "1px solid #a7f3d0" }}
            >
              ✓ {f}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // ── CARD 02 — Corporate System: White + Deep Navy Corporate Website ──
  if (type === "corporate") {
    return (
      <div
        className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl flex flex-col"
        style={{ background: "#ffffff", fontFamily: "Georgia, serif" }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-3 py-1.5 border-b"
          style={{ borderColor: "#e2e8f0", background: "#fff" }}
        >
          <div className="flex items-center gap-1.5">
            <div
              className="h-4 w-4 rounded"
              style={{ background: "linear-gradient(135deg,#1e3a5f,#0f2847)" }}
            />
            <span className="text-[9px] font-bold tracking-[0.08em]" style={{ color: "#0f2847", fontFamily: "system-ui" }}>
              VANGUARD
            </span>
            <span className="text-[7.5px] tracking-wider" style={{ color: "#64748b", fontFamily: "system-ui" }}>
              CAPITAL
            </span>
          </div>
          <div className="flex items-center gap-2.5 text-[7.5px]" style={{ color: "#475569", fontFamily: "system-ui" }}>
            <span>Services</span>
            <span>Sectors</span>
            <span>Leadership</span>
          </div>
          <span
            className="px-2 py-0.5 text-[7.5px] font-semibold"
            style={{
              background: "#0f2847",
              color: "#fff",
              borderRadius: 3,
              fontFamily: "system-ui",
            }}
          >
            Inquire
          </span>
        </div>

        {/* Hero — full-width navy banner */}
        <div
          className="relative flex flex-col justify-center px-4 py-3"
          style={{ background: "linear-gradient(120deg,#0f2847 70%,#1e4080)", minHeight: 80 }}
        >
          {/* Subtle grid lines */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <p className="text-[7px] tracking-[0.18em] uppercase mb-1.5 relative" style={{ color: "#93c5fd", fontFamily: "system-ui" }}>
            Global Institutional Advisory
          </p>
          <h2
            className="text-[13px] font-bold leading-snug relative"
            style={{ color: "#ffffff", maxWidth: 220 }}
          >
            Capital architecture<br />for institutional<br />scalability.
          </h2>
          <div className="flex items-center gap-2 mt-2 relative">
            <span
              className="px-2.5 py-0.5 text-[7.5px] font-semibold"
              style={{ background: "#fff", color: "#0f2847", borderRadius: 3, fontFamily: "system-ui" }}
            >
              Request consultation
            </span>
            <span className="text-[7.5px]" style={{ color: "#93c5fd", fontFamily: "system-ui" }}>
              View mandate profile →
            </span>
          </div>
        </div>

        {/* Credentials strip */}
        <div
          className="grid grid-cols-3 gap-0 border-b"
          style={{ borderColor: "#e2e8f0" }}
        >
          {[
            { n: "$4.8B+", l: "Portfolio AUM" },
            { n: "180+", l: "Active Mandates" },
            { n: "3", l: "Global Offices" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="flex flex-col items-center py-2"
              style={{
                borderRight: i < 2 ? "1px solid #e2e8f0" : "none",
              }}
            >
              <span className="text-[12px] font-bold" style={{ color: "#0f2847" }}>{s.n}</span>
              <span className="text-[7px]" style={{ color: "#94a3b8", fontFamily: "system-ui" }}>{s.l}</span>
            </div>
          ))}
        </div>

        {/* Practice areas */}
        <div className="flex-1 flex flex-col px-3 py-2 gap-1.5">
          <p className="text-[7px] tracking-[0.14em] uppercase font-semibold mb-0.5" style={{ color: "#0f2847", fontFamily: "system-ui" }}>
            Practice Areas
          </p>
          {[
            { title: "M&A Advisory", sub: "Cross-border deal structuring" },
            { title: "Risk Engineering", sub: "Governance & compliance frameworks" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-2 rounded p-1.5"
              style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
            >
              <div
                className="h-3 w-1 rounded-full mt-0.5 shrink-0"
                style={{ background: "#0f2847" }}
              />
              <div>
                <p className="text-[8px] font-bold" style={{ color: "#0f2847", fontFamily: "system-ui" }}>{item.title}</p>
                <p className="text-[7px]" style={{ color: "#64748b", fontFamily: "system-ui" }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div
          className="flex items-center justify-between px-3 py-1.5 border-t"
          style={{ borderColor: "#e2e8f0", background: "#f8fafc" }}
        >
          <span className="text-[7px]" style={{ color: "#94a3b8", fontFamily: "system-ui" }}>Zurich · London · New York</span>
          <span
            className="text-[7px] font-semibold"
            style={{ color: "#0f2847", fontFamily: "system-ui" }}
          >
            FINMA · SEC · FCA Compliant
          </span>
        </div>
      </div>
    );
  }

  // ── CARD 03 — Commerce Engine: Warm cream premium e-commerce storefront ──
  if (type === "commerce") {
    const products = [
      { id: "chrono", name: "Kinetic Chrono 01", sub: "Matte Titanium", price: "$380", badge: "BESTSELLER", badgeColor: "#78350f" },
      { id: "pods", name: "Aero Acoustic Pods", sub: "Graphite Black", price: "$240", badge: "NEW", badgeColor: "#374151" },
      { id: "flask", name: "Vessel Flask 750", sub: "Raw Ceramic", price: "$95", badge: null, badgeColor: "" },
    ];
    return (
      <div
        className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl flex flex-col"
        style={{ background: "#faf7f2", fontFamily: "system-ui, sans-serif" }}
      >
        {/* Store nav */}
        <div
          className="flex items-center justify-between px-3 py-2 border-b"
          style={{ borderColor: "#e7e0d5", background: "#fff" }}
        >
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black tracking-[0.12em]" style={{ color: "#1c1c1c" }}>
              AURA<span style={{ color: "#d97706" }}>·</span>STUDIO
            </span>
          </div>
          <div className="flex items-center gap-3 text-[7.5px] font-medium" style={{ color: "#6b7280" }}>
            <span>Shop</span>
            <span>Collections</span>
            <span>About</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <div className="relative">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span
                className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full text-white flex items-center justify-center"
                style={{ background: "#d97706", fontSize: 6 }}
              >
                2
              </span>
            </div>
          </div>
        </div>

        {/* Editorial banner */}
        <div
          className="flex items-center justify-between px-3 py-1.5 text-[7.5px]"
          style={{ background: "#1c1c1c", color: "#faf7f2" }}
        >
          <span className="tracking-[0.15em] uppercase">Autumn Drop — Now Live</span>
          <span style={{ color: "#d97706" }}>Free shipping over $150 →</span>
        </div>

        {/* Product grid */}
        <div className="flex-1 grid grid-cols-3 gap-2 px-2 py-2">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-xl overflow-hidden"
              style={{ background: "#fff", border: "1px solid #e7e0d5" }}
            >
              {/* Product image area */}
              <div
                className="relative flex items-center justify-center"
                style={{ height: 52, background: "#f5f0e8" }}
              >
                {/* Designed miniature product illustration */}
                {p.id === "chrono" ? (
                  <div className="relative flex items-center justify-center">
                    <div className="absolute -top-2.5 h-3 w-3.5 rounded-t bg-stone-700" />
                    <div className="absolute -bottom-2.5 h-3 w-3.5 rounded-b bg-stone-700" />
                    <div className="relative h-7 w-7 rounded-full bg-stone-900 border border-stone-500 flex items-center justify-center shadow-sm">
                      <div className="h-2.5 w-0.5 bg-amber-500 rounded-full rotate-45 origin-bottom" />
                      <div className="h-1 w-1 rounded-full bg-white absolute" />
                    </div>
                  </div>
                ) : p.id === "pods" ? (
                  <div className="h-6 w-8 rounded-lg bg-stone-900 border border-stone-700 flex flex-col justify-between p-1 shadow-sm">
                    <div className="h-px w-full bg-stone-700" />
                    <div className="flex justify-center">
                      <span className="h-1 w-1 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="h-1 w-3 rounded-t-sm bg-stone-400" />
                    <div className="h-7 w-4.5 rounded-b-md bg-[#e4d5b7] border border-amber-900/10 shadow-sm" />
                  </div>
                )}
                {p.badge && (
                  <span
                    className="absolute top-1 left-1 px-1 py-0.5 text-white rounded"
                    style={{ background: p.badgeColor, fontSize: 5.5, fontWeight: 700, letterSpacing: "0.06em" }}
                  >
                    {p.badge}
                  </span>
                )}
              </div>
              {/* Product info */}
              <div className="p-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[7.5px] font-bold leading-tight" style={{ color: "#1c1c1c" }}>{p.name}</p>
                  <p className="text-[6.5px] mt-0.5" style={{ color: "#9ca3af" }}>{p.sub}</p>
                </div>
                <p className="text-[8.5px] font-black mt-1" style={{ color: "#d97706" }}>{p.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex items-center justify-between px-3 py-1.5 border-t"
          style={{ borderColor: "#e7e0d5", background: "#fff" }}
        >
          <div className="flex items-center gap-1 text-[7px]" style={{ color: "#6b7280" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#10b981" }} />
            Express Global Fulfillment
          </div>
          <span
            className="rounded-lg px-2.5 py-1 text-[7.5px] font-bold text-white"
            style={{ background: "#1c1c1c" }}
          >
            View All Products →
          </span>
        </div>
      </div>
    );
  }

  // ── CARD 04 — Demand Engine: Light bg + Purple analytics dashboard ──
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl flex"
      style={{ background: "#f5f3ff", fontFamily: "system-ui, sans-serif" }}
    >
      {/* Sidebar */}
      <div
        className="flex flex-col py-2.5 px-1.5 gap-0.5 shrink-0"
        style={{ width: 44, background: "#1e1b4b", borderRight: "none" }}
      >
        {/* Logo mark */}
        <div
          className="h-5 w-5 rounded flex items-center justify-center text-white mb-2 mx-auto text-[8px] font-black"
          style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
        >
          N
        </div>
        {[
          { icon: "▤", label: "Overview", active: true },
          { icon: "◈", label: "Campaigns" },
          { icon: "◉", label: "Audience" },
          { icon: "⊞", label: "Channels" },
          { icon: "↗", label: "Reports" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center rounded py-1 gap-0.5"
            style={{
              background: item.active ? "rgba(124,58,237,0.3)" : "transparent",
              cursor: "default",
            }}
          >
            <span className="text-[9px]" style={{ color: item.active ? "#c4b5fd" : "#6d6a8a" }}>
              {item.icon}
            </span>
            <span className="text-[5.5px] leading-none" style={{ color: item.active ? "#c4b5fd" : "#6d6a8a" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden p-2 gap-1.5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8.5px] font-black" style={{ color: "#1e1b4b" }}>Campaign Overview</p>
            <p className="text-[6.5px]" style={{ color: "#8b5cf6" }}>30-day window · Live</p>
          </div>
          <div className="flex items-center gap-1">
            <span
              className="relative flex h-2 w-2"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#7c3aed" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#7c3aed" }} />
            </span>
            <span className="text-[6.5px] font-bold" style={{ color: "#7c3aed" }}>LIVE</span>
          </div>
        </div>

        {/* KPI grid */}
        <div className="grid grid-cols-2 gap-1">
          {[
            { label: "Pipeline", val: "$842K", delta: "↑ 24%", pos: true },
            { label: "ROAS", val: "4.62×", delta: "Target 3.8×", pos: true },
            { label: "Blended CAC", val: "$312", delta: "↓ 14%", pos: false },
            { label: "Conv. Rate", val: "4.18%", delta: "High intent", pos: true },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-lg p-1.5"
              style={{ background: "#fff", border: "1px solid #ede9fe" }}
            >
              <p className="text-[6px] uppercase tracking-wider" style={{ color: "#94a3b8" }}>{k.label}</p>
              <p className="text-[10px] font-black" style={{ color: "#1e1b4b" }}>{k.val}</p>
              <p className="text-[6.5px] font-semibold" style={{ color: k.pos ? "#7c3aed" : "#64748b" }}>
                {k.delta}
              </p>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div
          className="rounded-lg p-1.5"
          style={{ background: "#fff", border: "1px solid #ede9fe" }}
        >
          <div className="flex items-center justify-between mb-1">
            <p className="text-[6.5px] font-bold" style={{ color: "#1e1b4b" }}>Revenue Attribution</p>
            <p className="text-[6px]" style={{ color: "#7c3aed" }}>+32% Q4 forecast</p>
          </div>
          <svg viewBox="0 0 180 32" className="w-full" style={{ height: 32 }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(124,58,237,0.25)" />
                <stop offset="100%" stopColor="rgba(124,58,237,0)" />
              </linearGradient>
            </defs>
            <line x1="0" y1="10" x2="180" y2="10" stroke="#ede9fe" strokeWidth="1" />
            <line x1="0" y1="22" x2="180" y2="22" stroke="#ede9fe" strokeWidth="1" />
            <path d="M0,28 Q30,26 60,20 T120,12 T180,4 L180,32 L0,32 Z" fill="url(#purpleGrad)" />
            <path
              d="M0,28 Q30,26 60,20 T120,12 T180,4"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="120" cy="12" r="2" fill="#7c3aed" stroke="#fff" strokeWidth="1" />
            <circle cx="180" cy="4" r="2" fill="#7c3aed" stroke="#fff" strokeWidth="1" />
          </svg>
        </div>

        {/* Channel mini table */}
        <div
          className="rounded-lg overflow-hidden"
          style={{ background: "#fff", border: "1px solid #ede9fe" }}
        >
          <div
            className="grid grid-cols-3 px-1.5 py-0.5 text-[5.5px] font-bold uppercase tracking-wider"
            style={{ background: "#f5f3ff", color: "#7c3aed" }}
          >
            <span>Channel</span><span>ROAS</span><span>Status</span>
          </div>
          {[
            { ch: "Meta Ads", roas: "5.1×", ok: true },
            { ch: "Google", roas: "4.2×", ok: true },
            { ch: "LinkedIn", roas: "2.9×", ok: false },
          ].map((r) => (
            <div
              key={r.ch}
              className="grid grid-cols-3 px-1.5 py-0.5 border-t text-[6px]"
              style={{ borderColor: "#ede9fe", color: "#374151" }}
            >
              <span>{r.ch}</span>
              <span className="font-bold" style={{ color: "#1e1b4b" }}>{r.roas}</span>
              <span
                className="rounded-full px-1 text-center"
                style={{
                  background: r.ok ? "#f0fdf4" : "#fef3c7",
                  color: r.ok ? "#16a34a" : "#d97706",
                  fontSize: 5.5,
                }}
              >
                {r.ok ? "On track" : "Review"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
