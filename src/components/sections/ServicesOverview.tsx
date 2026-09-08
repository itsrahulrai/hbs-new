"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  Code2,
  Globe,
  TrendingUp,
  Target,
  Share2,
  Megaphone,
  Palette,
  PenTool,
  ShoppingBag,
  Store,
  Smartphone,
  Layers,
  Compass,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  primaryIcon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  secondaryIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const servicesList: ServiceItem[] = [
  {
    id: "seo-search-visibility",
    number: "01",
    category: "SEARCH & AI",
    title: "SEO & AI Search Visibility",
    description:
      "Get found on Google and stay visible with proven SEO, AEO, GEO, and LLMO strategies.",
    tags: [
      "SEO Services",
      "AEO & GEO",
      "LLMO",
      "AI Search Optimization",
      "Local SEO",
    ],
    href: "/digital-marketing/seo-services",
    primaryIcon: Search,
    secondaryIcon: Sparkles,
  },
  {
    id: "web-design-dev",
    number: "02",
    category: "ENGINEERING",
    title: "Web Design & Development",
    description:
      "Fast, responsive, conversion-focused websites tailored to your brand and growth goals.",
    tags: [
      "Website Design",
      "Custom Web Dev",
      "UI/UX Design",
      "Landing Pages",
    ],
    href: "/web-app-development",
    primaryIcon: Code2,
    secondaryIcon: Globe,
  },
  {
    id: "performance-marketing",
    number: "03",
    category: "GROWTH MARKETING",
    title: "Performance Marketing",
    description:
      "Turn ad spend into measurable revenue with targeted Google & Meta campaigns, lead generation, and CRO.",
    tags: [
      "Google & Meta Ads",
      "Lead Generation",
      "Campaign ROI",
      "Conversion Optimization",
    ],
    href: "/digital-marketing/performance-marketing",
    primaryIcon: TrendingUp,
    secondaryIcon: Target,
  },
  {
    id: "social-media-content",
    number: "04",
    category: "BRAND & SOCIAL",
    title: "Social Media & Content",
    description:
      "Build brand authority, community trust, and engagement through strategic content creation and active social growth.",
    tags: [
      "Social Media",
      "Content Strategy",
      "Creative Storytelling",
      "Brand Growth",
    ],
    href: "/digital-marketing/social-media-marketing",
    primaryIcon: Share2,
    secondaryIcon: Megaphone,
  },
  {
    id: "creative-design",
    number: "05",
    category: "CREATIVE & UI",
    title: "Creative & Design",
    description:
      "Elevate your brand with striking visual identities, intuitive UI/UX design, and memorable brand assets.",
    tags: [
      "Brand Identity",
      "Graphic Design",
      "UI/UX Design",
      "Campaign Creatives",
    ],
    href: "/creative-design",
    primaryIcon: Palette,
    secondaryIcon: PenTool,
  },
  {
    id: "ecommerce-solutions",
    number: "06",
    category: "E-COMMERCE",
    title: "E-commerce Solutions",
    description:
      "High-converting online storefronts engineered for fast checkout, seamless navigation, and catalog scale.",
    tags: [
      "Store Development",
      "Product Experience",
      "E-commerce SEO",
      "Checkout CRO",
    ],
    href: "/web-app-development/ecommerce-development",
    primaryIcon: ShoppingBag,
    secondaryIcon: Store,
  },
  {
    id: "mobile-app-dev",
    number: "07",
    category: "APP DEVELOPMENT",
    title: "Mobile App Development",
    description:
      "High-performance iOS and Android apps crafted for seamless user experiences and real business results.",
    tags: [
      "iOS & Android Apps",
      "Cross-Platform",
      "App UI/UX",
      "Scalable Backend",
    ],
    href: "/web-app-development/mobile-app-development",
    primaryIcon: Smartphone,
    secondaryIcon: Layers,
  },
  {
    id: "growth-strategy",
    number: "08",
    category: "BUSINESS GROWTH",
    title: "Digital Growth Strategy",
    description:
      "Data-driven roadmaps connecting tech, performance, and creative to scale pipeline and business revenue.",
    tags: [
      "Growth Roadmap",
      "Market Intelligence",
      "Digital Audits",
      "Revenue Scaling",
    ],
    href: "/contact",
    primaryIcon: Compass,
    secondaryIcon: Rocket,
  },
];

export function ServicesOverview() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollability = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const firstChild = sliderRef.current.firstElementChild as HTMLElement | null;
    if (firstChild) {
      const cardWidth = firstChild.offsetWidth + 20;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), servicesList.length - 1));
    }
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    checkScrollability();
    el.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);
    return () => {
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  const handleScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const firstChild = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstChild ? firstChild.offsetWidth + 20 : 320;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const firstChild = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstChild ? firstChild.offsetWidth + 20 : 320;
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-5 sm:pb-8 bg-white">
      {/* Subtle Ambient Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-rose-50/40 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-slate-50/60 blur-3xl" />
      </div>

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* HEADER SECTION: EYEBROW, TITLE & EDITORIAL INTRO */}
        {/* ========================================================= */}
        <div className="flex flex-col gap-2.5 sm:gap-3">
          
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div className="flex flex-col items-start">
              {/* Eyebrow Pill */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-none border border-slate-300/80 bg-white px-2.5 py-0.5 shadow-2xs"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#e5231b] opacity-75" />
                  <span className="relative inline-flex rounded-none h-2 w-2 bg-[#e5231b]" />
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#e5231b] whitespace-nowrap">
                  FULL-SPECTRUM DIGITAL SOLUTIONS
                </span>
              </motion.div>

              {/* High-Impact Main Heading (Single Line) */}
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
                className="mt-2.5 sm:mt-3 font-display text-[19px] sm:text-[23px] lg:text-[26px] xl:text-[28px] font-bold tracking-[-0.025em] text-[#0b132b] leading-[1.3]"
              >
                <span>Smart Digital Solutions Made for </span>
                <span className="text-[#E5231B]">Business Growth.</span>
              </motion.h2>
            </div>

            {/* Slider Navigation Arrows (Header Desktop Controls) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="hidden sm:flex items-center gap-2.5 shrink-0 self-end"
            >
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous service slide"
                className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-none border border-slate-300 bg-white shadow-2xs transition-all duration-200 ${
                  canScrollLeft
                    ? "text-[#0f172a] hover:border-[#810103] hover:text-[#810103] hover:shadow-md active:scale-95 cursor-pointer"
                    : "text-slate-300 opacity-45 cursor-not-allowed border-slate-200"
                }`}
              >
                <svg className="w-4.5 h-4.5 -translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next service slide"
                className={`flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-none border border-slate-300 bg-white shadow-2xs transition-all duration-200 ${
                  canScrollRight
                    ? "text-[#0f172a] hover:border-[#810103] hover:text-[#810103] hover:shadow-md active:scale-95 cursor-pointer"
                    : "text-slate-300 opacity-45 cursor-not-allowed border-slate-200"
                }`}
              >
                <svg className="w-4.5 h-4.5 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Narrative Editorial Text (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="text-[14px] sm:text-[15.5px] text-[#475569] leading-[1.68] sm:leading-relaxed text-left [text-wrap:pretty] break-normal hyphens-none w-full"
          >
            <p>
              Digital growth isn’t about doing more. It’s about doing the right things together. At <strong className="font-semibold text-[#0f172a]">Hover Business Services LLP</strong>, we combine visibility, technology, creativity, performance, and strategy to help your business get noticed, build trust, generate opportunities, and grow. Choose what you need—or bring it all together for one powerful digital strategy.
            </p>
          </motion.div>

        </div>
      </Container>

      {/* ========================================================= */}
      {/* SERVICE CARDS SLIDER (MAIN BACKGROUND WHITE) */}
      {/* ========================================================= */}
      <div className="relative mt-4 sm:mt-6 w-full bg-white py-2 sm:py-3 overflow-hidden">
        <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile Header Nav Controls */}
          <div className="flex sm:hidden items-center justify-between pb-3 px-1">
            <span className="font-display text-xs font-bold text-slate-800 uppercase tracking-wider">
              Explore All Services
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous service slide"
                className={`flex h-8 w-8 items-center justify-center rounded-none border border-slate-300 bg-white text-slate-700 shadow-2xs ${
                  canScrollLeft ? "active:scale-95 cursor-pointer hover:border-[#810103] hover:text-[#810103]" : "opacity-40 cursor-not-allowed"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next service slide"
                className={`flex h-8 w-8 items-center justify-center rounded-none border border-slate-300 bg-white text-slate-700 shadow-2xs ${
                  canScrollRight ? "active:scale-95 cursor-pointer hover:border-[#810103] hover:text-[#810103]" : "opacity-40 cursor-not-allowed"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Slider Track */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth py-3 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.04 * index, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col justify-start rounded-none bg-white p-5 sm:p-5.5 border-2 border-slate-200/95 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[#810103] hover:bg-[#810103] hover:shadow-[0_20px_45px_rgba(129,1,3,0.28)] transition-all duration-300 snap-start shrink-0 w-[80vw] max-w-[315px] sm:w-[calc(50%-12px)] sm:max-w-none lg:w-[calc(25%-18px)] h-auto overflow-hidden"
              >
                {/* Sharp Top Red Highlight Bar */}
                <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-[#810103] group-hover:bg-white transition-colors duration-300" />

                <div className="flex flex-col relative z-10">
                  {/* Card Header: (Top Left: Step Number + Line, Category) & (Top Right: Icon Box) */}
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-[15.5px] font-extrabold text-[#810103] group-hover:text-white transition-colors duration-300">
                          {service.number}
                        </span>
                        <span className="h-[2.5px] w-7 bg-[#810103] group-hover:bg-white transition-colors duration-300" />
                      </div>

                      <span className="font-display text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-500 group-hover:text-white/80 transition-colors duration-300 mt-1.5">
                        {service.category}
                      </span>
                    </div>

                    {/* Sharp Top-Right Icon Box with Crisp Border */}
                    <div className="flex h-10 w-10 sm:h-10.5 sm:w-10.5 items-center justify-center rounded-none bg-slate-100/90 text-[#0b132b] border-[1.5px] border-slate-300 shadow-2xs transition-all duration-300 group-hover:bg-white group-hover:text-[#810103] group-hover:border-white shrink-0">
                      <service.primaryIcon className="w-5.5 h-5.5" strokeWidth={2.4} />
                    </div>
                  </div>

                  {/* Sharp, Clean High-Contrast Title */}
                  <h3 className="mt-3.5 sm:mt-4 font-display text-[17.5px] sm:text-[18.5px] font-bold text-slate-900 tracking-[-0.01em] leading-[1.3] group-hover:text-white transition-colors duration-300">
                    <Link href={service.href} className="focus:outline-none group-hover:text-white block">
                      {service.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[13px] sm:text-[13.5px] text-[#334155] leading-[1.62] font-normal text-left [text-wrap:pretty] group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Sharp Horizontal Divider Line */}
                  <div className="my-3.5 sm:my-4 border-t-[1.5px] border-slate-200 group-hover:border-white/20 transition-colors duration-300" />

                  {/* Sharp Tags with High Definition */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2.5 py-1 rounded-none text-[11px] sm:text-[11.5px] font-semibold tracking-wide border-[1.5px] border-slate-300 bg-white text-slate-800 shadow-2xs group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white whitespace-nowrap transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* FULL-WIDTH CLOSING CALLOUT: ONE PARTNER */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="mt-4 sm:mt-5 relative overflow-hidden rounded-none border border-[#9b0f12] bg-[#810103] p-3.5 sm:p-4.5 lg:py-3.5 lg:px-5 shadow-[0_6px_24px_rgba(129,1,3,0.25)] transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3.5 sm:gap-4.5 relative z-10">
            
            {/* Left Content Area */}
            <div className="flex items-center gap-3.5 sm:gap-4 max-w-3xl">
              {/* Sharp High-Contrast White Icon Box */}
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-none bg-white text-[#810103] shadow-md">
                <TrendingUp className="w-5 h-5 sm:w-5.5 sm:h-5.5" strokeWidth={2.6} />
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-[16px] sm:text-[17.5px] lg:text-[18.5px] font-extrabold text-white tracking-tight leading-snug">
                  One Partner. Every Digital Capability.
                </h3>

                <p className="text-[13px] sm:text-[13.5px] lg:text-[14px] text-white/95 leading-[1.6] font-normal [text-wrap:pretty]">
                  From <strong className="font-bold text-white">SEO and AI search to technology, marketing, content, and creative</strong>, we bring everything together to make your digital presence <strong className="font-bold text-white">seen, trusted, and built for growth.</strong>
                </p>
              </div>
            </div>

            {/* Right Growth Flow Pipeline: High-Contrast Solid White Badges */}
            <div className="shrink-0 pl-13.5 lg:pl-0">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-none border border-white/25 bg-black/30 shadow-inner">
                <span className="px-2.5 py-1 rounded-none bg-white text-slate-900 text-[11px] sm:text-[11.5px] font-extrabold uppercase tracking-wider shadow-xs">
                  Seen
                </span>
                <span className="text-white font-black text-sm">→</span>
                <span className="px-2.5 py-1 rounded-none bg-white text-slate-900 text-[11px] sm:text-[11.5px] font-extrabold uppercase tracking-wider shadow-xs">
                  Trusted
                </span>
                <span className="text-white font-black text-sm">→</span>
                <span className="px-3 py-1 rounded-none bg-white text-[#810103] text-[11px] sm:text-[11.5px] font-black uppercase tracking-wider shadow-xs ring-2 ring-white/50">
                  Growth
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </Container>
    </section>
  );
}
