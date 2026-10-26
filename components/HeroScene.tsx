"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Cpu,
  Globe,
  Smartphone,
  BarChart3,
  Share2,
  PenTool,
  Megaphone,
  Sparkles,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   CRISS-CROSS ORBITAL NETWORK SYSTEM
   4 Elliptical Orbit Rings (including transverse cross-orbit at 65°)
   + Curved Bezier interconnecting network paths around central logo.
   8 Services locked to their assigned orbital tracks with zero convergence!
──────────────────────────────────────────────────────────────── */
interface OrbitConfig {
  id: string;
  rx: number;
  ry: number;
  rotDeg: number;
  speedSec: number;
}

const ORBIT_CONFIGS: OrbitConfig[] = [
  { id: "orbit-inner", rx: 195, ry: 120, rotDeg: -12, speedSec: 20 },  // Inner Orbit (2 cards)
  { id: "orbit-middle", rx: 245, ry: 155, rotDeg: 15, speedSec: 20 },  // Middle Orbit (3 cards)
  { id: "orbit-outer", rx: 295, ry: 190, rotDeg: -25, speedSec: 20 },  // Outer Orbit (3 cards)
  { id: "orbit-cross", rx: 260, ry: 140, rotDeg: 65, speedSec: 20 },   // Transverse Criss-Cross Ring
];

// Subtle interconnecting Bezier arc network paths around central logo
const CROSS_CONNECTORS = [
  { id: "arc-1", d: "M 140,180 Q 250,210 360,320" },
  { id: "arc-2", d: "M 360,180 Q 250,290 140,320" },
  { id: "arc-3", d: "M 120,250 Q 250,170 380,200" },
  { id: "arc-4", d: "M 380,250 Q 250,330 120,300" },
];

interface ServiceCardData {
  id: string;
  title: string;
  subtitle?: string;
  singleLine?: boolean;
  icon: React.ElementType;
  orbitIndex: number;
  initialAngleDeg: number;
}

/* 8 Services distributed across 3 distinct orbital paths with safe phase offsets */
const SERVICES: ServiceCardData[] = [
  // Inner Orbit (2 cards)
  { id: "influencer", title: "Influencer", subtitle: "Marketing", icon: Megaphone, orbitIndex: 0, initialAngleDeg: 90 },
  { id: "ai-auto", title: "AI", subtitle: "Automation", icon: Cpu, orbitIndex: 0, initialAngleDeg: 270 },

  // Middle Orbit (3 cards)
  { id: "app-dev", title: "App", subtitle: "Development", icon: Smartphone, orbitIndex: 1, initialAngleDeg: 0 },
  { id: "social-media", title: "Social Media", subtitle: "Management", icon: Share2, orbitIndex: 1, initialAngleDeg: 120 },
  { id: "graphic-design", title: "Graphic", subtitle: "Design", icon: Sparkles, orbitIndex: 1, initialAngleDeg: 240 },

  // Outer Orbit (3 cards)
  { id: "digital-mktg", title: "Digital Marketing", singleLine: true, icon: BarChart3, orbitIndex: 2, initialAngleDeg: 45 },
  { id: "content-creation", title: "Content", subtitle: "Creation", icon: PenTool, orbitIndex: 2, initialAngleDeg: 165 },
  { id: "web-dev", title: "Web", subtitle: "Development", icon: Globe, orbitIndex: 2, initialAngleDeg: 315 },
];

export default function HeroScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const backSvgRef = useRef<SVGSVGElement>(null);
  const frontSvgRef = useRef<SVGSVGElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Interactive Hover state for active service card focus
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const hoveredCardIdRef = useRef<string | null>(null);
  hoveredCardIdRef.current = hoveredCardId;

  // Mouse & Scroll interaction state (interpolated lerp for 60 FPS smoothness)
  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
  const scrollYRef = useRef(0);

  useEffect(() => {
    // Window mousemove listener tracking mouse position relative to Hero section
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
        const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to +0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to +0.5
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

    // Check for prefers-reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTimeSec = prefersReducedMotion ? 0 : (currentTime - startTime) / 1000;

      // 1. Smooth mouse lerp (0.08 factor for responsive, fluid movement)
      currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.08;
      currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.08;

      const mx = currentMouse.current.x; // Range ~ -0.5 to +0.5
      const my = currentMouse.current.y; // Range ~ -0.5 to +0.5
      const scrollParallaxY = Math.min(scrollYRef.current * 0.12, 50);

      // SVG coordinate scale factor (viewBox is 500x500)
      const sceneWidth = sceneRef.current ? sceneRef.current.clientWidth : 500;
      const svgScale = sceneWidth / 500;

      // 2. Multi-layer Parallax transforms
      // A. Central R Logo (subtle 8px shift)
      if (logoRef.current) {
        logoRef.current.style.transform = `translate3d(-50%, -50%, 0) translate3d(${mx * 8}px, ${my * 8}px, 0)`;
      }

      // B. Ambient background glow
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${mx * 14}px, ${my * 14 + scrollParallaxY * 0.5}px, 0)`;
      }

      // C. SVG Orbital Rings (22px parallax shift + 5deg 3D tilt)
      const parallaxTransform = `translate3d(${mx * 22}px, ${my * 22 + scrollParallaxY}px, 0) rotateX(${-my * 5}deg) rotateY(${mx * 5}deg)`;
      if (backSvgRef.current) {
        backSvgRef.current.style.transform = parallaxTransform;
      }
      if (frontSvgRef.current) {
        frontSvgRef.current.style.transform = parallaxTransform;
      }

      // 3. SINGLE GLOBAL ROTATION ANGLE (20s per revolution)
      const globalRotationRad = ((2 * Math.PI) / ORBIT_CONFIGS[0].speedSec) * elapsedTimeSec;
      const activeHoverId = hoveredCardIdRef.current;

      // Deterministic card positioning anchored to assigned 3D orbital rings
      SERVICES.forEach((card, index) => {
        const cardEl = cardRefs.current[index];
        if (!cardEl) return;

        const config = ORBIT_CONFIGS[card.orbitIndex];
        const angleRad = (card.initialAngleDeg * Math.PI) / 180 + globalRotationRad;

        const rx = config.rx;
        const ry = config.ry;
        const tiltRad = (config.rotDeg * Math.PI) / 180;

        // Point on unrotated assigned ellipse
        const px = rx * Math.cos(angleRad);
        const py = ry * Math.sin(angleRad);

        // Tilted point
        const x_svg = px * Math.cos(tiltRad) - py * Math.sin(tiltRad);
        const y_svg = px * Math.sin(tiltRad) + py * Math.cos(tiltRad);

        // Scaled DOM offsets + 28px card parallax response
        const finalX = x_svg * svgScale + mx * 28;
        const finalY = y_svg * svgScale + my * 28 + scrollParallaxY;

        // Depth factor along assigned orbital plane
        const depthFactor = (py / ry + 1) / 2; // 0 (back) to 1 (front)
        let scale = 0.86 + 0.16 * depthFactor;
        let opacity = 0.70 + 0.30 * depthFactor;
        let zIndex = 30;

        // Interactive Active Hover Elevation & Dimming
        const isHovered = card.id === activeHoverId;
        const isAnyHovered = activeHoverId !== null;

        if (isHovered) {
          scale *= 1.06;
          opacity = 1.0;
          zIndex = 60;
        } else if (isAnyHovered) {
          opacity *= 0.60;
        }

        // Direct GPU-accelerated transform update (anchored at center, horizontally readable)
        cardEl.style.transform = `translate3d(-50%, -50%, 0) translate3d(${finalX}px, ${finalY}px, 0) scale(${scale})`;
        cardEl.style.opacity = opacity.toFixed(2);
        cardEl.style.zIndex = zIndex.toString();
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
      className="relative mx-auto aspect-square w-full max-w-[580px] md:max-w-[680px] select-none"
      aria-hidden="true"
      style={{ perspective: "1000px" }}
    >
      {/* ── Ambient Radial Background Glow ── */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(200,255,0,0.12) 0%, rgba(200,255,0,0.02) 48%, transparent 72%)",
        }}
      />

      {/* ════════════════════════════════════════════════════════
          SVG BACK ORBITAL NETWORK LAYER (z-index: 8)
          Renders 4 distinct back arcs + subtle Bezier criss-cross connectors
      ════════════════════════════════════════════════════════ */}
      <svg
        ref={backSvgRef}
        viewBox="0 0 500 500"
        className="pointer-events-none absolute inset-0 h-full w-full will-change-transform"
        style={{ zIndex: 8, overflow: "visible", transition: "transform 0.1s ease-out" }}
      >
        {/* Subtle curved Bezier criss-cross network connectors */}
        {CROSS_CONNECTORS.map((conn) => (
          <path
            key={`back-conn-${conn.id}`}
            d={conn.d}
            fill="none"
            stroke="rgba(200, 255, 0, 0.10)"
            strokeWidth="1.0"
            strokeDasharray="4 6"
          />
        ))}

        {/* 4 Elliptical Orbital Ring Back Arcs */}
        {ORBIT_CONFIGS.map((orbit) => {
          const backPathD = `M ${250 - orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 0,1 ${orbit.rx * 2},0`;

          return (
            <g key={`back-${orbit.id}`} transform={`rotate(${orbit.rotDeg} 250 250)`}>
              <path
                d={backPathD}
                fill="none"
                stroke="rgba(200, 255, 0, 0.16)"
                strokeWidth={orbit.id === "orbit-cross" ? "1.0" : "1.2"}
                strokeDasharray={orbit.id === "orbit-cross" ? "6 6" : undefined}
              />
            </g>
          );
        })}
      </svg>

      {/* ════════════════════════════════════════════════════════
          SVG FRONT ORBITAL NETWORK LAYER (z-index: 25)
          Renders front arcs, transverse criss-cross ring & traveling particles
      ════════════════════════════════════════════════════════ */}
      <svg
        ref={frontSvgRef}
        viewBox="0 0 500 500"
        className="pointer-events-none absolute inset-0 h-full w-full will-change-transform"
        style={{ zIndex: 25, overflow: "visible", transition: "transform 0.1s ease-out" }}
      >
        <defs>
          <filter id="neon-glow-front" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur1" />
            <feGaussianBlur stdDeviation="1" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="orbit-front-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c8ff00" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#c8ff00" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#c8ff00" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Subtle curved Bezier criss-cross network connectors (front) */}
        {CROSS_CONNECTORS.map((conn) => (
          <path
            key={`front-conn-${conn.id}`}
            d={conn.d}
            fill="none"
            stroke="rgba(200, 255, 0, 0.14)"
            strokeWidth="1.0"
            strokeDasharray="4 6"
          />
        ))}

        {/* 4 Elliptical Orbital Ring Front Arcs */}
        {ORBIT_CONFIGS.map((orbit) => {
          const fullPathD = `M ${250 - orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 1,0 ${orbit.rx * 2},0 a ${orbit.rx},${orbit.ry} 0 1,0 -${orbit.rx * 2},0`;
          const frontPathD = `M ${250 + orbit.rx},250 a ${orbit.rx},${orbit.ry} 0 0,1 -${orbit.rx * 2},0`;

          return (
            <g key={`front-${orbit.id}`} transform={`rotate(${orbit.rotDeg} 250 250)`}>
              <path
                d={frontPathD}
                fill="none"
                stroke="url(#orbit-front-grad)"
                strokeWidth={orbit.id === "orbit-cross" ? "1.0" : "1.2"}
                strokeOpacity="0.3"
              />

              {/* Synchronized travelling particle dot along each orbit */}
              <circle r="3" fill="#c8ff00" filter="url(#neon-glow-front)">
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

      {/* ════════════════════════════════════════════════════════
          CENTRAL "r" LOGO — HIGHEST VISUAL PRIORITY (z-index: 50)
          Strictly 100% stationary anchor + subtle 8px parallax response
      ════════════════════════════════════════════════════════ */}
      <div
        ref={logoRef}
        className="pointer-events-none absolute left-1/2 top-1/2 will-change-transform flex items-center justify-center"
        style={{
          width: "36%",
          height: "36%",
          transform: "translate3d(-50%, -50%, 0)",
          zIndex: 50,
        }}
      >
        {/* Soft backlight bloom */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[2rem] bg-lime/20 blur-2xl animate-pulse-glow"
          style={{ transform: "scale(1.25) translate3d(0,0,0)" }}
        />

        {/* Ambient shadow underneath logo */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[2rem] bg-black/60 blur-lg"
          style={{ transform: "translate3d(0, 14px, 0)" }}
        />

        {/* ORIGINAL REGENDZ "r" LIME LOGO ASSET */}
        <div className="relative h-full w-full flex items-center justify-center">
          <Image
            src="/images/regendz-symbol.png"
            alt="Regendz IT Symbol"
            width={701}
            height={701}
            priority
            className="h-full w-full object-contain filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.65)] drop-shadow-[0_0_20px_rgba(200,255,0,0.22)]"
          />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          8 REVOLVING SERVICE CARDS (z-index: 30)
          Distributed across 3 distinct orbital paths around the logo
      ════════════════════════════════════════════════════════ */}
      {SERVICES.map((service, index) => {
        const isHovered = service.id === hoveredCardId;

        return (
          <div
            key={service.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            onMouseEnter={() => setHoveredCardId(service.id)}
            onMouseLeave={() => setHoveredCardId(null)}
            className="pointer-events-auto cursor-pointer absolute left-1/2 top-1/2 will-change-transform"
            style={{
              transform: "translate3d(-50%, -50%, 0)",
              zIndex: isHovered ? 60 : 30,
            }}
          >
            <ServiceCardContent
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              singleLine={service.singleLine}
              isHovered={isHovered}
            />
          </div>
        );
      })}

      {/* ════════════════════════════════════════════════════════
          RIGHT-SIDE MICRO-COPY
      ════════════════════════════════════════════════════════ */}
      <div
        className="pointer-events-none absolute right-0 top-6 hidden flex-col gap-1 text-right font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 md:flex"
        style={{ zIndex: 5 }}
      >
        <span>IDEAS</span>
        <span>CODE</span>
        <span>GROWTH</span>
      </div>

      <div
        className="pointer-events-none absolute right-0 bottom-8 hidden flex-col gap-1 text-right font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 md:flex"
        style={{ zIndex: 5 }}
      >
        <span>PLAN</span>
        <span>BUILD</span>
        <span>LAUNCH</span>
        <span>SCALE</span>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   SERVICE CARD CONTENT
   Dark glass pill design with lime icon accent & active hover focus
──────────────────────────────────────────────────────────────── */
function ServiceCardContent({
  icon: Icon,
  title,
  subtitle,
  singleLine = false,
  isHovered = false,
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  singleLine?: boolean;
  isHovered?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-full border px-3.5 py-2 text-white backdrop-blur-md transition-all duration-300 ${
        isHovered
          ? "border-lime bg-[#0d130a] shadow-[0_0_24px_rgba(200,255,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.2)]"
          : "border-white/15 bg-[#0a0d0a]/90 shadow-[0_8px_32px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-lime/40"
      }`}
      style={{ whiteSpace: "nowrap" }}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
          isHovered
            ? "bg-lime text-black shadow-[0_0_12px_rgba(200,255,0,0.6)]"
            : "bg-lime/10 text-lime shadow-[inset_0_1px_2px_rgba(200,255,0,0.25)]"
        }`}
      >
        <Icon size={16} strokeWidth={2.2} />
      </div>

      {singleLine ? (
        <span
          className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
            isHovered ? "text-lime" : "text-white/90"
          }`}
        >
          {title}
        </span>
      ) : (
        <div className="flex flex-col leading-tight">
          <span
            className={`text-xs font-bold transition-colors duration-300 ${
              isHovered ? "text-white" : "text-white/95"
            }`}
          >
            {title}
          </span>
          {subtitle && (
            <span
              className={`text-[11px] font-medium transition-colors duration-300 ${
                isHovered ? "text-lime/90" : "text-white/55"
              }`}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
