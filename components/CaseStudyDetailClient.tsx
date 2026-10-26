"use client";

import { useState } from "react";
import Link from "next/link";
import { TEMPLATES } from "@/lib/templatesData";
import Logo from "@/components/brand/Logo";
import LaunchPresenceDemo from "@/components/templates/LaunchPresenceDemo";
import CorporateSystemDemo from "@/components/templates/CorporateSystemDemo";
import CommerceEngineDemo from "@/components/templates/CommerceEngineDemo";
import DemandEngineDemo from "@/components/templates/DemandEngineDemo";

interface Props {
  slug: string;
}

export default function CaseStudyDetailClient({ slug }: Props) {
  const template = TEMPLATES[slug];

  // Default active page is "home" or the first page in the list
  const [activePageId, setActivePageId] = useState<string>(
    template?.pages[0]?.id || "home"
  );
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("desktop");

  if (!template) {
    return (
      <div className="min-h-screen bg-ink text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-display text-3xl font-bold text-white mb-2">Template Not Found</h1>
        <p className="text-white/60 mb-6">The requested concept template could not be located.</p>
        <Link href="/#work" className="rounded-full bg-lime px-6 py-2.5 text-xs font-bold text-ink">
          ← Back to Selected Work
        </Link>
      </div>
    );
  }

  const activePageInfo =
    template.pages.find((p) => p.id === activePageId) || template.pages[0];

  return (
    <div className="min-h-screen bg-ink text-white selection:bg-lime selection:text-ink">
      {/* ── Top Header Navigation ──────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-ink/80 backdrop-blur-xl">
        <div className="container-shell flex h-[76px] items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Link
              href="/#work"
              className="text-xs sm:text-sm font-mono text-white/60 hover:text-white transition-colors"
            >
              ← Back to Selected Work
            </Link>
            <Link
              href="/#contact"
              className="rounded-full bg-lime px-4 sm:px-5 py-2 text-xs font-bold text-ink hover:bg-lime-deep transition-all shadow-[0_0_20px_rgba(200,255,0,0.2)]"
            >
              Build Something Similar
            </Link>
          </div>
        </div>
      </header>

      {/* ── SECTION 1: Overview ─────────────────────────────────── */}
      <section className="pt-16 pb-14 border-b border-white/[0.08] relative overflow-hidden">
        {/* Subtle grid accent */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,255,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container-shell relative z-10 space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-lime">
              {template.code}
            </span>
            <span className="rounded-md border border-lime/30 bg-lime/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-lime font-bold">
              DEMO TEMPLATE · CONCEPT PROJECT
            </span>
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-white/50">
              {template.serviceTag}
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {template.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 font-medium leading-relaxed">
              {template.tagline}
            </p>
            <p className="text-sm sm:text-base text-white/55 leading-relaxed max-w-3xl">
              {template.overview}
            </p>
          </div>

          {/* Who it's designed for & objectives */}
          <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-lime">Designed For</span>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                {template.designedFor}
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-lime">Key Capabilities</span>
              <ul className="space-y-1.5 text-xs text-white/70 font-mono">
                {template.keyCapabilities.slice(0, 3).map((cap, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-lime">✓</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-lime">Design Objectives</span>
              <ul className="space-y-1.5 text-xs text-white/70 font-mono">
                {template.designObjectives.slice(0, 3).map((obj, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-lime">→</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Explore the Pages Gallery ────────────────── */}
      <section className="py-12 border-b border-white/[0.08] bg-[#07080a]">
        <div className="container-shell space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="kicker">Template Pages</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Explore the Included Views ({template.pages.length})
              </h2>
            </div>
            <p className="text-xs font-mono text-white/50 max-w-xs">
              Click any view below to launch and test its interactive preview live.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {template.pages.map((p, idx) => {
              const isSelected = activePageId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePageId(p.id)}
                  className={`text-left rounded-xl p-3.5 border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "border-lime bg-lime/[0.08] shadow-[0_0_20px_rgba(200,255,0,0.15)] ring-1 ring-lime/40"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-[10px] font-bold ${
                        isSelected ? "text-lime" : "text-white/40"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    {isSelected && (
                      <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                    )}
                  </div>
                  <h3
                    className={`font-display text-xs font-bold leading-snug line-clamp-1 ${
                      isSelected ? "text-lime" : "text-white"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <p className="text-[10px] text-white/50 line-clamp-2 mt-1 leading-snug">
                    {p.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Interactive Live Preview ─────────────────── */}
      <section className="py-14 border-b border-white/[0.08]">
        <div className="container-shell space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-lime">Live Interactive Preview</span>
              <h2 className="font-display text-2xl font-bold text-white mt-0.5">
                Testing Page: <span className="text-lime">{activePageInfo.name}</span>
              </h2>
            </div>

            {/* Viewport toggle */}
            <div className="flex items-center gap-2 p-1 rounded-lg border border-white/10 bg-white/[0.02]">
              <button
                type="button"
                onClick={() => setViewportMode("desktop")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-colors ${
                  viewportMode === "desktop" ? "bg-lime text-ink font-bold" : "text-white/50"
                }`}
              >
                <span>🖥️ Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setViewportMode("mobile")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono transition-colors ${
                  viewportMode === "mobile" ? "bg-lime text-ink font-bold" : "text-white/50"
                }`}
              >
                <span>📱 Mobile View</span>
              </button>
            </div>
          </div>

          {/* Embedded Template Screen */}
          <div className="flex justify-center transition-all duration-500">
            <div
              className={`w-full transition-all duration-500 ${
                viewportMode === "mobile"
                  ? "max-w-[390px] rounded-[40px] border-[10px] border-slate-800 p-2 bg-[#050608] shadow-[0_0_50px_rgba(0,0,0,0.8)] relative"
                  : "max-w-5xl"
              }`}
            >
              {viewportMode === "mobile" && (
                <div className="w-full flex justify-center pb-2">
                  <div className="h-4 w-28 bg-slate-800 rounded-full flex items-center justify-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span className="h-2 w-2 rounded-full bg-slate-700/60" />
                  </div>
                </div>
              )}
              <div
                className={`w-full transition-all duration-300 ${
                  viewportMode === "mobile"
                    ? "template-mobile-container max-h-[720px] overflow-y-auto overflow-x-hidden rounded-[28px] scrollbar-thin"
                    : ""
                }`}
              >
                {slug === "launch-presence" && (
                  <LaunchPresenceDemo
                    activePageId={activePageId}
                    onNavigate={(pageId) => setActivePageId(pageId)}
                    isMobilePreview={viewportMode === "mobile"}
                  />
                )}
                {slug === "corporate-system" && (
                  <CorporateSystemDemo
                    activePageId={activePageId}
                    onNavigate={(pageId) => setActivePageId(pageId)}
                    isMobilePreview={viewportMode === "mobile"}
                  />
                )}
                {slug === "commerce-engine" && (
                  <CommerceEngineDemo
                    activePageId={activePageId}
                    onNavigate={(pageId) => setActivePageId(pageId)}
                    isMobilePreview={viewportMode === "mobile"}
                  />
                )}
                {slug === "demand-engine" && (
                  <DemandEngineDemo
                    activePageId={activePageId}
                    onNavigate={(pageId) => setActivePageId(pageId)}
                    isMobilePreview={viewportMode === "mobile"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Explain the Template Page by Page ────────── */}
      <section className="py-16 border-b border-white/[0.08] bg-[#07080a]">
        <div className="container-shell space-y-10">
          <div>
            <span className="kicker">Architectural Breakdown</span>
            <h2 className="font-display text-3xl font-bold text-white mt-1">
              Page-by-Page Technical Specification
            </h2>
            <p className="text-sm text-white/50 mt-1 max-w-2xl">
              Concrete breakdown explaining the strategic purpose, key components, and user actions designed for each page in the {template.title} system.
            </p>
          </div>

          <div className="space-y-6">
            {template.pages.map((p, idx) => (
              <div
                key={p.id}
                className={`rounded-2xl border p-6 transition-colors ${
                  activePageId === p.id
                    ? "border-lime/40 bg-lime/[0.02]"
                    : "border-white/[0.08] bg-white/[0.015]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-lime">0{idx + 1}</span>
                    <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                    {activePageId === p.id && (
                      <span className="rounded bg-lime/10 border border-lime/30 px-2 py-0.5 font-mono text-[9px] text-lime font-bold">
                        CURRENTLY ACTIVE PREVIEW
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActivePageId(p.id);
                      window.scrollTo({ top: 600, behavior: "smooth" });
                    }}
                    className="text-xs font-mono text-lime hover:underline"
                  >
                    Load in Preview ↑
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
                  {/* Purpose */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-lime">What this page is for</span>
                    <p className="text-white/70 leading-relaxed">{p.purpose}</p>
                  </div>

                  {/* Content */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-lime">Content & Hierarchy</span>
                    <p className="text-white/70 leading-relaxed">{p.contentDesc}</p>
                  </div>

                  {/* Components */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-lime">Key Components</span>
                    <ul className="space-y-1 text-white/60 font-mono">
                      {p.keyComponents.map((comp, ci) => (
                        <li key={ci}>• {comp}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience role */}
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-lime">Experience Contribution</span>
                    <p className="text-white/70 leading-relaxed">{p.experienceRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Contact Agency CTA ───────────────────────── */}
      <section id="contact-agency" className="py-20">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[32px] border border-lime/30 bg-gradient-to-br from-lime/[0.08] via-black to-[#08090d] p-8 sm:p-14 text-white">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-lime/10 blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="kicker">Let&apos;s Build Together</span>
              <h2 className="display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Want to build something similar for your business?
              </h2>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                Whether you need a high-converting startup launchpad, an institutional corporate presence, an agile headless store, or a custom demand engine, Regendz IT builds digital solutions that scale with you.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="rounded-full bg-lime px-8 py-3.5 text-xs font-bold tracking-wider uppercase text-ink hover:bg-lime-deep transition-all shadow-[0_0_30px_rgba(200,255,0,0.3)]"
                >
                  Start a Project Conversation →
                </Link>
                <Link
                  href="/#work"
                  className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-xs font-mono text-white/80 hover:bg-white/10 transition-colors"
                >
                  Browse Other Concept Templates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.08] py-8 text-center text-xs font-mono text-white/40">
        <div className="container-shell flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Regendz IT. All rights reserved.</p>
          <p>Concept demonstration templates built to illustrate agency engineering capability.</p>
        </div>
      </footer>
    </div>
  );
}
