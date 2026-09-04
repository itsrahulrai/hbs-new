import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

const stages: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Start",
    description:
      "Build a strong digital foundation with the right website, positioning, search visibility, content, and customer experience.",
    icon: "rocket",
  },
  {
    title: "Grow",
    description:
      "Increase visibility, generate qualified leads, improve conversions, and build stronger digital acquisition channels.",
    icon: "trend",
  },
  {
    title: "Scale",
    description:
      "Connect marketing, technology, creative, data, AI, and automation to support more complex growth requirements.",
    icon: "package",
  },
];

export function GrowthStagesSection() {
  return (
    <section className="section-space bg-[var(--color-surface)]">
      <Container>
        <SectionHeading
          eyebrow="Digital Solutions for Every Stage of Growth"
          title="Your digital requirements change as your business grows"
          description="Whether you're a local business, growing company, established organisation, or ambitious digital brand, our approach adapts around your objectives."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stages.map((stage, index) => (
            <div
              key={stage.title}
              className="relative rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-ink)] text-white">
                <Icon name={stage.icon} size={20} />
              </span>
              <h3 className="mt-5 font-display text-[var(--fs-xl)] font-bold text-[var(--color-ink)]">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">{stage.description}</p>
              {index < stages.length - 1 && (
                <Icon
                  name="arrowRight"
                  size={18}
                  className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[var(--color-primary)] md:block"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
