"use client";

import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export default function MagneticButton({
  children,
  className = "",
  href,
  type = "button",
  onClick,
  disabled,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || disabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-transform duration-200 will-change-transform ${className}`;

  if (href) {
    return (
      <a href={href} className="inline-flex" onMouseMove={onMove} onMouseLeave={reset}>
        <span ref={ref} className={cls}>
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-flex disabled:opacity-60"
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      <span ref={ref} className={cls}>
        {children}
      </span>
    </button>
  );
}
