import type { ReactNode } from "react";
import Logo from "@/components/brand/Logo";
import { navLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 pb-10 pt-16">
      <div className="container-shell grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-mute">Digital solutions built to scale.</p>
          <div className="mt-6 flex gap-3">
            <Social href="https://instagram.com/it.regendz" label="Instagram">
              IG
            </Social>
            <Social href="https://www.linkedin.com/" label="LinkedIn">
              in
            </Social>
            <Social href="mailto:hello@regendzit.com" label="Email">
              @
            </Social>
          </div>
        </div>
        <div>
          <p className="kicker mb-4">Links</p>
          <ul className="space-y-2 text-sm text-mute">
            <li>
              <a href="#top" className="hover:text-white">
                Home
              </a>
            </li>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker mb-4">Services</p>
          <ul className="space-y-2 text-sm text-mute">
            <li>
              <a href="#services" className="hover:text-white">
                Web Development
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-shell mt-12 flex flex-wrap justify-between gap-3 border-t border-white/8 pt-6 text-xs text-dim">
        <p>© {new Date().getFullYear()} Regendz IT. All rights reserved.</p>
        <p>Built around your business. Designed to scale with you.</p>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-xs font-semibold hover:border-lime hover:text-lime"
    >
      {children}
    </a>
  );
}
