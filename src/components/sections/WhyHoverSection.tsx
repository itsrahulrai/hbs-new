import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";

const reasons: { title: string; description: string; icon: IconName; builtAround: string; metric?: string }[] = [
  {
    title: "Results-Driven Approach",
    description:
      "We don't just do campaigns and provide digital materials. We aim to achieve results that will be valuable for your business — increased visibility and qualified leads, engagement, and conversion.",
    icon: "trend",
    builtAround: "Measurable Growth",
    metric: "Boost ROI by 250%",
  },
  {
    title: "Digital Experiences That Convert",
    description:
      "Having people visit your site is not enough. Our team develops strategies and digital experiences to attract relevant audiences and drive them towards actions.",
    icon: "people",
    builtAround: "Better Conversion Opportunities",
    metric: "3X Higher Conversion Rate",
  },
  {
    title: "Customized Digital Strategy",
    description:
      "Each business, target audience, industry, and competition are unique. We take into account all of them to create a digital strategy for your company instead of providing cookie-cutter solutions.",
    icon: "package",
    builtAround: "Clear Strategic Direction",
    metric: "Strategic Clarity",
  },
  {
    title: "AI-Powered Visibility",
    description:
      "AI and the emergence of new platforms are changing the ways businesses become discovered by people. We help companies change their visibility strategy to stay discoverable, relevant, and competitive.",
    icon: "ai",
    builtAround: "Future-Ready Digital Growth",
    metric: "AI-Ready · Future-Ready Brand",
  },
  {
    title: "Strategy, Technology & Creativity Together",
    description:
      "By combining marketing expertise, technological skills, and creativity, digital growth gets a boost. We unite all these aspects in one company and help build connected digital experiences instead of managing disconnected solutions.",
    icon: "creative",
    builtAround: "One Connected Growth Partner",
  },
  {
    title: "Built for Long-Term Growth",
    description:
      "Our approach goes beyond quick wins. It evolves along with your business and uses performance data, changes in customer behavior, and new opportunities.",
    icon: "renew",
    builtAround: "Sustainable Business Growth",
  },
];

export function WhyHoverSection() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose Hover Business Services for Your Digital Growth?"
          description="Digital growth needs more than individual services. It needs the right strategy, execution, technology, and creative thinking working together — aligned with your business goals and built for measurable, sustainable growth."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                  <Icon name={reason.icon} size={18} />
                </span>
                <span className="font-display text-[var(--fs-lg)] font-bold text-[var(--color-border)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[var(--fs-lg)] font-semibold text-[var(--color-ink)]">
                {reason.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)]">{reason.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-text-muted)]">
                  Built around: {reason.builtAround}
                </span>
                {reason.metric && (
                  <span className="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
                    {reason.metric}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
