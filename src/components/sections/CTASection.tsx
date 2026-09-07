import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { CTA } from "@/types";

export function CTASection({
  title,
  description,
  ctaPrimary,
  ctaSecondary,
}: {
  title: string;
  description?: string;
  ctaPrimary: CTA;
  ctaSecondary?: CTA;
}) {
  let mainTitle = title;
  let badgeText = "";
  let suffixText = "";
  if (title && title.includes("[") && title.includes("]")) {
    const match = title.match(/^(.*?)\[(.*?)\](.*)$/);
    if (match) {
      mainTitle = match[1]?.trim() ?? "";
      badgeText = match[2]?.trim() ?? "";
      suffixText = match[3]?.trim() ?? "";
    }
  }

  return (
    <section className="section-space">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-ink)] px-8 py-14 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(60% 100% at 50% 0%, rgba(229,35,27,0.35), transparent)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-white tracking-[-0.025em]">
              {badgeText ? (
                <>
                  {mainTitle && <span>{mainTitle} </span>}
                  <span className="text-[#e5231b]">{badgeText}</span>
                  {suffixText && <span> {suffixText}</span>}
                </>
              ) : (
                title
              )}
            </h2>
            {description && (
              <p className="mx-auto mt-4 max-w-xl text-[var(--fs-lg)] text-white/70">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={ctaPrimary.href}>{ctaPrimary.label}</Button>
              {ctaSecondary && (
                <Button href={ctaSecondary.href} variant="secondary" className="bg-transparent text-white border-white/30 hover:border-white">
                  {ctaSecondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
