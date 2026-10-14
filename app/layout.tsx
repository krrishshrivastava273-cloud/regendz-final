import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Syne } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://regendzit.com"),
  title: {
    default: "Regendz IT — Digital Experiences That Scale With Your Business",
    template: "%s — Regendz IT",
  },
  description:
    "From high-converting websites to growth-driven digital marketing, Regendz IT builds digital solutions around where your business is today — and where you want it to go tomorrow.",
  keywords: [
    "Regendz IT",
    "web development",
    "digital marketing",
    "scalable websites",
    "business growth",
  ],
  openGraph: {
    title: "Regendz IT — Digital Solutions Built to Scale",
    description:
      "We build according to your business's scalability. Web development and digital marketing that grow with you.",
    type: "website",
    siteName: "Regendz IT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regendz IT",
    description: "Digital solutions built to scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} ${ibm.variable}`} suppressHydrationWarning>
      <body className="bg-ink text-white font-sans antialiased" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <div className="noise" aria-hidden />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
