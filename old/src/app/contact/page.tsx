import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { preHeader } from "@/data/navigation";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hover Business Services LLP for a free website audit or a consultation on digital marketing, web development, or creative design.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your growth"
        description="Reach out for a free website audit, a proposal, or just to ask a question — our team responds fast."
      />
      <section className="section-space">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <a
              href={`tel:${preHeader.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 hover:border-[var(--color-primary)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Icon name="phone" size={18} />
              </span>
              <div>
                <p className="text-xs text-[var(--color-text-muted)]">Call us</p>
                <p className="font-semibold text-[var(--color-ink)]">{preHeader.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${preHeader.email}`}
              className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5 hover:border-[var(--color-primary)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Icon name="mail" size={18} />
              </span>
              <div>
                <p className="text-xs text-[var(--color-text-muted)]">Email us</p>
                <p className="font-semibold text-[var(--color-ink)]">{preHeader.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <Icon name="whatsapp" size={18} />
              </span>
              <div>
                <p className="text-xs text-[var(--color-text-muted)]">WhatsApp</p>
                <p className="font-semibold text-[var(--color-ink)]">{preHeader.whatsapp}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {preHeader.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <Icon name={social.icon as never} size={16} />
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
