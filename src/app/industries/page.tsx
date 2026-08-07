import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { primaryNav } from "@/data/navigation";
import { slugify } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Healthcare & wellness, professional services, education & hospitality, real estate & industrial, and retail & lifestyle — industries served by Hover Business Services.",
};

const columns = primaryNav.find((item) => item.label === "Industries")?.columns ?? [];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industry playbooks, not one-size-fits-all templates"
        description="We tailor SEO, paid, content, and web strategy to how each industry actually finds and wins customers."
      />
      <section className="section-space">
        <Container className="grid gap-6 lg:grid-cols-2">
          {columns.map((column) => (
            <IndustryCard key={column.heading} column={column} id={slugify(column.heading)} />
          ))}
        </Container>
      </section>
      <CTASection
        title="Don't see your industry listed?"
        description="We work with businesses of every kind — tell us about yours."
        ctaPrimary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
