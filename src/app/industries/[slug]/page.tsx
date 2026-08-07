import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/sections/ServiceDetailTemplate";
import { getCategorySlugs, resolveSubPage } from "@/lib/sub-pages";

const CATEGORY = "Industries";

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
    title: `${resolved.link.label} Digital Marketing`,
    description: `Digital marketing, web development, and creative services for ${resolved.link.label.toLowerCase()} businesses from Hover Business Services LLP.`,
  };
}

export default async function IndustryPage({
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
        { label: "Industries", href: "/industries" },
        { label: link.label, href: link.href },
      ]}
      eyebrow={column.heading}
      title={link.label}
      column={column}
      currentHref={link.href}
      ctaPrimary={{ label: "Contact Us", href: "/contact" }}
    />
  );
}
