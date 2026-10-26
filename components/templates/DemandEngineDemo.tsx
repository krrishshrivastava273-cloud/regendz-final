"use client";

import { useState } from "react";

interface Props {
  activePageId: string;
  onNavigate: (pageId: string) => void;
  isMobilePreview?: boolean;
}

interface Lead {
  id: string;
  company: string;
  contact: string;
  dealSize: string;
  channel: string;
  intent: "High" | "Medium" | "Enterprise";
  status: "Qualified" | "Meeting" | "Closed";
}

const SAMPLE_LEADS: Lead[] = [
  { id: "L-101", company: "AeroDynamics Corp", contact: "Marcus Chen", dealSize: "$48,000", channel: "Meta Retargeting", intent: "High", status: "Qualified" },
  { id: "L-102", company: "Strata FinTech", contact: "Sarah Jenkins", dealSize: "$92,000", channel: "Google Search", intent: "Enterprise", status: "Meeting" },
  { id: "L-103", company: "Verve Mobility", contact: "Lucas Dubois", dealSize: "$34,000", channel: "LinkedIn ABM", intent: "High", status: "Qualified" },
  { id: "L-104", company: "Kinetix Health", contact: "Dr. Alistair Ross", dealSize: "$120,000", channel: "Direct / Organic", intent: "Enterprise", status: "Closed" },
  { id: "L-105", company: "Hyperion Retail", contact: "Elena Gomez", dealSize: "$28,000", channel: "Meta Paid", intent: "Medium", status: "Meeting" },
  { id: "L-106", company: "Nexus Grid Labs", contact: "David Zhao", dealSize: "$65,000", channel: "Google Search", intent: "High", status: "Closed" },
];

export default function DemandEngineDemo({ activePageId, onNavigate, isMobilePreview = false }: Props) {
  // Pacing Window
  const [timeWindow, setTimeWindow] = useState<"30D" | "90D">("30D");

  // Lead search & filter
  const [leadSearch, setLeadSearch] = useState("");
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Filtered Leads
  const filteredLeads = SAMPLE_LEADS.filter((l) => {
    const matchesSearch =
      l.company.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.contact.toLowerCase().includes(leadSearch.toLowerCase()) ||
      l.channel.toLowerCase().includes(leadSearch.toLowerCase());
    const matchesStatus = leadStatusFilter === "all" || l.status === leadStatusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-[640px] bg-[#f5f3ff] text-slate-900 font-sans antialiased rounded-xl overflow-hidden border border-purple-200 flex flex-col justify-between shadow-2xl">
      {/* ── Mini Dashboard Navigation (Matching Thumbnail) ─────────── */}
      <header className={`sticky top-0 z-30 border-b border-purple-200 bg-white/95 backdrop-blur-md ${isMobilePreview ? "px-3 py-2" : "px-4 py-3 sm:px-6"}`}>
        <div className="flex items-center justify-between gap-2">
          {/* Brand */}
          <div className="flex items-center gap-1.5 cursor-pointer shrink-0" onClick={() => onNavigate("overview")}>
            <div
              className="h-5 w-5 rounded flex items-center justify-center text-white font-mono font-black text-xs shadow-sm"
              style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
            >
              N
            </div>
            <span className="font-display font-black text-sm tracking-tight text-[#1e1b4b]">
              nexus<span className="text-purple-600">.</span>growth
            </span>
          </div>

          {/* Live indicator (Matching Thumbnail) */}
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
            </span>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-purple-700">LIVE · 30D</span>
          </div>
        </div>
      </header>

      {/* ── Main Layout: Sidebar + Content ─────────────────────── */}
      <div className={`flex-1 flex ${isMobilePreview ? "flex-col" : "flex-col md:flex-row"}`}>
        {/* Dashboard Sidebar */}
        <aside className={`${
          isMobilePreview ? "w-full bg-[#1e1b4b] text-white px-2 py-1.5 shrink-0 border-b border-purple-900" : "w-full md:w-52 bg-[#1e1b4b] text-white p-3 shrink-0 flex flex-row md:flex-col justify-between md:justify-start gap-1"
        }`}>
          <div className={`flex items-center ${isMobilePreview ? "flex-row overflow-x-auto no-scrollbar gap-1.5 py-0.5" : "flex-row md:flex-col gap-1 w-full overflow-x-auto pb-1 md:pb-0"}`}>
            {!isMobilePreview && (
              <span className="hidden md:block text-[9px] font-mono uppercase tracking-widest text-purple-300/60 px-3 py-1 font-semibold">
                Navigation
              </span>
            )}
            {[
              { id: "overview", label: "Overview", icon: "▤" },
              { id: "campaigns", label: "Campaigns", icon: "◈" },
              { id: "audience", label: "Audience", icon: "◉" },
              { id: "channels", label: "Channels", icon: "⊞" },
              { id: "reports", label: "Reports", icon: "↗" },
              { id: "leads", label: "Leads", icon: "👥" },
            ].map((nav) => (
              <button
                key={nav.id}
                type="button"
                onClick={() => onNavigate(nav.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors text-left whitespace-nowrap shrink-0 ${
                  activePageId === nav.id
                    ? "bg-purple-600/40 text-white font-bold border border-purple-400/40 shadow-sm"
                    : "text-purple-200/70 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <span className="text-xs">{nav.icon}</span>
                <span>{nav.label}</span>
              </button>
            ))}
          </div>

          {!isMobilePreview && (
            <div className="hidden md:block mt-auto p-3 rounded-xl bg-purple-950/60 border border-purple-800/40 text-[11px] font-mono space-y-1 text-purple-200/80">
              <p className="text-purple-300 font-bold">Attribution Model</p>
              <p className="text-[10px] text-purple-300/60">W-Shaped Multi-Touch</p>
              <div className="pt-1 border-t border-purple-800/40 flex items-center justify-between text-[10px]">
                <span className="text-emerald-400">● 99.8% Confidence</span>
              </div>
            </div>
          )}
        </aside>

        {/* ── Main Content Area ─────────────────────────────────── */}
        <main className={`flex-1 ${isMobilePreview ? "p-3.5" : "p-4 sm:p-6 md:p-8"}`}>
          {/* 1. OVERVIEW */}
          {activePageId === "overview" && (
            <div className="space-y-6 max-w-4xl mx-auto py-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-purple-200/80 pb-3">
                <div>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-purple-700 font-bold">Growth Intelligence</span>
                  <h1 className={`font-display font-black text-[#1e1b4b] ${isMobilePreview ? "text-lg" : "text-2xl sm:text-3xl"}`}>
                    Full-Funnel Attribution
                  </h1>
                </div>
                <div className="inline-flex items-center gap-1 p-0.5 rounded-lg border border-purple-200 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setTimeWindow("30D")}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      timeWindow === "30D" ? "bg-purple-600 text-white font-bold" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Last 30 Days
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeWindow("90D")}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                      timeWindow === "90D" ? "bg-purple-600 text-white font-bold" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Last 90 Days
                  </button>
                </div>
              </div>

              {/* Metric Quad (Matching Thumbnail) */}
              <div className={`grid gap-2.5 ${isMobilePreview ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"}`}>
                <div className="rounded-xl border border-purple-100 bg-white p-3 shadow-sm min-w-0 flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tight block truncate">Pipeline</span>
                  <span className="font-mono text-lg sm:text-2xl font-black text-[#1e1b4b] mt-1 block tracking-tight">
                    {timeWindow === "30D" ? "$842,600" : "$2,410,000"}
                  </span>
                  <span className="text-[10px] text-purple-700 font-semibold font-mono mt-1 block">↑ 24.8% vs Target</span>
                </div>
                <div className="rounded-xl border border-purple-100 bg-white p-3 shadow-sm min-w-0 flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tight block truncate">Blended ROAS</span>
                  <span className="font-mono text-lg sm:text-2xl font-black text-purple-700 mt-1 block tracking-tight">4.62×</span>
                  <span className="text-[10px] text-slate-600 font-medium font-mono mt-1 block">Target: 3.80×</span>
                </div>
                <div className="rounded-xl border border-purple-100 bg-white p-3 shadow-sm min-w-0 flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tight block truncate">Blended CAC</span>
                  <span className="font-mono text-lg sm:text-2xl font-black text-[#1e1b4b] mt-1 block tracking-tight">$312</span>
                  <span className="text-[10px] text-emerald-600 font-semibold font-mono mt-1 block">↓ 14% MoM</span>
                </div>
                <div className="rounded-xl border border-purple-100 bg-white p-3 shadow-sm min-w-0 flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tight block truncate">Conv. Rate</span>
                  <span className="font-mono text-lg sm:text-2xl font-black text-[#1e1b4b] mt-1 block tracking-tight">4.18%</span>
                  <span className="text-[10px] text-purple-600 font-semibold font-mono mt-1 block">High-Intent</span>
                </div>
              </div>

              {/* High-Resolution Line Chart (Matching Thumbnail) */}
              <div className="rounded-xl border border-purple-100 bg-white p-4 sm:p-5 space-y-3 shadow-sm min-w-0">
                <div className={`flex text-xs font-mono gap-1.5 ${isMobilePreview ? "flex-col items-start" : "items-center justify-between"}`}>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-purple-600 shrink-0" />
                    <span className="text-[#1e1b4b] font-bold text-[11px] sm:text-xs">REVENUE ATTRIBUTION TRAJECTORY</span>
                  </div>
                  <span className="text-purple-700 font-semibold text-[10px] sm:text-xs bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                    +32% Q4 Projection
                  </span>
                </div>
                <div className="h-36 sm:h-40 w-full pt-2">
                  <svg viewBox="0 0 500 120" className="h-full w-full overflow-hidden" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="purpleGlowLine" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(124,58,237,0.25)" />
                        <stop offset="100%" stopColor="rgba(124,58,237,0.01)" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#f3e8ff" strokeDasharray="4 4" />
                    <line x1="0" y1="70" x2="500" y2="70" stroke="#f3e8ff" strokeDasharray="4 4" />

                    {/* Shaded Area */}
                    <path
                      d="M0,95 Q75,90 150,75 T300,50 T420,25 T500,10 L500,120 L0,120 Z"
                      fill="url(#purpleGlowLine)"
                    />
                    {/* Line */}
                    <path
                      d="M0,95 Q75,90 150,75 T300,50 T420,25 T500,10"
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Data Points */}
                    <circle cx="300" cy="50" r="4.5" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="500" cy="10" r="4.5" fill="#7c3aed" stroke="#ffffff" strokeWidth="2" />
                  </svg>
                </div>
                <div className="grid grid-cols-2 sm:flex sm:justify-between text-[9px] sm:text-[10px] font-mono text-slate-500 pt-2 border-t border-purple-100 gap-1">
                  <span>W1: $140k (Base)</span>
                  <span>W2: $192k (+12%)</span>
                  <span>W3: $285k (+24%)</span>
                  <span>W4: $340k (Peak)</span>
                </div>
              </div>
            </div>
          )}

          {/* 2. CAMPAIGNS */}
          {activePageId === "campaigns" && (
            <div className="space-y-6 max-w-4xl mx-auto py-2">
              <div className="border-b border-purple-200/80 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold">Tactical Deployment</span>
                <h2 className="font-display text-2xl font-bold text-[#1e1b4b]">Active Growth Campaigns</h2>
              </div>

              <div className="rounded-xl border border-purple-100 bg-white shadow-sm overflow-hidden">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-purple-50/60 border-b border-purple-100 text-purple-900 text-[10px] uppercase font-bold">
                    <tr>
                      <th className="p-3.5">Campaign Name</th>
                      <th className="p-3.5">Channel</th>
                      <th className="p-3.5">Budget Pacing</th>
                      <th className="p-3.5">ROAS</th>
                      <th className="p-3.5 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-50">
                    {[
                      { name: "Enterprise Retargeting v4", channel: "Meta Ads", spend: "$14,200 / $18k", roas: "5.12x", status: "Active" },
                      { name: "High-Intent Search Terms", channel: "Google Search", spend: "$22,500 / $25k", roas: "4.80x", status: "Active" },
                      { name: "Executive Account Based (ABM)", channel: "LinkedIn ABM", spend: "$8,400 / $10k", roas: "3.90x", status: "Optimized" },
                      { name: "Top-Funnel Creator Whitelisting", channel: "TikTok / YT Shorts", spend: "$6,100 / $8k", roas: "3.20x", status: "Scaling" },
                    ].map((row) => (
                      <tr key={row.name} className="hover:bg-purple-50/30 transition-colors">
                        <td className="p-3.5 font-bold text-[#1e1b4b]">{row.name}</td>
                        <td className="p-3.5 text-slate-600">{row.channel}</td>
                        <td className="p-3.5 text-slate-600">{row.spend}</td>
                        <td className="p-3.5 font-bold text-purple-700">{row.roas}</td>
                        <td className="p-3.5 text-right">
                          <span className="rounded-full bg-purple-100 border border-purple-200 px-2.5 py-0.5 text-[10px] text-purple-800 font-semibold">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3. AUDIENCE */}
          {activePageId === "audience" && (
            <div className="space-y-6 max-w-4xl mx-auto py-2">
              <div className="border-b border-purple-200/80 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold">Cohort Telemetry</span>
                <h2 className="font-display text-2xl font-bold text-[#1e1b4b]">Audience Segments & Penetration</h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-purple-100 bg-white p-5 space-y-2 shadow-sm">
                  <span className="font-mono text-xs text-purple-700 font-bold">42% Share</span>
                  <h4 className="font-display font-bold text-base text-[#1e1b4b]">Enterprise CTOs & VPs</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Highest lifetime value cohort. 14-day median conversion cycle with strong organic expansion.
                  </p>
                </div>
                <div className="rounded-xl border border-purple-100 bg-white p-5 space-y-2 shadow-sm">
                  <span className="font-mono text-xs text-purple-700 font-bold">31% Share</span>
                  <h4 className="font-display font-bold text-base text-[#1e1b4b]">Seed & Series A Founders</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fastest initial onboarding with immediate credit card activation and trial-to-paid velocity.
                  </p>
                </div>
                <div className="rounded-xl border border-purple-100 bg-white p-5 space-y-2 shadow-sm">
                  <span className="font-mono text-xs text-purple-700 font-bold">27% Share</span>
                  <h4 className="font-display font-bold text-base text-[#1e1b4b]">Technical Agency Leads</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Multi-seat workspace operators serving multiple enterprise client instances simultaneously.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 4. CHANNELS */}
          {activePageId === "channels" && (
            <div className="space-y-6 max-w-4xl mx-auto py-2">
              <div className="border-b border-purple-200/80 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold">Attribution Matrix</span>
                <h2 className="font-display text-2xl font-bold text-[#1e1b4b]">Channel Efficiency Comparison</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-purple-100 bg-white p-5 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-sm text-[#1e1b4b]">Meta Retargeting Engine</h4>
                    <span className="font-mono text-xs font-bold text-purple-700">ROAS 5.12x</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-purple-100 overflow-hidden">
                    <div className="h-full bg-purple-600 w-4/5" />
                  </div>
                  <p className="text-xs text-slate-600">Delivered $38,400 attributed revenue across 44 high-intent trials.</p>
                </div>

                <div className="rounded-xl border border-purple-100 bg-white p-5 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-sm text-[#1e1b4b]">Google Intent Search</h4>
                    <span className="font-mono text-xs font-bold text-purple-700">ROAS 4.80x</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-purple-100 overflow-hidden">
                    <div className="h-full bg-purple-600 w-3/4" />
                  </div>
                  <p className="text-xs text-slate-600">Delivered $42,100 attributed pipeline from exact-match keywords.</p>
                </div>
              </div>
            </div>
          )}

          {/* 5. REPORTS */}
          {activePageId === "reports" && (
            <div className="space-y-6 max-w-3xl mx-auto py-2">
              <div className="border-b border-purple-200/80 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold">Executive Briefing</span>
                <h2 className="font-display text-2xl font-bold text-[#1e1b4b]">Monthly Demand Brief (Demo)</h2>
              </div>

              <div className="rounded-xl border border-purple-100 bg-white p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                  <div>
                    <h4 className="font-display font-bold text-base text-[#1e1b4b]">Q3 Demand Velocity Summary</h4>
                    <p className="font-mono text-[10px] text-slate-500">Reporting period: Last 30 Days (Illustrative)</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert("Demo action: Simulated PDF report generation.")}
                    className="rounded bg-purple-50 border border-purple-200 px-3 py-1.5 text-xs font-mono text-purple-800 font-bold hover:bg-purple-100 transition-colors"
                  >
                    Download PDF (Demo) ↓
                  </button>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  During this cycle, blended acquisition efficiency improved by 14% while expanding top-of-funnel reach by 28%. The primary growth catalyst remains automated Meta retargeting loops coupled with high-intent exact match search capture.
                </p>
              </div>
            </div>
          )}

          {/* 6. LEADS (INTERACTIVE CRM TABLE) */}
          {activePageId === "leads" && (
            <div className="space-y-6 max-w-4xl mx-auto py-2">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-purple-200/80 pb-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold">Interactive Pipeline CRM</span>
                  <h2 className="font-display text-2xl font-bold text-[#1e1b4b]">Lead Attribution Records</h2>
                </div>
                {/* Search & Filter */}
                <div className="flex flex-wrap items-center gap-2">
                  <input
                    type="text"
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    placeholder="Filter company or contact..."
                    className="rounded-lg border border-purple-200 bg-white px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-purple-600 focus:outline-none shadow-sm"
                  />
                  <select
                    value={leadStatusFilter}
                    onChange={(e) => setLeadStatusFilter(e.target.value)}
                    className="rounded-lg border border-purple-200 bg-white px-3 py-1.5 text-xs font-mono text-slate-700 focus:outline-none shadow-sm"
                  >
                    <option value="all">All Statuses</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              {/* Leads Table */}
              <div className="rounded-xl border border-purple-100 bg-white shadow-sm overflow-hidden">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-purple-50/60 border-b border-purple-100 text-purple-900 text-[10px] uppercase font-bold">
                    <tr>
                      <th className="p-3.5">Company</th>
                      <th className="p-3.5">Contact</th>
                      <th className="p-3.5">Deal Estimate</th>
                      <th className="p-3.5">Source Channel</th>
                      <th className="p-3.5">Stage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-50">
                    {filteredLeads.map((lead) => (
                      <tr
                        key={lead.id}
                        onClick={() => setSelectedLead(lead)}
                        className="cursor-pointer hover:bg-purple-50/40 transition-colors"
                      >
                        <td className="p-3.5 font-bold text-[#1e1b4b]">{lead.company}</td>
                        <td className="p-3.5 text-slate-700">{lead.contact}</td>
                        <td className="p-3.5 font-bold text-purple-700">{lead.dealSize}</td>
                        <td className="p-3.5 text-slate-500">{lead.channel}</td>
                        <td className="p-3.5">
                          <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold border ${
                            lead.status === "Closed"
                              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                              : "bg-purple-50 border-purple-200 text-purple-700"
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {filteredLeads.length === 0 && (
                      <tr>
                        <td colSpan={5} className="p-6 text-center text-slate-400">
                          No demonstration leads match your query.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Selected Lead Drawer Preview */}
              {selectedLead && (
                <div className="rounded-xl border border-purple-300 bg-purple-50/60 p-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shadow-sm">
                  <div>
                    <span className="text-[10px] text-purple-700 font-bold">Selected Lead: {selectedLead.company}</span>
                    <p className="text-slate-900 mt-0.5 font-semibold">Contact: {selectedLead.contact} · Deal: {selectedLead.dealSize}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedLead(null)}
                    className="text-slate-500 hover:text-slate-900"
                  >
                    ✕ Close Record
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* ── Mini Dashboard Footer (Matching Thumbnail) ─────────── */}
      <footer className="border-t border-purple-200 bg-white px-4 py-3 text-[11px] font-mono text-slate-500 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-purple-600" />
          <span className="font-semibold text-[#1e1b4b]">Nexus Growth Attribution Engine · Live Telemetry</span>
        </div>
        <span>Demonstration Template · Regendz IT Selected Work</span>
      </footer>
    </div>
  );
}
