import type { Metadata } from "next";
import SlitcodePage from "@/components/brand/SlitcodePage";

export const metadata: Metadata = {
  title: "slitcode — Web & Software Development",
  description:
    "slitcode is the web & software development vertical of Regendz IT. We build high-performance websites, web applications, and custom digital solutions that work 24/7 for your business.",
  openGraph: {
    title: "slitcode — Web & Software Development | Regendz IT",
    description:
      "Build digital experiences that work. High-performance websites, web applications, and custom software by slitcode — a Regendz IT brand.",
    type: "website",
  },
};

export default function Slitcode() {
  return <SlitcodePage />;
}
