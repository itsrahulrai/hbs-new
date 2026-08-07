import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import type { MenuColumn, MenuLink } from "@/data/navigation";
import type { CTA } from "@/types";

export function ServiceDetailTemplate({
  crumbs,
  eyebrow,
  title,
  column,
  currentHref,
  ctaPrimary,
  ctaSecondary,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  column: MenuColumn;
  currentHref: string;
  ctaPrimary: CTA;
  ctaSecondary?: CTA;
}) {
  const related = column.links.filter((link: MenuLink) => link.href !== currentHref);

  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] pb-14 pt-[calc(var(--space-section)*0.55)]">
        <Container>
          <Breadcrumbs items={crumbs} />
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            {column.icon && <Icon name={column.icon as never} size={14} />}
            {eyebrow}
          </span>
          <h1 className="max-w-3xl font-display text-[var(--fs-4xl)] font-bold text-[var(--color-ink)]">
            {title}
          </h1>
        </Container>
      </section>

      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.6fr]">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-8">
            <h2 className="font-display text-[var(--fs-xl)] font-semibold text-[var(--color-ink)]">
              What&rsquo;s included
            </h2>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              Tell us about your goals for {title.toLowerCase()} and we&rsquo;ll put
              together a scope, timeline, and quote tailored to your business.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
            >
              Request a proposal <Icon name="arrowRight" size={15} />
            </Link>
          </div>

          {related.length > 0 && (
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                More in {column.heading}
              </p>
              <ul className="space-y-2.5">
                {related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-[var(--color-text)] hover:text-[var(--color-primary)]"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--color-neutral-400)] group-hover:bg-[var(--color-primary)]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>

      <CTASection
        title={`Ready to get started with ${title}?`}
        ctaPrimary={ctaPrimary}
        ctaSecondary={ctaSecondary}
      />
    </>
  );
}
