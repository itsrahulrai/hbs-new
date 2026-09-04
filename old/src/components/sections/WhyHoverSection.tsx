import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

const reasons: { title: string; description: string; icon: IconName }[] = [
  {
    title: "One Partner, Connected Expertise",
    description:
      "Marketing brings the right people in. Technology creates the right experience. Creative makes your brand stand out. AI helps you adapt and work smarter — together, in one connected system.",
    icon: "people",
  },
  {
    title: "Results-Driven Strategies",
    description:
      "We begin with your business objective rather than a list of services, and build the strategy around the outcome you want — visibility, leads, sales, bookings, or brand presence.",
    icon: "trend",
  },
  {
    title: "Data-Backed Decisions",
    description:
      "We use performance data and audience insights to understand what is working, identify opportunities, and make informed decisions. Your strategy evolves with the evidence.",
    icon: "info",
  },
  {
    title: "AI-Enabled Innovation",
    description:
      "We focus on practical applications of AI that create real value for your business — not AI simply because it's a trend.",
    icon: "ai",
  },
  {
    title: "Integrated Expertise",
    description:
      "Your SEO strategy understands your website. Your website understands conversion. Your creative understands your marketing objective. That's the advantage of connected expertise.",
    icon: "package",
  },
  {
    title: "Transparent Communication",
    description:
      "You should know what you're investing in, what's being worked on, what's changing, and how your strategy is performing. Clear communication, meaningful reporting.",
    icon: "check",
  },
  {
    title: "Ongoing Support",
    description:
      "Digital growth doesn't stop after launch. Your customers, competition, search, and technology keep changing — we help you adapt and find new opportunities over time.",
    icon: "renew",
  },
];

export function WhyHoverSection() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Why Hover?"
          title="Choosing a digital partner is a business decision"
          description="You're investing your budget, data, time, and expectations into your digital growth. You need a partner who understands the bigger picture and connects strategy with execution."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Icon name={reason.icon} size={18} />
              </span>
              <h3 className="mt-4 font-display text-[var(--fs-lg)] font-semibold text-[var(--color-ink)]">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
