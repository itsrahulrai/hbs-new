import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { reviewsSection } from "@/data/banners";

export function ReviewsSection() {
  return (
    <section className="section-space bg-[var(--color-surface)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={reviewsSection.eyebrow}
            title={reviewsSection.title}
            description={reviewsSection.description}
          />
          <div className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-5 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
              <Icon name="star" size={18} />
            </span>
            <div>
              <p className="font-display text-[var(--fs-lg)] font-bold text-[var(--color-ink)]">
                {reviewsSection.googleRating.value}
                <span className="text-[var(--fs-sm)] font-normal text-[var(--color-text-muted)]"> / 5</span>
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">Google Reviews · {reviewsSection.googleRating.reviews}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {reviewsSection.testimonials.map((t) => (
            <figure
              key={t.source}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-7"
            >
              <div className="flex gap-1 text-[var(--color-primary)]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Icon key={i} name="star" size={14} />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-[var(--color-text)]">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-[var(--color-ink)]">{t.source}</span>
                <span className="text-[var(--color-text-muted)]"> — {t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-8 rounded-[var(--radius-lg)] bg-[var(--color-ink)] p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
              Serving Clients Across India &amp; Globally
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {reviewsSection.locations.map((loc) => (
                <div key={loc.city} className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-sm font-semibold text-white">{loc.city}</p>
                  <p className="text-xs text-white/60">{loc.tag}</p>
                </div>
              ))}
            </div>
          </div>
          <Button href="/about" variant="outlineDark" className="shrink-0">
            Our Locations
          </Button>
        </div>

        <div className="mt-10 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-8 text-center sm:p-10">
          <h3 className="font-display text-[var(--fs-2xl)] font-bold text-[var(--color-ink)]">
            {reviewsSection.cta.title}
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-[var(--fs-base)] text-[var(--color-text-muted)]">
            {reviewsSection.cta.description}
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={reviewsSection.cta.ctaPrimary.href}>{reviewsSection.cta.ctaPrimary.label}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
