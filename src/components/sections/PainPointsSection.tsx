import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

const problems: { title: string; description: string; cta: string; href: string; icon: IconName }[] = [
  {
    title: "Not Getting Enough Visibility?",
    description:
      "We identify opportunities across SEO, local search, content, paid marketing, and AI-powered discovery to help your business become easier to find.",
    cta: "Improve Your Visibility",
    href: "/digital-marketing",
    icon: "globe",
  },
  {
    title: "Getting Traffic But Not Enough Leads?",
    description:
      "The problem may not be traffic. Your website, messaging, landing pages, offers, or customer journey may be creating conversion barriers — we look at the complete journey.",
    cta: "Improve Your Conversions",
    href: "/web-app-development",
    icon: "trend",
  },
  {
    title: "Spending Too Much on Advertising?",
    description:
      "We examine targeting, campaign structure, creative, landing pages, audience quality, tracking, and performance data to find opportunities for greater efficiency.",
    cta: "Optimise Your Paid Campaigns",
    href: "/digital-marketing",
    icon: "ads",
  },
  {
    title: "Unsure Which Digital Strategy You Need?",
    description:
      "You don't necessarily need every service. We assess your business, audience, competition, and objectives to identify where your investment can have the greatest impact.",
    cta: "Build Your Growth Strategy",
    href: "/contact",
    icon: "info",
  },
  {
    title: "Losing Visibility as Search Changes?",
    description:
      "Traditional search is evolving alongside AI-powered discovery. We help strengthen your SEO foundations while preparing for new ways customers discover and evaluate brands.",
    cta: "Prepare for the Future of Search",
    href: "/digital-marketing",
    icon: "ai",
  },
];

export function PainPointsSection() {
  return (
    <section className="section-space bg-[var(--color-surface)]">
      <Container>
        <SectionHeading
          eyebrow="What's Holding Your Digital Growth Back?"
          title="We help identify what's getting in the way"
          description="You may know you need to improve your digital presence, but the real problem isn't always obvious."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Icon name={problem.icon} size={20} />
              </span>
              <h3 className="mt-5 font-display text-[var(--fs-lg)] font-semibold text-[var(--color-ink)]">
                {problem.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-[var(--color-text-muted)]">{problem.description}</p>
              <Link
                href={problem.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
              >
                {problem.cta} <Icon name="arrowRight" size={15} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
