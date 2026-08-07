import { Container } from "@/components/ui/Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)] pb-14 pt-[calc(var(--space-section)*0.6)]">
      <Container>
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          {eyebrow}
        </span>
        <h1 className="max-w-3xl font-display text-[var(--fs-4xl)] font-bold text-[var(--color-ink)]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[var(--fs-lg)] text-[var(--color-text-muted)]">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
