import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { primaryNav } from "@/data/navigation";

const industries = primaryNav.find((item) => item.label === "Industries")?.columns ?? [];

export function IndustriesOverview() {
  return (
    <section className="section-space bg-[var(--color-surface)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Industries"
            title="Strategies built for how your industry actually sells"
          />
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
          >
            View all industries <Icon name="arrowRight" size={15} />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <Link
              href={`/industries#${industry.links[0]?.href.split("#")[1] ?? ""}`}
              key={industry.heading}
              className="group rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 transition-colors hover:border-[var(--color-primary)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Icon name={(industry.icon ?? "globe") as never} size={18} />
              </span>
              <h3 className="mt-4 font-display text-[var(--fs-base)] font-semibold text-[var(--color-ink)]">
                {industry.heading}
              </h3>
              <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                {industry.links.slice(0, 3).map((l) => l.label).join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
