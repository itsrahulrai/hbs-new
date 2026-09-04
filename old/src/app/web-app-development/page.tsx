import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { ColumnCard } from "@/components/cards/ColumnCard";
import { primaryNav } from "@/data/navigation";
import { slugify } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Web & App Development",
  description:
    "Custom website development, website designing, ecommerce, and mobile app development services from Hover Business Services.",
};

const columns =
  primaryNav.find((item) => item.label === "Web & App Development")?.columns ?? [];

export default function WebAppDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Web & App Development"
        title="Websites and apps engineered to convert"
        description="Custom development, design, ecommerce, and mobile apps — built fast, built to scale."
      />
      <section className="section-space">
        <Container className="grid gap-6 md:grid-cols-2">
          {columns.map((column) => (
            <ColumnCard key={column.heading} column={column} id={slugify(column.heading)} />
          ))}
        </Container>
      </section>
      <CTASection
        title="Have a website or app project in mind?"
        description="Tell us what you're building and we'll recommend the right stack and timeline."
        ctaPrimary={{ label: "Get Free Website Audit", href: "/contact" }}
        ctaSecondary={{ label: "Talk to Expert", href: "/contact" }}
      />
    </>
  );
}
