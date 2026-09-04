import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, audience, industry, competitors, current digital presence, challenges, and goals.",
  },
  {
    number: "02",
    title: "Analyse",
    description:
      "We identify strengths, weaknesses, missed opportunities, technical issues, visibility gaps, and conversion barriers.",
  },
  {
    number: "03",
    title: "Strategise",
    description:
      "We create a practical roadmap based on your priorities — SEO, AI Search, paid marketing, content, development, creative, analytics, or other capabilities.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "Our teams turn strategy into action through campaigns, content, websites, applications, creative assets, and ongoing optimisation.",
  },
  {
    number: "05",
    title: "Measure",
    description:
      "We track meaningful performance indicators and evaluate how your digital activities contribute to your business objectives.",
  },
  {
    number: "06",
    title: "Optimise",
    description:
      "We continuously refine the strategy based on performance, audience behaviour, market changes, competition, and new opportunities.",
  },
];

export function ProcessSection() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Our Approach"
          title="Every business starts from a different position"
          description="That is why we do not force every client into the same strategy. The result is a digital growth process designed to improve over time."
        />
        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-16">
              <span className="absolute left-0 top-0 font-display text-[var(--fs-3xl)] font-bold text-[var(--color-primary-soft)]">
                {step.number}
              </span>
              <h3 className="font-display text-[var(--fs-lg)] font-semibold text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
