import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import Logo from "@/components/brand/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 pb-10 pt-16">
      <div className="container-shell grid gap-12 md:grid-cols-2">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-mute">Solutions That Scale With You!!</p>

          {/* Social handles */}
          <div id="footer-socials" className="mt-6 flex gap-3 scroll-mt-24">
            <Social href="https://instagram.com/it.regendz" label="Instagram">
              <InstagramIcon />
            </Social>
            <Social href="https://www.linkedin.com/company/regendzitsolutions/" label="LinkedIn">
              <LinkedInIcon />
            </Social>
            <Social
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello%40regendzit.com"
              label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail aria-hidden="true" size={20} strokeWidth={1.8} />
            </Social>
          </div>
        </div>
        <div>
          <p className="kicker mb-4">Services</p>
          <ul className="space-y-3 text-sm text-mute">
            <li>
              <Link href="/services/slitcode" className="flex items-center gap-2.5 hover:text-white">
                <span className="flex h-7 w-9 shrink-0 items-center justify-center">
                  <Image
                    src="/images/slitcode-logo.png"
                    alt="slitcode logo"
                    width={936}
                    height={276}
                    className="h-auto max-h-7 w-auto max-w-full object-contain"
                  />
                </span>
                Slitcode
              </Link>
            </li>
            <li>
              <Link href="/services/forwai" className="flex items-center gap-2.5 hover:text-white">
                <span className="flex h-7 w-9 shrink-0 items-center justify-center">
                  <Image
                    src="/images/forwai-logo.png"
                    alt="Forwai logo"
                    width={952}
                    height={186}
                    className="h-auto max-h-7 w-auto max-w-full object-contain"
                  />
                </span>
                Forwai
              </Link>
            </li>
            <li>
              <Link href="/services/groadvertx" className="flex items-center gap-2.5 hover:text-white">
                <span className="flex h-7 w-9 shrink-0 items-center justify-center">
                  <Image
                    src="/images/groadvertx-logo.png"
                    alt="Groadvertx logo"
                    width={645}
                    height={1024}
                    className="h-auto max-h-7 w-auto max-w-full object-contain"
                  />
                </span>
                Groadvertx
              </Link>
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
  target,
  rel,
}: {
  href: string;
  label: string;
  children: ReactNode;
  target?: "_blank";
  rel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={target ?? (href.startsWith("http") ? "_blank" : undefined)}
      rel={rel ?? (href.startsWith("http") ? "noreferrer" : undefined)}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-transparent text-white/75 transition-colors duration-200 hover:border-lime/50 hover:bg-lime/10 hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.25" cy="6.75" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.98H3.56v11.47ZM9.35 8.98h3.41v1.57h.05c.48-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.32h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98Z" />
    </svg>
  );
}
