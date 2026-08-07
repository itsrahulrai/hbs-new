import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Testimonial } from "@/components/shared/Testimonial";
import { ClientLogos } from "@/components/shared/ClientLogos";
import { StatBar } from "@/components/shared/StatBar";
import { trustBanner } from "@/data/banners";

const statIcons = ["trophy", "people", "globe", "star", "renew", "trend"];

export function TrustBanner() {
  const stats = trustBanner.stats.map((stat, i) => ({
    ...stat,
    icon: statIcons[i],
  }));

  return (
    <section className="section-space bg-[var(--color-background)]">
      <Container>
        <div className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-ink)] p-6 sm:p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <h2 className="font-display text-[var(--fs-3xl)] font-bold text-white">
                {trustBanner.headline}
              </h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em] text-[var(--color-primary)]">
                {trustBanner.subheading}
              </p>
              <div className="mt-6">
                <Testimonial {...trustBanner.testimonial} variant="dark" />
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href={trustBanner.ctaPrimary.href}>{trustBanner.ctaPrimary.label}</Button>
                <Button href={trustBanner.ctaSecondary.href} variant="outlineDark">
                  {trustBanner.ctaSecondary.label}
                </Button>
              </div>
            </div>

            <div>
              <StatBar stats={stats} variant="dark" />
            </div>
          </div>

          <div className="mt-10">
            <ClientLogos heading="Trusted by Leading Brands Across India" logos={trustBanner.clientLogos} />
          </div>
        </div>
      </Container>
    </section>
  );
}
