"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

const faqs = [
  {
    q: "What does Hover Business Services LLP do?",
    a: "Hover Business Services LLP provides integrated digital growth solutions across digital marketing, technology, AI, and creative — including SEO, AI Search & Visibility, Content & Digital Authority, Paid Marketing, Website Development, Website Design, E-commerce Development, Mobile App Development, and Creative Studio services.",
  },
  {
    q: "How can Hover help my business generate more leads?",
    a: "Lead generation depends on more than traffic. We look at visibility, audience targeting, messaging, website experience, landing pages, conversion opportunities, and the overall customer journey, then build a strategy designed to attract relevant prospects and guide them towards meaningful action.",
  },
  {
    q: "Do you provide SEO services?",
    a: "Yes. SEO is one of our core digital marketing capabilities. Depending on your requirements, our approach can include technical optimisation, content strategy, search intent analysis, website optimisation, local SEO, authority building, and ongoing performance improvement.",
  },
  {
    q: "What is AI Search & Visibility?",
    a: "AI Search & Visibility focuses on helping businesses remain discoverable as customers increasingly use AI-powered search and answer platforms alongside traditional search engines. It complements conventional SEO by considering how information about your business is structured, presented, discovered, and understood.",
  },
  {
    q: "Can you develop a website and handle its marketing?",
    a: "Yes. Having marketing and technology capabilities within the same organisation allows your website to be planned with SEO, conversion, user experience, content, analytics, and future marketing requirements in mind from the beginning.",
  },
  {
    q: "Do you work with e-commerce businesses?",
    a: "Yes. E-commerce businesses can benefit from a combination of website development, SEO, AI Search & Visibility, paid marketing, content, creative, and conversion-focused strategies. The right combination depends on your products, audience, competition, platform, and growth objectives.",
  },
  {
    q: "Can you help local businesses?",
    a: "Yes. Local businesses can use digital marketing to improve visibility among customers searching within their service areas — including local SEO, website optimisation, content, paid advertising, social media, and conversion-focused landing pages.",
  },
  {
    q: "How do you decide which services my business needs?",
    a: "We start with your goals rather than assuming you need every service. We assess your current digital presence, audience, competitors, existing marketing activities, opportunities, and challenges, then prioritise the channels most relevant to your objectives.",
  },
  {
    q: "How long does digital marketing take to produce results?",
    a: "There is no single timeline for every business. Paid campaigns can generate traffic and enquiries relatively quickly, while SEO and organic growth generally require consistent work over a longer period. We establish realistic milestones and measure progress against meaningful business objectives.",
  },
  {
    q: "Why choose Hover instead of separate agencies?",
    a: "When marketing, technology, and creative teams operate separately, important parts of the customer journey can become disconnected. Hover brings these capabilities together so your strategy, website experience, technology, and creative direction work towards the same goal.",
  },
  {
    q: "Can you create a digital strategy for a new business?",
    a: "Yes. New businesses often need to establish a strong digital foundation before scaling acquisition — including positioning, website development, SEO foundations, content, creative, paid acquisition, AI Search & Visibility, analytics, and other channels depending on the business model.",
  },
  {
    q: "How do I get started?",
    a: "Start by telling us about your business, current challenges, and growth objectives. We will help you understand where you stand today, identify potential opportunities, and determine what a suitable digital growth strategy could look like.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-space bg-[var(--color-surface)]">
      <Container>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Answers before you ask"
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--color-border)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-[var(--fs-base)] font-semibold text-[var(--color-ink)]">
                    {faq.q}
                  </span>
                  <Icon
                    name="chevronDown"
                    size={18}
                    className={cn(
                      "shrink-0 text-[var(--color-primary)] transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm text-[var(--color-text-muted)]">{faq.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
