"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const stepNodes = [
  // 01 DISCOVER
  {
    label: "DISCOVERY",
    nodes: [
      { id: "n0", text: "RESEARCH", x: 25, y: 20, emphasis: true },
      { id: "n1", text: "AUDIENCE", x: 80, y: 35, emphasis: false },
      { id: "n2", text: "GOALS",    x: 50, y: 82, emphasis: false },
    ],
  },
  // 02 STRATEGIZE
  {
    label: "STRATEGY",
    nodes: [
      { id: "n0", text: "MARKET",     x: 18, y: 25, emphasis: false },
      { id: "n1", text: "STRATEGY",   x: 75, y: 18, emphasis: false },
      { id: "n2", text: "ROADMAP",    x: 82, y: 75, emphasis: false },
      { id: "n3", text: "TECHNOLOGY", x: 25, y: 82, emphasis: false },
    ],
  },
  // 03 DESIGN
  {
    label: "DESIGN",
    nodes: [
      { id: "n0", text: "UX",         x: 30, y: 15, emphasis: false },
      { id: "n1", text: "UI",         x: 85, y: 40, emphasis: false },
      { id: "n2", text: "BRAND",      x: 15, y: 60, emphasis: false },
      { id: "n3", text: "EXPERIENCE", x: 65, y: 85, emphasis: false },
    ],
  },
  // 04 BUILD
  {
    label: "BUILD",
    nodes: [
      { id: "n0", text: "WEB", x: 18, y: 25, emphasis: false },
      { id: "n1", text: "APP", x: 82, y: 25, emphasis: false },
      { id: "n2", text: "AI",  x: 28, y: 78, emphasis: false },
      { id: "n3", text: "API", x: 78, y: 78, emphasis: false },
    ],
  },
  // 05 LAUNCH & GROW
  {
    label: "GROWTH",
    nodes: [
      { id: "n0", text: "LAUNCH",    x: 22, y: 18, emphasis: false },
      { id: "n1", text: "ANALYTICS", x: 78, y: 22, emphasis: false },
      { id: "n2", text: "MARKETING", x: 18, y: 75, emphasis: false },
      { id: "n3", text: "SCALE",     x: 82, y: 82, emphasis: false },
    ],
  }
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
      className="relative overflow-hidden py-24 md:py-32"
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

          {/* RIGHT: Connected System Visualization */}
          <SystemVisualization active={active} reducedMotion={reducedMotion} />
        </div>
      </div>
    </section>
  );
}

/* ── System Visualization ────────────────────────────────────── */

function SystemVisualization({
  active,
  reducedMotion,
}: {
  active: number;
  reducedMotion: boolean;
}) {
  const centerX = 50;
  const centerY = 45;
  const currentStepData = stepNodes[active];

  // Common transition for smooth layout changes
  const layoutTransition = {
    type: "spring" as const,
    stiffness: 80,
    damping: 20,
    mass: 1,
  };

  return (
    <div className="relative h-[450px] w-full overflow-hidden rounded-[28px] border border-white/[0.08] bg-ink-2 md:h-[600px] flex flex-col">
      {/* Background grid */}
      <div className="grid-stage absolute inset-0 opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />

      {/* Main Graph Area */}
      <div className="relative flex-1 w-full">
        {/* Step Label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStepData.label}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="absolute left-6 top-6 z-20"
          >
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_8px_rgba(200,255,0,0.8)]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-lime/80">
                {currentStepData.label}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Center Node: REGENDZ IT */}
        <div className="absolute left-1/2 top-[45%] z-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="relative flex items-center justify-center">
            {/* Soft Radial Glow that pulses on active step change */}
            <motion.div
              key={`pulse-${active}`}
              className="absolute h-32 w-32 rounded-full bg-lime/10 blur-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1.3, 1], opacity: [0.3, 0.15] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {/* Base breathing glow */}
            <motion.div
              className="absolute h-24 w-24 rounded-full bg-lime/5 blur-lg"
              animate={reducedMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative rounded-full border border-lime/40 bg-black px-6 py-3 shadow-[0_0_30px_rgba(200,255,0,0.15)]">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime">
                REGENDZ IT
              </span>
            </div>
          </div>
        </div>

        {/* Step-specific central adornments */}
        <AnimatePresence>
          {active === 2 && !reducedMotion && (
            // DESIGN step: Wireframe around center
            <motion.div
              key="design-adornment"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="absolute left-1/2 top-[45%] z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-dashed border-lime/20"
            />
          )}
          {active === 4 && !reducedMotion && (
            // GROW step: Upward growth rings
            <motion.div
              key="grow-adornment"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-1/2 top-[45%] z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2"
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={`ring-${i}`}
                  className="absolute inset-0 rounded-full border border-lime/10"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Connections Layer */}
        <svg className="absolute inset-0 h-full w-full pointer-events-none" preserveAspectRatio="none">
          {currentStepData.nodes.map((node, i) => {
            const isTargetCenter = active === 0; // Discover step particles travel inward
            const particleDelay = i * 0.2;
            const particleDuration = active === 3 ? 1.5 : active === 4 ? 2 : 3; // Faster in Build/Grow
            const particleCount = active === 4 ? 2 : 1; // More particles in Grow

            return (
              <g key={`connection-${node.id}`}>
                {/* Flowing connection line for Strategy step */}
                {active === 1 && i > 0 && (
                  <motion.path
                    d={`M ${currentStepData.nodes[i - 1].x}%,${currentStepData.nodes[i - 1].y}% Q ${centerX}%,${centerY}% ${node.x}%,${node.y}%`}
                    fill="none"
                    stroke="rgba(200,255,0,0.05)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                )}

                {/* Direct Connection line to center */}
                <motion.line
                  initial={false}
                  animate={{
                    x1: `${centerX}%`,
                    y1: `${centerY}%`,
                    x2: `${node.x}%`,
                    y2: `${node.y}%`,
                  }}
                  stroke="rgba(200,255,0,0.2)"
                  strokeWidth="1"
                  strokeDasharray={active === 3 ? "4 4" : "0"} // Dashed for BUILD
                  transition={layoutTransition}
                />

                {/* Draw line animation on step change */}
                <motion.line
                  key={`draw-${active}-${node.id}`}
                  x1={`${centerX}%`}
                  y1={`${centerY}%`}
                  x2={`${node.x}%`}
                  y2={`${node.y}%`}
                  stroke="rgba(200,255,0,0.5)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ pathLength: 1, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Traveling Particles */}
                {!reducedMotion &&
                  Array.from({ length: particleCount }).map((_, pIdx) => (
                    <motion.circle
                      key={`particle-${active}-${node.id}-${pIdx}`}
                      r="1.5"
                      fill="#c8ff00"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: particleDuration,
                        delay: particleDelay + pIdx * (particleDuration / 2),
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ filter: "drop-shadow(0 0 4px rgba(200,255,0,0.8))" }}
                    >
                      <animateMotion
                        dur={`${particleDuration}s`}
                        begin={`${particleDelay + pIdx * (particleDuration / 2)}s`}
                        repeatCount="indefinite"
                        path={
                          isTargetCenter
                            ? `M ${node.x * 4.7},${node.y * 5.2} L ${centerX * 4.7},${centerY * 5.2}`
                            : `M ${centerX * 4.7},${centerY * 5.2} L ${node.x * 4.7},${node.y * 5.2}`
                        }
                      />
                    </motion.circle>
                  ))}
              </g>
            );
          })}
        </svg>

        {/* Graph Nodes */}
        <AnimatePresence>
          {currentStepData.nodes.map((node, i) => (
            <motion.div
              key={node.id}
              layoutId={node.id}
              className="absolute z-40"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                ...layoutTransition,
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                delay: active === 2 ? i * 0.15 : 0, // Sequential in DESIGN
              }}
              style={{ transform: "translate(-50%, -50%)" }}
            >
              {/* Highlight Pulse on enter */}
              <motion.div
                className="absolute inset-0 rounded-md border border-lime"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              <div
                className={`relative flex items-center justify-center rounded-md border bg-black/90 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider backdrop-blur-md transition-colors duration-500 ${
                  node.emphasis
                    ? "border-lime/60 text-lime shadow-[0_0_15px_rgba(200,255,0,0.2)]"
                    : "border-lime/20 text-lime/80 shadow-[0_0_10px_rgba(200,255,0,0.05)]"
                }`}
              >
                <motion.span
                  key={`text-${active}-${node.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {node.text}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom Progress Bar */}
      <div className="relative z-20 w-full border-t border-white/[0.06] bg-black/40 backdrop-blur-md p-4">
        <div className="flex items-center justify-between gap-2 overflow-x-auto scrollbar-hide">
          {steps.map((item, i) => {
            const isActive = active === i;
            return (
              <div key={item.n} className="flex items-center gap-2 shrink-0">
                <div
                  className={`flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest transition-all duration-500 ${
                    isActive
                      ? "text-lime drop-shadow-[0_0_8px_rgba(200,255,0,0.4)]"
                      : "text-white/40"
                  }`}
                >
                  <span className={isActive ? "font-bold" : ""}>{item.n}</span>
                  <span>{item.title}</span>
                </div>
                {i < steps.length - 1 && (
                  <span className="text-white/20 ml-2">→</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
