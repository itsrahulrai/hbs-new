import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { marketingBanner } from "@/data/banners";

export function MarketingBanner() {
  return (
    <section className="section-space">
      <Container className="grid gap-12 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:p-12">
        <div>
          <h2 className="font-display text-[var(--fs-3xl)] font-bold text-[var(--color-ink)]">
            {marketingBanner.headline}
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em] text-[var(--color-primary)]">
            {marketingBanner.subheading}
          </p>
          <p className="mt-4 max-w-lg text-[var(--fs-base)] text-[var(--color-text-muted)]">
            {marketingBanner.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Button href={marketingBanner.ctaPrimary.href}>{marketingBanner.ctaPrimary.label}</Button>
            <Button href={marketingBanner.ctaSecondary.href} variant="secondary">
              {marketingBanner.ctaSecondary.label}
            </Button>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-4">
            {marketingBanner.bottomStats.map((stat) => (
              <div key={stat.label} className="rounded-[var(--radius-md)] bg-[var(--color-surface)] p-4">
                <p className="flex items-center gap-1 font-display text-[var(--fs-lg)] font-bold text-[var(--color-primary)]">
                  <Icon name="trend" size={16} /> {stat.value}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[var(--radius-lg)] bg-[var(--color-ink)] p-6 text-white">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 font-semibold">
              <Icon name="seo" size={16} className="text-[var(--color-primary)]" /> Google Ranking
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
              {marketingBanner.dashboard.ranking}
            </span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-[var(--radius-sm)] bg-white/5 p-3">
              <p className="text-xs text-white/50">Sessions</p>
              <p className="font-display text-[var(--fs-lg)] font-bold">
                {marketingBanner.dashboard.sessions}
              </p>
            </div>
            <div className="rounded-[var(--radius-sm)] bg-white/5 p-3">
              <p className="text-xs text-white/50">Conversions</p>
              <p className="font-display text-[var(--fs-lg)] font-bold">
                {marketingBanner.dashboard.conversions}
              </p>
            </div>
          </div>
          <div className="mt-3 rounded-[var(--radius-sm)] bg-white/5 p-3">
            <p className="text-xs text-white/50">Leads</p>
            <div className="flex items-baseline gap-2">
              <p className="font-display text-[var(--fs-lg)] font-bold">
                {marketingBanner.dashboard.leads}
              </p>
              <span className="text-xs font-semibold text-[var(--color-success)]">
                {marketingBanner.dashboard.leadsChange}
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-white/50">
            <span className="flex items-center gap-1"><Icon name="social" size={13} /> Meta Ads</span>
            <span className="flex items-center gap-1"><Icon name="content" size={13} /> Content Marketing</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
