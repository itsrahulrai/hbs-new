"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import type { IconName } from "@/components/ui/Icon";

type Service = {
  name: string;
  icon: IconName;
  intro: string;
  points: string[];
  outcome: string;
  href: string;
};

type Pillar = {
  label: string;
  intro: string;
  services: Service[];
};

const pillars: Pillar[] = [
  {
    label: "Digital Marketing",
    intro:
      "Build visibility, attract the right audience, and create meaningful opportunities for growth through connected digital marketing strategies.",
    services: [
      {
        name: "SEO",
        icon: "seo",
        intro:
          "Improve your organic visibility by targeting the searches that matter to your business — considering intent, technical performance, structure, content quality, competition, local visibility, and authority.",
        points: [
          "Higher organic visibility",
          "Better search rankings",
          "More relevant website traffic",
          "Stronger local search presence",
          "More qualified leads",
        ],
        outcome: "We focus on attracting the right traffic, not simply increasing traffic numbers.",
        href: "/digital-marketing",
      },
      {
        name: "AI Search & Visibility",
        icon: "ai",
        intro:
          "People are increasingly using AI-powered platforms alongside traditional search engines to research businesses, compare products, and discover solutions.",
        points: [
          "Useful, authoritative content",
          "Structured digital assets",
          "Strong brand signals",
          "Readiness for AI-powered discovery",
        ],
        outcome: "Make your business easier to find wherever your customers are searching.",
        href: "/digital-marketing",
      },
      {
        name: "Content & Digital Authority",
        icon: "content",
        intro:
          "Great content gives people a reason to discover your business, understand your expertise, trust your brand, and take action.",
        points: [
          "Relevance",
          "Quality",
          "Search intent",
          "Expertise",
          "Consistency",
          "Long-term value",
        ],
        outcome: "Content and authority-building designed around your audience and business objectives.",
        href: "/digital-marketing",
      },
      {
        name: "Paid Marketing",
        icon: "ads",
        intro:
          "When you need to reach the right audience faster, paid advertising puts your business in front of high-intent users.",
        points: [
          "Audience targeting & campaign structure",
          "Ad messaging & creative",
          "Landing pages & budget allocation",
          "Conversion tracking & optimisation",
        ],
        outcome: "We focus on leads, calls, enquiries, purchases, bookings and sales opportunities — not just clicks.",
        href: "/digital-marketing",
      },
    ],
  },
  {
    label: "Technology",
    intro:
      "Getting people to your website is only part of the challenge. Technology turns that traffic into action.",
    services: [
      {
        name: "Website Development",
        icon: "code",
        intro:
          "Websites designed around your business, customers, marketing strategy, and future growth — corporate, service, or lead-generation platforms.",
        points: [
          "Fast and responsive",
          "Mobile-friendly & search-friendly",
          "Secure and scalable",
          "Conversion-focused",
        ],
        outcome: "Your website should do more than exist online — it should work for your business.",
        href: "/web-app-development",
      },
      {
        name: "Website Design",
        icon: "design",
        intro:
          "Design shapes how customers experience your brand — clear layouts, intuitive navigation, compelling calls to action, and consistent presentation.",
        points: ["Understand", "Trust", "Engage", "Act"],
        outcome: "Great design is not only about looking good — it's about helping people move forward.",
        href: "/web-app-development",
      },
      {
        name: "E-commerce Development",
        icon: "ecommerce",
        intro:
          "Selling online requires more than displaying products — your customers need product discovery, comparison, checkout, and post-purchase interactions to feel simple.",
        points: [
          "Product discovery & easy navigation",
          "Mobile usability & smooth checkout",
          "Customer trust & conversion opportunities",
        ],
        outcome: "Whether launching or improving a store, we build around your customers.",
        href: "/web-app-development",
      },
      {
        name: "Mobile App Development",
        icon: "mobile",
        intro:
          "Mobile applications create more direct, personalised, and convenient ways for businesses to engage with customers.",
        points: ["Functionality & usability", "Performance & scalability", "Security", "Business objectives"],
        outcome: "The goal isn't simply to build an app — it's to build a product that solves a real problem.",
        href: "/web-app-development",
      },
    ],
  },
  {
    label: "Creative",
    intro:
      "Digital performance and creative presentation work together — marketing brings someone to your business, your brand experience influences what they remember.",
    services: [
      {
        name: "Creative Studio",
        icon: "creative",
        intro:
          "Visual communication aligned with your brand, audience, marketing objectives, and digital channels — from campaign creatives to brand-focused assets.",
        points: ["Get noticed", "Communicate clearly", "Build recognition", "Stay memorable"],
        outcome: "Your creative shouldn't simply look impressive — it should have a purpose.",
        href: "/creative-design",
      },
    ],
  },
];

export function ServicesDeepDive() {
  const [activePillar, setActivePillar] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const pillar = pillars[activePillar] ?? pillars[0]!;
  const service = pillar.services[activeService] ?? pillar.services[0]!;

  return (
    <section className="section-space bg-[var(--color-surface)]">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Every capability, connected around your growth"
          description={pillar.intro}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {pillars.map((p, index) => (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setActivePillar(index);
                setActiveService(0);
              }}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                index === activePillar
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                  : "border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-text)] hover:border-[var(--color-primary)]"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {pillar.services.map((s, index) => (
              <button
                key={s.name}
                type="button"
                onClick={() => setActiveService(index)}
                className={cn(
                  "flex shrink-0 items-center gap-3 rounded-[var(--radius-md)] border px-4 py-3 text-left text-sm font-semibold transition-colors lg:shrink lg:w-full",
                  index === activeService
                    ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-text)] hover:border-[var(--color-primary)]"
                )}
              >
                <Icon name={s.icon} size={18} />
                {s.name}
              </button>
            ))}
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
              <Icon name={service.icon} size={22} />
            </span>
            <h3 className="mt-5 font-display text-[var(--fs-2xl)] font-bold text-[var(--color-ink)]">
              {service.name}
            </h3>
            <p className="mt-3 text-[var(--fs-base)] text-[var(--color-text-muted)]">{service.intro}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-[var(--fs-lg)] font-semibold text-[var(--color-ink)]">
              {service.outcome}
            </p>
            <Link
              href={service.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
            >
              Explore {service.name} <Icon name="arrowRight" size={15} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
