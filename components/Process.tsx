"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

/* ── Data ────────────────────────────────────────────────────── */

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Understand your business, audience, goals and requirements.",
  },
  {
    n: "02",
    title: "Strategize",
    body: "Define the right digital strategy, technology and roadmap.",
  },
  {
    n: "03",
    title: "Design",
    body: "Create the user experience, interface and visual direction.",
  },
  {
    n: "04",
    title: "Build",
    body: "Develop websites, applications, AI automation and integrations.",
  },
  {
    n: "05",
    title: "Launch & Grow",
    body: "Test, launch, optimize and continuously improve the solution.",
  },
];

/* ── Five Stage Glass Bubbles Data ───────────────────────────── */

interface StageBubble {
  id: string;
  n: string;
  title: string;
  keyword: string;
  size: number; // diameter in px on desktop
  // Separate position (percentages of visual box)
  separatePos: { x: number; y: number };
  // Float drift range (px)
  floatDrift: { x: number; y: number; rotate: number };
  // Assembled position around center cluster (percentages)
  assemblePos: { x: number; y: number };
  // Assemble sequence index (1-based stagger order)
  assembleOrder: number;
}

const STAGE_BUBBLES: StageBubble[] = [
  {
    id: "stage-01",
    n: "01",
    title: "Discover",
    keyword: "RESEARCH",
    size: 140, // top-left large bubble
    separatePos: { x: 20, y: 22 },
    floatDrift: { x: 10, y: -14, rotate: 5 },
    assemblePos: { x: 44, y: 40 }, // top-left in reference
    assembleOrder: 1,
  },
  {
    id: "stage-02",
    n: "02",
    title: "Strategize",
    keyword: "STRATEGY",
    size: 125, // top-right bubble
    separatePos: { x: 78, y: 24 },
    floatDrift: { x: -12, y: -10, rotate: -6 },
    assemblePos: { x: 55, y: 44 }, // top-right in reference
    assembleOrder: 2,
  },
  {
    id: "stage-03",
    n: "03",
    title: "Design",
    keyword: "DESIGN",
    size: 96, // bottom-left foreground bubble
    separatePos: { x: 24, y: 74 },
    floatDrift: { x: -8, y: 12, rotate: 8 },
    assemblePos: { x: 42, y: 56 }, // bottom-left
    assembleOrder: 3,
  },
  {
    id: "stage-04",
    n: "04",
    title: "Build",
    keyword: "BUILD",
    size: 104, // bottom-center bubble
    separatePos: { x: 50, y: 84 },
    floatDrift: { x: 6, y: 10, rotate: -4 },
    assemblePos: { x: 49, y: 58 }, // bottom-center
    assembleOrder: 4,
  },
  {
    id: "stage-05",
    n: "05",
    title: "Launch & Grow",
    keyword: "GROWTH",
    size: 100, // bottom-right foreground bubble
    separatePos: { x: 78, y: 72 },
    floatDrift: { x: -6, y: -8, rotate: 6 },
    assemblePos: { x: 58, y: 56 }, // bottom-right
    assembleOrder: 5,
  },
];

/* ── Reduced-motion hook ─────────────────────────────────────── */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/* ── Main Component ──────────────────────────────────────────── */

export default function Process() {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  const advance = useCallback(() => {
    if (!pausedRef.current) {
      setActive((prev) => (prev + 1) % steps.length);
    }
  }, []);

  /* Auto-progression */
  useEffect(() => {
    if (reducedMotion) return;
    timerRef.current = setInterval(advance, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance, reducedMotion]);

  const handleHover = (i: number) => {
    pausedRef.current = true;
    setActive(i);
  };

  const handleLeave = () => {
    pausedRef.current = false;
    if (timerRef.current) clearInterval(timerRef.current);
    if (!reducedMotion) {
      timerRef.current = setInterval(advance, 4000);
    }
  };

  const handleClick = (i: number) => {
    setActive(i);
    if (timerRef.current) clearInterval(timerRef.current);
    if (!reducedMotion) {
      timerRef.current = setInterval(advance, 4000);
    }
  };

  return (
    <section
      id="process"
      className="relative overflow-hidden pt-6 pb-24 md:pt-8 md:pb-32"
      style={{ scrollMarginTop: "5rem" }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] opacity-10" />

      <div className="container-shell relative z-10">
        {/* Header */}
        <Reveal>
          <div className="mb-16 md:mb-20">
            <p className="kicker mb-4">OUR PROCESS</p>
            <h2 className="display max-w-3xl text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.08]">
              From idea to impact.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-mute">
              A clear, collaborative process designed to turn your business goals into scalable digital solutions.
            </p>
          </div>
        </Reveal>

        {/* Two-column layout */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* LEFT: Process Steps */}
          <div className="relative flex flex-col gap-3">
            {/* Vertical connecting line */}
            <div className="pointer-events-none absolute left-5 top-0 bottom-0 w-px bg-white/[0.06] lg:left-6" />
            {/* Illuminated progress */}
            <motion.div
              className="pointer-events-none absolute left-5 top-0 w-px bg-lime/40 lg:left-6"
              initial={false}
              animate={{
                height: `${((active + 1) / steps.length) * 100}%`,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <button
                  key={step.n}
                  type="button"
                  onMouseEnter={() => handleHover(i)}
                  onMouseLeave={handleLeave}
                  onClick={() => handleClick(i)}
                  className={`group relative w-full rounded-2xl border pl-14 pr-6 py-6 text-left transition-all duration-500 ease-out will-change-transform lg:pl-16 ${
                    isActive
                      ? "border-lime/50 bg-white/[0.04] -translate-y-0.5"
                      : "border-white/[0.06] bg-transparent hover:border-white/15 hover:bg-white/[0.02] hover:-translate-y-0.5"
                  }`}
                >
                  {/* Step indicator dot */}
                  <div
                    className={`absolute left-[14px] top-1/2 -translate-y-1/2 transition-all duration-500 lg:left-[18px] ${
                      isActive
                        ? "h-3 w-3 rounded-full bg-lime shadow-[0_0_12px_rgba(200,255,0,0.6)]"
                        : "h-2 w-2 rounded-full bg-white/20 group-hover:bg-white/40"
                    }`}
                  />

                  <span
                    className={`font-mono text-sm font-medium transition-colors duration-500 ${
                      isActive
                        ? "text-lime"
                        : "text-lime/40 group-hover:text-lime/70"
                    }`}
                  >
                    {step.n} —
                  </span>
                  <span
                    className={`display mt-2 block text-xl transition-colors duration-500 ${
                      isActive
                        ? "text-white"
                        : "text-white/70 group-hover:text-white/90"
                    }`}
                  >
                    {step.title}
                  </span>
                  <p
                    className={`mt-2 text-sm leading-relaxed transition-colors duration-500 ${
                      isActive
                        ? "text-mute-light"
                        : "text-mute group-hover:text-mute-light"
                    }`}
                  >
                    {step.body}
                  </p>

                  {/* Active glow bar */}
                  {isActive && (
                    <motion.div
                      layoutId="processActiveBar"
                      className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-lime"
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT: Floating Bubble Assembly Visualization */}
          <BubbleAssemblyVisualization
            active={active}
            onSelect={handleClick}
            reducedMotion={reducedMotion}
          />
        </div>
      </div>
    </section>
  );
}

/* ── Floating Bubble Assembly Visualization ──────────────────── */

function BubbleAssemblyVisualization({
  active,
  onSelect,
  reducedMotion,
}: {
  active: number;
  onSelect?: (i: number) => void;
  reducedMotion: boolean;
}) {
  const prevActiveRef = useRef(active);

  useEffect(() => {
    prevActiveRef.current = active;
  }, [active]);

  const prevActive = prevActiveRef.current;
  const isMovingForward = active >= prevActive;

  // Visual status pill text describing current interaction state
  const stageStatus =
    active === 0
      ? "Step 01 · Discover Initialized"
      : active === 1
      ? "Step 02 · Strategize Connected"
      : active === 2
      ? "Step 03 · Design Assembled"
      : active === 3
      ? "Step 04 · Build Formed"
      : "Step 05 · Complete Cluster";

  return (
    <div className="relative h-[480px] w-full overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#07080b] md:h-[620px] flex flex-col justify-between shadow-2xl">
      {/* Background atmosphere: subtle grid + radial vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,255,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.3) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

      {/* Constellation background dots (matching reference aesthetic) */}
      <div className="pointer-events-none absolute inset-0">
        {[
          { x: "12%", y: "18%" },
          { x: "36%", y: "15%" },
          { x: "52%", y: "22%" },
          { x: "78%", y: "16%" },
          { x: "88%", y: "32%" },
          { x: "16%", y: "65%" },
          { x: "48%", y: "52%" },
          { x: "72%", y: "54%" },
          { x: "84%", y: "78%" },
          { x: "24%", y: "88%" },
        ].map((pt, idx) => (
          <span
            key={idx}
            className="absolute h-1 w-1 rounded-full bg-lime/25"
            style={{
              left: pt.x,
              top: pt.y,
              filter: "drop-shadow(0 0 3px rgba(200,255,0,0.4))",
            }}
          />
        ))}
      </div>

      {/* Top Header Information Overlay */}
      <div className="relative z-30 p-6 flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-lime/80 font-bold">
              INTERACTIVE ARCHITECTURE · 05 STAGES
            </span>
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white/95">
            Separate. Connect. Create.
          </h3>
        </div>

        {/* Dynamic Status Pill */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md font-mono text-[10px]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
          </span>
          <span className="text-white/70 uppercase tracking-wider">
            {stageStatus}
          </span>
        </div>
      </div>

      {/* Main Canvas Area: 5 Liquid Glass Spheres */}
      <div className="relative flex-1 w-full overflow-hidden">
        {/* Ambient Core Glow (Grows gently as stages assemble, fullest at Step 5) */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            width: 220 + active * 35,
            height: 220 + active * 35,
            opacity: 0.08 + active * 0.035,
            scale: active === 4 ? [1, 1.05, 1] : 1,
          }}
          transition={{
            duration: active === 4 ? 3.5 : 0.8,
            repeat: active === 4 ? Infinity : 0,
            ease: "easeInOut",
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(200,255,0,0.35) 0%, rgba(200,255,0,0.06) 55%, transparent 75%)",
            filter: "blur(42px)",
          }}
        />

        {/* Central Brand Watermark in Cluster Core */}
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center"
          animate={{
            opacity: active >= 1 ? 0.9 : 0.4,
            scale: active === 4 ? 1.05 : 0.95,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="rounded-full px-3 py-1 border border-lime/30 bg-black/70 backdrop-blur-md shadow-[0_0_20px_rgba(200,255,0,0.15)]">
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.25em] text-lime">
              REGENDZ IT
            </span>
          </div>
        </motion.div>

        {/* The 5 Interactive Glass Bubbles */}
        {STAGE_BUBBLES.map((bubble, i) => {
          const isSelected = active === i;
          const isAssembled = i <= active;

          // Target positions: assembled cluster vs separate outer floating position
          const targetX = isAssembled ? bubble.assemblePos.x : bubble.separatePos.x;
          const targetY = isAssembled ? bubble.assemblePos.y : bubble.separatePos.y;
          const targetScale = isSelected ? 1.08 : isAssembled ? 1 : 0.96;
          const targetRotate = isAssembled ? 0 : bubble.floatDrift.rotate * 0.5;

          // Staggered timing:
          // When assembling forward: staggered delay based on relative index
          // When dismantling backward: reverse stagger delay
          const delay = isMovingForward
            ? Math.max(0, (i - prevActive) * 0.12)
            : Math.max(0, (prevActive - i) * 0.1);

          return (
            <motion.div
              key={bubble.id}
              onClick={() => onSelect?.(i)}
              className="absolute z-20 will-change-transform pointer-events-auto cursor-pointer"
              style={{
                width: bubble.size,
                height: bubble.size,
                marginLeft: -bubble.size / 2,
                marginTop: -bubble.size / 2,
              }}
              animate={
                reducedMotion
                  ? {
                      left: `${targetX}%`,
                      top: `${targetY}%`,
                      scale: targetScale,
                    }
                  : {
                      left: `${targetX}%`,
                      top: `${targetY}%`,
                      scale: targetScale,
                      rotate: targetRotate,
                    }
              }
              transition={{
                duration: 1.1,
                delay: reducedMotion ? 0 : delay,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {/* Subtle Organic Hover/Float micro-motion wrapper */}
              <motion.div
                className="h-full w-full"
                animate={
                  reducedMotion
                    ? {}
                    : {
                        x: [0, bubble.floatDrift.x * 0.35, 0],
                        y: [0, bubble.floatDrift.y * 0.35, 0],
                      }
                }
                transition={{
                  duration: 4.5 + i * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Glass Bubble Sphere Body */}
                <div
                  className={`relative h-full w-full rounded-full transition-all duration-700 overflow-hidden ${
                    isSelected
                      ? "ring-2 ring-lime/75 shadow-[0_0_35px_rgba(200,255,0,0.4)]"
                      : isAssembled
                      ? "ring-1 ring-white/20 shadow-[0_20px_45px_rgba(0,0,0,0.92)] hover:ring-white/40"
                      : "ring-1 ring-white/10 opacity-70 shadow-[0_15px_30px_rgba(0,0,0,0.85)] hover:opacity-90 hover:ring-white/25"
                  }`}
                  style={{
                    background:
                      "radial-gradient(circle at 32% 26%, rgba(255,255,255,0.18) 0%, rgba(28,38,24,0.7) 35%, rgba(14,20,12,0.92) 65%, rgba(6,10,6,0.99) 100%)",
                    boxShadow:
                      "inset -8px -10px 24px rgba(0,0,0,0.95), inset 4px 5px 12px rgba(255,255,255,0.22), inset 0 0 25px rgba(200,255,0,0.08)",
                  }}
                >
                  {/* Secondary Interior Glass Depth Ring */}
                  <div
                    className="absolute inset-[3px] rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 65% 70%, rgba(200,255,0,0.14) 0%, transparent 65%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  />

                  {/* Primary Specular Highlight */}
                  <div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      top: "14%",
                      left: "20%",
                      width: "36%",
                      height: "22%",
                      background:
                        "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 45%, transparent 75%)",
                      transform: "rotate(-25deg)",
                      filter: "blur(0.5px)",
                    }}
                  />

                  {/* Soft Fresnel Rim Glow */}
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 75% 75%, rgba(200,255,0,0.22) 0%, transparent 45%)",
                    }}
                  />

                  {/* Inner Content Label & Stage Indicator */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center select-none z-10">
                    <span
                      className={`font-mono text-[9px] font-bold transition-colors ${
                        isSelected ? "text-lime" : isAssembled ? "text-white/70" : "text-white/40"
                      }`}
                    >
                      {bubble.n}
                    </span>
                    <span
                      className={`font-display font-black text-[11px] leading-tight mt-0.5 tracking-tight transition-colors ${
                        isSelected ? "text-white" : isAssembled ? "text-white/90" : "text-white/60"
                      }`}
                    >
                      {bubble.title}
                    </span>
                    <span
                      className={`font-mono text-[7px] uppercase tracking-wider mt-0.5 transition-colors ${
                        isSelected
                          ? "text-lime font-bold"
                          : isAssembled
                          ? "text-white/50"
                          : "text-white/30"
                      }`}
                    >
                      {bubble.keyword}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Stage Progress Bar (Clickable to switch stages) */}
      <div className="relative z-30 w-full border-t border-white/[0.06] bg-black/50 backdrop-blur-md p-4">
        <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-hide">
          {steps.map((item, i) => {
            const isActive = active === i;
            const isAssembled = i <= active;
            return (
              <button
                key={item.n}
                type="button"
                onClick={() => onSelect?.(i)}
                className="flex items-center gap-2 shrink-0 cursor-pointer group text-left"
              >
                <div
                  className={`flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "text-lime drop-shadow-[0_0_8px_rgba(200,255,0,0.5)] font-bold"
                      : isAssembled
                      ? "text-white/80 group-hover:text-white"
                      : "text-white/40 group-hover:text-white/60"
                  }`}
                >
                  <span className={isActive ? "text-lime" : "text-white/40"}>
                    {item.n}
                  </span>
                  <span>{item.title}</span>
                </div>
                {i < steps.length - 1 && (
                  <span className="text-white/20 ml-2">→</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
