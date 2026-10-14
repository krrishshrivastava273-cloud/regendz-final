"use client";

import { motion } from "framer-motion";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Regendz IT home">
      {/* Logo Badge Container */}
      <motion.span
        className="relative block h-10 w-10 will-change-transform [backface-visibility:hidden] [transform-style:preserve-3d]"
        /* Subtle idle float */
        animate={{
          y: [-0.5, 0.5, -0.5],
          rotateZ: [-0.8, 0.8, -0.8],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        /* Hover: scale up + glow */
        whileHover={{ scale: 1.05 }}
      >
        {/* Glow layer — separate from logo for stability */}
        <span className="pointer-events-none absolute -inset-1 rounded-[11px] bg-lime/25 blur-md opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

        {/* SVG Logo — exact same badge geometry as hero */}
        <svg
          viewBox="0 0 100 100"
          className="relative block h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="nav-badge-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d9ff00" />
              <stop offset="50%" stopColor="#c8ff00" />
              <stop offset="100%" stopColor="#a3d100" />
            </linearGradient>
            <linearGradient id="nav-r-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            <linearGradient id="nav-sweep" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.35)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <clipPath id="nav-badge-clip">
              <path d="M 0 0 H 100 V 70 L 70 100 H 0 Z" />
            </clipPath>
          </defs>

          {/* Badge background — angular cut-corner shape */}
          <path
            d="M 0 0 H 100 V 70 L 70 100 H 0 Z"
            fill="url(#nav-badge-bg)"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
          />

          {/* Black lowercase r — exact same geometry as hero */}
          <path
            d="M 32 25 H 48 V 42 Q 58 25 70 25 V 45 Q 58 45 48 62 V 80 H 32 Z"
            fill="url(#nav-r-fill)"
          />

          {/* Subtle light sweep */}
          <g clipPath="url(#nav-badge-clip)">
            <motion.rect
              y="-20"
              width="35"
              height="140"
              fill="url(#nav-sweep)"
              transform="skewX(-15)"
              animate={{ x: [-80, 160] }}
              transition={{ duration: 5, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
            />
          </g>
        </svg>
      </motion.span>

      {/* Brand text */}
      {!compact && (
        <span className="leading-none">
          <span className="display block text-[1.15rem] font-bold tracking-tight">
            Regendz
          </span>
          <span className="kicker !text-[0.58rem] !tracking-[0.28em] text-mute">IT</span>
        </span>
      )}
    </a>
  );
}
