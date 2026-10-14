"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

/* ── Case Study Data ─────────────────────────────────────────── */

const caseStudies = [
  {
    code: "01",
    name: "Launch Presence",
    category: "EARLY-STAGE VENTURES · WEB DEVELOPMENT",
    description:
      "A conversion-focused digital presence built to give an early-stage brand a strong foundation for growth.",
    visual: "website" as const,
  },
  {
    code: "02",
    name: "Corporate System",
    category: "PROFESSIONAL SERVICES · WEB DEVELOPMENT",
    description:
      "A scalable corporate website designed around clear information architecture, credibility and long-term growth.",
    visual: "dashboard" as const,
  },
  {
    code: "03",
    name: "Commerce Engine",
    category: "RETAIL & D2C · WEB DEVELOPMENT",
    description:
      "A high-performance digital commerce experience designed to improve discovery, engagement and conversion.",
    visual: "commerce" as const,
  },
  {
    code: "04",
    name: "Demand Engine",
    category: "GROWTH-STAGE BRANDS · DIGITAL MARKETING",
    description:
      "A performance-focused growth system connecting content, campaigns and analytics to generate demand.",
    visual: "analytics" as const,
  },
];

/* ── Component ────────────────────────────────────────────────── */

export default function Portfolio() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="container-shell">
        <Reveal>
          <p className="kicker mb-4">Selected work</p>
          <h2 className="display text-[clamp(2rem,4.6vw,4.4rem)]">
            Built to make an impact.
          </h2>
          <p className="mt-4 max-w-xl text-mute">
            Digital systems crafted for real business outcomes — from
            first launch to scaled growth.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((item, i) => (
            <Reveal key={item.code} delay={i * 0.08}>
              <CaseStudyCard study={item} />
            </Reveal>
          ))}
        </div>
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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
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
      <div className="relative isolate h-56 overflow-hidden md:h-64">
        {/* Dark base + subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#0f0f0f] to-[#0a0a0a]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Soft radial lime glow */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.04] blur-3xl transition-all duration-700 group-hover:bg-lime/[0.08] group-hover:scale-110" />

        {/* Abstract Mockup Visual */}
        <div className="absolute inset-6 z-10 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <MockupVisual type={study.visual} />
        </div>

        {/* Project number */}
        <span className="absolute left-6 top-6 z-20 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-lime">
          {study.code}
        </span>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex flex-1 flex-col p-7">
        <h3 className="display text-[clamp(1.4rem,2.5vw,1.8rem)] leading-tight">
          {study.name}
        </h3>

        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-lime/80">
          {study.category}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-white/50">
          {study.description}
        </p>

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70 transition-colors duration-300 group-hover:text-white">
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
          </span>
        </div>
      </div>
    </article>
  );
}

/* ── Abstract Mockup Visuals ──────────────────────────────────── */

function MockupVisual({ type }: { type: string }) {
  if (type === "website") {
    return (
      <div className="relative h-full w-full rounded-xl border border-white/[0.06] bg-black/60 p-3 backdrop-blur-sm shadow-[0_0_0_1px_rgba(200,255,0,0.04)]">
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-lime/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/15" />
          <div className="ml-3 h-4 flex-1 rounded-full bg-white/[0.04] border border-white/[0.06]" />
        </div>
        {/* Nav bar */}
        <div className="flex items-center gap-4 mb-4 pb-2 border-b border-white/[0.04]">
          <div className="h-3 w-14 rounded bg-lime/20" />
          <div className="flex gap-3 ml-auto">
            <div className="h-2 w-8 rounded bg-white/10" />
            <div className="h-2 w-8 rounded bg-white/10" />
            <div className="h-2 w-8 rounded bg-white/10" />
          </div>
        </div>
        {/* Hero */}
        <div className="mb-3">
          <div className="h-3 w-3/4 rounded bg-white/10 mb-1.5" />
          <div className="h-3 w-1/2 rounded bg-white/[0.06]" />
        </div>
        <div className="h-2 w-20 rounded-full bg-lime/25 mt-3" />
        {/* Content blocks */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-12 rounded-lg bg-white/[0.03] border border-white/[0.04]" />
          <div className="h-12 rounded-lg bg-white/[0.03] border border-white/[0.04]" />
          <div className="h-12 rounded-lg bg-white/[0.03] border border-white/[0.04]" />
        </div>
      </div>
    );
  }

  if (type === "dashboard") {
    return (
      <div className="relative h-full w-full rounded-xl border border-white/[0.06] bg-black/60 p-3 backdrop-blur-sm shadow-[0_0_0_1px_rgba(200,255,0,0.04)]">
        <div className="flex h-full gap-2">
          {/* Sidebar */}
          <div className="w-10 shrink-0 rounded-lg bg-white/[0.03] border border-white/[0.04] p-1.5 flex flex-col gap-2">
            <div className="h-4 w-full rounded bg-lime/20" />
            <div className="h-3 w-full rounded bg-white/[0.06]" />
            <div className="h-3 w-full rounded bg-white/[0.06]" />
            <div className="h-3 w-full rounded bg-white/[0.06]" />
            <div className="mt-auto h-3 w-full rounded bg-white/[0.04]" />
          </div>
          {/* Main content */}
          <div className="flex-1 flex flex-col gap-2">
            {/* Top bar */}
            <div className="flex items-center gap-2 rounded-lg bg-white/[0.02] border border-white/[0.04] p-2">
              <div className="h-2 w-24 rounded bg-white/10" />
              <div className="ml-auto h-5 w-16 rounded-full bg-lime/15 border border-lime/20" />
            </div>
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-white/[0.03] border border-white/[0.04] p-2">
                <div className="h-1.5 w-8 rounded bg-white/10 mb-1.5" />
                <div className="h-3 w-10 rounded bg-lime/20" />
              </div>
              <div className="rounded-lg bg-white/[0.03] border border-white/[0.04] p-2">
                <div className="h-1.5 w-8 rounded bg-white/10 mb-1.5" />
                <div className="h-3 w-12 rounded bg-white/[0.08]" />
              </div>
              <div className="rounded-lg bg-white/[0.03] border border-white/[0.04] p-2">
                <div className="h-1.5 w-8 rounded bg-white/10 mb-1.5" />
                <div className="h-3 w-9 rounded bg-white/[0.08]" />
              </div>
            </div>
            {/* Chart area */}
            <div className="flex-1 rounded-lg bg-white/[0.02] border border-white/[0.04] p-2 flex items-end gap-1">
              {[35, 55, 40, 70, 50, 85, 60, 75, 90, 65].map((h, idx) => (
                <div
                  key={idx}
                  className="flex-1 rounded-t bg-lime/15"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "commerce") {
    return (
      <div className="relative h-full w-full rounded-xl border border-white/[0.06] bg-black/60 p-3 backdrop-blur-sm shadow-[0_0_0_1px_rgba(200,255,0,0.04)]">
        {/* Top bar */}
        <div className="flex items-center gap-3 mb-3 pb-2 border-b border-white/[0.04]">
          <div className="h-3 w-16 rounded bg-lime/20" />
          <div className="flex gap-3 ml-auto">
            <div className="h-2 w-8 rounded bg-white/10" />
            <div className="h-2 w-8 rounded bg-white/10" />
          </div>
          <div className="h-5 w-5 rounded-full bg-white/[0.06] border border-white/[0.06]" />
        </div>
        {/* Product grid */}
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/[0.04] bg-white/[0.02] overflow-hidden"
            >
              <div className={`h-12 ${item === 1 ? "bg-lime/[0.06]" : "bg-white/[0.03]"}`} />
              <div className="p-1.5">
                <div className="h-1.5 w-3/4 rounded bg-white/10 mb-1" />
                <div className="h-1.5 w-1/2 rounded bg-lime/15" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // analytics
  return (
    <div className="relative h-full w-full rounded-xl border border-white/[0.06] bg-black/60 p-3 backdrop-blur-sm shadow-[0_0_0_1px_rgba(200,255,0,0.04)]">
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-3">
        <div className="h-3 w-20 rounded bg-lime/20" />
        <div className="ml-auto flex gap-1.5">
          <div className="h-5 w-12 rounded-full bg-white/[0.04] border border-white/[0.06]" />
          <div className="h-5 w-12 rounded-full bg-lime/10 border border-lime/20" />
        </div>
      </div>
      {/* KPI row */}
      <div className="grid grid-cols-4 gap-2 mb-3">
        {["Reach", "CTR", "Conv.", "ROAS"].map((label, idx) => (
          <div
            key={label}
            className="rounded-lg bg-white/[0.03] border border-white/[0.04] p-2"
          >
            <div className="font-mono text-[7px] uppercase tracking-widest text-white/30 mb-1">
              {label}
            </div>
            <div
              className={`h-2.5 w-10 rounded ${idx === 3 ? "bg-lime/25" : "bg-white/[0.08]"}`}
            />
          </div>
        ))}
      </div>
      {/* Graph */}
      <div className="flex-1 rounded-lg bg-white/[0.02] border border-white/[0.04] p-2 h-20">
        <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
          <polyline
            points="0,50 25,42 50,45 75,30 100,35 125,20 150,22 175,10 200,15"
            fill="none"
            stroke="rgba(200,255,0,0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="0,55 25,50 50,52 75,45 100,48 125,40 150,42 175,35 200,38"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Lime glow under main line */}
          <linearGradient id="limeGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(200,255,0,0.08)" />
            <stop offset="100%" stopColor="rgba(200,255,0,0)" />
          </linearGradient>
          <polygon
            points="0,50 25,42 50,45 75,30 100,35 125,20 150,22 175,10 200,15 200,60 0,60"
            fill="url(#limeGrad)"
          />
        </svg>
      </div>
      {/* Bottom row */}
      <div className="mt-2 flex gap-2">
        <div className="h-6 flex-1 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center px-2">
          <div className="h-1 w-3 rounded-full bg-lime/30 mr-1.5" />
          <div className="h-1.5 w-12 rounded bg-white/10" />
        </div>
        <div className="h-6 flex-1 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center px-2">
          <div className="h-1 w-3 rounded-full bg-white/15 mr-1.5" />
          <div className="h-1.5 w-10 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}
