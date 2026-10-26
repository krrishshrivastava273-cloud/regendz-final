"use client";

import { useState } from "react";

interface Props {
  activePageId: string;
  onNavigate: (pageId: string) => void;
  isMobilePreview?: boolean;
}

export default function CorporateSystemDemo({ activePageId, onNavigate, isMobilePreview = false }: Props) {
  const [selectedIndustry, setSelectedIndustry] = useState<"finance" | "logistics" | "energy">("finance");
  
  // Job modal demo state
  const [activeJobModal, setActiveJobModal] = useState<string | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantSubmitted, setApplicantSubmitted] = useState(false);
  const [jobError, setJobError] = useState("");

  // Executive inquiry form state
  const [consultName, setConsultName] = useState("");
  const [consultEmail, setConsultEmail] = useState("");
  const [consultOffice, setConsultOffice] = useState("Zurich Bureau (HQ)");
  const [consultScope, setConsultScope] = useState("");
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [consultError, setConsultError] = useState("");

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantEmail.trim() || !applicantEmail.includes("@")) {
      setJobError("Please provide your name and a valid email.");
      return;
    }
    setJobError("");
    setApplicantSubmitted(true);
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultName.trim() || !consultEmail.trim() || !consultScope.trim()) {
      setConsultError("Please complete all required fields.");
      return;
    }
    if (!consultEmail.includes("@")) {
      setConsultError("Please enter a valid business email address.");
      return;
    }
    setConsultError("");
    setConsultSubmitted(true);
  };

  return (
    <div className="min-h-[640px] bg-[#ffffff] text-slate-900 font-sans antialiased rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-between shadow-2xl">
      {/* ── Mini Corporate Navigation ─────────────────────────── */}
      <header className={`sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md ${isMobilePreview ? "px-3 py-2" : "px-4 py-3 sm:px-6"}`}>
        <div className="flex items-center justify-between gap-2">
          {/* Brand */}
          <div className="flex items-center gap-1.5 cursor-pointer shrink-0" onClick={() => onNavigate("home")}>
            <div className="h-5 w-5 rounded bg-[#0f2847] flex items-center justify-center shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-300" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-display font-black text-xs sm:text-sm tracking-wider text-[#0f2847]">
                VANGUARD
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-1 text-[11px] font-medium text-slate-600 overflow-x-auto no-scrollbar py-0.5">
            {[
              { id: "home", label: "Overview" },
              { id: "services", label: "Practices" },
              { id: "about", label: "Governance" },
              { id: "industries", label: "Sectors" },
              { id: "careers", label: "Leadership" },
              { id: "contact", label: "Inquire" },
            ].map((nav) => (
              <button
                key={nav.id}
                type="button"
                onClick={() => onNavigate(nav.id)}
                className={`rounded px-2 py-1 transition-colors whitespace-nowrap ${
                  activePageId === nav.id
                    ? "bg-[#0f2847] text-white font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {nav.label}
              </button>
            ))}
          </nav>

          {/* Consultation Button */}
          {!isMobilePreview && (
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="rounded bg-[#0f2847] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#1e3a5f] transition-colors shadow-sm shrink-0"
            >
              Inquire →
            </button>
          )}
        </div>
      </header>

      {/* ── Main Content Area ─────────────────────────────────── */}
      <main className={`flex-1 ${isMobilePreview ? "p-3.5" : "p-4 sm:p-8"}`}>
        {/* 1. HOME */}
        {activePageId === "home" && (
          <div className="space-y-10 max-w-4xl mx-auto py-2">
            {/* Full-width navy hero banner matching thumbnail */}
            <div className={`rounded-2xl bg-gradient-to-r from-[#0f2847] via-[#16355f] to-[#1e4080] text-white relative overflow-hidden shadow-lg space-y-4 ${
              isMobilePreview ? "p-4 sm:p-6" : "p-6 sm:p-10"
            }`}>
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[9px] sm:text-[11px] text-blue-200 uppercase tracking-widest">
                <span>ZURICH · LONDON · NEW YORK</span>
                <span className="hidden sm:inline">—</span>
                <span className="hidden sm:inline">GLOBAL INSTITUTIONAL ADVISORY</span>
              </div>
              <h1 className={`font-serif font-bold tracking-tight text-white leading-tight max-w-2xl ${
                isMobilePreview ? "text-xl sm:text-2xl" : "text-3xl sm:text-5xl"
              }`}>
                Capital architecture and fiduciary governance for global enterprises.
              </h1>
              <p className={`text-blue-100/80 max-w-2xl leading-relaxed ${
                isMobilePreview ? "text-xs" : "text-sm sm:text-base"
              }`}>
                Vanguard Capital Advisory guides corporate leadership, sovereign assets, and private market funds through complex cross-border restructuring, regulatory compliance, and M&A execution.
              </p>
              <div className={`pt-2 flex flex-wrap gap-2.5 ${isMobilePreview ? "flex-col w-full" : ""}`}>
                <button
                  type="button"
                  onClick={() => onNavigate("contact")}
                  className={`rounded bg-white font-bold text-[#0f2847] hover:bg-blue-50 transition-colors shadow-sm ${
                    isMobilePreview ? "px-4 py-2 text-xs w-full text-center" : "px-5 py-2.5 text-xs"
                  }`}
                >
                  Request Consultation →
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate("services")}
                  className={`rounded border border-white/20 bg-white/10 font-semibold text-white hover:bg-white/15 transition-colors ${
                    isMobilePreview ? "px-4 py-2 text-xs w-full text-center" : "px-5 py-2.5 text-xs"
                  }`}
                >
                  View Mandate Profile
                </button>
              </div>
            </div>

            {/* Institutional Credentials Grid (Matching Thumbnail) */}
            <div className={`grid gap-2.5 ${isMobilePreview ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"}`}>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4 text-center min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-500 block truncate">Advisory AUM</span>
                <span className="font-serif text-lg sm:text-2xl font-bold text-[#0f2847] mt-0.5 sm:mt-1 block">$4.8B+</span>
                <span className="text-[9px] sm:text-[10px] text-blue-600 font-medium block truncate">Tier-1 Institutional</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4 text-center min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-500 block truncate">Compliance</span>
                <span className="font-serif text-lg sm:text-2xl font-bold text-[#0f2847] mt-0.5 sm:mt-1 block">FINMA · SEC</span>
                <span className="text-[9px] sm:text-[10px] text-slate-600 font-medium block truncate">Dual-Regulated</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4 text-center min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-500 block truncate">Mandates</span>
                <span className="font-serif text-lg sm:text-2xl font-bold text-[#0f2847] mt-0.5 sm:mt-1 block">180+</span>
                <span className="text-[9px] sm:text-[10px] text-slate-600 font-medium block truncate">Global Corporate</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 sm:p-4 text-center min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-500 block truncate">Global Offices</span>
                <span className="font-serif text-lg sm:text-2xl font-bold text-[#0f2847] mt-0.5 sm:mt-1 block">3 Bureaus</span>
                <span className="text-[9px] sm:text-[10px] text-blue-600 font-medium block truncate">Zurich · London · NY</span>
              </div>
            </div>

            {/* Core Practice Areas (Matching Thumbnail) */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">Practice Areas</p>
                <button type="button" onClick={() => onNavigate("services")} className="text-xs font-semibold text-[#0f2847] hover:underline">
                  View all pillars →
                </button>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2 shadow-sm flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="h-1 w-8 bg-[#0f2847] rounded-full mb-3" />
                    <h4 className="font-serif font-bold text-base text-[#0f2847]">M&A Advisory</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Cross-border divestitures, buyouts, and balance-sheet recapitalization for institutional leaders.
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-blue-700 font-mono mt-3 block">Mandates $100M+ →</span>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2 shadow-sm flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="h-1 w-8 bg-[#0f2847] rounded-full mb-3" />
                    <h4 className="font-serif font-bold text-base text-[#0f2847]">Risk Engineering</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Stress-testing operational infrastructure, governance frameworks, and downside protection.
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-blue-700 font-mono mt-3 block">Basel IV Compliant →</span>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white space-y-2 shadow-sm flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="h-1 w-8 bg-[#0f2847] rounded-full mb-3" />
                    <h4 className="font-serif font-bold text-base text-[#0f2847]">Enterprise Governance</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Modernizing legacy ERP and transaction flows with verifiable cloud compliance and oversight.
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-blue-700 font-mono mt-3 block">FINMA Alignment →</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. ABOUT */}
        {activePageId === "about" && (
          <div className="space-y-8 max-w-3xl mx-auto py-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-blue-700">Institutional Heritage</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0f2847] mt-1">
                Fiduciary clarity in an era of volatility.
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Founded in Zurich with satellite bureaus in London and New York, Vanguard operates as an independent partnership owned exclusively by its managing principals.
              </p>
            </div>

            <div className="border-y border-slate-200 py-6 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#0f2847]">Operating Tenets</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-mono text-xs text-blue-700 font-semibold">I. Strict Conflict Independence</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We maintain zero proprietary trading desks or asset distribution conflicts. Our counsel is aligned solely with our client&apos;s balance-sheet health.
                  </p>
                </div>
                <div className="space-y-1 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="font-mono text-xs text-blue-700 font-semibold">II. Fiduciary Precaution</p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every strategic blueprint undergoes quantitative downside verification against severe historical liquidity contractions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-serif font-bold text-base text-[#0f2847]">Regulatory Oversight & Compliance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Subject to annual external prudential audit. Vanguard Capital maintains verified compliance registrations with the Swiss Financial Market Supervisory Authority (FINMA) and SEC Registered Investment Adviser standing.
              </p>
            </div>
          </div>
        )}

        {/* 3. SERVICES */}
        {activePageId === "services" && (
          <div className="space-y-8 max-w-4xl mx-auto py-4">
            <div className="text-center space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-blue-700">Advisory Capabilities</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0f2847]">Structured Mandate Delivery</h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                Our engagement methodology is structured in four clear, auditable phases from diagnostic review through to operational handover.
              </p>
            </div>

            {/* 4 Stage Delivery Framework */}
            <div className="grid sm:grid-cols-4 gap-3 pt-2">
              {[
                { step: "01", name: "Diagnostic", desc: "Balance sheet stress audit, governance assessment, and threat matrix modeling." },
                { step: "02", name: "Structuring", desc: "Capital stack modeling, syndicate allocation, and regulatory compliance clearance." },
                { step: "03", name: "Execution", desc: "Mandate negotiations, digital integration rollout, and institutional escrow settlement." },
                { step: "04", name: "Handover", desc: "Independent audit documentation, board reporting handover, and ongoing monitoring." },
              ].map((phase) => (
                <div key={phase.step} className="rounded-xl border border-slate-200 bg-white p-4 space-y-2 shadow-sm">
                  <span className="font-mono font-bold text-[#0f2847] text-xs">{phase.step}</span>
                  <h4 className="font-serif font-bold text-sm text-[#0f2847]">{phase.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>

            {/* Detailed practice blocks */}
            <div className="rounded-xl border border-slate-200 bg-[#0f2847] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-base text-white">Enterprise Engagement Models</h3>
                <span className="font-mono text-xs text-blue-200">Retainer & Mandate-Based</span>
              </div>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                We work on retained corporate oversight or transaction-specific mandates with pre-agreed milestone commitments. Every engagement is led directly by a Named Managing Partner.
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => onNavigate("contact")}
                  className="rounded-md bg-white px-4 py-2 text-xs font-bold text-[#0f2847] hover:bg-blue-50 transition-colors"
                >
                  Schedule Initial Consultation →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 4. INDUSTRIES */}
        {activePageId === "industries" && (
          <div className="space-y-8 max-w-4xl mx-auto py-4">
            <div className="text-center space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-blue-700">Sector Specialization</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0f2847]">Industry Practice Verticals</h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Specialized sector expertise tailored to unique international regulatory frameworks.
              </p>
            </div>

            {/* Industry tab selector */}
            <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-4">
              {[
                { id: "finance" as const, label: "Banking & Capital" },
                { id: "logistics" as const, label: "Maritime & Logistics" },
                { id: "energy" as const, label: "Energy Transition" },
              ].map((ind) => (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                    selectedIndustry === ind.id
                      ? "bg-[#0f2847] text-white font-bold border-[#0f2847]"
                      : "bg-white text-slate-600 border-slate-300 hover:border-[#0f2847] hover:text-[#0f2847]"
                  }`}
                >
                  {ind.label}
                </button>
              ))}
            </div>

            {/* Selected industry details */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm">
              {selectedIndustry === "finance" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-base text-[#0f2847]">Financial Institutions & Asset Managers</h4>
                    <span className="font-mono text-xs text-blue-700 font-semibold">FINMA / MiFID II</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advising private banks, sovereign wealth entities, and fintech custodians on digital asset custody integration, automated AML oversight, and Basel IV risk weighting capital structures.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-700">
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                      ✓ Custody Architecture Modernization
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                      ✓ Cross-Border Syndicate Structuring
                    </div>
                  </div>
                </div>
              )}

              {selectedIndustry === "logistics" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-base text-[#0f2847]">Global Maritime & Cross-Border Supply Chains</h4>
                    <span className="font-mono text-xs text-blue-700 font-semibold">Trade Finance & M&A</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Structuring fleet recapitalizations, cold-chain port concessions, and carbon-reduction compliance financing for international shipping conglomerates.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-700">
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                      ✓ Port Terminal Concession Structuring
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                      ✓ Automated Cargo Hedging Frameworks
                    </div>
                  </div>
                </div>
              )}

              {selectedIndustry === "energy" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-base text-[#0f2847]">Clean Energy & Grid Modernization</h4>
                    <span className="font-mono text-xs text-blue-700 font-semibold">ESG Sovereign Mandates</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advising regional utilities and private equity consortiums on solar microgrid acquisitions, grid battery storage infrastructure, and green bond issuance frameworks.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-700">
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                      ✓ Grid Storage Infrastructure Financing
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                      ✓ Green Bond Regulatory Certification
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 5. CAREERS (DEMO) */}
        {activePageId === "careers" && (
          <div className="space-y-8 max-w-4xl mx-auto py-4">
            <div className="text-center space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-blue-700">Demonstration Content</span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#0f2847]">Institutional Careers</h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Sample job listings clearly marked as demonstration content.
              </p>
            </div>

            {/* Job Listings */}
            <div className="space-y-3">
              {[
                { title: "Senior M&A Associate — Cross-Border Divestitures", location: "Zurich Bureau", type: "Full-Time", code: "MNA-402" },
                { title: "Principal Enterprise Risk Architect", location: "London Bureau", type: "Full-Time", code: "RSK-811" },
                { title: "Director of Digital Governance & Compliance", location: "New York Bureau", type: "Full-Time", code: "GOV-109" },
              ].map((job) => (
                <div key={job.code} className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-blue-700 font-semibold">
                      <span>{job.code}</span>
                      <span>·</span>
                      <span>{job.location}</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[#0f2847] mt-1">{job.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Demanding background in financial engineering or corporate legal frameworks.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveJobModal(job.title);
                      setApplicantSubmitted(false);
                      setApplicantName("");
                      setApplicantEmail("");
                    }}
                    className="shrink-0 rounded-md bg-[#0f2847] px-4 py-2 text-xs font-mono text-white hover:bg-[#1e3a5f] transition-colors"
                  >
                    Apply (Demo) →
                  </button>
                </div>
              ))}
            </div>

            {/* Application Modal (Demo) */}
            {activeJobModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0e1117] p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-lime">Demo Job Application</span>
                      <h4 className="font-display font-bold text-sm text-white">{activeJobModal}</h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveJobModal(null)}
                      className="text-white/40 hover:text-white font-mono text-lg"
                    >
                      ✕
                    </button>
                  </div>

                  {applicantSubmitted ? (
                    <div className="text-center py-4 space-y-2">
                      <span className="text-2xl">✓</span>
                      <p className="font-display font-bold text-sm text-lime">Application Recorded (Demo)</p>
                      <p className="text-xs text-white/60">
                        Thank you, {applicantName}. This demonstration verifies modal submission handling.
                      </p>
                      <button
                        type="button"
                        onClick={() => setActiveJobModal(null)}
                        className="rounded-md bg-lime px-4 py-1.5 text-xs font-bold text-ink hover:bg-lime-deep mt-2"
                      >
                        Close Window
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleJobSubmit} className="space-y-3">
                      {jobError && <p className="text-xs text-rose-400 font-mono">⚠️ {jobError}</p>}
                      <div>
                        <label className="block text-[11px] font-mono text-white/60 mb-1">Full Legal Name *</label>
                        <input
                          type="text"
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="Alexander Wright"
                          className="w-full rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white focus:border-lime/60 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-white/60 mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          placeholder="wright@example.com"
                          className="w-full rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white focus:border-lime/60 focus:outline-none"
                        />
                      </div>
                      <div className="pt-2 flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setActiveJobModal(null)}
                          className="rounded-md px-3 py-1.5 text-xs font-mono text-white/60 hover:text-white"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-lime px-4 py-1.5 text-xs font-bold text-ink hover:bg-lime-deep"
                        >
                          Submit Application →
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 6. CONTACT */}
        {activePageId === "contact" && (
          <div className="space-y-6 max-w-xl mx-auto py-4">
            <div className="text-center space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-blue-700">Confidential Consultation</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0f2847]">Executive Mandate Inquiry</h2>
              <p className="text-xs text-slate-500">
                Client-side demonstration intake. Handled with mock non-disclosure protocols.
              </p>
            </div>

            {consultSubmitted ? (
              <div className="rounded-xl border border-[#0f2847]/30 bg-[#0f2847]/5 p-6 text-center space-y-3">
                <span className="text-3xl">🏛️</span>
                <h3 className="font-serif font-bold text-lg text-[#0f2847]">Consultation Requested (Demo Mode)</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{consultName}</strong>. In production, this form securely routes your mandate scope to the Senior Partner at the <strong>{consultOffice}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setConsultSubmitted(false);
                    setConsultName("");
                    setConsultEmail("");
                    setConsultScope("");
                  }}
                  className="rounded-md bg-[#0f2847] px-4 py-1.5 text-xs font-bold text-white hover:bg-[#1e3a5f] mt-2 transition-colors"
                >
                  Submit Another Consultation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 space-y-4 shadow-sm">
                {consultError && (
                  <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono">
                    ⚠️ {consultError}
                  </div>
                )}
                <div>
                  <label className="block text-[11px] font-mono text-slate-500 mb-1">Target Bureau Office</label>
                  <select
                    value={consultOffice}
                    onChange={(e) => setConsultOffice(e.target.value)}
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0f2847] focus:outline-none"
                  >
                    <option>Zurich Bureau (HQ) — Bahnhofstrasse 42</option>
                    <option>London Bureau — 100 Bishopsgate</option>
                    <option>New York Bureau — One Vanderbilt Avenue</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-500 mb-1">Executive Name *</label>
                  <input
                    type="text"
                    value={consultName}
                    onChange={(e) => setConsultName(e.target.value)}
                    placeholder="Marcus Sterling"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0f2847] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-500 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    value={consultEmail}
                    onChange={(e) => setConsultEmail(e.target.value)}
                    placeholder="m.sterling@holding.ch"
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0f2847] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-500 mb-1">Mandate Scope & Objectives *</label>
                  <textarea
                    rows={3}
                    value={consultScope}
                    onChange={(e) => setConsultScope(e.target.value)}
                    placeholder="Brief outline of cross-border capitalization or advisory requirements..."
                    className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0f2847] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-[#0f2847] py-2.5 text-xs font-bold text-white hover:bg-[#1e3a5f] transition-colors"
                >
                  Dispatch Confidential Request →
                </button>
              </form>
            )}
          </div>
        )}
      </main>

      {/* ── Mini Corporate Footer ─────────────────────────────── */}
      <footer className="border-t border-slate-200 bg-white px-4 py-3 text-[11px] font-mono text-slate-500 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#0f2847]" />
          <span className="font-semibold text-[#0f2847]">Zurich · London · New York — FINMA · SEC Compliant</span>
        </div>
        <span>Demonstration Template · Regendz IT Selected Work</span>
      </footer>
    </div>
  );
}
