"use client";

import { motion } from "framer-motion";
import HeroScene from "@/components/HeroScene";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-lime/20 blur-[90px]" />
      <div className="pointer-events-none absolute -right-10 top-0 h-80 w-80 rounded-full bg-lime/10 blur-[100px]" />

      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <motion.p
            initial={{ opacity: 1, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="kicker mb-6"
          >
            Digital solutions · Built to scale
          </motion.p>
          <motion.h1
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[clamp(2.6rem,7vw,5.6rem)]"
          >
            We build digital experiences that <span className="text-lime">scale with your business.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg"
          >
            From high-converting websites to growth-driven digital marketing, Regendz IT
            builds digital solutions around where your business is today — and where you
            want it to go tomorrow.
          </motion.p>
          <motion.div
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="#contact" className="bg-lime text-ink shadow-[0_0_40px_rgba(200,255,0,0.25)]">
              Start a project
            </MagneticButton>
            <MagneticButton href="#services" className="border border-white/15 bg-white/5 text-white">
              Explore services
            </MagneticButton>
          </motion.div>
          <p className="mt-8 max-w-md font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
            We build for business growth — not one-size-fits-all websites.
          </p>
        </div>
        <HeroScene />
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-12 hidden lg:flex items-center gap-4"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10">
          <div className="h-1.5 w-1.5 rounded-full bg-lime shadow-[0_0_8px_rgba(200,255,0,0.8)]" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
