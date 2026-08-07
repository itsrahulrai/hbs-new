import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { primaryNav } from "@/data/navigation";

const serviceCategories = primaryNav.filter((item) =>
  ["Digital Marketing", "Web & App Development", "Creative & Design"].includes(item.label)
);

export function ServicesOverview() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Full-funnel digital growth, under one roof"
          description="AI-powered marketing, engineering, and creative — built to work together, not in silos."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceCategories.map((category) => (
            <div
              key={category.label}
              className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Icon name={(category.columns?.[0]?.icon ?? "ai") as never} size={20} />
              </span>
              <h3 className="mt-5 font-display text-[var(--fs-xl)] font-semibold text-[var(--color-ink)]">
                {category.label}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
                {category.columns?.slice(0, 4).map((column) => (
                  <li key={column.heading} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
                    {column.heading}
                  </li>
                ))}
              </ul>
              <Link
                href={category.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
              >
                Explore {category.label} <Icon name="arrowRight" size={15} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
