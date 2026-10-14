"use client";

import Reveal from "@/components/ui/Reveal";
import {
  webOfferings,
  marketingOfferings,
  aiOfferings,
  appOfferings,
  designOfferings,
  contentOfferings,
  influencerOfferings,
  socialOfferings,
} from "@/lib/content";

/* ── Inline SVG Icons (16×16, stroke-based, minimal) ───────── */

function IconWeb() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="2" width="14" height="11" rx="2" />
      <line x1="1" y1="5.5" x2="15" y2="5.5" />
      <line x1="8" y1="13" x2="5" y2="15" />
      <line x1="8" y1="13" x2="11" y2="15" />
    </svg>
  );
}

function IconMarketing() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 12 5 6 9 9 15 2" />
      <polyline points="11 2 15 2 15 6" />
    </svg>
  );
}

function IconAI() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="3" />
      <line x1="8" y1="1" x2="8" y2="3" />
      <line x1="8" y1="13" x2="8" y2="15" />
      <line x1="1" y1="8" x2="3" y2="8" />
      <line x1="13" y1="8" x2="15" y2="8" />
      <line x1="3.05" y1="3.05" x2="4.46" y2="4.46" />
      <line x1="11.54" y1="11.54" x2="12.95" y2="12.95" />
      <line x1="3.05" y1="12.95" x2="4.46" y2="11.54" />
      <line x1="11.54" y1="4.46" x2="12.95" y2="3.05" />
    </svg>
  );
}

function IconApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="1" width="8" height="14" rx="2" />
      <line x1="7" y1="12" x2="9" y2="12" />
    </svg>
  );
}

function IconDesign() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 1.5L14.5 5.5L5.5 14.5H1.5V10.5L10.5 1.5Z" />
      <line x1="8.5" y1="3.5" x2="12.5" y2="7.5" />
    </svg>
  );
}

function IconContent() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="6 3 13 8 6 13" />
      <line x1="3" y1="3" x2="3" y2="13" />
    </svg>
  );
}

function IconInfluencer() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="5" r="2.5" />
      <path d="M1 14C1 11.2 3.2 9 6 9C8.8 9 11 11.2 11 14" />
      <circle cx="12" cy="5" r="1.5" />
      <path d="M15 13C15 11 13.7 9.5 12 9.5" />
    </svg>
  );
}

function IconSocial() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="3" r="1.5" />
      <circle cx="3" cy="12" r="1.5" />
      <circle cx="13" cy="12" r="1.5" />
      <line x1="8" y1="4.5" x2="3" y2="10.5" />
      <line x1="8" y1="4.5" x2="13" y2="10.5" />
      <line x1="4.5" y1="12" x2="11.5" y2="12" />
    </svg>
  );
}

/* ── Service Definitions ─────────────────────────────────────── */

const services = [
  {
    index: "01",
    title: "Web Development",
    description:
      "High-performance websites designed around your business goals, brand and future scalability.",
    items: webOfferings,
    icon: IconWeb,
  },
  {
    index: "02",
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies designed to increase visibility, generate leads and accelerate growth.",
    items: marketingOfferings,
    icon: IconMarketing,
  },
  {
    index: "03",
    title: "AI Automation",
    description:
      "Intelligent automation solutions that save time, reduce manual work and help your business scale faster.",
    items: aiOfferings,
    icon: IconAI,
  },
  {
    index: "04",
    title: "App Development",
    description:
      "Modern, scalable mobile and web applications designed to solve real business problems and drive growth.",
    items: appOfferings,
    icon: IconApp,
  },
  {
    index: "05",
    title: "Graphic Design",
    description:
      "Creative visual design that strengthens your brand identity and makes your business stand out.",
    items: designOfferings,
    icon: IconDesign,
  },
  {
    index: "06",
    title: "Content Creation",
    description:
      "High-quality content designed to attract attention, communicate your message and build a strong digital presence.",
    items: contentOfferings,
    icon: IconContent,
  },
  {
    index: "07",
    title: "Influencer Marketing",
    description:
      "Connect brands with relevant creators and build authentic campaigns that reach the right audience.",
    items: influencerOfferings,
    icon: IconInfluencer,
  },
  {
    index: "08",
    title: "Social Media & Page Management",
    description:
      "Complete social media management focused on consistent branding, audience growth and engagement.",
    items: socialOfferings,
    icon: IconSocial,
  },
];

/* ── Component ────────────────────────────────────────────────── */

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-shell">
        <Reveal>
          <p className="kicker mb-4">Web • Apps • AI • Marketing • Design • Content • Social — Built to scale</p>
          <h2 className="display max-w-3xl text-[clamp(2rem,4.5vw,4.2rem)]">
            Make your business impossible to ignore.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.08}>
              <ServiceCard
                index={s.index}
                title={s.title}
                description={s.description}
                items={s.items}
                Icon={s.icon}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Card ─────────────────────────────────────────────────────── */

function ServiceCard({
  index,
  title,
  description,
  items,
  Icon,
}: {
  index: string;
  title: string;
  description: string;
  items: string[];
  Icon: React.ComponentType;
}) {
  return (
    <article
      data-cursor
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-lime/15 bg-[#0a0a0a]/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-lime/40 hover:shadow-[0_8px_40px_rgba(200,255,0,0.08)]"
    >
      {/* Ambient corner glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-lime/[0.06] blur-3xl transition-all duration-500 group-hover:bg-lime/[0.12]" />

      {/* Number + Icon row */}
      <div className="flex items-center gap-3">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-lime">
          {index}
        </p>
        <span className="text-lime/60 transition-colors duration-300 group-hover:text-lime">
          <Icon />
        </span>
      </div>

      {/* Title */}
      <h3 className="display mt-4 text-2xl leading-tight md:text-[1.65rem]">{title}</h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-white/50">{description}</p>

      {/* Service items */}
      <ul className="mt-6 flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-[13px] text-white/75 transition-all duration-300 group-hover:border-lime/15 group-hover:text-white/90"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
