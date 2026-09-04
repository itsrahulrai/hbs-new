import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { ColumnCard } from "@/components/cards/ColumnCard";
import { primaryNav } from "@/data/navigation";
import { slugify } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "AI search visibility, SEO, content & link building, paid marketing, social media, and packages — full-funnel digital marketing services from Hover Business Services.",
};

const columns = primaryNav.find((item) => item.label === "Digital Marketing")?.columns ?? [];

export default function DigitalMarketingPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Marketing"
        title="AI-powered digital marketing that compounds"
        description="From AI search visibility to performance marketing and social — every service works together to rank you higher and generate more leads."
      />
      <section className="section-space">
        <Container className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {columns.map((column) => (
            <ColumnCard key={column.heading} column={column} id={slugify(column.heading)} />
          ))}
        </Container>
      </section>
      <CTASection
        title="Not sure which service is right for you?"
        description="Get a free website audit and a custom digital marketing plan."
        ctaPrimary={{ label: "Get Free Website Audit", href: "/contact" }}
        ctaSecondary={{ label: "Talk to Expert", href: "/contact" }}
      />
    </>
  );
}
