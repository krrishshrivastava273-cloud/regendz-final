"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Globe, Cpu, GitBranch } from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   SLITCODE ORBITAL SYSTEM (Web & Software Development)
   4 Elliptical Orbit Rings in Violet (#8B5CF6)
   + Central Regendz "r" Logo
   + Interactive Code Editor, Live Terminal, Responsive Wireframe & Tech Badges
──────────────────────────────────────────────────────────────── */

interface OrbitConfig {
  id: string;
  rx: number;
  ry: number;
  rotDeg: number;
  speedSec: number;
}

const ORBIT_CONFIGS: OrbitConfig[] = [
  { id: "slit-inner", rx: 195, ry: 120, rotDeg: -14, speedSec: 22 },
  { id: "slit-middle", rx: 245, ry: 155, rotDeg: 16, speedSec: 22 },
  { id: "slit-outer", rx: 295, ry: 190, rotDeg: -26, speedSec: 22 },
  { id: "slit-cross", rx: 260, ry: 140, rotDeg: 62, speedSec: 22 },
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

export default function SlitcodeHeroScene() {
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

  const ITEMS: OrbitingItem[] = [
    // 1. Code Editor Snippet (Inner Orbit, Top)
    {
      id: "code-snippet",
      orbitIndex: 0,
      initialAngleDeg: 80,
      render: (isHovered) => (
        <div
          className="rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 select-none shadow-xl"
          style={{
            borderColor: isHovered ? "rgba(139,92,246,0.8)" : "rgba(139,92,246,0.35)",
            background: "rgba(12, 8, 24, 0.92)",
            boxShadow: isHovered
              ? "0 0 30px rgba(139,92,246,0.4), 0 8px 24px rgba(0,0,0,0.6)"
              : "0 8px 24px rgba(0,0,0,0.5)",
            width: "172px",
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
              <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
              <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
              <span className="ml-1 text-[8.5px] font-mono text-violet-300/80">route.ts</span>
            </div>
            <span className="text-[7.5px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              TypeScript · 200 OK
            </span>
          </div>
          <div className="space-y-0.5 font-mono text-[8px] leading-relaxed">
            <p className="text-white/50">
              <span className="text-violet-400">export async function</span> <span className="text-amber-300">GET</span>() &#123;
            </p>
            <p className="pl-2.5 text-white/70">
              <span className="text-violet-400">const</span> res = <span className="text-violet-400">await</span> db.<span className="text-sky-300">query</span>();
            </p>
            <p className="pl-2.5 text-white/70">
              <span className="text-violet-400">return</span> Response.<span className="text-sky-300">json</span>(&#123; res &#125;);
            </p>
            <p className="text-white/50">&#125;</p>
          </div>
        </div>
      ),
    },

    // 2. Responsive UI Preview (Inner Orbit, Bottom)
    {
      id: "responsive-preview",
      orbitIndex: 0,
      initialAngleDeg: 260,
      render: (isHovered) => (
        <div
          className="rounded-xl border p-2.5 backdrop-blur-md transition-all duration-300 select-none shadow-xl"
          style={{
            borderColor: isHovered ? "rgba(139,92,246,0.85)" : "rgba(139,92,246,0.35)",
            background: "rgba(14, 10, 28, 0.94)",
            boxShadow: isHovered
              ? "0 0 30px rgba(139,92,246,0.4), 0 8px 24px rgba(0,0,0,0.6)"
              : "0 8px 24px rgba(0,0,0,0.5)",
            width: "168px",
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1.5">
            <span className="text-[8px] font-mono text-violet-300/80 flex items-center gap-1 font-semibold">
              <Globe className="h-2.5 w-2.5 text-violet-400" />
              slitcode.in/app
            </span>
            <span className="rounded bg-emerald-500/15 border border-emerald-500/30 px-1 py-0.5 text-[7px] font-mono text-emerald-300 font-semibold">
              99 Performance
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="h-2 w-16 rounded bg-violet-400/40" />
              <div className="h-1.5 w-8 rounded bg-white/20" />
            </div>
            <div className="h-1 w-full rounded bg-white/10" />
            <div className="grid grid-cols-3 gap-1 pt-0.5">
              <div className="h-4 rounded bg-violet-500/20 border border-violet-500/25 flex items-center justify-center">
                <span className="text-[6px] font-mono text-violet-300">SSR</span>
              </div>
              <div className="h-4 rounded bg-violet-500/20 border border-violet-500/25 flex items-center justify-center">
                <span className="text-[6px] font-mono text-violet-300">API</span>
              </div>
              <div className="h-4 rounded bg-violet-500/20 border border-violet-500/25 flex items-center justify-center">
                <span className="text-[6px] font-mono text-violet-300">Edge</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // 3. React Tech Badge (Middle Orbit)
    {
      id: "react-badge",
      orbitIndex: 1,
      initialAngleDeg: 10,
      render: (isHovered) => (
        <div
          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#61DAFB" : "rgba(97,218,251,0.3)",
            background: "rgba(10, 8, 22, 0.88)",
            boxShadow: isHovered ? "0 0 20px rgba(97,218,251,0.4)" : "none",
          }}
        >
          <span className="text-[#61DAFB] font-bold text-sm">⚛</span>
          <span className="text-white/80 font-semibold text-[11px]">React</span>
        </div>
      ),
    },

    // 4. Next.js Badge (Middle Orbit)
    {
      id: "nextjs-badge",
      orbitIndex: 1,
      initialAngleDeg: 130,
      render: (isHovered) => (
        <div
          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#ffffff" : "rgba(255,255,255,0.3)",
            background: "rgba(10, 8, 22, 0.88)",
            boxShadow: isHovered ? "0 0 20px rgba(255,255,255,0.35)" : "none",
          }}
        >
          <span className="font-bold text-white text-[11px]">N</span>
          <span className="text-white/80 font-semibold text-[11px]">Next.js</span>
        </div>
      ),
    },

    // 5. TypeScript Badge (Middle Orbit)
    {
      id: "typescript-badge",
      orbitIndex: 1,
      initialAngleDeg: 250,
      render: (isHovered) => (
        <div
          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#3178C6" : "rgba(49,120,198,0.3)",
            background: "rgba(10, 8, 22, 0.88)",
            boxShadow: isHovered ? "0 0 20px rgba(49,120,198,0.4)" : "none",
          }}
        >
          <span className="text-[#3178C6] font-bold text-[10px]">TS</span>
          <span className="text-white/80 font-semibold text-[11px]">TypeScript</span>
        </div>
      ),
    },

    // 6. Node.js Badge (Outer Orbit)
    {
      id: "nodejs-badge",
      orbitIndex: 2,
      initialAngleDeg: 45,
      render: (isHovered) => (
        <div
          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "#68A063" : "rgba(104,160,99,0.3)",
            background: "rgba(10, 8, 22, 0.88)",
            boxShadow: isHovered ? "0 0 20px rgba(104,160,99,0.4)" : "none",
          }}
        >
          <span className="text-[#68A063] font-bold text-xs">⬡</span>
          <span className="text-white/80 font-semibold text-[11px]">Node.js</span>
        </div>
      ),
    },

    // 7. CI/CD & Deploy Pipeline (Outer Orbit)
    {
      id: "cicd-badge",
      orbitIndex: 2,
      initialAngleDeg: 175,
      render: (isHovered) => (
        <div
          className="flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "rgba(139,92,246,0.85)" : "rgba(139,92,246,0.3)",
            background: "rgba(14, 10, 26, 0.92)",
            boxShadow: isHovered ? "0 0 24px rgba(139,92,246,0.4)" : "none",
          }}
        >
          <GitBranch className="h-3 w-3 text-violet-400" />
          <div className="text-left">
            <p className="text-[9.5px] font-bold text-white font-mono">CI/CD Pipeline</p>
            <p className="text-[7.5px] text-emerald-400 font-mono">Main · Passing</p>
          </div>
        </div>
      ),
    },

    // 8. Web Architecture (Outer Orbit)
    {
      id: "web-arch",
      orbitIndex: 2,
      initialAngleDeg: 300,
      render: (isHovered) => (
        <div
          className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono backdrop-blur-md transition-all duration-300"
          style={{
            borderColor: isHovered ? "rgba(139,92,246,0.85)" : "rgba(139,92,246,0.3)",
            background: "rgba(12, 8, 22, 0.9)",
            boxShadow: isHovered ? "0 0 20px rgba(139,92,246,0.35)" : "none",
          }}
        >
          <Cpu className="h-3 w-3 text-violet-400" />
          <span className="text-white/80 font-semibold text-[10.5px]">Modular Architecture</span>
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
      {/* Violet Ambient Radial Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.03) 50%, transparent 75%)",
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
          <linearGradient id="slit-orbit-back" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {CROSS_CONNECTORS.map((conn) => (
          <path
            key={`slit-back-${conn.id}`}
            d={conn.d}
            fill="none"
            stroke="rgba(139, 92, 246, 0.12)"
            strokeWidth="0.9"
            strokeDasharray="4 6"
          />
        ))}

        {ORBIT_CONFIGS.map((orbit) => {
          const backPathD = `M ${250 - orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 0,1 ${orbit.rx * 2},0`;
          return (
            <g key={`slit-back-${orbit.id}`} transform={`rotate(${orbit.rotDeg} 250 250)`}>
              <path
                d={backPathD}
                fill="none"
                stroke="url(#slit-orbit-back)"
                strokeWidth={orbit.id === "slit-cross" ? "0.9" : "1.1"}
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
          <filter id="slit-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="slit-orbit-front" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {CROSS_CONNECTORS.map((conn) => (
          <path
            key={`slit-front-${conn.id}`}
            d={conn.d}
            fill="none"
            stroke="rgba(139, 92, 246, 0.16)"
            strokeWidth="1.0"
            strokeDasharray="4 6"
          />
        ))}

        {ORBIT_CONFIGS.map((orbit) => {
          const fullPathD = `M ${250 - orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 1,0 ${orbit.rx * 2},0 a ${orbit.rx},${orbit.ry} 0 1,0 -${orbit.rx * 2},0`;
          const frontPathD = `M ${250 + orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 0,1 -${orbit.rx * 2},0`;

          return (
            <g key={`slit-front-${orbit.id}`} transform={`rotate(${orbit.rotDeg} 250 250)`}>
              <path
                d={frontPathD}
                fill="none"
                stroke="url(#slit-orbit-front)"
                strokeWidth={orbit.id === "slit-cross" ? "1.0" : "1.2"}
                strokeOpacity="0.4"
              />

              <circle r="3.2" fill="#A78BFA" filter="url(#slit-neon-glow)">
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

      {/* Central slitcode Logo Anchor (z-index: 50) */}
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
          className="pointer-events-none absolute -inset-6 rounded-3xl bg-violet-600/30 blur-2xl animate-pulse-glow"
          style={{ transform: "scale(1.2) translate3d(0,0,0)" }}
        />

        {/* Drop shadow layer */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-black/60 blur-lg"
          style={{ transform: "translate3d(0, 10px, 0)" }}
        />

        {/* Central Logo Plaque */}
        <div
          className="relative flex items-center justify-center rounded-2xl border border-violet-500/25 px-5 py-3.5 shadow-[0_0_35px_rgba(139,92,246,0.25),0_16px_36px_rgba(0,0,0,0.7)] bg-[#0c0c0e]/80 backdrop-blur-xl transition-all"
          style={{
            width: "230px",
            height: "80px",
          }}
        >
          <Image
            src="/images/slitcode-logo.png"
            alt="slitcode logo"
            width={936}
            height={276}
            priority
            className="w-full h-full object-contain drop-shadow-[0_2px_12px_rgba(139,92,246,0.2)]"
          />
        </div>
      </div>

      {/* Orbiting Development Elements (z-index: 30) */}
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
        className="pointer-events-none absolute right-0 top-6 hidden flex-col gap-1 text-right font-mono text-[9px] uppercase tracking-[0.25em] text-violet-300/40 md:flex"
        style={{ zIndex: 5 }}
      >
        <span>Engineered</span>
        <span>For Scale</span>
      </div>
    </div>
  );
}
