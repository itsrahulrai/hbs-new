import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { getCategorySlugs, resolveSubPage } from "@/lib/sub-pages";

const CATEGORY = "Creative & Design";

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
    description: `${resolved.link.label} from the Hover Business Services Creative Studio.`,
  };
}

export default async function CreativeDesignServicePage({
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
        { label: "Creative & Design", href: "/creative-design" },
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
