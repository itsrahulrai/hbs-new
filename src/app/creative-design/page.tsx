import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { ColumnCard } from "@/components/cards/ColumnCard";
import { primaryNav } from "@/data/navigation";
import { slugify } from "@/lib/slug";

export const metadata: Metadata = {
  title: "Creative & Design",
  description:
    "Logo design, graphic design, video editing, social media creatives, UI/UX design, and product packaging design from our Creative Studio.",
};

const columns = primaryNav.find((item) => item.label === "Creative & Design")?.columns ?? [];

export default function CreativeDesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Creative & Design"
        title="Design that makes your brand unmistakable"
        description="Our Creative Studio brings your brand to life across every touchpoint — from logo to packaging."
      />
      <section className="section-space">
        <Container className="grid gap-6 md:grid-cols-2">
          {columns.map((column) => (
            <ColumnCard key={column.heading} column={column} id={slugify(column.heading)} />
          ))}
        </Container>
      </section>
      <CTASection
        title="Ready to refresh your brand?"
        description="Share your brief and our Creative Studio will get back to you with a plan."
        ctaPrimary={{ label: "Get Free Website Audit", href: "/contact" }}
        ctaSecondary={{ label: "Talk to Expert", href: "/contact" }}
      />
    </>
  );
}
