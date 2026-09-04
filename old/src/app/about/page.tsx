import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { primaryNav } from "@/data/navigation";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hover Business Services LLP — our story, our team, case studies, client reviews, awards, and careers.",
};

const aboutLinks = primaryNav.find((item) => item.label === "About Us")?.columns?.[0]?.links ?? [];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The team behind your growth"
        description="Hover Business Services LLP is an AI-powered digital marketing, web development, and creative design partner for businesses across India."
      />
      <section className="section-space">
        <Container className="grid gap-6 md:grid-cols-2">
          {aboutLinks.map((link) => {
            const id = link.href.split("#")[1];
            return (
              <div
                key={link.label}
                id={id}
                className="scroll-mt-28 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                  <Icon name="info" size={18} />
                </span>
                <h2 className="mt-4 font-display text-[var(--fs-xl)] font-semibold text-[var(--color-ink)]">
                  {link.label}
                </h2>
              </div>
            );
          })}
        </Container>
      </section>
      <CTASection
        title="Want to know more about how we work?"
        description="Get in touch and we'll walk you through our process, our team, and our results."
        ctaPrimary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
