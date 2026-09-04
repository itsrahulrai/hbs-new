import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";

const metrics = [
  "Organic visibility",
  "Search rankings",
  "Qualified website traffic",
  "Leads and enquiries",
  "Conversion rates",
  "Advertising performance",
  "Customer acquisition",
  "Website engagement",
  "Online sales",
  "Bookings and appointments",
  "Brand visibility",
];

const brandElements = [
  "Search presence",
  "Website",
  "Content",
  "Social media",
  "Advertising",
  "Creative",
  "Brand identity",
  "Customer experience",
];

export function MeasurableGrowthSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Build a Brand People Can Find, Trust & Remember"
              title="Being visible is not enough"
              description="Customers need to understand what you offer, believe you can solve their problem, and have a reason to choose you over competitors."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {brandElements.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-2 text-sm text-[var(--color-text)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-6 font-display text-[var(--fs-lg)] font-semibold text-[var(--color-ink)]">
              Visible. Relevant. Credible. Engaging.{" "}
              <span className="text-[var(--color-primary)]">Conversion-Focused.</span>
            </p>
          </div>

          <div>
            <SectionHeading
              eyebrow="Growth Should Be Measurable"
              title="We measure what matters to your business"
              description="Digital marketing should not leave you wondering where your investment went. Depending on your objectives, we focus on meaningful indicators."
            />
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-[var(--color-text)]">
              {metrics.map((metric) => (
                <li key={metric} className="flex items-center gap-2">
                  <Icon name="check" size={14} className="shrink-0 text-[var(--color-primary)]" />
                  {metric}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
