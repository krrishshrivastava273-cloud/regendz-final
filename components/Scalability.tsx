"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { scaleStages } from "@/lib/content";
import Link from "next/link";

export default function Scalability() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 lime-wash" />
      <div className="container-shell relative">
        <Reveal>
          <h2 className="display text-[clamp(2.2rem,5vw,4.6rem)]">
            Built for where your business is going.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-mute">
            From your first digital idea to your next stage of growth, we build solutions that scale with you.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {scaleStages.map((stage, i) => {
              const isActive = activeStage === i;
              return (
                <button
                  key={stage.title}
                  type="button"
                  onMouseEnter={() => setActiveStage(i)}
                  onClick={() => setActiveStage(i)}
                  className={`group relative w-full rounded-2xl border px-6 py-5 text-left transition-all duration-300 ease-out will-change-transform ${
                    isActive
                      ? "border-lime/60 bg-white/[0.04] shadow-[0_0_20px_rgba(200,255,0,0.08)] -translate-y-1.5"
                      : "border-white/10 bg-white/[0.02] hover:-translate-y-1.5 hover:border-lime/30 hover:bg-white/[0.03] hover:shadow-[0_0_15px_rgba(200,255,0,0.05)]"
                  }`}
                  style={{
                    transform: isActive ? "translateY(-6px)" : undefined,
                  }}
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <span
                      className={`font-mono text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-lime" : "text-lime/60 group-hover:text-lime/80"
                      }`}
                    >
                      {stage.n} —
                    </span>
                    <div>
                      <span
                        className={`display block text-2xl transition-colors duration-300 ${
                          isActive ? "text-white" : "text-white/80 group-hover:text-white"
                        }`}
                      >
                        {stage.title}
                      </span>
                      <p
                        className={`mt-2 text-sm leading-relaxed transition-colors duration-300 ${
                          isActive ? "text-mute-light" : "text-mute group-hover:text-mute-light"
                        }`}
                      >
                        {stage.body}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative h-[360px] md:h-[480px] overflow-hidden rounded-[32px] border border-white/10 bg-ink-2 p-8 md:p-12">
            <div className="grid-stage absolute inset-0 opacity-40" />
            
            {/* Center Logo Node */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime/30 bg-black px-6 py-3 shadow-[0_0_30px_rgba(200,255,0,0.15)]">
              <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-lime">
                REGENDZ IT
              </span>
            </div>

            <AnimatePresence mode="wait">
              <EcosystemVisual key={activeStage} stage={activeStage} />
            </AnimatePresence>
            
            <p className="absolute bottom-8 left-8 right-8 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-lime/80 md:bottom-12">
              {scaleStages[activeStage].visualLabel}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <p className="kicker mb-6">Ready to build what’s next?</p>
          <Reveal>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-lime px-8 py-4 font-mono text-sm font-semibold uppercase tracking-widest text-black transition-all hover:scale-105 hover:bg-[#d4ff33] hover:shadow-[0_0_20px_rgba(200,255,0,0.4)]"
            >
              Start a project <span className="ml-2">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function EcosystemVisual({ stage }: { stage: number }) {
  if (stage === 0) {
    // DISCOVER: grid/target/orbit
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute h-[240px] w-[240px] rounded-full border border-dashed border-lime/30"
        />
        <div className="absolute h-[160px] w-[160px] rounded-full border border-lime/10 bg-lime/[0.02]" />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute h-[320px] w-[320px] rounded-full border border-lime/5"
        >
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_10px_rgba(200,255,0,0.8)]" />
        </motion.div>
      </motion.div>
    );
  }

  if (stage === 1) {
    // BUILD: Interface elements assembling
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: -100, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="absolute h-[40px] w-[180px] rounded-lg border border-lime/30 bg-black/50"
        />
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: -120, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="absolute h-[120px] w-[80px] rounded-lg border border-lime/20 bg-black/50"
        />
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 120, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="absolute h-[140px] w-[90px] rounded-lg border border-lime/40 bg-black/50"
        />
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 100, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          className="absolute h-[50px] w-[200px] rounded-lg border border-lime/20 bg-black/50"
        />
      </motion.div>
    );
  }

  if (stage === 2) {
    // AUTOMATE: AI nodes and workflow connections
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Connecting lines */}
        <svg className="absolute inset-0 h-full w-full">
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(200,255,0,0.3)" strokeWidth="1" strokeDasharray="4 4"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(200,255,0,0.3)" strokeWidth="1" strokeDasharray="4 4"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            x1="50%" y1="50%" x2="50%" y2="80%" stroke="rgba(200,255,0,0.3)" strokeWidth="1" strokeDasharray="4 4"
          />
        </svg>
        {/* Nodes */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="absolute left-[25%] top-[25%] -translate-x-1/2 -translate-y-1/2 rounded-md border border-lime bg-black px-3 py-1 text-[10px] text-lime shadow-[0_0_15px_rgba(200,255,0,0.3)]"
        >
          AI
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="absolute left-[75%] top-[25%] -translate-x-1/2 -translate-y-1/2 rounded-md border border-lime bg-black px-3 py-1 text-[10px] text-lime shadow-[0_0_15px_rgba(200,255,0,0.3)]"
        >
          CRM
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0, type: "spring" }}
          className="absolute left-[50%] top-[80%] -translate-x-1/2 -translate-y-1/2 rounded-md border border-lime bg-black px-3 py-1 text-[10px] text-lime shadow-[0_0_15px_rgba(200,255,0,0.3)]"
        >
          API
        </motion.div>
      </motion.div>
    );
  }

  // SCALE: Network expanding outward
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const radius = 140;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x, y, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.8, type: "spring", bounce: 0.3 }}
            className="absolute rounded-full border border-lime/40 bg-black/80 px-3 py-1 text-[9px] text-lime/80 shadow-[0_0_20px_rgba(200,255,0,0.2)]"
          >
            NODE {i + 1}
          </motion.div>
        );
      })}
      
      {/* Central pulse for scale */}
      <motion.div
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute h-[100px] w-[100px] rounded-full border border-lime"
      />
    </motion.div>
  );
}
