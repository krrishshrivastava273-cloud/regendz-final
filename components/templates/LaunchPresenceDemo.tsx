"use client";

import { useState } from "react";

interface Props {
  activePageId: string;
  onNavigate: (pageId: string) => void;
  isMobilePreview?: boolean;
}

export default function LaunchPresenceDemo({ activePageId, onNavigate, isMobilePreview = false }: Props) {
  // Demo states
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [activeFeatureTab, setActiveFeatureTab] = useState<"orchestration" | "serverless" | "security">("orchestration");
  
  // Contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactCategory, setContactCategory] = useState("Enterprise PoC");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState("");

  // Signup form state
  const [signupCluster, setSignupCluster] = useState("");
  const [signupRegion, setSignupRegion] = useState("eu-central-1 (Frankfurt)");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupSubmitted, setSignupSubmitted] = useState(false);
  const [signupError, setSignupError] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactError("Please fill in all required fields.");
      return;
    }
    if (!contactEmail.includes("@")) {
      setContactError("Please enter a valid work email address.");
      return;
    }
    setContactError("");
    setContactSubmitted(true);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupCluster.trim() || !signupEmail.trim()) {
      setSignupError("Please provide a cluster name and work email.");
      return;
    }
    if (!signupEmail.includes("@")) {
      setSignupError("Please enter a valid work email.");
      return;
    }
    setSignupError("");
    setSignupSubmitted(true);
  };

  return (
    <div className="min-h-[640px] bg-[#f8fafc] text-slate-900 font-sans antialiased rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-between shadow-2xl">
      {/* ── Mini Template Navigation ─────────────────────────── */}
      <header className={`sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md ${isMobilePreview ? "px-3 py-2" : "px-4 py-3 sm:px-6"}`}>
        <div className="flex items-center justify-between gap-2">
          {/* Brand */}
          <div className="flex items-center gap-1.5 cursor-pointer shrink-0" onClick={() => onNavigate("home")}>
            <span
              className="h-6 w-6 rounded flex items-center justify-center text-white font-mono font-black text-xs shadow-sm"
              style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
            >
              N
            </span>
            <span className="font-display font-black text-sm tracking-tight text-slate-900">
              nova<span className="text-emerald-500">.</span>ai
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-1 text-[11px] font-medium text-slate-600 overflow-x-auto no-scrollbar py-0.5">
            {[
              { id: "home", label: "Home" },
              { id: "features", label: "Features" },
              { id: "pricing", label: "Pricing" },
              { id: "about", label: "Docs" },
              { id: "contact", label: "Contact" },
            ].map((nav) => (
              <button
                key={nav.id}
                type="button"
                onClick={() => onNavigate(nav.id)}
                className={`rounded-md px-2 py-1 transition-colors whitespace-nowrap ${
                  activePageId === nav.id
                    ? "bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {nav.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          {!isMobilePreview && (
            <button
              type="button"
              onClick={() => onNavigate("get-started")}
              className="rounded-full bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-700 transition-all shadow-sm shrink-0"
            >
              Get started →
            </button>
          )}
        </div>
      </header>

      {/* ── Page Contents ────────────────────────────────────── */}
      <main className={`flex-1 ${isMobilePreview ? "p-3.5" : "p-4 sm:p-8"}`}>
        {/* 1. HOME PAGE */}
        {activePageId === "home" && (
          <div className="space-y-10 max-w-4xl mx-auto py-4">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Now in public beta · Edge-native platform</span>
              </div>
              <h1 className={`font-display font-black tracking-tight text-slate-900 leading-[1.15] ${
                isMobilePreview ? "text-2xl" : "text-4xl sm:text-6xl"
              }`}>
                Ship faster with <br className={isMobilePreview ? "inline" : "hidden sm:inline"} />
                <span className="text-emerald-600">AI-powered</span> infra.
              </h1>
              <p className={`max-w-xl mx-auto text-slate-600 leading-relaxed ${
                isMobilePreview ? "text-xs" : "text-base sm:text-lg"
              }`}>
                Deploy edge-native apps in seconds. Automatically route, provision, and scale containerized workloads across 84 global edge zones.
              </p>
              <div className={`pt-2 flex flex-wrap justify-center gap-2.5 ${isMobilePreview ? "flex-col w-full px-2" : ""}`}>
                <button
                  type="button"
                  onClick={() => onNavigate("get-started")}
                  className={`rounded-xl bg-emerald-600 font-bold text-white hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg ${
                    isMobilePreview ? "px-4 py-2.5 text-xs w-full text-center" : "px-6 py-3 text-sm"
                  }`}
                >
                  Start free trial →
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("features")}
                  className={`rounded-xl border border-slate-200 bg-white font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm ${
                    isMobilePreview ? "px-4 py-2.5 text-xs w-full text-center" : "px-6 py-3 text-sm"
                  }`}
                >
                  View live architecture
                </button>
              </div>
            </div>

            {/* Realistic Application Dashboard Preview (Matching Thumbnail) */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-slate-50 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">app.nova.ai/dashboard</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 font-semibold">● 84/84 Edge Zones Healthy</span>
              </div>
              <div className="p-4 sm:p-6 space-y-6">
                <div className={`grid gap-2.5 text-left ${isMobilePreview ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"}`}>
                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] sm:text-xs font-medium text-slate-500">Requests / sec</p>
                    <p className="text-xl sm:text-2xl font-black text-emerald-600 mt-0.5 sm:mt-1">48.2K</p>
                    <span className="text-[9px] sm:text-[10px] text-emerald-700 font-medium font-mono">↑ 18% peak</span>
                  </div>
                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] sm:text-xs font-medium text-slate-500">Latency p99</p>
                    <p className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5 sm:mt-1">11ms</p>
                    <span className="text-[9px] sm:text-[10px] text-emerald-700 font-medium font-mono">Sub-15ms</span>
                  </div>
                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] sm:text-xs font-medium text-slate-500">Cold Start</p>
                    <p className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5 sm:mt-1">0.8ms</p>
                    <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium font-mono">V8 Isolate</span>
                  </div>
                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-[11px] sm:text-xs font-medium text-slate-500">Fleet Uptime</p>
                    <p className="text-xl sm:text-2xl font-black text-emerald-600 mt-0.5 sm:mt-1">100%</p>
                    <span className="text-[9px] sm:text-[10px] text-emerald-700 font-medium font-mono">Autonomous</span>
                  </div>
                </div>

                <div className={`flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 text-xs font-mono text-slate-500 ${isMobilePreview ? "text-[10px]" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <span>FRA: <strong className="text-emerald-600">8ms</strong></span>
                    <span>NYC: <strong className="text-slate-800">11ms</strong></span>
                    <span>SIN: <strong className="text-slate-800">18ms</strong></span>
                    <span>TYO: <strong className="text-emerald-600">14ms</strong></span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate("features")}
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    Inspect Global Routing →
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Highlights with Clean Emerald Pills */}
            <div className={`grid gap-3.5 pt-2 ${isMobilePreview ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-3"}`}>
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-sm">
                <div className="h-8 w-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center font-bold text-xs text-emerald-700">
                  ⚡
                </div>
                <h3 className="font-display font-bold text-base text-slate-900">Sub-ms Cold Starts</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  V8 isolate snapshots spin up under 0.8ms, eliminating latency spikes during sudden viral product launches.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-sm">
                <div className="h-8 w-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center font-bold text-xs text-emerald-700">
                  🛡️
                </div>
                <h3 className="font-display font-bold text-base text-slate-900">Zero-Trust Guard</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Encrypted TLS 1.3 tunnels across every inter-zone call with automated mTLS certificate rotation every 6 hours.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-sm">
                <div className="h-8 w-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center font-bold text-xs text-emerald-700">
                  🔄
                </div>
                <h3 className="font-display font-bold text-base text-slate-900">Autonomous Failover</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  BGP routing reroutes traffic away from degraded transit providers within 120ms without dropping open sockets.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 2. ABOUT PAGE (DOCS / MISSION) */}
        {activePageId === "about" && (
          <div className="space-y-8 max-w-3xl mx-auto py-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-semibold">Our Mission</span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Engineering zero-latency infrastructure for the AI era.
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Nova AI was founded in 2024 by distributed systems engineers who grew tired of multi-region deployment friction, fragile ingress layers, and opaque cloud bills.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-sm">
                <h4 className="font-display font-bold text-base text-slate-900">Deterministic Cost Models</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No sudden egress tax surprises or opaque intra-region bandwidth fees. Predictable flat compute units scaled to your real request volume.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-2 shadow-sm">
                <h4 className="font-display font-bold text-base text-slate-900">Open Standards Alignment</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Built natively on standard OCI containers and WebAssembly runtimes. You can export workloads to your own Kubernetes nodes with zero code refactoring.
                </p>
              </div>
            </div>

            {/* Fictional Team Concept */}
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">Founding Engineering Team (Demo Profiles)</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: "Dr. Elena Rostova", role: "Chief Architect", focus: "Distributed Consensus" },
                  { name: "Marcus Vance", role: "Head of Infrastructure", focus: "BGP Edge Routing" },
                  { name: "Siddharth Nair", role: "Principal Systems Eng", focus: "Wasm Isolates" },
                ].map((member) => (
                  <div key={member.name} className="p-3.5 rounded-lg border border-slate-200 bg-white shadow-sm">
                    <div className="h-8 w-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center font-mono font-bold text-xs text-emerald-800 mb-2">
                      {member.name[0]}
                    </div>
                    <p className="font-display font-semibold text-xs text-slate-900">{member.name}</p>
                    <p className="text-[10px] text-emerald-700 font-mono font-medium">{member.role}</p>
                    <p className="text-[9.5px] text-slate-500 mt-1">{member.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. FEATURES PAGE */}
        {activePageId === "features" && (
          <div className="space-y-8 max-w-4xl mx-auto py-4">
            <div className="text-center space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-semibold">Technical Deep Dive</span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900">
                Engineered for uncompromising resilience.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                Explore the modular architecture powering Nova AI. Toggle modules below to view operational specifications.
              </p>
            </div>

            {/* Feature selector tabs */}
            <div className="flex justify-center gap-2 border-b border-slate-200 pb-4">
              {[
                { id: "orchestration" as const, label: "Edge Orchestration" },
                { id: "serverless" as const, label: "Serverless Workers" },
                { id: "security" as const, label: "Security & Zero Trust" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFeatureTab(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeFeatureTab === tab.id
                      ? "bg-emerald-600 text-white font-bold shadow-sm"
                      : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Feature Detail */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm">
              {activeFeatureTab === "orchestration" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg text-slate-900">Autonomous Geographic Workload Placement</h3>
                    <span className="font-mono text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Routing latency: 1.2ms</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rather than forcing traffic through a single primary cloud region, our anycast engine dispatches HTTP requests directly to the closest point of presence with hot memory instances pre-warmed.
                  </p>
                  <div className="rounded-lg bg-slate-900 p-3.5 font-mono text-[11px] text-slate-200 border border-slate-800 shadow-inner">
                    <p className="text-slate-500">{"// Deploy to 84 edge nodes in one CLI call"}</p>
                    <p className="text-emerald-400 font-semibold">$ nova deploy --env=production --zones=global-tier1</p>
                    <p className="text-slate-400">&gt; Building container bundle... (142ms)</p>
                    <p className="text-emerald-300">&gt; Deployed to 84 edge regions. Health checks 100% verified.</p>
                  </div>
                </div>
              )}

              {activeFeatureTab === "serverless" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg text-slate-900">V8 WebAssembly Runtime Isolates</h3>
                    <span className="font-mono text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Memory footprint: &lt;1.8MB</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Execute event-driven business logic with nanosecond execution thresholds. Lightweight isolate containers allow running thousands of distinct tenant environments concurrently on the same hardware safely.
                  </p>
                  <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono pt-2">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block text-[10px]">Cold Start</span>
                      <span className="font-bold text-emerald-600 text-sm mt-1 block">0.8ms</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block text-[10px]">Max Execution</span>
                      <span className="font-bold text-slate-900 text-sm mt-1 block">15 mins</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <span className="text-slate-500 block text-[10px]">Concurrent Conns</span>
                      <span className="font-bold text-slate-900 text-sm mt-1 block">100,000+</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeatureTab === "security" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-lg text-slate-900">Enterprise Cryptographic Audit & Compliance</h3>
                    <span className="font-mono text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">SOC2 Type II Ready</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated envelope encryption with customer-managed keys (CMK), continuous vulnerability scanning, and immutable ledger logging for all infrastructure mutations.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["mTLS 1.3 Strict", "Automated DDoS Mitigation", "WAF Rule Engine", "GDPR Zero-Data Persistence"].map((pill) => (
                      <span key={pill} className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[10px] text-slate-700 font-medium">
                        ✓ {pill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 4. PRICING PAGE */}
        {activePageId === "pricing" && (
          <div className="space-y-8 max-w-4xl mx-auto py-4">
            <div className="text-center space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-semibold">Illustrative Demo Tiers</span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900">
                Simple, transparent scalability.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Sample pricing plans designed for demonstration purposes only.
              </p>

              {/* Billing toggle */}
              <div className="inline-flex items-center gap-1.5 p-1 rounded-full border border-slate-200 bg-white shadow-sm mt-2">
                <button
                  type="button"
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                    billingCycle === "monthly" ? "bg-slate-900 text-white font-bold" : "text-slate-600"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("annual")}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                    billingCycle === "annual" ? "bg-emerald-600 text-white font-bold" : "text-slate-600"
                  }`}
                >
                  Annual (20% Savings)
                </button>
              </div>
            </div>

            {/* 3 Tier Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {/* Starter */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col justify-between space-y-4 shadow-sm">
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900">Starter</h4>
                  <p className="text-xs text-slate-500 mt-1">For indie developers and prototype testing.</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-extrabold text-slate-900">
                      {billingCycle === "annual" ? "$24" : "$29"}
                    </span>
                    <span className="font-mono text-xs text-slate-500">/month</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-slate-600 font-mono">
                    <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> 5 Global Edge Regions</li>
                    <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> 1M Requests / month</li>
                    <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> Community Discord SLA</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate("get-started")}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Start Demo Sandbox
                </button>
              </div>

              {/* Growth */}
              <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50/40 p-5 flex flex-col justify-between space-y-4 relative shadow-md">
                <span className="absolute -top-3 right-4 rounded-full bg-emerald-600 px-2.5 py-0.5 font-mono text-[9px] font-extrabold text-white uppercase tracking-wider shadow-sm">
                  Most Popular
                </span>
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900">Growth Fleet</h4>
                  <p className="text-xs text-slate-600 mt-1">For scaling startups with mission-critical uptime.</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-extrabold text-emerald-700">
                      {billingCycle === "annual" ? "$79" : "$99"}
                    </span>
                    <span className="font-mono text-xs text-slate-500">/month</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-slate-700 font-mono">
                    <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> All 84 Global Edge Zones</li>
                    <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> 25M Requests / month</li>
                    <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> 99.99% Uptime Guarantee</li>
                    <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> Dedicated Slack Connect</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate("get-started")}
                  className="w-full rounded-lg bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 shadow-sm transition-colors"
                >
                  Deploy Fleet Cluster →
                </button>
              </div>

              {/* Enterprise */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 flex flex-col justify-between space-y-4 shadow-sm">
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900">Enterprise</h4>
                  <p className="text-xs text-slate-500 mt-1">Custom governance, VPC peering, and custom SLAs.</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-extrabold text-slate-900">Custom</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-slate-600 font-mono">
                    <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> Unlimited Edge Nodes</li>
                    <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> Custom BGP Anycast Prefix</li>
                    <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> 24/7/365 Phone Escalation</li>
                    <li className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> SOC2 & HIPAA BAA Signed</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate("contact")}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Contact Solutions Team
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 5. CONTACT PAGE */}
        {activePageId === "contact" && (
          <div className="space-y-6 max-w-xl mx-auto py-4">
            <div className="text-center space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-semibold">Demo Contact Channel</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">Speak with Nova Engineering</h2>
              <p className="text-xs text-slate-500">
                Client-side demonstration form with real validation. No actual server requests are dispatched.
              </p>
            </div>

            {contactSubmitted ? (
              <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-6 text-center space-y-3 shadow-sm">
                <span className="text-3xl">✓</span>
                <h3 className="font-display font-bold text-lg text-emerald-800">Inquiry Received (Demo Mode)</h3>
                <p className="text-xs text-slate-700 max-w-sm mx-auto">
                  Thank you, <strong>{contactName}</strong>. In a live deployment, this form validates inputs and dispatches an alert to our solutions team via webhooks.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setContactSubmitted(false);
                    setContactName("");
                    setContactEmail("");
                    setContactMessage("");
                  }}
                  className="rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-emerald-700 mt-2 transition-colors"
                >
                  Send Another Demo Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-sm">
                {contactError && (
                  <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono">
                    ⚠️ {contactError}
                  </div>
                )}
                <div>
                  <label className="block text-[11px] font-mono text-slate-500 mb-1">Inquiry Category</label>
                  <div className="flex flex-wrap gap-2">
                    {["Enterprise PoC", "Custom Latency Benchmark", "Security Audit", "Other"].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setContactCategory(cat)}
                        className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                          contactCategory === cat
                            ? "bg-emerald-600 text-white font-bold"
                            : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">Your Name *</label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">Work Email *</label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">Message or Deployment Scope *</label>
                  <textarea
                    rows={3}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Tell us about expected QPS and target regions..."
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  Submit Demo Inquiry →
                </button>
              </form>
            )}
          </div>
        )}

        {/* 6. GET STARTED (SIGNUP DEMO) */}
        {activePageId === "get-started" && (
          <div className="space-y-6 max-w-lg mx-auto py-4">
            <div className="text-center space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 font-semibold">Instant Provisioning Demo</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">Create Sandbox Cluster</h2>
              <p className="text-xs text-slate-500">
                Simulated zero-cost trial setup. No credit card or sensitive credentials required.
              </p>
            </div>

            {signupSubmitted ? (
              <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-6 text-center space-y-4 shadow-sm">
                <span className="text-3xl">🚀</span>
                <h3 className="font-display font-bold text-lg text-emerald-800">Cluster Provisioned!</h3>
                <div className="p-3.5 rounded-lg bg-slate-900 font-mono text-xs text-left space-y-1 text-slate-200">
                  <p className="text-slate-400">{"// Deployment credentials"}</p>
                  <p>Cluster: <span className="text-emerald-400 font-bold">{signupCluster}</span></p>
                  <p>Primary Region: <span className="text-white">{signupRegion}</span></p>
                  <p>Status: <span className="text-emerald-400 font-bold">ACTIVE (Demo Sandbox)</span></p>
                  <p>Endpoint: <span className="text-emerald-300">https://{signupCluster.toLowerCase().replace(/\s+/g, "-")}.edge.nova.ai</span></p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSignupSubmitted(false);
                    setSignupCluster("");
                    setSignupEmail("");
                  }}
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition-colors"
                >
                  Create Another Demo Cluster
                </button>
              </div>
            ) : (
              <form onSubmit={handleSignupSubmit} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-sm">
                {signupError && (
                  <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono">
                    ⚠️ {signupError}
                  </div>
                )}
                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">Cluster Namespace *</label>
                  <input
                    type="text"
                    value={signupCluster}
                    onChange={(e) => setSignupCluster(e.target.value)}
                    placeholder="e.g. acme-production-v2"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">Target Ingress Zone</label>
                  <select
                    value={signupRegion}
                    onChange={(e) => setSignupRegion(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                  >
                    <option>eu-central-1 (Frankfurt) - 8ms</option>
                    <option>us-east-1 (N. Virginia) - 11ms</option>
                    <option>ap-southeast-1 (Singapore) - 16ms</option>
                    <option>ap-northeast-1 (Tokyo) - 14ms</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-600 mb-1">Work Email *</label>
                  <input
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder="engineer@company.com"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  Spin Up Demo Sandbox →
                </button>
              </form>
            )}
          </div>
        )}
      </main>

      {/* ── Mini Template Footer ─────────────────────────────── */}
      <footer className="border-t border-slate-200 bg-white px-4 py-3 text-[11px] font-mono text-slate-500 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-slate-700">Nova AI — Edge Infrastructure</span>
        </div>
        <span>Demonstration Template · Regendz IT Selected Work</span>
      </footer>
    </div>
  );
}
