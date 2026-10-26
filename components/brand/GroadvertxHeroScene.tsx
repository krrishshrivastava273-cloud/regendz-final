"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Palette, Eye, PenTool } from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   GROADVERTX ORBITAL SYSTEM (Branding, Creatives & Digital Marketing)
   4 Elliptical Orbit Rings in Crimson/Rose (#E11D48)
   + Central Regendz "r" Logo
   + Interactive Social Story Preview, Animated Color Palette, REACH KPI & Creative Badges
──────────────────────────────────────────────────────────────── */

interface OrbitConfig {
  id: string;
  rx: number;
  ry: number;
  rotDeg: number;
  speedSec: number;
}

const ORBIT_CONFIGS: OrbitConfig[] = [
  { id: "groad-inner", rx: 195, ry: 120, rotDeg: -12, speedSec: 22 },
  { id: "groad-middle", rx: 245, ry: 155, rotDeg: 15, speedSec: 22 },
  { id: "groad-outer", rx: 295, ry: 190, rotDeg: -25, speedSec: 22 },
  { id: "groad-cross", rx: 260, ry: 140, rotDeg: 64, speedSec: 22 },
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

export default function GroadvertxHeroScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const backSvgRef = useRef<SVGSVGElement>(null);
  const frontSvgRef = useRef<SVGSVGElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const hoveredIdRef = useRef<string | null>(null);
  hoveredIdRef.current = hoveredId;

  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
  const scrollYRef = useRef(0);

  const paletteColors = [
    "#E11D48",
    "#FB923C",
    "#FACC15",
    "#4ADE80",
    "#22D3EE",
    "#818CF8",
    "#F472B6",
    "#A78BFA",
  ];

  const ITEMS: OrbitingItem[] = [
    // 1. Social Campaign Story Card (Inner Orbit, Top)
    {
      id: "social-story",
      orbitIndex: 0,
      initialAngleDeg: 75,
      render: (isHovered) => (
        <div
          className="rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 select-none shadow-xl"
          style={{
            borderColor: isHovered ? "rgba(225,29,72,0.85)" : "rgba(225,29,72,0.35)",
            background: "rgba(22, 6, 12, 0.94)",
            boxShadow: isHovered
              ? "0 0 30px rgba(225,29,72,0.4), 0 8px 24px rgba(0,0,0,0.6)"
              : "0 8px 24px rgba(0,0,0,0.5)",
            width: "168px",
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1.5">
            <span className="text-[8px] font-mono text-rose-300/80 font-semibold flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-rose-400" />
              Creative Asset
            </span>
            <span className="text-[7.5px] font-mono text-rose-400 font-semibold uppercase">
              Q4 Concept
            </span>
          </div>

          <div
            className="rounded-lg p-2 h-14 relative overflow-hidden flex flex-col justify-end"
            style={{
              background:
                "linear-gradient(135deg, rgba(225,29,72,0.35) 0%, rgba(14,4,8,0.95) 100%)",
              border: "1px solid rgba(225,29,72,0.25)",
            }}
          >
            <div className="absolute top-1.5 left-2 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              <span className="text-[7px] font-mono text-white/50 uppercase">Identity System</span>
            </div>
            <p className="text-[9.5px] font-bold text-white leading-tight">
              Brand Expression & Visual Direction
            </p>
          </div>
        </div>
      ),
    },

    // 2. Animated Color Palette Swatch (Inner Orbit, Bottom)
    {
      id: "color-palette",
      orbitIndex: 0,
      initialAngleDeg: 255,
      render: (isHovered) => (
        <div
          className="rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 select-none shadow-xl"
          style={{
            borderColor: isHovered ? "rgba(225,29,72,0.85)" : "rgba(225,29,72,0.35)",
            background: "rgba(20, 6, 12, 0.94)",
            boxShadow: isHovered
              ? "0 0 30px rgba(225,29,72,0.4), 0 8px 24px rgba(0,0,0,0.6)"
              : "0 8px 24px rgba(0,0,0,0.5)",
            width: "166px",
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1.5">
            <span className="text-[8px] font-mono text-rose-300/80 font-semibold flex items-center gap-1">
              <Palette className="h-2.5 w-2.5 text-rose-400" />
              Brand Kit Palette
            </span>
            <span className="text-[7px] font-mono text-white/40">Studio</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 pt-0.5">
            {paletteColors.map((c, i) => (
              <div
                key={c}
                className="h-3.5 rounded flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                style={{
                  background: c,
                  animationDelay: `${i * 120}ms`,
                }}
              />
            ))}
          </div>
        </div>
      ),
    },

    // 3. REACH Metric Card (Middle Orbit)
    {
      id: "reach-kpi",
      orbitIndex: 1,
      initialAngleDeg: 20,
      render: (isHovered) => (
        <div
          className="flex items-center gap-2 rounded-xl border px-3 py-1.5 backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#E11D48" : "rgba(225,29,72,0.4)",
            background: "rgba(24, 6, 14, 0.9)",
            boxShadow: isHovered ? "0 0 24px rgba(225,29,72,0.45)" : "none",
          }}
        >
          <Eye className="h-3 w-3 text-rose-400" />
          <div>
            <p className="text-[8px] font-mono uppercase text-white/40">Campaign Reach</p>
            <p className="text-xs font-bold text-white font-mono leading-none mt-0.5">
              Verified Audiences{" "}
              <span className="text-[8px] font-normal text-rose-300">High Engagement</span>
            </p>
          </div>
        </div>
      ),
    },

    // 4. Photoshop Creative Tool (Middle Orbit)
    {
      id: "photoshop-badge",
      orbitIndex: 1,
      initialAngleDeg: 140,
      render: (isHovered) => (
        <div
          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#31A8FF" : "rgba(49,168,255,0.3)",
            background: "rgba(18, 6, 12, 0.88)",
            boxShadow: isHovered ? "0 0 20px rgba(49,168,255,0.4)" : "none",
          }}
        >
          <span className="text-[#31A8FF] font-bold text-[10.5px]">Ps</span>
          <span className="text-white/80 font-semibold text-[11px]">Photoshop</span>
        </div>
      ),
    },

    // 5. Illustrator Vector Tool (Middle Orbit)
    {
      id: "illustrator-badge",
      orbitIndex: 1,
      initialAngleDeg: 260,
      render: (isHovered) => (
        <div
          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#FF9A00" : "rgba(255,154,0,0.3)",
            background: "rgba(18, 6, 12, 0.88)",
            boxShadow: isHovered ? "0 0 20px rgba(255,154,0,0.4)" : "none",
          }}
        >
          <span className="text-[#FF9A00] font-bold text-[10.5px]">Ai</span>
          <span className="text-white/80 font-semibold text-[11px]">Illustrator</span>
        </div>
      ),
    },

    // 6. Canva Visual Creation (Outer Orbit)
    {
      id: "canva-badge",
      orbitIndex: 2,
      initialAngleDeg: 35,
      render: (isHovered) => (
        <div
          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#00C4CC" : "rgba(0,196,204,0.3)",
            background: "rgba(18, 6, 12, 0.88)",
            boxShadow: isHovered ? "0 0 20px rgba(0,196,204,0.4)" : "none",
          }}
        >
          <span className="text-[#00C4CC] font-bold text-[10.5px]">Cv</span>
          <span className="text-white/80 font-semibold text-[11px]">Canva Pro</span>
        </div>
      ),
    },

    // 7. After Effects Motion Graphics (Outer Orbit)
    {
      id: "afterfx-badge",
      orbitIndex: 2,
      initialAngleDeg: 165,
      render: (isHovered) => (
        <div
          className="flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#9999FF" : "rgba(153,153,255,0.3)",
            background: "rgba(22, 6, 14, 0.9)",
            boxShadow: isHovered ? "0 0 24px rgba(153,153,255,0.4)" : "none",
          }}
        >
          <span className="text-[#9999FF] font-bold text-[11px]">Ae</span>
          <div className="text-left">
            <p className="text-[9.5px] font-bold text-white">Motion Graphics</p>
            <p className="text-[7.5px] text-rose-300">Brand Animation</p>
          </div>
        </div>
      ),
    },

    // 8. Visual Identity Specimen (Outer Orbit)
    {
      id: "typography-specimen",
      orbitIndex: 2,
      initialAngleDeg: 300,
      render: (isHovered) => (
        <div
          className="flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "rgba(225,29,72,0.8)" : "rgba(225,29,72,0.3)",
            background: "rgba(20, 6, 12, 0.9)",
            boxShadow: isHovered ? "0 0 20px rgba(225,29,72,0.35)" : "none",
          }}
        >
          <PenTool className="h-3 w-3 text-rose-400" />
          <span className="text-white/80 text-[10.5px] font-medium">Visual Identity</span>
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

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTimeSec = prefersReducedMotion ? 0 : (currentTime - startTime) / 1000;

      currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.08;
      currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.08;

      const mx = currentMouse.current.x;
      const my = currentMouse.current.y;
      const scrollParallaxY = Math.min(scrollYRef.current * 0.12, 50);

      const sceneWidth = sceneRef.current ? sceneRef.current.clientWidth : 500;
      const svgScale = sceneWidth / 500;

      const floatY = prefersReducedMotion ? 0 : Math.sin(elapsedTimeSec * 1.6) * 4;
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
      {/* Crimson Ambient Radial Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(225,29,72,0.18) 0%, rgba(225,29,72,0.03) 50%, transparent 75%)",
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
          <linearGradient id="groad-orbit-back" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E11D48" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {CROSS_CONNECTORS.map((conn) => (
          <path
            key={`groad-back-${conn.id}`}
            d={conn.d}
            fill="none"
            stroke="rgba(225, 29, 72, 0.12)"
            strokeWidth="0.9"
            strokeDasharray="4 6"
          />
        ))}

        {ORBIT_CONFIGS.map((orbit) => {
          const backPathD = `M ${250 - orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 0,1 ${orbit.rx * 2},0`;
          return (
            <g key={`groad-back-${orbit.id}`} transform={`rotate(${orbit.rotDeg} 250 250)`}>
              <path
                d={backPathD}
                fill="none"
                stroke="url(#groad-orbit-back)"
                strokeWidth={orbit.id === "groad-cross" ? "0.9" : "1.1"}
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
          <filter id="groad-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="groad-orbit-front" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB7185" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#E11D48" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {CROSS_CONNECTORS.map((conn) => (
          <path
            key={`groad-front-${conn.id}`}
            d={conn.d}
            fill="none"
            stroke="rgba(225, 29, 72, 0.16)"
            strokeWidth="1.0"
            strokeDasharray="4 6"
          />
        ))}

        {ORBIT_CONFIGS.map((orbit) => {
          const fullPathD = `M ${250 - orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 1,0 ${orbit.rx * 2},0 a ${orbit.rx},${orbit.ry} 0 1,0 -${orbit.rx * 2},0`;
          const frontPathD = `M ${250 + orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 0,1 -${orbit.rx * 2},0`;

          return (
            <g key={`groad-front-${orbit.id}`} transform={`rotate(${orbit.rotDeg} 250 250)`}>
              <path
                d={frontPathD}
                fill="none"
                stroke="url(#groad-orbit-front)"
                strokeWidth={orbit.id === "groad-cross" ? "1.0" : "1.2"}
                strokeOpacity="0.4"
              />

              <circle r="3.2" fill="#FB7185" filter="url(#groad-neon-glow)">
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

      {/* Central Groadvertx Logo Anchor (z-index: 50) */}
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
          className="pointer-events-none absolute -inset-6 rounded-3xl bg-rose-600/30 blur-2xl animate-pulse-glow"
          style={{ transform: "scale(1.2) translate3d(0,0,0)" }}
        />

        {/* Drop shadow layer */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-black/60 blur-lg"
          style={{ transform: "translate3d(0, 10px, 0)" }}
        />

        {/* Central Logo Plaque */}
        <div
          className="relative flex items-center justify-center rounded-2xl border border-rose-500/25 p-3.5 sm:p-4 shadow-[0_0_35px_rgba(225,29,72,0.25),0_16px_36px_rgba(0,0,0,0.7)] bg-[#0c0c0e]/80 backdrop-blur-xl transition-all"
          style={{
            width: "124px",
            height: "168px",
          }}
        >
          <Image
            src="/images/groadvertx-logo.png"
            alt="Groadvertx logo"
            width={645}
            height={1024}
            priority
            className="w-full h-full object-contain drop-shadow-[0_2px_12px_rgba(225,29,72,0.2)]"
          />
        </div>
      </div>

      {/* Orbiting Creative Elements (z-index: 30) */}
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
        className="pointer-events-none absolute right-0 top-6 hidden flex-col gap-1 text-right font-mono text-[9px] uppercase tracking-[0.25em] text-rose-300/40 md:flex"
        style={{ zIndex: 5 }}
      >
        <span>Brand Identity</span>
        <span>& High Impact</span>
      </div>
    </div>
  );
}
