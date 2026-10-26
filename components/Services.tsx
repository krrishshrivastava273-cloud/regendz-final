"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BrandShowcaseStrip from "@/components/BrandShowcaseStrip";

/* ─── Brand Configuration ──────────────────────────────────────── */

const brands = [
  {
    id: "slitcode",
    name: "slitcode",
    href: "/services/slitcode",
    category: "WEB & SOFTWARE DEVELOPMENT",
    headlinePrefix: "Build digital experiences that",
    headlineAccent: "work.",
    description:
      "Your business deserves more than a website that just looks good. It deserves one that works hard.",
    accent: "#8B5CF6",
    accentDim: "rgba(139,92,246,0.12)",
    accentMid: "rgba(139,92,246,0.35)",
    accentGlow: "rgba(139,92,246,0.22)",
    accentBorder: "rgba(139,92,246,0.25)",
    accentBorderHover: "rgba(139,92,246,0.65)",
    bgGrad:
      "linear-gradient(160deg, rgba(139,92,246,0.14) 0%, rgba(139,92,246,0.03) 45%, rgba(6,6,10,0.95) 100%)",
    streakGrad:
      "linear-gradient(135deg, transparent 0%, rgba(139,92,246,0.1) 40%, transparent 75%)",
    offerings: [
      "Website Design & Development",
      "Web Applications & Custom Software",
      "Responsive UI/UX Implementation",
      "Business-Specific Digital Solutions",
      "Technical Integrations & Deployment",
    ],
    approach: "Build. Integrate. Deliver.",
    cleverBit:
      "Your website should be working 24/7, even when your team is offline.",
    cta: "Let's Build Something Great.",
    techIcons: [
      { symbol: "⚛", label: "React", color: "#61DAFB" },
      { symbol: "N", label: "Next", color: "#ffffff" },
      { symbol: "TS", label: "TypeScript", color: "#3178C6" },
      { symbol: "JS", label: "JavaScript", color: "#F7DF1E" },
    ],
    logo: (
      <span className="flex items-center">
        <Image
          src="/images/slitcode-logo.png"
          alt="slitcode logo"
          width={936}
          height={276}
          className="h-7 w-auto max-w-[145px] object-contain"
        />
      </span>
    ),
    visual: "code",
  },
  {
    id: "forwai",
    name: "Forwai",
    href: "/services/forwai",
    category: "BUSINESS CONSULTANCY & DATA ANALYTICS",
    headlinePrefix: "Less guessing. More knowing.",
    headlineAccent: "Better decisions.",
    description:
      "Growing a business takes more than hard work. It takes the right strategy, a clear understanding of performance, and decisions backed by meaningful data.",
    accent: "#F59E0B",
    accentDim: "rgba(245,158,11,0.12)",
    accentMid: "rgba(245,158,11,0.35)",
    accentGlow: "rgba(245,158,11,0.22)",
    accentBorder: "rgba(245,158,11,0.25)",
    accentBorderHover: "rgba(245,158,11,0.65)",
    bgGrad:
      "linear-gradient(160deg, rgba(245,158,11,0.14) 0%, rgba(245,158,11,0.03) 45%, rgba(6,6,10,0.95) 100%)",
    streakGrad:
      "linear-gradient(135deg, transparent 0%, rgba(245,158,11,0.1) 40%, transparent 75%)",
    offerings: [
      "Business Consultancy & Growth Strategy",
      "Sales & Marketing Strategy",
      "Operations & Process Optimization",
      "Business Performance Analysis",
      "Data Analytics & Business Insights",
      "KPI Reporting & Dashboard Support",
    ],
    approach: "Analyze. Strategize. Optimize. Grow.",
    cleverBit:
      "Your data has a story to tell. Let's make sure it's not just sitting in a spreadsheet.",
    cta: "Make Your Next Move Smarter.",
    techIcons: [
      { symbol: "Xl", label: "Excel", color: "#21A366" },
      { symbol: "BI", label: "Power BI", color: "#F2C811" },
      { symbol: "Py", label: "Python", color: "#3776AB" },
      { symbol: "SQL", label: "SQL", color: "#CC2927" },
    ],
    logo: (
      <span className="flex items-center">
        <Image
          src="/images/forwai-logo.png"
          alt="Forwai logo"
          width={952}
          height={186}
          className="h-6 w-auto max-w-[140px] object-contain"
        />
      </span>
    ),
    visual: "dashboard",
  },
  {
    id: "groadvertx",
    name: "GROADVERTX",
    href: "/services/groadvertx",
    category: "BRANDING, CREATIVES & DIGITAL MARKETING",
    headlinePrefix: "Brands that",
    headlineAccent: "make an impact.",
    description:
      "We craft bold visuals, compelling content, and data-backed strategies to help your brand stand out and stay top of mind.",
    accent: "#E11D48",
    accentDim: "rgba(225,29,72,0.12)",
    accentMid: "rgba(225,29,72,0.35)",
    accentGlow: "rgba(225,29,72,0.22)",
    accentBorder: "rgba(225,29,72,0.25)",
    accentBorderHover: "rgba(225,29,72,0.65)",
    bgGrad:
      "linear-gradient(160deg, rgba(225,29,72,0.14) 0%, rgba(225,29,72,0.03) 45%, rgba(6,6,10,0.95) 100%)",
    streakGrad:
      "linear-gradient(135deg, transparent 30%, rgba(225,29,72,0.1) 65%, transparent 90%)",
    offerings: [
      "Branding & Visual Identity",
      "Graphic Design & Creative Content",
      "Social Media Creatives",
      "Digital Marketing",
      "Content & Campaign Development",
      "Creative & UI Support",
    ],
    approach: "Brand. Create. Promote. Grow.",
    cleverBit:
      "Your competitors are posting, too. Let's give your audience a reason to stop scrolling.",
    cta: "Make Your Brand Stand Out.",
    techIcons: [
      { symbol: "Ps", label: "Photoshop", color: "#31A8FF" },
      { symbol: "Ai", label: "Illustrator", color: "#FF9A00" },
      { symbol: "Cv", label: "Canva", color: "#00C4CC" },
      { symbol: "Ae", label: "After Fx", color: "#9999FF" },
    ],
    logo: (
      <span className="flex items-center gap-2.5">
        <Image
          src="/images/groadvertx-logo.png"
          alt="Groadvertx symbol"
          width={645}
          height={1024}
          className="h-7 w-auto object-contain"
        />
        <span className="font-bold text-white text-xl tracking-tight">GROADVERTX</span>
      </span>
    ),
    visual: "social",
  },
] as const;

/* ─── Visual: Code Mockup (slitcode) ─────────────────────────── */
function CodeVisual({ accent }: { accent: string }) {
  return (
    <div
      className="relative w-full h-[215px] rounded-xl overflow-hidden p-3 flex flex-col justify-between"
      style={{
        border: `1px solid ${accent}30`,
        background: "linear-gradient(160deg, rgba(20,14,35,0.85) 0%, rgba(10,8,20,0.95) 100%)",
      }}
    >
      {/* Top browser bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
          <span className="h-2 w-2 rounded-full bg-green-500/70" />
          <span className="ml-2 rounded-full bg-white/5 px-2 py-0.5 text-[9px] text-white/40 font-mono">
            slitcode.in
          </span>
        </div>
        {/* Performance badge */}
        <div
          className="rounded-md px-2 py-0.5 flex items-center gap-1 backdrop-blur-sm"
          style={{ border: `1px solid ${accent}40`, background: `${accent}20` }}
        >
          <span className="text-[7.5px] font-mono uppercase tracking-wider" style={{ color: accent }}>
            PERF.
          </span>
          <span className="text-[11px] font-bold text-white font-mono">
            99<span style={{ color: accent }}>/100</span>
          </span>
        </div>
      </div>

      {/* Code / Mockup Content */}
      <div className="space-y-2 py-1">
        {/* Code editor line */}
        <div className="rounded-lg p-2 font-mono text-[9.5px] bg-black/40 border border-white/5 space-y-1">
          <div className="flex items-center gap-2 text-white/40 text-[8.5px]">
            <span style={{ color: accent }}>deploy.ts</span>
            <span>—</span>
            <span className="text-emerald-400">ready</span>
          </div>
          <p className="text-white/80">
            <span className="text-purple-400">const</span> app = <span className="text-yellow-300">buildPlatform</span>(&#123;
          </p>
          <p className="pl-3 text-white/60">
            performance: <span style={{ color: accent }}>&quot;ultra&quot;</span>, uptime: <span className="text-emerald-400">99.99</span>
          </p>
          <p className="text-white/80">&#125;);</p>
        </div>

        {/* 3 mini feature blocks */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { label: "Full-Stack", val: "Next.js" },
            { label: "Speed", val: "<0.4s" },
            { label: "Scale", val: "Global" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg p-1.5 text-center bg-white/[0.02] border border-white/5"
            >
              <p className="text-[7.5px] text-white/40 font-mono uppercase">{item.label}</p>
              <p className="text-[9.5px] font-bold text-white mt-0.5">{item.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom live status */}
      <div className="flex items-center justify-between text-[8px] font-mono text-white/30 pt-1 border-t border-white/5">
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Production Active
        </span>
        <span style={{ color: accent }}>CI/CD Verified</span>
      </div>
    </div>
  );
}

/* ─── Visual: Dashboard (Forwai) ────────────────────────────── */
function DashboardVisual({ accent }: { accent: string }) {
  const bars = [42, 60, 38, 75, 68, 92];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  return (
    <div
      className="relative w-full h-[215px] rounded-xl overflow-hidden p-3 flex flex-col justify-between"
      style={{
        border: `1px solid ${accent}30`,
        background: "linear-gradient(160deg, rgba(30,20,5,0.85) 0%, rgba(14,10,3,0.95) 100%)",
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-mono text-white/60">Business Intelligence</span>
        </div>
        {/* ROAS badge */}
        <div
          className="rounded-md px-2 py-0.5 flex items-center gap-1 backdrop-blur-sm"
          style={{ border: `1px solid ${accent}40`, background: `${accent}20` }}
        >
          <span className="text-[7.5px] font-mono uppercase tracking-wider" style={{ color: accent }}>
            ROAS
          </span>
          <span className="text-[11px] font-bold text-white font-mono">
            4.8<span style={{ color: accent }}>x</span>
          </span>
        </div>
      </div>

      {/* KPI 3-col row */}
      <div className="grid grid-cols-3 gap-1.5 py-1">
        {[
          { l: "Revenue", v: "₹4.8M", c: "+14.2%" },
          { l: "Conv. Rate", v: "8.9K", c: "+22.3%" },
          { l: "Margin", v: "34.5%", c: "+5.1%" },
        ].map((kpi) => (
          <div
            key={kpi.l}
            className="rounded-lg p-1.5 bg-white/[0.02] border border-white/5"
          >
            <p className="text-[7.5px] text-white/40 font-mono uppercase truncate">{kpi.l}</p>
            <p className="text-[11px] font-bold text-white mt-0.5">{kpi.v}</p>
            <p className="text-[7.5px] font-mono" style={{ color: accent }}>{kpi.c}</p>
          </div>
        ))}
      </div>

      {/* Monthly Trend Bar Chart & Mini Channels */}
      <div className="grid grid-cols-[1.2fr_1fr] gap-2 items-center rounded-lg p-2 bg-black/40 border border-white/5">
        <div>
          <p className="text-[7.5px] text-white/30 font-mono uppercase mb-1">Monthly Trend</p>
          <div className="flex items-end gap-1 h-9">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className="w-full rounded-t"
                  style={{
                    height: `${h}%`,
                    background: `linear-gradient(to top, ${accent}, ${accent}50)`,
                  }}
                />
                <span className="text-[6.5px] font-mono text-white/30">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-1 pl-1 border-l border-white/5">
          <p className="text-[7.5px] text-white/30 font-mono uppercase mb-0.5">Top Channels</p>
          {[
            { name: "Search", pct: 42 },
            { name: "Social", pct: 28 },
            { name: "Direct", pct: 18 },
          ].map((ch) => (
            <div key={ch.name} className="flex items-center gap-1.5 text-[7.5px]">
              <span className="w-7 text-white/40 font-mono truncate">{ch.name}</span>
              <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${ch.pct}%`, background: accent }}
                />
              </div>
              <span className="font-mono text-white/60 text-[7px]">{ch.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footnote */}
      <div className="flex items-center justify-between text-[7.5px] font-mono text-white/25 pt-1 border-t border-white/5">
        <span>* Illustrative sample analytics</span>
        <span style={{ color: accent }}>Automated Pipelines</span>
      </div>
    </div>
  );
}

/* ─── Visual: Social Creatives (Groadvertx) ─────────────────── */
function SocialVisual({ accent }: { accent: string }) {
  const previews = [
    { label: "Identity", tag: "Design", likes: "12.4K" },
    { label: "Campaign", tag: "Social", likes: "8.7K" },
    { label: "Content", tag: "Creative", likes: "5.2K" },
  ];
  const palette = ["#E11D48", "#FB923C", "#FACC15", "#4ADE80", "#22D3EE", "#818CF8", "#F472B6", "#A78BFA"];
  return (
    <div
      className="relative w-full h-[215px] rounded-xl overflow-hidden p-3 flex flex-col justify-between"
      style={{
        border: `1px solid ${accent}30`,
        background: "linear-gradient(160deg, rgba(30,10,18,0.85) 0%, rgba(14,4,8,0.95) 100%)",
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded-md bg-rose-600 flex items-center justify-center text-white font-bold text-[7.5px]">
            Cv
          </div>
          <span className="text-[9px] font-mono text-white/60">Creative Studio</span>
        </div>
        {/* Reach badge */}
        <div
          className="rounded-md px-2 py-0.5 flex items-center gap-1 backdrop-blur-sm"
          style={{ border: `1px solid ${accent}40`, background: `${accent}20` }}
        >
          <span className="text-[7.5px] font-mono uppercase tracking-wider" style={{ color: accent }}>
            REACH
          </span>
          <span className="text-[11px] font-bold text-white font-mono">
            12K<span style={{ color: accent }}>+</span>
          </span>
        </div>
      </div>

      {/* 3 social cards */}
      <div className="grid grid-cols-3 gap-1.5 py-1">
        {previews.map((item, i) => (
          <div
            key={item.label}
            className="rounded-lg p-2 flex flex-col justify-between h-[86px] relative overflow-hidden"
            style={{
              background: `linear-gradient(${140 + i * 25}deg, ${accent}25 0%, rgba(20,5,10,0.95) 100%)`,
              border: `1px solid ${accent}25`,
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[6.5px] font-mono uppercase tracking-wider" style={{ color: accent }}>
                {item.tag}
              </span>
              <span className="text-[6.5px] text-white/40">●</span>
            </div>
            <div className="my-auto flex flex-col items-center">
              <div
                className="h-5 w-5 rounded-full mb-1 flex items-center justify-center text-[8px]"
                style={{ background: `${accent}30`, border: `1px solid ${accent}50` }}
              >
                ✦
              </div>
              <p className="text-[8px] font-bold text-white text-center">{item.label}</p>
            </div>
            <div className="flex items-center justify-center text-[7px] font-mono text-white/50">
              <span style={{ color: accent }} className="mr-0.5">❤</span> {item.likes}
            </div>
          </div>
        ))}
      </div>

      {/* Canva / Brand Kit strip */}
      <div className="rounded-lg p-1.5 bg-black/40 border border-white/5 flex items-center justify-between">
        <span className="text-[7.5px] font-mono text-white/40 uppercase">Brand Palette</span>
        <div className="flex items-center gap-1">
          {palette.map((c) => (
            <span key={c} className="h-3 w-3 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="flex items-center justify-between text-[7.5px] font-mono text-white/25 pt-1 border-t border-white/5">
        <span>* Multi-channel campaign assets</span>
        <span style={{ color: accent }}>Brand Consistency</span>
      </div>
    </div>
  );
}

/* ─── Brand Panel ─────────────────────────────────────────────── */
function BrandPanel({
  brand,
  index,
}: {
  brand: (typeof brands)[number];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? {} : { y: -5 }}
      className="group relative flex flex-col h-full rounded-2xl xl:rounded-3xl border border-white/10 overflow-hidden backdrop-blur-md transition-all duration-300 ease-out"
      style={{
        background: brand.bgGrad,
        boxShadow: "0 4px 24px -2px rgba(0, 0, 0, 0.5)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = brand.accentBorderHover;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 40px -8px ${brand.accentGlow}, 0 4px 20px rgba(0, 0, 0, 0.4)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px -2px rgba(0, 0, 0, 0.5)";
      }}
    >
      {/* Subtle diagonal light streak */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700 opacity-30 group-hover:opacity-75"
        style={{ background: brand.streakGrad }}
      />

      {/* Restrained background ambient glow with subtle breathing motion */}
      <motion.div
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full blur-[80px]"
        style={{ background: brand.accentGlow }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.5 }
            : {
                opacity: [0.4, 0.65, 0.4],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 1.8,
        }}
      />

      <Link
        href={brand.href}
        aria-label={`Explore ${brand.name}`}
        className="relative z-10 flex h-full flex-col rounded-2xl xl:rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06060a]"
      >
      <div className="relative flex flex-col h-full p-6 xl:p-8">
        {/* 1. Brand Logo & Name (Fixed Baseline) */}
        <div className="h-8 flex items-center">
          {brand.logo}
        </div>

        {/* 2. Category Label (Fixed Height) */}
        <div className="mt-2.5 h-5 flex items-center">
          <p
            className="font-mono text-[9px] tracking-[0.22em] uppercase font-semibold truncate"
            style={{ color: brand.accent }}
          >
            {brand.category}
          </p>
        </div>

        {/* 3. Main Headline (Locked Height on Desktop) */}
        <div className="mt-3.5 min-h-[3.5rem] lg:h-[4.5rem] flex flex-col justify-start">
          <h3 className="display text-[1.4rem] xl:text-[1.62rem] leading-[1.18] text-white">
            {brand.headlinePrefix}{" "}
            <span style={{ color: brand.accent }}>{brand.headlineAccent}</span>
          </h3>
        </div>

        {/* 4. Short Description (Locked Height on Desktop) */}
        <div className="mt-2 min-h-[3rem] lg:h-[4.25rem] flex items-start overflow-hidden">
          <p className="text-xs xl:text-[13px] leading-relaxed text-white/55">
            {brand.description}
          </p>
        </div>

        {/* Tech Stack Pills (Fixed Height Row) */}
        <div className="mt-3.5 mb-5 h-7 flex items-center gap-1.5 flex-wrap overflow-hidden">
          {brand.techIcons.map((tech) => (
            <span
              key={tech.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-mono text-white/60 backdrop-blur-sm"
            >
              <span style={{ color: tech.color }} className="font-bold">
                {tech.symbol}
              </span>
              <span>{tech.label}</span>
            </span>
          ))}
        </div>

        {/* 5. Standardized Visual Mockup with subtle hover micro-scale */}
        <div className="w-full transition-transform duration-300 ease-out group-hover:scale-[1.012]">
          {brand.visual === "code" && <CodeVisual accent={brand.accent} />}
          {brand.visual === "dashboard" && <DashboardVisual accent={brand.accent} />}
          {brand.visual === "social" && <SocialVisual accent={brand.accent} />}
        </div>

        {/* 6. What we do & Our approach (Locked layout & min-height) */}
        <div className="mt-5 grid grid-cols-12 gap-3 items-start min-h-[175px]">
          {/* Left: What we do (7 cols) */}
          <div className="col-span-7 flex flex-col justify-start">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/80 font-semibold mb-2.5">
              What we do
            </p>
            <ul className="space-y-1.5">
              {brand.offerings.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-1.5 text-[11px] leading-[1.3] text-white/60 hover:text-white/85 transition-colors"
                >
                  <span
                    className="mt-[2px] block text-[9px] shrink-0 font-mono font-bold"
                    style={{ color: brand.accent }}
                  >
                    →
                  </span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Our approach & The clever bit (5 cols) */}
          <div className="col-span-5 flex flex-col justify-start pl-2 border-l border-white/5">
            <p
              className="text-[10px] font-mono uppercase tracking-widest font-semibold mb-2.5"
              style={{ color: brand.accent }}
            >
              Our approach
            </p>
            <p className="text-[11px] font-medium text-white/75 leading-snug">
              {brand.approach}
            </p>

            <div
              className="my-3 h-px w-full"
              style={{ background: `${brand.accent}25` }}
            />

            <p
              className="text-[9.5px] font-mono uppercase tracking-wider font-semibold mb-1"
              style={{ color: brand.accent }}
            >
              💡 The clever bit
            </p>
            <p className="text-[10.5px] text-white/50 leading-relaxed">
              {brand.cleverBit}
            </p>
          </div>
        </div>

        {/* 7. CTA Button (mt-auto ensures 100% horizontal alignment across all 3 cards) */}
        <div className="mt-auto pt-6">
          <div
            className="group/btn flex items-center justify-between w-full h-[46px] rounded-xl border px-4 text-[11.5px] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06060a]"
            style={{
              borderColor: brand.accentBorder,
              background: brand.accentDim,
              color: "rgba(255,255,255,0.95)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = brand.accentBorderHover;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${brand.accentGlow}`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = brand.accentBorder;
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <span className="truncate">{brand.cta}</span>
            <span className="shrink-0 text-sm ml-2 transition-transform duration-300 group-hover/btn:translate-x-1.5 group-hover:translate-x-1 font-mono">
              →
            </span>
          </div>
        </div>
      </div>
      </Link>
    </motion.article>
  );
}

/* ─── Main Component ──────────────────────────────────────────── */

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[#06060a]">
        {/* Ambient orbs */}
        <div className="absolute -top-40 left-1/4 h-[400px] w-[400px] rounded-full bg-violet-700/[0.07] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-amber-600/[0.05] blur-[150px]" />
        <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-rose-700/[0.07] blur-[120px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative container-shell">
        {/* Section header with entrance animation */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <p className="kicker mb-4">Three distinct brands. One parent vision.</p>
          <h2 className="display text-[clamp(2rem,4.5vw,3.8rem)] max-w-3xl mx-auto">
            Built to serve every part of your business.
          </h2>
          <p className="mt-4 text-white/45 max-w-xl mx-auto text-sm leading-relaxed">
            Regendz IT operates three specialist verticals — each focused on a distinct discipline,
            working together when your business needs more than one.
          </p>
        </motion.div>

        {/* Three distinct, evenly spaced brand cards with 20-24px gap */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-6 items-stretch">
          {brands.map((brand, i) => (
            <BrandPanel key={brand.id} brand={brand} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 text-center text-xs text-white/25 font-mono"
        >
          Click any card to explore the full brand experience →
        </motion.p>
      </div>
      <BrandShowcaseStrip />
    </section>
  );
}
