import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { getCategorySlugs, resolveSubPage } from "@/lib/sub-pages";

const CATEGORY = "About Us";

export function generateStaticParams() {
  return getCategorySlugs(CATEGORY).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveSubPage(CATEGORY, slug);
  if (!resolved) return {};
  return {
    title: resolved.link.label,
    description: `${resolved.link.label} — Hover Business Services LLP.`,
  };
}

export default async function AboutSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolved = resolveSubPage(CATEGORY, slug);
  if (!resolved) notFound();
  const { link, column } = resolved;

  return (
    <ServiceDetailTemplate
      crumbs={[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: link.label, href: link.href },
      ]}
      eyebrow="About Us"
      title={link.label}
      column={column}
      currentHref={link.href}
      ctaPrimary={{ label: "Contact Us", href: "/contact" }}
    />
  );
}
