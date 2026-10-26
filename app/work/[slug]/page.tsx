import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TEMPLATES } from "@/lib/templatesData";
import CaseStudyDetailClient from "@/components/CaseStudyDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "launch-presence" },
    { slug: "corporate-system" },
    { slug: "commerce-engine" },
    { slug: "demand-engine" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = TEMPLATES[slug];

  if (!template) {
    return {
      title: "Template Not Found — Regendz IT",
    };
  }

  return {
    title: `${template.title} — Demo Template Showcase`,
    description: template.overview,
    openGraph: {
      title: `${template.title} — Demo Template | Regendz IT`,
      description: template.tagline,
      type: "website",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const template = TEMPLATES[slug];

  if (!template) {
    notFound();
  }

  return <CaseStudyDetailClient slug={slug} />;
}
