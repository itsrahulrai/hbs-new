"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  Building2,
  Globe2,
  Headphones,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Plane,
  Rocket,
  Send,
  ShieldCheck,
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
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

  // Coordinates for Delhi HQ, Delhi Branch, and New Zealand map markers
  const mapPinPositions = [
    { left: "55%", top: "45%" }, // Delhi 9th Floor (HQ)
    { left: "48%", top: "52%" }, // Delhi 8th Floor
    { left: "85%", top: "82%" }, // New Zealand
  ];

  const offices = [
    {
      badgeLabel: "Head Office",
      city: "Delhi, India",
      sub: "9th Floor, NSP",
      address: "916, 9th Floor, Tower-2, Pearls Omaxe, NSP, Pitampura, Delhi - 110034",
      href: "https://www.google.com/maps/place/Hover+Business+Services+LLP+%7C+Digital+Marketing+Agency+in+Delhi/@28.6905841,77.1517968,15z",
      icon: Building2,
      highlightText: "Primary HQ",
      image: "https://picsum.photos/seed/hover-delhi-hq-9/400/200",
      iconBg: "bg-gradient-to-br from-[#EF3037] to-[#D9232A] text-white shadow-lg shadow-red-500/30",
      labelColor: "text-[#EF3037]",
      tagColor: "bg-red-50 text-red-600 border border-red-200/60",
      hoverBg: "group-hover:bg-[#EF3037]",
    },
    {
      badgeLabel: "Branch",
      city: "Delhi, India",
      sub: "8th Floor, NSP",
      address: "802, 8th Floor, Tower-2, Pearls Omaxe, NSP, Pitampura, Delhi - 110034",
      href: "https://www.google.com/maps",
      icon: Building2,
      highlightText: "Operations Hub",
      image: "https://picsum.photos/seed/hover-delhi-8/400/200",
      iconBg: "bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-lg shadow-blue-500/30",
      labelColor: "text-blue-600",
      tagColor: "bg-blue-50 text-blue-600 border border-blue-200/60",
      hoverBg: "group-hover:bg-blue-600",
    },
    {
      badgeLabel: "International",
      city: "New Zealand",
      sub: "Auckland Office",
      address: "529 Great South Road, Manukau City Centre, Auckland 2025, New Zealand",
      href: "https://www.google.com/maps",
      icon: Globe2,
      highlightText: "+64 211290774",
      image: "https://picsum.photos/seed/hover-nz/400/200",
      iconBg: "bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30",
      labelColor: "text-emerald-600",
      tagColor: "bg-emerald-50 text-emerald-600 border border-emerald-200/60",
      hoverBg: "group-hover:bg-emerald-600",
    },
  ];


  return (
    <footer className="relative overflow-hidden bg-white text-[#111827]">
      {/* TOP RED ACCENT */}
      <div className="h-[3px] bg-gradient-to-r from-red-500 via-[#EF3037] to-rose-600" />

      {/* TOP BENEFITS STRIP */}
      <div className="px-4 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <div className="mx-auto max-w-[1480px]">
          <div className="relative overflow-hidden rounded-3xl border border-[#F2E2E3] bg-gradient-to-r from-white via-[#FFFDFD] to-[#FFF7F7] px-6 py-7 shadow-[0_12px_40px_rgba(17,24,39,0.06)] sm:px-8 lg:py-8">
            <div className="pointer-events-none absolute -left-16 -top-20 h-44 w-44 rounded-full bg-[#EF3037]/8 blur-3xl" />
            <div className="relative grid gap-6 lg:grid-cols-[1fr_1fr_1fr_1fr_200px] lg:items-center">
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
              <div className="lg:min-w-[190px]">
                <p className="text-sm font-extrabold text-[#111827]">Let&apos;s Grow Your Business</p>
                <p className="mt-1 text-xs text-[#6B7280]">Have a project in mind?</p>
                <Link
                  href="/contact-us"
                  className="group mt-3.5 flex w-full items-center justify-between rounded-xl bg-[#EF3037] px-4 py-3 text-xs font-bold text-white shadow-[0_10px_22px_rgba(239,48,55,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9232A] hover:shadow-[0_14px_28px_rgba(239,48,55,0.3)]"
                >
                  Get In Touch
                  <Send size={15} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
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
              <div className="mt-6 h-[2px] w-12 rounded-full bg-[#EF3037]" />
              <div className="mt-7">
                <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#9CA3AF]">Follow Us</p>
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
              <ul className="space-y-3.5">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="group flex items-start gap-2 text-[13px] leading-5 text-[#374151] transition-colors hover:text-[#EF3037]"
                    >
                      <span className="mt-[1px] text-lg leading-4 text-[#EF3037] transition-transform duration-200 group-hover:translate-x-1">›</span>
                      <span>{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#EF3037] transition-colors hover:text-[#D9232A]"
              >
                View All Services
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>

            {/* INDUSTRIES */}
            <div className="lg:border-r lg:border-[#E5E7EB] lg:pr-8">
              <FooterHeading title="Industries We Serve" />
              <ul className="space-y-3.5">
                {industries.map((industry) => {
                  const IndustryIcon = industry.icon;
                  return (
                    <li key={industry.label}>
                      <Link
                        href={industry.href}
                        className="group flex items-center gap-3 text-[13px] text-[#374151] transition-colors hover:text-[#EF3037]"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FFF5F5] text-[#EF3037] transition-all duration-300 group-hover:bg-[#EF3037] group-hover:text-white shadow-sm">
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
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#EF3037] transition-colors hover:text-[#D9232A]"
              >
                View All Industries
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>

            {/* COMPANY */}
            <div className="lg:border-r lg:border-[#E5E7EB] lg:pr-8">
              <FooterHeading title="Company" />
              <ul className="space-y-3.5">
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
              <div className="space-y-4.5">
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

          {/* VISIT OUR OFFICES & INTERACTIVE MAP SECTION */}
          <section className="relative my-14 overflow-hidden rounded-md border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-red-50/40 p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            {/* REAL MAP BACKGROUND */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px] opacity-40">
              <iframe
                title="Hover Business Services location map"
                src="https://www.google.com/maps?q=Pitampura,+New+Delhi&z=4&output=embed"
                className="h-full w-full grayscale contrast-125"
                style={{ border: 0, pointerEvents: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* FLOATING BLINKING LOCATION PIN MARKERS ON THE MAP */}
            <div className="pointer-events-none absolute inset-0 z-[5] hidden lg:block">
              {offices.map((office, i) => {
                const OfficeIcon = office.icon;
                return (
                  <div
                    key={office.city + office.badgeLabel}
                    className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center animate-bounce"
                    style={{
                      ...mapPinPositions[i],
                      animationDuration: `${3.2 + i * 0.6}s`,
                    }}
                  >
                    {/* Multi-layered blinking radar waves */}
                    <span className="absolute -inset-3 rounded-full bg-red-500/25 animate-ping" />
                    <span className="absolute -inset-6 rounded-full bg-red-500/10 animate-pulse" />

                    <div className="relative flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-xl ring-2 ring-red-500/50 backdrop-blur-md">
                      <span className={`flex h-4 w-4 items-center justify-center rounded-full animate-pulse ${office.iconBg}`}>
                        <OfficeIcon size={9} strokeWidth={2.5} />
                      </span>
                      <span className="text-[10px] font-extrabold text-slate-900">{office.city}</span>
                    </div>
                    <span className={`-mt-0.5 h-2.5 w-2.5 rotate-45 shadow-md ${office.iconBg}`} />
                  </div>
                );
              })}
            </div>

            {/* AMBIENT GLOW BLOBS */}
            <div className="pointer-events-none absolute -top-28 -right-28 h-80 w-80 rounded-full bg-[#EF3037]/12 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[0.85fr_2.1fr] lg:items-center">
              {/* LEFT INTRO */}
              <div className="relative flex flex-col justify-center">
                <div className="pointer-events-none absolute -left-6 -top-6 hidden h-[220px] w-[220px] lg:block">
                  <svg viewBox="0 0 220 220" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="110" cy="110" r="40" fill="none" stroke="#EF3037" strokeOpacity="0.2" strokeWidth="1" />
                    <circle cx="110" cy="110" r="75" fill="none" stroke="#EF3037" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="3 5" />
                    <circle cx="110" cy="110" r="105" fill="none" stroke="#EF3037" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="2 6" />
                    <circle cx="110" cy="110" r="5" fill="#EF3037" />
                    <circle cx="186" cy="88" r="3.5" fill="#EF3037" fillOpacity="0.6" />
                    <circle cx="38" cy="148" r="3" fill="#EF3037" fillOpacity="0.5" />
                  </svg>
                </div>

                <div className="relative z-10 rounded-2xl border border-white/80 bg-white/90 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-md sm:p-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-red-100 bg-red-50/50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-[#EF3037]">
                    <Globe2 size={12} strokeWidth={2.5} className="animate-pulse text-[#EF3037]" />
                    Global Offices
                  </span>

                  <h2 className="mt-4 text-[24px] font-extrabold leading-[1.2] tracking-tight text-slate-900 sm:text-[28px]">
                    Visit Our Offices &{" "}
                    <span className="bg-gradient-to-r from-[#EF3037] via-rose-500 to-orange-500 bg-clip-text text-transparent">
                      Connect With Us
                    </span>
                  </h2>

                  <p className="mt-3.5 text-[13px] leading-6 text-slate-600">
                    Drop by our headquarters or branch offices in Pitampura, New Delhi, or our international hub in Auckland, New Zealand.
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {offices.map((o) => {
                        const OIcon = o.icon;
                        return (
                          <span
                            key={o.city + o.badgeLabel}
                            className={`flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white animate-pulse ${o.iconBg}`}
                          >
                            <OIcon size={13} strokeWidth={2.2} />
                          </span>
                        );
                      })}
                    </div>
                    <span className="text-[11px] font-extrabold text-slate-500">Delhi & New Zealand Presence</span>
                  </div>
                </div>
              </div>

              {/* OFFICE CARDS GRID */}
              <div className="relative z-10 grid gap-4 sm:grid-cols-3">
                {offices.map((office) => {
                  const OfficeIcon = office.icon;

                  return (
                    <div
                      key={office.city + office.badgeLabel}
                      className="group relative rounded-2xl border border-white/80 bg-white/90 p-4 pt-7 shadow-[0_10px_35px_rgba(15,23,42,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(239,48,55,0.12)]"
                    >
                      {/* Floating glowing icon badge with blink effect */}
                      <div
                        className={`absolute -top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl ${office.iconBg} ring-4 ring-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                      >
                        <OfficeIcon size={17} strokeWidth={2.2} className="animate-pulse" />
                      </div>

                      {/* Tag */}
                      <span className={`absolute right-3.5 top-3.5 rounded-full px-2.5 py-0.5 text-[8.5px] font-extrabold uppercase tracking-wide ${office.tagColor}`}>
                        {office.badgeLabel}
                      </span>

                      <h4 className="mt-2 text-[13.5px] font-extrabold text-slate-900">{office.city}</h4>
                      <span className={`mt-0.5 inline-block text-[10px] font-bold ${office.labelColor}`}>
                        {office.highlightText}
                      </span>

                      {/* Image / Address box */}
                      <div className="mt-3 overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                        <div className={`relative flex h-12 items-center justify-center overflow-hidden ${office.iconBg}`}>
                          {office.image && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={office.image}
                              alt={`${office.city} office`}
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                          <div className={`absolute inset-0 opacity-60 ${office.iconBg}`} />
                          <OfficeIcon size={14} strokeWidth={1.8} className="relative z-10 text-white drop-shadow animate-pulse" />
                        </div>
                        <div className="bg-slate-50/70 px-2.5 py-2">
                          <p className="text-[9px] leading-snug text-slate-600 line-clamp-2">{office.address}</p>
                        </div>
                      </div>

                      {/* Bottom action link */}
                      <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-2.5">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">{office.sub}</span>
                        <a
                          href={office.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex h-7 w-7 items-center justify-center rounded-xl bg-slate-100 transition-all duration-300 ${office.hoverBg} shadow-sm`}
                        >
                          <ArrowUpRight
                            size={12}
                            strokeWidth={2.5}
                            className={`${office.labelColor} transition-colors duration-300 group-hover:text-white`}
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

           
          </section>


          
        </Container>
      </div>

      {/* DARK BOTTOM */}
      <div className="relative overflow-hidden bg-[#02070D] text-white">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <Container className="relative">
          <div className="flex flex-col gap-4 py-7 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p className="text-xs font-bold tracking-wide text-white/90">
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
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#FCE1E3] bg-white text-[#EF3037] shadow-[0_8px_25px_rgba(239,48,55,0.12)]">
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
    <div className="mb-6">
      <h3 className="text-[17px] font-bold tracking-tight text-[#111827]">{title}</h3>
      <div className="mt-2.5 h-[2px] w-9 rounded-full bg-[#EF3037]" />
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
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#EF3037] shadow-[0_5px_18px_rgba(239,48,55,0.12)] ring-1 ring-[#FCE1E3]">
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