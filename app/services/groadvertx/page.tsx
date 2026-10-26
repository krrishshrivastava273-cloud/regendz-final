import type { Metadata } from "next";
import GroadvertxPage from "@/components/brand/GroadvertxPage";

export const metadata: Metadata = {
  title: "Groadvertx — Branding, Creatives & Digital Marketing",
  description:
    "Groadvertx is the branding, creatives and digital marketing vertical of Regendz IT. We craft bold visuals, compelling content, and data-backed strategies to help your brand stand out.",
  openGraph: {
    title: "Groadvertx — Branding, Creatives & Digital Marketing | Regendz IT",
    description:
      "Brands that make an impact. Bold branding, creative content, and digital marketing by Groadvertx — a Regendz IT brand.",
    type: "website",
  },
};

export default function Groadvertx() {
  return <GroadvertxPage />;
}
