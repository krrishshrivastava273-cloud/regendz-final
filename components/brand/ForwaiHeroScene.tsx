"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TrendingUp, BarChart2, Database, Target } from "lucide-react";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────────────
   FORWAI ORBITAL SYSTEM (Business Consultancy & Data Analytics)
   4 Elliptical Orbit Rings in Amber/Orange (#F59E0B)
   + Central Regendz "r" Logo
   + Interactive Trend Line Chart, Monthly Bar Graph, ROAS & Decision KPIs
──────────────────────────────────────────────────────────────── */

interface OrbitConfig {
  id: string;
  rx: number;
  ry: number;
  rotDeg: number;
  speedSec: number;
}

const ORBIT_CONFIGS: OrbitConfig[] = [
  { id: "forw-inner", rx: 195, ry: 120, rotDeg: -10, speedSec: 22 },
  { id: "forw-middle", rx: 245, ry: 155, rotDeg: 18, speedSec: 22 },
  { id: "forw-outer", rx: 295, ry: 190, rotDeg: -24, speedSec: 22 },
  { id: "forw-cross", rx: 260, ry: 140, rotDeg: 66, speedSec: 22 },
];

const CROSS_CONNECTORS = [
  { id: "arc-1", d: "M 140,180 Q 250,210 360,320" },
  { id: "arc-2", d: "M 360,180 Q 250,290 140,320" },
  { id: "arc-3", d: "M 120,250 Q 250,170 380,200" },
  { id: "arc-4", d: "M 380,250 Q 250,330 120,300" },
];

interface OrbitingItem {
  id: string;
  orbitIndex: number;
  initialAngleDeg: number;
  render: (isHovered: boolean) => React.ReactNode;
}

export default function ForwaiHeroScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const backSvgRef = useRef<SVGSVGElement>(null);
  const frontSvgRef = useRef<SVGSVGElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const workflowTrackRef = useRef<HTMLDivElement>(null);
  const workflowPulseRef = useRef<HTMLDivElement>(null);
  const workflowStepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const hoveredIdRef = useRef<string | null>(null);
  const reducedMotionRef = useRef(false);
  const activeWorkflowStepRef = useRef(0);
  hoveredIdRef.current = hoveredId;

  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
  const scrollYRef = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      reducedMotionRef.current = mediaQuery.matches;
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const workflowSteps = [
    ["New", "Lead"],
    ["AI", "AGENT"],
    ["CRM", "Update"],
    ["Follow-up", "Email"],
  ];
  const completedWorkflowSteps = activeWorkflowStep;

  const ITEMS: OrbitingItem[] = [
    // 1. Live Trend Line Chart (Inner Orbit, Top)
    {
      id: "trend-chart",
      orbitIndex: 0,
      initialAngleDeg: 85,
      render: (isHovered) => (
        <div
          className="rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 select-none shadow-xl"
          style={{
            borderColor: isHovered ? "rgba(245,158,11,0.85)" : "rgba(245,158,11,0.35)",
            background: "rgba(22, 14, 4, 0.94)",
            boxShadow: isHovered
              ? "0 0 30px rgba(245,158,11,0.4), 0 8px 24px rgba(0,0,0,0.6)"
              : "0 8px 24px rgba(0,0,0,0.5)",
            width: "176px",
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1.5">
            <span className="text-[8px] font-mono text-amber-300/80 flex items-center gap-1 font-semibold">
              <TrendingUp className="h-3 w-3 text-amber-400" />
              Pipeline Velocity
            </span>
            <span className="text-[7px] font-mono text-emerald-400 flex items-center gap-0.5">
              <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
              Live BI
            </span>
          </div>

          <div className="flex items-baseline justify-between mb-1">
            <span className="text-xs font-bold text-white font-mono">₹4.8M Run-Rate</span>
            <span className="text-[8px] font-mono text-emerald-400">+18.4% QoQ</span>
          </div>

          {/* SVG Animated Line Chart */}
          <div className="h-8 w-full">
            <svg viewBox="0 0 160 32" className="h-full w-full overflow-visible">
              <defs>
                <linearGradient id="forwai-chart-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Shaded Area */}
              <path
                d="M 0,28 Q 25,24 50,16 T 100,10 T 160,4 L 160,32 L 0,32 Z"
                fill="url(#forwai-chart-fill)"
              />
              {/* Stroke Line */}
              <path
                d="M 0,28 Q 25,24 50,16 T 100,10 T 160,4"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              {/* Peak glowing dot */}
              <circle cx="160" cy="4" r="2.5" fill="#F59E0B" className="animate-pulse" />
            </svg>
          </div>
        </div>
      ),
    },

    // 2. Growing Bar Chart Card (Inner Orbit, Bottom)
    {
      id: "bar-chart",
      orbitIndex: 0,
      initialAngleDeg: 265,
      render: (isHovered) => (
        <div
          className="rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 select-none shadow-xl"
          style={{
            borderColor: isHovered ? "rgba(245,158,11,0.85)" : "rgba(245,158,11,0.35)",
            background: "rgba(20, 12, 4, 0.94)",
            boxShadow: isHovered
              ? "0 0 30px rgba(245,158,11,0.4), 0 8px 24px rgba(0,0,0,0.6)"
              : "0 8px 24px rgba(0,0,0,0.5)",
            width: "164px",
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1.5">
            <span className="text-[8px] font-mono text-amber-300/80 font-semibold flex items-center gap-1">
              <BarChart2 className="h-2.5 w-2.5 text-amber-400" />
              Monthly Revenue
            </span>
            <span className="text-[7.5px] font-mono text-white/40">H1 Indexed</span>
          </div>

          <div className="flex items-end gap-1.5 h-8 pt-1">
            {[45, 65, 38, 80, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className="w-full rounded-t transition-all duration-500"
                  style={{
                    height: `${h}%`,
                    background: `linear-gradient(to top, #F59E0B, rgba(245,158,11,0.35))`,
                  }}
                />
                <span className="text-[6.5px] font-mono text-white/30">
                  {["J", "F", "M", "A", "M"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // 3. ROAS KPI Metric Card (Middle Orbit)
    {
      id: "roas-kpi",
      orbitIndex: 1,
      initialAngleDeg: 15,
      render: (isHovered) => (
        <div
          className="flex items-center gap-2 rounded-xl border px-3 py-1.5 backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#F59E0B" : "rgba(245,158,11,0.4)",
            background: "rgba(24, 14, 4, 0.9)",
            boxShadow: isHovered ? "0 0 24px rgba(245,158,11,0.45)" : "none",
          }}
        >
          <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <div>
            <p className="text-[8px] font-mono uppercase text-white/40">ROAS Scale</p>
            <p className="text-xs font-bold text-white font-mono leading-none mt-0.5">
              4.8<span className="text-amber-400">x</span>{" "}
              <span className="text-[8px] font-normal text-emerald-400">+32%</span>
            </p>
          </div>
        </div>
      ),
    },

    // 4. Power BI Tech Badge (Middle Orbit)
    {
      id: "powerbi-badge",
      orbitIndex: 1,
      initialAngleDeg: 135,
      render: (isHovered) => (
        <div
          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#F2C811" : "rgba(242,200,17,0.3)",
            background: "rgba(20, 12, 4, 0.88)",
            boxShadow: isHovered ? "0 0 20px rgba(242,200,17,0.4)" : "none",
          }}
        >
          <span className="text-[#F2C811] font-bold text-[10.5px]">BI</span>
          <span className="text-white/80 font-semibold text-[11px]">Power BI</span>
        </div>
      ),
    },

    // 5. Excel Advanced Analytics (Middle Orbit)
    {
      id: "excel-badge",
      orbitIndex: 1,
      initialAngleDeg: 255,
      render: (isHovered) => (
        <div
          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#21A366" : "rgba(33,163,102,0.3)",
            background: "rgba(18, 12, 4, 0.88)",
            boxShadow: isHovered ? "0 0 20px rgba(33,163,102,0.4)" : "none",
          }}
        >
          <span className="text-[#21A366] font-bold text-[10px]">Xl</span>
          <span className="text-white/80 font-semibold text-[11px]">Excel Models</span>
        </div>
      ),
    },

    // 6. Python Data Pipeline (Outer Orbit)
    {
      id: "python-badge",
      orbitIndex: 2,
      initialAngleDeg: 40,
      render: (isHovered) => (
        <div
          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#3776AB" : "rgba(55,118,171,0.3)",
            background: "rgba(18, 12, 4, 0.88)",
            boxShadow: isHovered ? "0 0 20px rgba(55,118,171,0.4)" : "none",
          }}
        >
          <span className="text-[#3776AB] font-bold text-[10.5px]">Py</span>
          <span className="text-white/80 font-semibold text-[11px]">Python Stats</span>
        </div>
      ),
    },

    // 7. SQL Database Insights (Outer Orbit)
    {
      id: "sql-badge",
      orbitIndex: 2,
      initialAngleDeg: 170,
      render: (isHovered) => (
        <div
          className="flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "rgba(245,158,11,0.8)" : "rgba(245,158,11,0.3)",
            background: "rgba(22, 14, 4, 0.9)",
            boxShadow: isHovered ? "0 0 24px rgba(245,158,11,0.4)" : "none",
          }}
        >
          <Database className="h-3 w-3 text-amber-400" />
          <div className="text-left">
            <p className="text-[9.5px] font-bold text-white">SQL Pipelines</p>
            <p className="text-[7.5px] text-amber-400">Automated ETL</p>
          </div>
        </div>
      ),
    },

    // 8. Decision Strategy Badge (Outer Orbit)
    {
      id: "strategy-badge",
      orbitIndex: 2,
      initialAngleDeg: 305,
      render: (isHovered) => (
        <div
          className="flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "rgba(245,158,11,0.8)" : "rgba(245,158,11,0.3)",
            background: "rgba(20, 12, 4, 0.9)",
            boxShadow: isHovered ? "0 0 20px rgba(245,158,11,0.35)" : "none",
          }}
        >
          <Target className="h-3 w-3 text-amber-400" />
          <span className="text-white/80 text-[10.5px] font-medium">Growth Strategy</span>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!sceneRef.current) return;
      const heroSection = sceneRef.current.closest("section") || sceneRef.current;
      const rect = heroSection.getBoundingClientRect();

      const isOverHero =
        e.clientX >= rect.left - 50 &&
        e.clientX <= rect.right + 50 &&
        e.clientY >= rect.top - 50 &&
        e.clientY <= rect.bottom + 50;

      if (isOverHero) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetMouse.current = {
          x: Math.max(-0.6, Math.min(0.6, x)),
          y: Math.max(-0.6, Math.min(0.6, y)),
        };
      } else {
        targetMouse.current = { x: 0, y: 0 };
      }
    };

    const handleScroll = () => {
      scrollYRef.current = window.scrollY || 0;
    };

    window.addEventListener("mousemove", handleWindowMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTimeSec = reducedMotionRef.current ? 0 : (currentTime - startTime) / 1000;

      currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.08;
      currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.08;

      const mx = currentMouse.current.x;
      const my = currentMouse.current.y;
      const scrollParallaxY = Math.min(scrollYRef.current * 0.12, 50);

      const sceneWidth = sceneRef.current ? sceneRef.current.clientWidth : 500;
      const svgScale = sceneWidth / 500;

      const floatY = reducedMotionRef.current ? 0 : Math.sin(elapsedTimeSec * 1.6) * 4;
      if (logoRef.current) {
        logoRef.current.style.transform = `translate3d(-50%, -50%, 0) translate3d(${mx * 8}px, ${my * 8 + floatY}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mx * 14}px, ${my * 14 + scrollParallaxY * 0.5}px, 0)`;
      }

      const parallaxTransform = `translate3d(${mx * 22}px, ${my * 22 + scrollParallaxY}px, 0) rotateX(${-my * 5}deg) rotateY(${mx * 5}deg)`;
      if (backSvgRef.current) backSvgRef.current.style.transform = parallaxTransform;
      if (frontSvgRef.current) frontSvgRef.current.style.transform = parallaxTransform;

      const globalRotationRad = ((2 * Math.PI) / ORBIT_CONFIGS[0].speedSec) * elapsedTimeSec;
      const activeHoverId = hoveredIdRef.current;

      ITEMS.forEach((item, index) => {
        const itemEl = itemRefs.current[index];
        if (!itemEl) return;

        const config = ORBIT_CONFIGS[item.orbitIndex];
        const angleRad = (item.initialAngleDeg * Math.PI) / 180 + globalRotationRad;

        const rx = config.rx;
        const ry = config.ry;
        const tiltRad = (config.rotDeg * Math.PI) / 180;

        const px = rx * Math.cos(angleRad);
        const py = ry * Math.sin(angleRad);

        const x_svg = px * Math.cos(tiltRad) - py * Math.sin(tiltRad);
        const y_svg = px * Math.sin(tiltRad) + py * Math.cos(tiltRad);

        const finalX = x_svg * svgScale + mx * 28;
        const finalY = y_svg * svgScale + my * 28 + scrollParallaxY;

        const depthFactor = (py / ry + 1) / 2;
        let scale = 0.86 + 0.16 * depthFactor;
        let opacity = 0.70 + 0.30 * depthFactor;
        let zIndex = 30;

        const isHovered = item.id === activeHoverId;
        const isAnyHovered = activeHoverId !== null;

        if (isHovered) {
          scale *= 1.08;
          opacity = 1.0;
          zIndex = 65;
        } else if (isAnyHovered) {
          opacity *= 0.55;
        }

        itemEl.style.transform = `translate3d(-50%, -50%, 0) translate3d(${finalX}px, ${finalY}px, 0) scale(${scale})`;
        itemEl.style.opacity = opacity.toFixed(2);
        itemEl.style.zIndex = zIndex.toString();
      });

      const workflowTrack = workflowTrackRef.current;
      const workflowPulse = workflowPulseRef.current;
      const stepElements = workflowStepRefs.current;

      if (workflowTrack && workflowPulse && stepElements.every(Boolean)) {
        if (reducedMotionRef.current) {
          workflowPulse.style.opacity = "0";
          if (activeWorkflowStepRef.current !== 0) {
            activeWorkflowStepRef.current = 0;
            setActiveWorkflowStep(0);
          }
        } else {
          const trackRect = workflowTrack.getBoundingClientRect();
          const centers = stepElements.map((step) => {
            const rect = step!.getBoundingClientRect();
            return rect.left - trackRect.left + rect.width / 2;
          });
          const loopProgress = (elapsedTimeSec % 4) / 4;
          const keyframes = [
            { time: 0, x: centers[0], step: 0 },
            { time: 0.13, x: centers[0], step: 0 },
            { time: 0.32, x: centers[1], step: 1 },
            { time: 0.45, x: centers[1], step: 1 },
            { time: 0.64, x: centers[2], step: 2 },
            { time: 0.77, x: centers[2], step: 2 },
            { time: 0.96, x: centers[3], step: 3 },
            { time: 1, x: centers[3], step: 3 },
          ];
          const nextIndex = keyframes.findIndex((frame) => frame.time > loopProgress);
          const end = keyframes[nextIndex === -1 ? keyframes.length - 1 : nextIndex];
          const start = keyframes[Math.max(0, nextIndex - 1)];
          const localProgress = end.time === start.time
            ? 0
            : (loopProgress - start.time) / (end.time - start.time);
          const easedProgress = localProgress * localProgress * (3 - 2 * localProgress);
          const pulseX = start.x + (end.x - start.x) * easedProgress;
          const pulseOpacity = loopProgress < 0.04 || loopProgress > 0.96
            ? Math.max(0, Math.min(1, Math.min(loopProgress / 0.04, (1 - loopProgress) / 0.04)))
            : 1;

          workflowPulse.style.opacity = pulseOpacity.toFixed(2);
          workflowPulse.style.transform = `translate3d(${pulseX}px, -50%, 0) translateX(-50%)`;

          if (activeWorkflowStepRef.current !== start.step) {
            activeWorkflowStepRef.current = start.step;
            setActiveWorkflowStep(start.step);
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="relative mx-auto aspect-square w-full max-w-[540px] md:max-w-[640px] select-none"
      aria-hidden="true"
      style={{ perspective: "1000px" }}
    >
      {/* Amber Ambient Radial Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0.03) 50%, transparent 75%)",
        }}
      />

      {/* SVG Back Orbit Layer (z-index: 8) */}
      <svg
        ref={backSvgRef}
        viewBox="0 0 500 500"
        className="pointer-events-none absolute inset-0 h-full w-full will-change-transform"
        style={{ zIndex: 8 }}
      >
        <defs>
          <linearGradient id="forw-orbit-back" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {CROSS_CONNECTORS.map((conn) => (
          <path
            key={`forw-back-${conn.id}`}
            d={conn.d}
            fill="none"
            stroke="rgba(245, 158, 11, 0.12)"
            strokeWidth="0.9"
            strokeDasharray="4 6"
          />
        ))}

        {ORBIT_CONFIGS.map((orbit) => {
          const backPathD = `M ${250 - orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 0,1 ${orbit.rx * 2},0`;
          return (
            <g key={`forw-back-${orbit.id}`} transform={`rotate(${orbit.rotDeg} 250 250)`}>
              <path
                d={backPathD}
                fill="none"
                stroke="url(#forw-orbit-back)"
                strokeWidth={orbit.id === "forw-cross" ? "0.9" : "1.1"}
                strokeDasharray="3 5"
              />
            </g>
          );
        })}
      </svg>

      {/* SVG Front Orbit Layer with Glowing Travelling Particle Nodes (z-index: 20) */}
      <svg
        ref={frontSvgRef}
        viewBox="0 0 500 500"
        className="pointer-events-none absolute inset-0 h-full w-full will-change-transform"
        style={{ zIndex: 20 }}
      >
        <defs>
          <filter id="forw-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="forw-orbit-front" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {CROSS_CONNECTORS.map((conn) => (
          <path
            key={`forw-front-${conn.id}`}
            d={conn.d}
            fill="none"
            stroke="rgba(245, 158, 11, 0.16)"
            strokeWidth="1.0"
            strokeDasharray="4 6"
          />
        ))}

        {ORBIT_CONFIGS.map((orbit) => {
          const fullPathD = `M ${250 - orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 1,0 ${orbit.rx * 2},0 a ${orbit.rx},${orbit.ry} 0 1,0 -${orbit.rx * 2},0`;
          const frontPathD = `M ${250 + orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 0,1 -${orbit.rx * 2},0`;

          return (
            <g key={`forw-front-${orbit.id}`} transform={`rotate(${orbit.rotDeg} 250 250)`}>
              <path
                d={frontPathD}
                fill="none"
                stroke="url(#forw-orbit-front)"
                strokeWidth={orbit.id === "forw-cross" ? "1.0" : "1.2"}
                strokeOpacity="0.4"
              />

              <circle r="3.2" fill="#FBBF24" filter="url(#forw-neon-glow)">
                <animateMotion
                  dur={`${orbit.speedSec}s`}
                  repeatCount="indefinite"
                  path={fullPathD}
                  keyPoints="0;1"
                  keyTimes="0;1"
                />
              </circle>
            </g>
          );
        })}
      </svg>

      {/* AI automation workflow: intentionally fixed so the process reads clearly beside the live analytics. */}
      <div
        className="pointer-events-none absolute bottom-1 right-0 w-[258px] max-w-[78%] origin-bottom-right sm:bottom-4"
        style={{ zIndex: 70 }}
      >
        <div className="relative overflow-hidden rounded-xl border border-amber-500/35 bg-[#140d04]/95 px-2.5 py-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.5),0_0_24px_rgba(245,158,11,0.12)] backdrop-blur-md">
          <div className="mb-2 flex items-center justify-between font-mono">
            <span className="text-[8px] font-semibold tracking-[0.16em] text-amber-300">AI AUTOMATION</span>
            <span className="flex items-center gap-1 text-[7px] text-emerald-400">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                animate={prefersReducedMotion ? undefined : { opacity: [0.45, 1, 0.45], scale: [0.8, 1.2, 0.8] }}
                transition={prefersReducedMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
              Workflow active
            </span>
          </div>

          <div
            ref={workflowTrackRef}
            className="relative grid h-9 grid-cols-[1fr_18px_1fr_18px_1fr_18px_1fr] items-center"
          >
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-amber-500/35" />
            <div
              ref={workflowPulseRef}
              className="pointer-events-none absolute left-0 top-1/2 z-20 h-3 w-3 rounded-full bg-amber-300 opacity-0 shadow-[0_0_6px_rgba(251,191,36,1),0_0_16px_rgba(245,158,11,0.9)]"
              style={{ transform: "translate3d(0, -50%, 0) translateX(-50%)" }}
            />

            {workflowSteps.map(([top, bottom], index) => {
              const isActive = index === activeWorkflowStep;
              const isComplete = index < completedWorkflowSteps;

              return (
                <React.Fragment key={bottom}>
                  <motion.div
                    ref={(element) => {
                      workflowStepRefs.current[index] = element;
                    }}
                    className="relative z-10 flex h-9 items-center justify-center rounded-md border bg-[#100b04]/95 px-1 text-center font-mono leading-tight"
                    animate={
                      prefersReducedMotion
                        ? undefined
                        : {
                            borderColor: isActive
                              ? "rgba(251,191,36,0.95)"
                              : isComplete
                                ? "rgba(245,158,11,0.55)"
                                : "rgba(245,158,11,0.2)",
                            backgroundColor: isActive
                              ? "rgba(245,158,11,0.18)"
                              : isComplete
                                ? "rgba(245,158,11,0.08)"
                                : "rgba(0,0,0,0.3)",
                            boxShadow: isActive
                              ? "0 0 14px rgba(245,158,11,0.5)"
                              : isComplete
                                ? "0 0 8px rgba(245,158,11,0.18)"
                                : "0 0 0 rgba(245,158,11,0)",
                          }
                    }
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    style={
                      prefersReducedMotion
                        ? {
                            borderColor: index === 0 ? "rgba(251,191,36,0.95)" : "rgba(245,158,11,0.2)",
                            backgroundColor: index === 0 ? "rgba(245,158,11,0.18)" : "rgba(0,0,0,0.3)",
                          }
                        : undefined
                    }
                  >
                    <span className={index === 1 ? "text-[7.5px] font-bold text-amber-300" : "text-[7px] text-white/70"}>
                      {top}<br />{bottom}
                    </span>
                  </motion.div>

                  {index < workflowSteps.length - 1 && (
                    <span aria-hidden="true" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Central Forwai Logo Anchor (z-index: 50) */}
      <div
        ref={logoRef}
        className="pointer-events-none absolute left-1/2 top-1/2 will-change-transform"
        style={{
          transform: "translate3d(-50%, -50%, 0)",
          zIndex: 50,
        }}
      >
        {/* Ambient Back Glow */}
        <div
          className="pointer-events-none absolute -inset-6 rounded-3xl bg-amber-500/30 blur-2xl animate-pulse-glow"
          style={{ transform: "scale(1.2) translate3d(0,0,0)" }}
        />

        {/* Drop shadow layer */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-black/60 blur-lg"
          style={{ transform: "translate3d(0, 10px, 0)" }}
        />

        {/* Central Logo Plaque */}
        <div
          className="relative flex items-center justify-center rounded-2xl border border-amber-500/25 px-5 py-3.5 shadow-[0_0_35px_rgba(245,158,11,0.25),0_16px_36px_rgba(0,0,0,0.7)] bg-[#0c0c0e]/80 backdrop-blur-xl transition-all"
          style={{
            width: "240px",
            height: "72px",
          }}
        >
          <Image
            src="/images/forwai-logo.png"
            alt="Forwai logo"
            width={952}
            height={186}
            priority
            className="w-full h-full object-contain drop-shadow-[0_2px_12px_rgba(245,158,11,0.2)]"
          />
        </div>
      </div>

      {/* Orbiting Analytics Elements (z-index: 30) */}
      {ITEMS.map((item, index) => {
        const isHovered = item.id === hoveredId;

        return (
          <div
            key={item.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="pointer-events-auto cursor-pointer absolute left-1/2 top-1/2 will-change-transform"
            style={{
              transform: "translate3d(-50%, -50%, 0)",
              zIndex: isHovered ? 65 : 30,
            }}
          >
            {item.render(isHovered)}
          </div>
        );
      })}

      {/* Top-Right Micro Tag */}
      <div
        className="pointer-events-none absolute right-0 top-6 hidden flex-col gap-1 text-right font-mono text-[9px] uppercase tracking-[0.25em] text-amber-300/40 md:flex"
        style={{ zIndex: 5 }}
      >
        <span>Data-Driven</span>
        <span>Performance</span>
      </div>
    </div>
  );
}
