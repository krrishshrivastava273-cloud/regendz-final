"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/brand/Logo";

import SlitcodeHeroScene from "@/components/brand/SlitcodeHeroScene";

const offerings = [
  "Custom Web Applications & SaaS Platforms",
  "Next.js & React Frontend Engineering",
  "RESTful & GraphQL API Integrations",
  "High-Performance Business Websites",
  "Headless CMS & E-Commerce Architecture",
  "Database Modeling & Cloud Deployments",
  "Code Audits & Performance Optimization",
  "DevOps, CI/CD & Production Maintenance",
];

const techStack = [
  { label: "React", color: "#61DAFB", symbol: "⚛" },
  { label: "Next.js", color: "#ffffff", symbol: "N" },
  { label: "TypeScript", color: "#3178C6", symbol: "TS" },
  { label: "JavaScript", color: "#F7DF1E", symbol: "JS" },
  { label: "Node.js", color: "#68A063", symbol: "⬡" },
  { label: "Tailwind", color: "#06B6D4", symbol: "TW" },
];

export default function SlitcodePage() {
  return (
    <div className="min-h-screen bg-[#06060a] text-white overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#06060a]/80 backdrop-blur-xl">
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
              className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-500 transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Diagonal glow streaks */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-violet-700/20 blur-[120px]" />
          <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[90px]" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139,92,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Diagonal streak */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              background:
                "linear-gradient(135deg, transparent 0%, rgba(139,92,246,0.5) 30%, transparent 60%)",
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
              {/* Brand badge */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center rounded-full border border-violet-500/30 bg-violet-600/10 px-4 py-1.5">
                  <Image
                    src="/images/slitcode-logo.png"
                    alt="slitcode logo"
                    width={936}
                    height={276}
                    className="h-5 w-auto max-w-[120px] object-contain"
                  />
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-violet-400 uppercase">
                  Web & Software Development
                </span>
              </div>

              <h1 className="display text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.05]">
                Engineering digital products
                <br />
                built to{" "}
                <span className="text-violet-400">perform.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                We design and engineer web applications, custom software platforms, and
                high-converting websites with resilient architectures, clean codebases, and
                seamless third-party integrations.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="rounded-full bg-violet-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-violet-500 transition-all hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
                >
                  Start Your Project →
                </a>
                <a
                  href="#slitcode-offerings"
                  className="rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:border-violet-500/40 transition-colors"
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
              {techStack.map((tech) => (
                <span
                  key={tech.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-mono backdrop-blur-sm"
                >
                  <span style={{ color: tech.color }} className="font-bold text-xs">
                    {tech.symbol}
                  </span>
                  <span className="text-white/70">{tech.label}</span>
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Hero Orbital Animation */}
          <div className="relative">
            <SlitcodeHeroScene />
          </div>
        </div>
      </section>

      {/* Visual Mockup Section */}
      <section className="py-20">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-950/40 to-[#0a0814] p-8 md:p-12 overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 opacity-30">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/30 blur-[80px]" />
              <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-violet-800/20 blur-[60px]" />
            </div>

            <div className="relative grid gap-8 md:grid-cols-2 items-center">
              <div>
                <p className="kicker mb-4 text-violet-400">Engineering Standards</p>
                <h2 className="display text-[clamp(1.8rem,4vw,3rem)]">
                  Architect. Build. Scale.
                </h2>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Every line of code is structured for maintainability and velocity. From technical
                  scoping through production rollout, we implement type-safe workflows, modular
                  component hierarchies, and automated CI/CD deployments.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Domain-driven technical architecture tailored to your business model",
                    "Type-safe development using TypeScript, Next.js, and modern React patterns",
                    "High Core Web Vitals with optimized server-side rendering and asset delivery",
                    "Automated test coverage, CI/CD deployment pipelines, and active telemetry",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                      <span className="text-sm text-white/70">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CSS Mockup */}
              <div className="relative">
                {/* Browser window mockup */}
                <div className="rounded-2xl border border-violet-500/30 bg-[#0d0b1a] overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.15)]">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3 bg-white/[0.02]">
                    <span className="h-3 w-3 rounded-full bg-red-500/60" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <span className="h-3 w-3 rounded-full bg-green-500/60" />
                    <div className="ml-4 flex-1 rounded-full bg-white/5 px-3 py-1 text-[10px] text-white/40 font-mono flex items-center justify-between">
                      <span>https://slitcode.in/console</span>
                      <span className="text-emerald-400 text-[9px]">TLS 1.3 · Live</span>
                    </div>
                  </div>
                  {/* Page preview */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                      <div>
                        <p className="text-xs font-semibold text-white font-mono">App Cluster: Production</p>
                        <p className="text-[10px] text-white/40">Next.js 15 · Edge Runtime · Multi-Region</p>
                      </div>
                      <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 text-[10px] font-mono text-emerald-400">
                        Operational
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <p className="text-[9px] font-mono text-white/40 uppercase">Latency</p>
                        <p className="text-sm font-bold text-white mt-1">24ms</p>
                        <p className="text-[9px] font-mono text-emerald-400">p95 global</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <p className="text-[9px] font-mono text-white/40 uppercase">Build Time</p>
                        <p className="text-sm font-bold text-white mt-1">1.8s</p>
                        <p className="text-[9px] font-mono text-violet-300">Turbopack</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <p className="text-[9px] font-mono text-white/40 uppercase">Code Quality</p>
                        <p className="text-sm font-bold text-white mt-1">100%</p>
                        <p className="text-[9px] font-mono text-emerald-400">Type-Safe</p>
                      </div>
                    </div>
                    <div className="rounded-xl border border-violet-500/20 bg-violet-950/20 p-3 font-mono text-[9px] text-white/60 space-y-1">
                      <p><span className="text-violet-400">✓</span> Compiled client & server routes in 820ms</p>
                      <p><span className="text-violet-400">✓</span> Static optimization completed (0 bundle warnings)</p>
                      <p><span className="text-emerald-400">✓</span> Automated smoke tests passed across all viewports</p>
                    </div>
                  </div>
                </div>
                {/* Mobile overlay */}
                <div className="absolute -bottom-4 -right-4 w-32 rounded-2xl border border-violet-500/30 bg-[#0d0b1a] overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.2)]">
                  <div className="h-1 w-8 rounded-full bg-white/20 mx-auto my-2" />
                  <div className="px-2.5 pb-3 space-y-1.5 font-mono text-[8px]">
                    <div className="flex justify-between text-white/60">
                      <span>Speed</span>
                      <span className="text-emerald-400 font-bold">100</span>
                    </div>
                    <div className="h-1 rounded bg-emerald-400/40" />
                    <p className="text-[7px] text-white/40">Lighthouse Mobile</p>
                  </div>
                </div>
                {/* Floating stat badge */}
                <div className="absolute -top-4 -left-4 rounded-xl border border-violet-500/30 bg-violet-950/90 px-4 py-2.5 backdrop-blur-sm shadow-lg">
                  <p className="text-[9px] text-violet-400 font-mono uppercase tracking-wider">Performance Index</p>
                  <p className="text-xl font-bold text-white font-mono">99<span className="text-violet-400 text-xs">/100</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section id="slitcode-offerings" className="py-20">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="kicker mb-4 text-violet-400">Services & Capabilities</p>
            <h2 className="display text-[clamp(1.8rem,4vw,3.2rem)] max-w-2xl">
              Software engineering and digital infrastructure for modern business.
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
                className="group rounded-2xl border border-violet-500/15 bg-violet-950/10 p-5 transition-all hover:border-violet-500/40 hover:bg-violet-950/20 hover:shadow-[0_4px_30px_rgba(139,92,246,0.12)]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="font-mono text-xs text-violet-500">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-violet-500/20" />
                </div>
                <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="py-16">
        <div className="container-shell">
          <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-900/20 to-transparent p-10 md:p-16 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-600/5 to-transparent" />
            </div>
            <p className="kicker mb-4 text-violet-400">Engineering Philosophy</p>
            <h2 className="display text-[clamp(1.6rem,4vw,2.8rem)] max-w-2xl mx-auto">
              Fast load times, dependable uptime, and clear code that your team can confidently build on.
            </h2>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="slitcode-contact" className="py-24">
        <div className="container-shell max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-600/10 px-4 py-1.5 mb-8">
              <Image
                src="/images/slitcode-logo.png"
                alt="slitcode logo"
                width={936}
                height={276}
                className="h-4 w-auto max-w-[105px] object-contain"
              />
            </div>
            <h2 className="display text-[clamp(2rem,5vw,3.5rem)]">
              Let&apos;s Build Something Great.
            </h2>
            <p className="mt-4 text-white/55 text-lg">
              Tell us about your project and let&apos;s figure out the best approach for your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="rounded-full bg-violet-600 px-8 py-4 text-sm font-semibold text-white hover:bg-violet-500 transition-all hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
              >
                Let&apos;s Build Something Great →
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
            slitcode is a brand under{" "}
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
