"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Building2,
  Globe2,
  Headphones,
  HeartPulse,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Plane,
  Rocket,
  Send,
  ShoppingCart,
  Target,
  Compass,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { preHeader } from "@/data/navigation";
import { SocialBadge } from "./SocialBadge";

export function Footer() {
  const services = [
    { label: "Search Engine Optimization (SEO)", href: "/services/seo" },
    { label: "Social Media Marketing (SMM)", href: "/services/social-media-marketing" },
    { label: "Pay Per Click (PPC) Advertising", href: "/services/ppc" },
    { label: "Web & App Development", href: "/services/web-app-development" },
    { label: "Content Marketing", href: "/services/content-marketing" },
    { label: "AI Search & Visibility", href: "/services/ai-search-visibility" },
  ];

  const industries = [
    { label: "Healthcare", href: "/industries/healthcare", icon: HeartPulse },
    { label: "Education", href: "/industries/education", icon: BookOpen },
    { label: "E-commerce", href: "/industries/ecommerce", icon: ShoppingCart },
    { label: "Real Estate", href: "/industries/real-estate", icon: Building2 },
    { label: "Finance & Banking", href: "/industries/finance-banking", icon: Landmark },
    { label: "Travel & Hospitality", href: "/industries/travel-hospitality", icon: Plane },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blogs" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const offices = [
    {
      badgeLabel: "Head Office",
      city: "Delhi, India",
      sub: "India Headquarters",
      address: "916, 9th Floor, Tower-2, Pearls Omaxe, NSP, Pitampura, Delhi - 110034",
      href: "https://www.google.com/maps/place/Hover+Business+Services+LLP+%7C+Digital+Marketing+Agency+in+Delhi/@28.6905841,77.1517968,15z",
      cta: "View Location",
      icon: Building2,
      highlightText: "Primary HQ",
      // Card 1: Elegant Soft Red / Rose Theme
      cardBg: "bg-gradient-to-br from-white via-red-50/20 to-red-50/50 border-red-200/80 hover:border-red-300",
      iconBg: "bg-[#EF3037] text-white shadow-md shadow-red-500/20",
      tagColor: "bg-red-100 text-[#EF3037] border-red-200",
      accentBar: "bg-[#EF3037]",
      addressBox: "bg-white/80 border-red-100 text-[#334155]",
      ctaColor: "text-[#EF3037] hover:text-[#D9232A]",
    },
    {
      badgeLabel: "Branch Hub",
      city: "Delhi, India",
      sub: "NSP · Pitampura",
      address: "32, Second Floor, Pearls Omaxe, NSP, Pitampura, Delhi - 110034",
      href: "https://www.google.com/maps/place/Hover+Business+Services+LLP+%7C+Digital+Marketing+Agency+in+Delhi/@28.6905841,77.1517968,15z",
      cta: "View Location",
      icon: Compass,
      highlightText: "Tower-2 Branch",
      // Card 2: Warm Amber / Orange Theme
      cardBg: "bg-gradient-to-br from-white via-amber-50/20 to-amber-50/50 border-amber-200/80 hover:border-amber-300",
      iconBg: "bg-amber-500 text-white shadow-md shadow-amber-500/20",
      tagColor: "bg-amber-100 text-amber-800 border-amber-200",
      accentBar: "bg-amber-500",
      addressBox: "bg-white/80 border-amber-100 text-[#334155]",
      ctaColor: "text-amber-700 hover:text-amber-800",
    },
    {
      badgeLabel: "Global Office",
      city: "Auckland, New Zealand",
      sub: "International Presence",
      address: "529 Great South Road, Manukau City Centre, Auckland 2025, New Zealand",
      href: "https://hoverbusinessservices.com/",
      cta: "Visit Website",
      icon: Globe2,
      highlightText: "Global Hub",
      // Card 3: Deep Clean Blue / Cyan Theme
      cardBg: "bg-gradient-to-br from-white via-blue-50/20 to-blue-50/50 border-blue-200/80 hover:border-blue-300",
      iconBg: "bg-blue-600 text-white shadow-md shadow-blue-500/20",
      tagColor: "bg-blue-100 text-blue-800 border-blue-200",
      accentBar: "bg-blue-600",
      addressBox: "bg-white/80 border-blue-100 text-[#334155]",
      ctaColor: "text-blue-700 hover:text-blue-800",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-white text-[#111827]">
      {/* TOP RED ACCENT */}
      <div className="h-[3px] bg-[#EF3037]" />

      {/* TOP BENEFITS STRIP */}
      <div className="px-4 pt-7 sm:px-6 lg:px-8 lg:pt-9">
        <div className="mx-auto max-w-[1480px]">
          <div className="relative overflow-hidden rounded-2xl border border-[#F2E2E3] bg-gradient-to-r from-white via-[#FFFDFD] to-[#FFF7F7] px-5 py-6 shadow-[0_10px_35px_rgba(17,24,39,0.07)] sm:px-7 lg:px-8 lg:py-7">
            <div className="pointer-events-none absolute -left-16 -top-20 h-44 w-44 rounded-full bg-[#EF3037]/5 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_1fr_1fr_1fr_190px] lg:items-center">
              <Benefit
                icon={<Target size={27} strokeWidth={2} />}
                title="Result Driven"
                description="Data-backed strategies that deliver real growth."
                bordered
              />
              <Benefit
                icon={<Rocket size={27} strokeWidth={2} />}
                title="Innovative Solutions"
                description="Creative ideas & latest technology for your brand."
                bordered
              />
              <Benefit
                icon={<BarChart3 size={27} strokeWidth={2} />}
                title="Measurable Impact"
                description="Transparent reporting with measurable ROI."
                bordered
              />
              <Benefit
                icon={<Headphones size={27} strokeWidth={2} />}
                title="Always Here"
                description="Dedicated support whenever you need us."
                bordered
              />
              <div className="lg:min-w-[180px]">
                <p className="text-sm font-bold text-[#111827]">Let&apos;s Grow Your Business</p>
                <p className="mt-1 text-xs text-[#6B7280]">Have a project in mind?</p>
                <Link
                  href="/contact-us"
                  className="group mt-3 flex w-full items-center justify-between rounded-lg bg-[#EF3037] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_20px_rgba(239,48,55,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D9232A]"
                >
                  Get In Touch
                  <Send size={15} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative">
        <Container className="relative">
          <div className="grid gap-10 border-b border-[#E5E7EB] py-14 lg:grid-cols-[1.35fr_1.2fr_1fr_1fr_1.35fr] lg:gap-8 lg:py-16">
            {/* BRAND */}
            <div className="lg:border-r lg:border-[#E5E7EB] lg:pr-8">
              <Logo />
              <p className="mt-6 max-w-[320px] text-sm leading-7 text-[#4B5563]">
                360° Digital Marketing Solutions to help businesses grow, scale and succeed in the digital world.
              </p>
              <div className="mt-6 h-[2px] w-11 bg-[#EF3037]" />
              <div className="mt-7">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#9CA3AF]">Follow Us</p>
                <div className="flex items-center gap-3">
                  {preHeader.socials.map((social) => (
                    <SocialBadge key={social.label} {...social} />
                  ))}
                </div>
              </div>
            </div>

            {/* SERVICES */}
            <div className="lg:border-r lg:border-[#E5E7EB] lg:pr-8">
              <FooterHeading title="Our Services" />
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="group flex items-start gap-2 text-[13px] leading-5 text-[#374151] transition-colors hover:text-[#EF3037]"
                    >
                      <span className="mt-[1px] text-lg leading-4 text-[#EF3037] transition-transform group-hover:translate-x-0.5">›</span>
                      <span>{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-[#EF3037] transition-colors hover:text-[#D9232A]"
              >
                View All Services
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>

            {/* INDUSTRIES */}
            <div className="lg:border-r lg:border-[#E5E7EB] lg:pr-8">
              <FooterHeading title="Industries We Serve" />
              <ul className="space-y-4">
                {industries.map((industry) => {
                  const IndustryIcon = industry.icon;
                  return (
                    <li key={industry.label}>
                      <Link
                        href={industry.href}
                        className="group flex items-center gap-3 text-[13px] text-[#374151] transition-colors hover:text-[#EF3037]"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#FFF5F5] text-[#EF3037] transition-all duration-200 group-hover:bg-[#EF3037] group-hover:text-white">
                          <IndustryIcon size={14} strokeWidth={2} />
                        </span>
                        {industry.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/industries"
                className="mt-7 inline-flex items-center gap-2 text-xs font-bold text-[#EF3037] transition-colors hover:text-[#D9232A]"
              >
                View All Industries
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>

            {/* COMPANY */}
            <div className="lg:border-r lg:border-[#E5E7EB] lg:pr-8">
              <FooterHeading title="Company" />
              <ul className="space-y-4">
                {companyLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2 text-[13px] text-[#374151] transition-colors hover:text-[#EF3037]"
                    >
                      <span className="text-[#EF3037] transition-transform duration-200 group-hover:translate-x-1">›</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <FooterHeading title="Contact Us" />
              <div className="space-y-5">
                <ContactItem icon={<MapPin size={16} strokeWidth={2} />} title="Head Office (Delhi, India)">
                  <p>916, 9th Floor, Tower-2, Pearls Omaxe, NSP, Pitampura, Delhi - 110034</p>
                </ContactItem>
                <ContactItem icon={<Mail size={16} strokeWidth={2} />} title="Email Us">
                  <a href="mailto:info@hovermedia.in" className="block transition-colors hover:text-[#EF3037]">info@hovermedia.in</a>
                </ContactItem>
                <ContactItem icon={<Phone size={16} strokeWidth={2} />} title="Call Us">
                  <a href="tel:+918800239793" className="block transition-colors hover:text-[#EF3037]">+91 8800239793</a>
                </ContactItem>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* VIBRANT MULTI-COLOR ADDRESS CARDS SECTION */}
      <div className="py-8 bg-gradient-to-b from-[#F9FAFB] to-white border-t border-[#E5E7EB]">
        <Container>
          <section className="relative overflow-hidden rounded-xl border border-[#E5E7EB] bg-white px-5 py-5 shadow-sm">
            
            {/* Header */}
            <div className="relative mb-4 flex flex-col gap-1.5 border-b border-[#F1F3F5] pb-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-0.5 border border-red-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EF3037]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#EF3037]">
                    Delhi & Global Presence
                  </span>
                </div>
                <h2 className="mt-1 text-xl font-bold tracking-tight text-[#111827]">
                  Our Offices & <span className="text-[#EF3037]">Global Hubs</span>
                </h2>
              </div>
              <p className="text-[11px] font-medium text-[#4B5563]">
                Our headquarters and international work hubs.
              </p>
            </div>

            {/* DIFFERENTLY COLORED COMPACT CARDS GRID */}
            <div className="grid gap-3 lg:grid-cols-3">
              {offices.map((office) => {
                const OfficeIcon = office.icon;

                return (
                  <div
                    key={office.city + office.badgeLabel}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-3.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${office.cardBg}`}
                  >
                    {/* Top Accent Color Line */}
                    <div className={`absolute top-0 left-0 right-0 h-[3px] ${office.accentBar}`} />

                    <div>
                      {/* Top Row: Icon, City Name & Distinct Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2 pt-1">
                        <div className="flex items-center gap-2">
                          <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${office.iconBg}`}>
                            <OfficeIcon size={14} strokeWidth={2} />
                          </div>
                          <div>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-[#6B7280]">{office.badgeLabel}</span>
                            <h4 className="text-xs font-bold text-[#111827]">{office.city}</h4>
                          </div>
                        </div>
                        <span className={`rounded px-2 py-0.5 text-[9px] font-bold border ${office.tagColor}`}>
                          {office.highlightText}
                        </span>
                      </div>

                      {/* High Contrast Address Box */}
                      <div className={`rounded-md border p-2 shadow-2xs ${office.addressBox}`}>
                        <p className="text-[11px] leading-relaxed font-semibold">
                          {office.address}
                        </p>
                      </div>
                    </div>

                    {/* Footer Links / CTA */}
                    <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#64748B]">{office.sub}</span>
                      <a
                        href={office.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-[11px] font-bold hover:underline ${office.ctaColor}`}
                      >
                        {office.cta} <ArrowUpRight size={12} strokeWidth={2.5} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </section>
        </Container>
      </div>

      {/* DARK BOTTOM */}
      <div className="relative overflow-hidden bg-[#02070D] text-white">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <Container className="relative">
          <div className="flex flex-col gap-4 py-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p className="text-xs font-bold tracking-wide text-white">
              © {new Date().getFullYear()} Hover Business Services LLP. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <FooterLegalLink href="/privacy-policy" label="Privacy Policy" />
              <LegalDivider />
              <FooterLegalLink href="/terms-and-conditions" label="Terms & Conditions" />
              <LegalDivider />
              <FooterLegalLink href="/refund-cancellation" label="Refund & Cancellation" />
              <LegalDivider />
              <FooterLegalLink href="/shipping-delivery" label="Shipping & Delivery" />
              <LegalDivider />
              <FooterLegalLink href="/sitemap.xml" label="Sitemap" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function Benefit({
  icon,
  title,
  description,
  bordered = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bordered?: boolean;
}) {
  return (
    <div className={`flex items-center gap-4 ${bordered ? "lg:border-r lg:border-[#E5E7EB] lg:pr-6" : ""}`}>
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#FCE1E3] bg-white text-[#EF3037] shadow-[0_8px_25px_rgba(239,48,55,0.12)]">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-[#111827]">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-[#6B7280]">{description}</p>
      </div>
    </div>
  );
}

function FooterHeading({ title }: { title: string }) {
  return (
    <div className="mb-7">
      <h3 className="text-[17px] font-bold tracking-tight text-[#111827]">{title}</h3>
      <div className="mt-3 h-[2px] w-8 bg-[#EF3037]" />
    </div>
  );
}

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#EF3037] shadow-[0_5px_18px_rgba(239,48,55,0.12)] ring-1 ring-[#FCE1E3]">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-bold text-[#111827]">{title}</p>
        <div className="mt-1 text-[12px] leading-5 text-[#4B5563]">{children}</div>
      </div>
    </div>
  );
}

function FooterLegalLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-xs font-semibold text-white/80 transition-colors hover:text-[#EF3037]">
      {label}
    </Link>
  );
}

function LegalDivider() {
  return <span className="hidden h-3 w-px bg-white/20 sm:block" />;
}