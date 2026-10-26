"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`group relative inline-flex items-center transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707] rounded-md ${className}`}
      aria-label="Regendz IT home"
    >
      <Image
        src="/images/regendz-logo.png"
        alt="Regendz IT"
        width={707}
        height={191}
        priority
        className={`w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] ${
          compact
            ? "h-7 sm:h-8 max-w-[125px] sm:max-w-[145px]"
            : "h-8 sm:h-9 md:h-10 max-w-[140px] sm:max-w-[160px] md:max-w-[175px]"
        }`}
      />
    </Link>
  );
}
