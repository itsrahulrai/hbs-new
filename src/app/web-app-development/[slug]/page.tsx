import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { getCategorySlugs, resolveSubPage } from "@/lib/sub-pages";

const CATEGORY = "Web & App Development";

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
    description: `${resolved.link.label} from Hover Business Services LLP — part of our ${resolved.column.heading} offering.`,
  };
}

export default async function WebAppDevelopmentServicePage({
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
        { label: "Web & App Development", href: "/web-app-development" },
        { label: link.label, href: link.href },
      ]}
      eyebrow={column.heading}
      title={link.label}
      column={column}
      currentHref={link.href}
      ctaPrimary={{ label: "Get Free Website Audit", href: "/contact" }}
      ctaSecondary={{ label: "Talk to Expert", href: "/contact" }}
    />
  );
}
