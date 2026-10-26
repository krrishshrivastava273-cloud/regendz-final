"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/brand/Logo";
import ForwaiHeroScene from "@/components/brand/ForwaiHeroScene";

const offerings = [
  "Growth Strategy & Commercial Decision Support",
  "Operational Improvement & Process Optimisation",
  "Executive KPI, BI Dashboard & Reporting Architecture",
  "Forecasting, Performance Analysis & Scenario Planning",
  "Data Modelling, Unit Economics & Pricing Strategy",
  "CRM, ERP & Business Tool Integration",
  "AI Agent Design for Routine Business Operations",
  "Workflow Automation & Intelligent Follow-ups",
];

const tools = [
  { label: "Excel", color: "#21A366", symbol: "Xl" },
  { label: "Power BI", color: "#F2C811", symbol: "BI" },
  { label: "Python", color: "#3776AB", symbol: "Py" },
  { label: "SQL", color: "#CC2927", symbol: "SQL" },
  { label: "Tableau", color: "#E97627", symbol: "Ta" },
  { label: "Analytics", color: "#F7981D", symbol: "GA" },
  { label: "AI Agents", color: "#F59E0B", symbol: "AI" },
];

const stats = [
  { label: "Total Revenue", value: "₹4.8M", change: "+12.5%", up: true },
  { label: "Conversions", value: "8.9K", change: "+22.3%", up: true },
  { label: "ROAS", value: "4.8x", change: "+32.1%", up: true },
];

const channels = [
  { name: "Search", pct: 42 },
  { name: "Social", pct: 26 },
  { name: "Paid Media", pct: 19 },
  { name: "Email", pct: 13 },
];

export default function ForwaiPage() {
  return (
    <div className="min-h-screen bg-[#07060a] text-white overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#07060a]/80 backdrop-blur-xl">
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
              className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-amber-400 transition-colors"
            >
              Make Your Move
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-600/15 blur-[120px]" />
          <div className="absolute top-20 -right-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[90px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              background:
                "linear-gradient(135deg, transparent 0%, rgba(245,158,11,0.4) 40%, transparent 70%)",
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
                <div className="flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2">
                  <Image
                    src="/images/forwai-logo.png"
                    alt="Forwai logo"
                    width={952}
                    height={186}
                    className="h-5 w-auto max-w-[125px] object-contain"
                  />
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-amber-400 uppercase">
                  Business Consultancy · Data Analytics · AI Automation
                </span>
              </div>

              <h1 className="display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.05]">
                Commercial strategy backed by
                <br />
                <span className="text-amber-400">empirical business data.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                We help growing businesses make smarter decisions through practical growth strategy,
                executive intelligence, and AI-assisted workflows that connect the tools their teams
                use every day.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-black hover:bg-amber-400 transition-all hover:shadow-[0_0_40px_rgba(245,158,11,0.5)]"
                >
                  Schedule Advisory Session →
                </a>
                <a
                  href="#forwai-offerings"
                  className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:border-amber-500/40 transition-colors"
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
            <ForwaiHeroScene />
          </div>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section className="py-20">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-950/30 to-[#0a0805] p-8 md:p-12 overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/25 blur-[80px]" />
              <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-orange-700/20 blur-[60px]" />
            </div>

            <div className="relative grid gap-8 md:grid-cols-2 items-center">
              <div>
                <p className="kicker mb-4 text-amber-400">Advisory Framework</p>
                <h2 className="display text-[clamp(1.8rem,4vw,3rem)]">
                  Measure. Diagnose. Model. Execute.
                </h2>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Strategy, data and automation work best as one operating system. We clarify the
                  decisions that matter, connect the underlying information, and design practical
                  workflows that help teams act with more consistency.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Business and operational reviews that identify priorities, bottlenecks and practical next steps",
                    "Connected reporting pipelines across CRM, ERP, finance and other core business tools",
                    "Executive dashboards, KPI reporting and forecasting structured around the decisions leaders make",
                    "AI-assisted workflows for repetitive tasks, lead follow-up and routine business operations",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                      <span className="text-sm text-white/70">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard CSS Mockup */}
              <div className="relative">
                <div className="rounded-2xl border border-amber-500/25 bg-[#100d04] overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.12)]">
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between border-b border-white/5 px-5 py-3 bg-white/[0.02]">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="text-xs font-semibold text-white/80 font-mono">
                        Executive Intelligence Workspace
                      </span>
                    </div>
                    <span className="text-[10px] text-white/40 font-mono">Q3 Performance · Synced</span>
                  </div>
                  <div className="p-5">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 mb-5">
                      {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-3"
                        >
                          <p className="text-[9px] text-white/40 font-mono uppercase tracking-wider mb-1">
                            {stat.label}
                          </p>
                          <p className="text-base font-bold text-white font-mono">{stat.value}</p>
                          <p className="text-[10px] text-amber-400 font-mono mt-0.5">{stat.change}</p>
                        </div>
                      ))}
                    </div>
                    {/* Chart bars */}
                    <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-4 mb-3">
                      <div className="flex justify-between items-center mb-3">
                        <p className="text-[9px] text-white/40 font-mono uppercase">
                          Trailing Revenue Velocity (₹ Lakhs)
                        </p>
                        <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          +18.4% YoY
                        </span>
                      </div>
                      <div className="flex items-end gap-1.5 h-16">
                        {[40, 55, 35, 70, 60, 85].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t"
                            style={{
                              height: `${h}%`,
                              background: `linear-gradient(to top, rgba(245,158,11,0.85), rgba(245,158,11,0.25))`,
                            }}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                          <span key={m} className="text-[8px] text-white/30 font-mono">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Channel breakdown */}
                    <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-4">
                      <p className="text-[9px] text-white/40 mb-3 font-mono uppercase">
                        Acquisition Attribution by Channel
                      </p>
                      <div className="space-y-2">
                        {channels.map((ch) => (
                          <div key={ch.name} className="flex items-center gap-2">
                            <span className="w-16 text-[9px] text-white/60 font-mono">{ch.name}</span>
                            <div className="flex-1 h-1.5 rounded-full bg-white/5">
                              <div
                                className="h-full rounded-full bg-amber-500"
                                style={{ width: `${ch.pct}%` }}
                              />
                            </div>
                            <span className="w-8 text-[9px] text-amber-400 font-mono text-right">
                              {ch.pct}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating KPI badge */}
                <div className="absolute -top-4 -left-4 rounded-xl border border-amber-500/30 bg-amber-950/90 px-4 py-2.5 backdrop-blur-sm shadow-lg">
                  <p className="text-[9px] text-amber-400 font-mono uppercase tracking-wider">Blended ROAS</p>
                  <p className="text-xl font-bold text-white font-mono">4.8<span className="text-amber-400 text-xs">x Target</span></p>
                </div>
                <p className="mt-3 text-center text-[10px] text-white/30 font-mono">
                  * Representative model for dashboard architecture illustration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section id="forwai-offerings" className="py-20">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="kicker mb-4 text-amber-400">What We Do</p>
            <h2 className="display text-[clamp(1.8rem,4vw,3.2rem)] max-w-2xl">
              Business strategy, intelligence and automation for teams that want to grow with clarity.
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
                className="group rounded-2xl border border-amber-500/15 bg-amber-950/10 p-5 transition-all hover:border-amber-500/40 hover:bg-amber-950/20 hover:shadow-[0_4px_30px_rgba(245,158,11,0.12)]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-amber-500">0{i + 1}</span>
                  <span className="h-px flex-1 bg-amber-500/20" />
                </div>
                <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Philosophy */}
      <section className="py-16">
        <div className="container-shell">
          <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-900/15 to-transparent p-10 md:p-16 text-center relative overflow-hidden">
            <p className="kicker mb-4 text-amber-400">Advisory Philosophy</p>
            <h2 className="display text-[clamp(1.6rem,4vw,2.8rem)] max-w-3xl mx-auto">
              Sustainable operating leverage comes from clear strategy, reliable data, disciplined reporting and automation that supports the people doing the work.
            </h2>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="forwai-contact" className="py-24">
        <div className="container-shell max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 mb-8">
              <Image
                src="/images/forwai-logo.png"
                alt="Forwai logo"
                width={952}
                height={186}
                className="h-4 w-auto max-w-[110px] object-contain"
              />
            </div>
            <h2 className="display text-[clamp(2rem,5vw,3.5rem)]">
              Make Your Next Move Smarter.
            </h2>
            <p className="mt-4 text-white/55 text-lg">
              Let&apos;s connect the strategy, data and workflows that help your team make its next move with clarity.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold text-black hover:bg-amber-400 transition-all hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]"
              >
                Make Your Next Move Smarter →
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
            Forwai is a brand under{" "}
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
