import type { Metadata } from "next";
import ForwaiPage from "@/components/brand/ForwaiPage";

export const metadata: Metadata = {
  title: "Forwai — Business Consultancy & Data Analytics",
  description:
    "Forwai is the business consultancy and data analytics vertical of Regendz IT. Less guessing, more knowing. Better decisions through data-driven strategy.",
  openGraph: {
    title: "Forwai — Business Consultancy & Data Analytics | Regendz IT",
    description:
      "Less guessing. More knowing. Better decisions. Business consultancy, growth strategy, and data analytics by Forwai — a Regendz IT brand.",
    type: "website",
  },
};

export default function Forwai() {
  return <ForwaiPage />;
}
