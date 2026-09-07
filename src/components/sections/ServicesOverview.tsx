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
  secondaryIcon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  theme: {
    badgeBg: string;
    lineColor: string;
    auraBg: string;
    iconBg: string;
    iconShadow: string;
    stageBg: string;
    stageBorder: string;
    tagStyle: string;
    actionText: string;
    circleBtnStyle: string;
  };
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
      "SEO & Local SEO",
      "AEO & GEO",
      "LLMO",
      "AI Search Optimization",
    ],
    href: "/digital-marketing/seo-services",
    primaryIcon: Search,
    secondaryIcon: Sparkles,
    theme: {
      badgeBg: "bg-[#f85153]",
      lineColor: "bg-[#f85153]",
      auraBg: "bg-gradient-to-tr from-rose-200/70 via-rose-100/40 to-transparent",
      iconBg: "bg-gradient-to-br from-rose-500 to-red-600",
      iconShadow: "shadow-[0_8px_20px_rgba(244,63,94,0.35)]",
      stageBg: "bg-gradient-to-b from-rose-50/90 via-rose-50/30 to-white",
      stageBorder: "border-rose-100/80",
      tagStyle: "bg-[#f85153] text-white hover:bg-[#e5231b] shadow-xs",
      actionText: "text-[#e04b4b] hover:text-[#c93030]",
      circleBtnStyle: "bg-[#ffe4e4] text-[#e04b4b] hover:bg-[#e04b4b] hover:text-white",
    },
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
    theme: {
      badgeBg: "bg-[#0ea5e9]",
      lineColor: "bg-[#0ea5e9]",
      auraBg: "bg-gradient-to-tr from-sky-200/70 via-sky-100/40 to-transparent",
      iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
      iconShadow: "shadow-[0_8px_20px_rgba(14,165,233,0.35)]",
      stageBg: "bg-gradient-to-b from-sky-50/90 via-sky-50/30 to-white",
      stageBorder: "border-sky-100/80",
      tagStyle: "bg-[#0284c7] text-white hover:bg-[#0369a1] shadow-xs",
      actionText: "text-[#0284c7] hover:text-[#0369a1]",
      circleBtnStyle: "bg-[#e0f2fe] text-[#0284c7] hover:bg-[#0284c7] hover:text-white",
    },
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
    theme: {
      badgeBg: "bg-[#f59e0b]",
      lineColor: "bg-[#f59e0b]",
      auraBg: "bg-gradient-to-tr from-amber-200/70 via-amber-100/40 to-transparent",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
      iconShadow: "shadow-[0_8px_20px_rgba(245,158,11,0.35)]",
      stageBg: "bg-gradient-to-b from-amber-50/90 via-amber-50/30 to-white",
      stageBorder: "border-amber-100/80",
      tagStyle: "bg-[#ea580c] text-white hover:bg-[#c2410c] shadow-xs",
      actionText: "text-[#d97706] hover:text-[#b45309]",
      circleBtnStyle: "bg-[#fef3c7] text-[#d97706] hover:bg-[#d97706] hover:text-white",
    },
  },
  {
    id: "social-media-content",
    number: "04",
    category: "BRAND & SOCIAL",
    title: "Social Media & Content",
    description:
      "Build brand authority, community trust, and engagement through strategic content creation and active social growth.",
    tags: [
      "Social Media Management",
      "Content Strategy",
      "Creative Storytelling",
      "Brand Growth",
    ],
    href: "/digital-marketing/social-media-marketing",
    primaryIcon: Share2,
    secondaryIcon: Megaphone,
    theme: {
      badgeBg: "bg-[#8b5cf6]",
      lineColor: "bg-[#8b5cf6]",
      auraBg: "bg-gradient-to-tr from-purple-200/70 via-purple-100/40 to-transparent",
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
      iconShadow: "shadow-[0_8px_20px_rgba(139,92,246,0.35)]",
      stageBg: "bg-gradient-to-b from-purple-50/90 via-purple-50/30 to-white",
      stageBorder: "border-purple-100/80",
      tagStyle: "bg-[#8b5cf6] text-white hover:bg-[#7c3aed] shadow-xs",
      actionText: "text-[#8b5cf6] hover:text-[#7c3aed]",
      circleBtnStyle: "bg-[#f3e8ff] text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white",
    },
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
    theme: {
      badgeBg: "bg-[#d946ef]",
      lineColor: "bg-[#d946ef]",
      auraBg: "bg-gradient-to-tr from-fuchsia-200/70 via-fuchsia-100/40 to-transparent",
      iconBg: "bg-gradient-to-br from-fuchsia-500 to-pink-600",
      iconShadow: "shadow-[0_8px_20px_rgba(217,70,239,0.35)]",
      stageBg: "bg-gradient-to-b from-fuchsia-50/90 via-fuchsia-50/30 to-white",
      stageBorder: "border-fuchsia-100/80",
      tagStyle: "bg-[#d946ef] text-white hover:bg-[#c026d3] shadow-xs",
      actionText: "text-[#c026d3] hover:text-[#a21caf]",
      circleBtnStyle: "bg-[#fae8ff] text-[#c026d3] hover:bg-[#c026d3] hover:text-white",
    },
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
    theme: {
      badgeBg: "bg-[#10b981]",
      lineColor: "bg-[#10b981]",
      auraBg: "bg-gradient-to-tr from-emerald-200/70 via-emerald-100/40 to-transparent",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
      iconShadow: "shadow-[0_8px_20px_rgba(16,185,129,0.35)]",
      stageBg: "bg-gradient-to-b from-emerald-50/90 via-emerald-50/30 to-white",
      stageBorder: "border-emerald-100/80",
      tagStyle: "bg-[#059669] text-white hover:bg-[#047857] shadow-xs",
      actionText: "text-[#059669] hover:text-[#047857]",
      circleBtnStyle: "bg-[#d1fae5] text-[#059669] hover:bg-[#059669] hover:text-white",
    },
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
    theme: {
      badgeBg: "bg-[#06b6d4]",
      lineColor: "bg-[#06b6d4]",
      auraBg: "bg-gradient-to-tr from-teal-200/70 via-cyan-100/40 to-transparent",
      iconBg: "bg-gradient-to-br from-cyan-500 to-teal-600",
      iconShadow: "shadow-[0_8px_20px_rgba(6,182,212,0.35)]",
      stageBg: "bg-gradient-to-b from-teal-50/90 via-teal-50/30 to-white",
      stageBorder: "border-teal-100/80",
      tagStyle: "bg-[#0891b2] text-white hover:bg-[#0e7490] shadow-xs",
      actionText: "text-[#0d9488] hover:text-[#0f766e]",
      circleBtnStyle: "bg-[#ccfbf1] text-[#0d9488] hover:bg-[#0d9488] hover:text-white",
    },
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
    theme: {
      badgeBg: "bg-[#f43f5e]",
      lineColor: "bg-[#f43f5e]",
      auraBg: "bg-gradient-to-tr from-rose-200/70 via-rose-100/40 to-transparent",
      iconBg: "bg-gradient-to-br from-rose-500 to-red-600",
      iconShadow: "shadow-[0_8px_20px_rgba(244,63,94,0.35)]",
      stageBg: "bg-gradient-to-b from-rose-50/90 via-rose-50/30 to-white",
      stageBorder: "border-rose-100/80",
      tagStyle: "bg-[#f43f5e] text-white hover:bg-[#e11d48] shadow-xs",
      actionText: "text-[#e11d48] hover:text-[#be123c]",
      circleBtnStyle: "bg-[#ffe4e6] text-[#e11d48] hover:bg-[#e11d48] hover:text-white",
    },
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
      setActiveIndex(index);
    }
  }, []);

  useEffect(() => {
    checkScrollability();
    const currentRef = sliderRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScrollability, { passive: true });
      window.addEventListener("resize", checkScrollability);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScrollability);
      }
      window.removeEventListener("resize", checkScrollability);
    };
  }, [checkScrollability]);

  const handleScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const firstChild = sliderRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstChild ? firstChild.offsetWidth + 20 : 320;
    const scrollAmount = window.innerWidth < 640 ? cardWidth : cardWidth * 2;
    
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
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
    <section className="relative overflow-hidden py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc]">
      {/* Soft Ambient Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-rose-100/30 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-indigo-50/40 blur-3xl" />
      </div>

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* HEADER SECTION: EYEBROW, TITLE & EDITORIAL INTRO */}
        {/* ========================================================= */}
        <div className="flex flex-col gap-5">
          
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="flex flex-col items-start">
              {/* Eyebrow Pill */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2 rounded-full border border-rose-200/90 bg-white/95 px-3 py-1 sm:px-3.5 sm:py-1.5 shadow-[0_2px_10px_rgba(229,35,27,0.06)] backdrop-blur-md"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5231b] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5231b]" />
                </span>
                <span className="font-display text-[10px] min-[360px]:text-[11px] font-bold uppercase tracking-[0.14em] text-[#e5231b]">
                  OUR SERVICES
                </span>
              </motion.div>

              {/* Headline with Brand Accent Badge */}
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
                className="mt-3 font-display text-[19px] sm:text-[24px] lg:text-[27px] xl:text-[29px] font-extrabold tracking-[-0.025em] text-[#0b132b] leading-[1.3] sm:leading-[1.28]"
              >
                <span className="block text-[#0b132b]">Smart Digital Solutions</span>
                <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5">
                  <span className="text-[#0b132b]">Made for</span>
                  <span className="relative inline-flex items-center justify-center -rotate-1 sm:-rotate-2 px-2.5 sm:px-3.5 py-0.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-rose-100/90 via-red-50 to-rose-100/70 border border-rose-200/80 shadow-[0_2px_10px_rgba(229,35,27,0.1)] transition-transform duration-300 hover:rotate-0 hover:scale-105 align-middle">
                    <span className="italic font-black text-[#e5231b] tracking-tight whitespace-nowrap">
                      Business Growth.
                    </span>
                  </span>
                </span>
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
                className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition-all duration-200 ${
                  canScrollLeft
                    ? "text-[#0f172a] hover:border-[#e5231b] hover:text-[#e5231b] hover:shadow-md active:scale-95 cursor-pointer"
                    : "text-slate-300 opacity-45 cursor-not-allowed border-slate-100"
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
                className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition-all duration-200 ${
                  canScrollRight
                    ? "text-[#0f172a] hover:border-[#e5231b] hover:text-[#e5231b] hover:shadow-md active:scale-95 cursor-pointer"
                    : "text-slate-300 opacity-45 cursor-not-allowed border-slate-100"
                }`}
              >
                <svg className="w-4.5 h-4.5 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Narrative Editorial Paragraphs (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="space-y-2 text-[14px] sm:text-[15.5px] text-[#475569] leading-[1.68] sm:leading-relaxed text-justify [text-align-last:left] [text-justify:inter-word] [text-wrap:pretty] break-normal hyphens-none w-full"
          >
            <p>
              Digital growth isn’t about doing more. It’s about doing the right things together.
              At <strong className="font-semibold text-[#0f172a]">Hover Business Services LLP</strong>, we combine visibility, technology, creativity, performance, and strategy to help your business get noticed, build trust, generate opportunities, and grow.
            </p>
            <p>
              Choose what you need—or bring it all together for one powerful digital strategy.
            </p>
          </motion.div>

        </div>
      </Container>

      {/* ========================================================= */}
      {/* SEPARATE FULL-WIDTH #970205 SECTION FOR SERVICE CARDS */}
      {/* ========================================================= */}
      <div className="relative mt-8 sm:mt-10 w-full bg-gradient-to-r from-[#970205] via-[#a80b0f] to-[#800103] py-6 sm:py-8 lg:py-10 shadow-[inset_0_2px_12px_rgba(0,0,0,0.15)] overflow-hidden">
        
        {/* Luminous Glow Ambient Spheres */}
        <div className="pointer-events-none absolute -top-24 right-[5%] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-[5%] h-80 w-80 rounded-full bg-black/20 blur-3xl" />

        <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile Header Nav Controls on red container */}
          <div className="flex sm:hidden items-center justify-between pb-3 px-1">
            <span className="font-display text-xs font-bold text-white uppercase tracking-wider">
              Explore All Services
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous service slide"
                className={`flex h-8 w-8 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-xs ${
                  canScrollLeft ? "active:scale-95 cursor-pointer" : "opacity-40 cursor-not-allowed"
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
                className={`flex h-8 w-8 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white shadow-xs ${
                  canScrollRight ? "active:scale-95 cursor-pointer" : "opacity-40 cursor-not-allowed"
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
            className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth py-1 px-0.5"
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
                className="group relative flex flex-col justify-between rounded-xl sm:rounded-2xl bg-white p-5.5 sm:p-6 lg:p-6.5 shadow-[0_12px_32px_rgba(0,0,0,0.18)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.28)] transition-all duration-300 snap-start shrink-0 w-[80vw] max-w-[315px] sm:w-[calc(50%-12px)] sm:max-w-none lg:w-[calc(25%-18px)] h-auto overflow-hidden"
              >
                {/* Top Subtle Hover Highlight Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent ${service.theme.lineColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex flex-col relative z-10">
                  {/* Card Header: Step Badge + Line + Category */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-md ${service.theme.badgeBg} text-white font-mono text-[12px] font-bold shadow-xs`}>
                        {service.number}
                      </span>
                      <span className={`h-[2px] w-6 rounded-full ${service.theme.lineColor}`} />
                    </div>

                    <span className="inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-700 transition-colors">
                      <span className={`h-1.5 w-1.5 rounded-full ${service.theme.lineColor} opacity-80 group-hover:opacity-100`} />
                      {service.category}
                    </span>
                  </div>

                  {/* Sleek Compact Icon */}
                  <div className="mt-5 mb-5 flex items-center justify-center">
                    <div className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl ${service.theme.iconBg} text-white ${service.theme.iconShadow} transition-all duration-300 group-hover:scale-110 group-hover:rotate-2`}>
                      <service.primaryIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6" strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-[16.5px] sm:text-[17.5px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#e5231b] transition-colors">
                    <Link href={service.href} className="focus:outline-none">
                      {service.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-[13px] sm:text-[13.5px] text-[#475569] leading-relaxed text-left [text-wrap:pretty]">
                    {service.description}
                  </p>

                  {/* Horizontal Divider Line */}
                  <div className="my-4.5 sm:my-5 border-t border-slate-200" />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-block px-3 py-1 rounded-sm text-[11.5px] sm:text-[12px] font-bold tracking-normal ${service.theme.tagStyle} whitespace-nowrap shadow-2xs transition-all duration-200 hover:scale-105`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Bar: Learn More + Animated Arrow + Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between relative z-10">
                  <Link
                    href={service.href}
                    className={`group/link flex items-center gap-1.5 text-xs sm:text-[13px] font-bold ${service.theme.actionText} transition-colors`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>

                  <Link
                    href={service.href}
                    aria-label={`Learn more about ${service.title}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${service.theme.circleBtnStyle} shadow-2xs transition-all duration-300 group-hover:scale-110 active:scale-95`}
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
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
          className="mt-8 sm:mt-10 relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 sm:p-4.5 pl-6 sm:pl-7 shadow-2xs hover:shadow-xs transition-shadow"
        >
          {/* Straight Vertical Red Accent Bar */}
          <div className="absolute left-2.5 top-3.5 bottom-3.5 w-1 rounded-full bg-[#e5231b]" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 pl-1 sm:pl-1.5 relative z-10">
            
            {/* Left Content Area */}
            <div className="flex items-start gap-3 sm:gap-3.5 max-w-3xl">
              <span className="flex h-9 w-9 sm:h-9.5 sm:w-9.5 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#e5231b] border border-rose-100 shadow-2xs mt-0.5">
                <TrendingUp className="w-4.5 h-4.5" strokeWidth={2.2} />
              </span>

              <div className="space-y-0.5 sm:space-y-1">
                <h3 className="font-display text-[14.5px] sm:text-[15.5px] font-bold text-slate-900 tracking-tight">
                  One Partner. Every Digital Capability.
                </h3>

                <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed [text-wrap:pretty]">
                  From <strong className="font-semibold text-slate-900">SEO and AI search to technology, marketing, content, and creative</strong>, we bring everything together to make your digital presence <strong className="font-semibold text-slate-900">seen, trusted, and built for growth.</strong>
                </p>
              </div>
            </div>

            {/* Right Growth Flow Badge */}
            <div className="shrink-0 pl-12 lg:pl-0">
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-slate-200/90 bg-slate-50/80 shadow-2xs text-[11px] sm:text-[12px] font-bold">
                <span className="text-slate-900">Seen</span>
                <span className="text-rose-500 font-normal">→</span>
                <span className="text-indigo-600">Trusted</span>
                <span className="text-rose-500 font-normal">→</span>
                <span className="text-emerald-600">Growth</span>
              </div>
            </div>

          </div>
        </motion.div>

      </Container>
    </section>
  );
}
