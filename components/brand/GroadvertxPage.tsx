"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/brand/Logo";
import GroadvertxHeroScene from "@/components/brand/GroadvertxHeroScene";

const offerings = [
  "Brand Identity & Visual Design Systems",
  "Creative Direction & Campaign Concepts",
  "Digital & Social Media Creative Assets",
  "Performance Creative & Ad Collateral",
  "Motion Graphics & Video Storytelling",
  "Marketing Collateral & Packaging Design",
  "Design Systems & Brand Governance",
  "Omnichannel Content Production",
];

const tools = [
  { label: "Photoshop", color: "#31A8FF", symbol: "Ps" },
  { label: "Illustrator", color: "#FF9A00", symbol: "Ai" },
  { label: "Canva Pro", color: "#00C4CC", symbol: "Cv" },
  { label: "After Effects", color: "#9999FF", symbol: "Ae" },
  { label: "Premiere Pro", color: "#9999FF", symbol: "Pr" },
  { label: "Figma", color: "#F24E1E", symbol: "Fg" },
];

const socialPreviews = [
  { type: "Brand Identity", format: "Visual System", label: "Identity Kit" },
  { type: "Motion Teaser", format: "0:15 Cut", label: "Campaign Reel" },
  { type: "Lookbook", format: "Grid Story", label: "Product Editorial" },
];

export default function GroadvertxPage() {
  return (
    <div className="min-h-screen bg-[#090507] text-white overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#090507]/80 backdrop-blur-xl">
        <div className="container-shell flex h-[76px] items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Link
              href="/#services"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              ← All Services
            </Link>
            <a
              href="/#contact"
              className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-500 transition-colors"
            >
              Stand Out
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-rose-700/20 blur-[130px]" />
          <div className="absolute bottom-0 -left-20 h-80 w-80 rounded-full bg-red-900/15 blur-[90px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(225,29,72,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(225,29,72,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              background:
                "linear-gradient(135deg, transparent 30%, rgba(225,29,72,0.35) 60%, transparent 90%)",
            }}
          />
        </div>

        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 relative">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-2.5 rounded-full border border-rose-500/30 bg-rose-600/10 px-4 py-1.5">
                  <Image
                    src="/images/groadvertx-logo.png"
                    alt="Groadvertx symbol"
                    width={645}
                    height={1024}
                    className="h-5 w-auto object-contain"
                  />
                  <span className="font-bold text-white text-lg tracking-tight">GROADVERTX</span>
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-rose-400 uppercase">
                  Branding, Creatives & Digital Marketing
                </span>
              </div>

              <h1 className="display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.05]">
                Distinctive brands that
                <br />
                <span className="text-rose-500">command attention.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                We develop coherent visual identity systems, motion graphics, and targeted campaign
                assets that establish brand authority and engage audiences across digital channels.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="rounded-full bg-rose-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-rose-500 transition-all hover:shadow-[0_0_40px_rgba(225,29,72,0.45)]"
                >
                  Start Creative Collaboration →
                </a>
                <a
                  href="#groadvertx-offerings"
                  className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:border-rose-500/40 transition-colors"
                >
                  View Services
                </a>
              </div>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-12 flex flex-wrap gap-2.5"
            >
              {tools.map((tool) => (
                <span
                  key={tool.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-mono backdrop-blur-sm"
                >
                  <span style={{ color: tool.color }} className="font-bold text-xs">
                    {tool.symbol}
                  </span>
                  <span className="text-white/70">{tool.label}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Hero Orbital Animation */}
          <div className="relative">
            <GroadvertxHeroScene />
          </div>
        </div>
      </section>

      {/* Creative Showcase */}
      <section className="py-20">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-950/30 to-[#0a0508] p-8 md:p-12 overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/25 blur-[80px]" />
              <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-red-800/20 blur-[60px]" />
            </div>

            <div className="relative grid gap-8 md:grid-cols-2 items-center">
              <div>
                <p className="kicker mb-4 text-rose-400">Creative Framework</p>
                <h2 className="display text-[clamp(1.8rem,4vw,3rem)]">
                  Position. Design. Direct. Amplify.
                </h2>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Every brand touchpoint shapes consumer perception. We define the aesthetic foundation,
                  build reusable component kits, and deliver high-impact collateral engineered to elevate
                  perceived value.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Unified design systems covering typography, color science, and brand guidelines",
                    "High-resolution social and digital ad kits structured for multi-platform delivery",
                    "Short-form motion graphics and campaign teasers designed for high completion rates",
                    "Brand governance playbooks ensuring absolute consistency across partner channels",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                      <span className="text-sm text-white/70">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Creatives Mockup */}
              <div className="relative">
                <div className="grid grid-cols-3 gap-3">
                  {socialPreviews.map((item, i) => (
                    <div
                      key={item.label}
                      className="relative rounded-2xl border border-rose-500/25 overflow-hidden flex flex-col justify-between p-3"
                      style={{
                        background: `linear-gradient(${135 + i * 30}deg, rgba(225,29,72,0.3) 0%, rgba(30,10,15,0.95) 100%)`,
                        aspectRatio: "9/16",
                      }}
                    >
                      {/* Top label */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                        <span className="text-[7.5px] text-rose-300 font-mono uppercase tracking-wider">
                          {item.format}
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      </div>

                      {/* Mock visual preview */}
                      <div className="my-auto py-3 text-center">
                        <div className="mx-auto h-10 w-10 rounded-xl bg-gradient-to-tr from-rose-600/40 to-white/10 border border-white/15 flex items-center justify-center mb-2">
                          <span className="text-[9px] font-mono text-rose-300 font-bold">0{i + 1}</span>
                        </div>
                        <p className="text-[10px] font-bold text-white leading-tight">
                          {item.type}
                        </p>
                        <p className="text-[8px] text-white/40 mt-1 font-mono">
                          Vector Assets
                        </p>
                      </div>

                      {/* Bottom indicator */}
                      <div className="rounded-lg bg-black/40 border border-white/5 py-1 px-2 text-center">
                        <span className="text-[8px] text-white/70 font-mono block truncate">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Canva-inspired creative element */}
                <div className="mt-3 rounded-2xl border border-rose-500/20 bg-[#0f080b] p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                      Cv
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Groadvertx Studio Suite</p>
                      <p className="text-[10px] text-white/30">Color Science · Modular Grids · Campaign Presets</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      "#E11D48", "#FB923C", "#FACC15", "#4ADE80",
                      "#22D3EE", "#818CF8", "#F472B6", "#A78BFA",
                    ].map((color) => (
                      <div
                        key={color}
                        className="aspect-square rounded-lg"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating stat */}
                <div className="absolute -top-4 -right-4 rounded-xl border border-rose-500/30 bg-rose-950/90 px-4 py-2.5 backdrop-blur-sm shadow-lg">
                  <p className="text-[9px] text-rose-400 font-mono uppercase tracking-wider">Brand Equity</p>
                  <p className="text-xl font-bold text-white font-mono">100<span className="text-rose-400 text-xs">% Unified</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section id="groadvertx-offerings" className="py-20">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="kicker mb-4 text-rose-400">Core Capabilities</p>
            <h2 className="display text-[clamp(1.8rem,4vw,3.2rem)] max-w-2xl">
              Creative direction and marketing collateral engineered for market distinction.
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group rounded-2xl border border-rose-500/15 bg-rose-950/10 p-5 transition-all hover:border-rose-500/40 hover:bg-rose-950/20 hover:shadow-[0_4px_30px_rgba(225,29,72,0.12)]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-rose-500">0{i + 1}</span>
                  <span className="h-px flex-1 bg-rose-500/20" />
                </div>
                <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Philosophy */}
      <section className="py-16">
        <div className="container-shell">
          <div className="rounded-3xl border border-rose-500/20 bg-gradient-to-br from-rose-900/15 to-transparent p-10 md:p-16 text-center relative overflow-hidden">
            <p className="kicker mb-4 text-rose-400">Creative Philosophy</p>
            <h2 className="display text-[clamp(1.6rem,4vw,2.8rem)] max-w-3xl mx-auto">
              Memorable brands are not created by chance. They are built through disciplined visual hierarchy, narrative clarity, and relentless consistency.
            </h2>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="groadvertx-contact" className="py-24">
        <div className="container-shell max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-rose-500/30 bg-rose-600/10 px-4 py-1.5 mb-8">
              <Image
                src="/images/groadvertx-logo.png"
                alt="Groadvertx symbol"
                width={645}
                height={1024}
                className="h-4 w-auto object-contain"
              />
              <span className="font-bold text-white text-sm uppercase tracking-tight">Groadvertx</span>
            </div>
            <h2 className="display text-[clamp(2rem,5vw,3.5rem)]">
              Make Your Brand Stand Out.
            </h2>
            <p className="mt-4 text-white/55 text-lg">
              Let&apos;s build a brand that people actually remember — and a marketing strategy that keeps
              them coming back.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="rounded-full bg-rose-600 px-8 py-4 text-sm font-semibold text-white hover:bg-rose-500 transition-all hover:shadow-[0_0_50px_rgba(225,29,72,0.5)]"
              >
                Make Your Brand Stand Out →
              </a>
              <Link
                href="/"
                className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:border-white/30 transition-colors"
              >
                Back to Regendz IT
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container-shell flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            Groadvertx is a brand under{" "}
            <Link href="/" className="text-white/50 hover:text-white transition-colors">
              Regendz IT
            </Link>
          </p>
          <p className="font-mono text-xs text-white/20 uppercase tracking-widest">
            © {new Date().getFullYear()} Regendz IT
          </p>
        </div>
      </footer>
    </div>
  );
}
