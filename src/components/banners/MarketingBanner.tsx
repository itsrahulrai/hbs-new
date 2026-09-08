"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const capabilities = [
  {
    title: "Strengthen online visibility",
    desc: "Across high-intent search and digital channels (SEO & AI Search GEO).",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Reach relevant audiences",
    desc: "With precision-targeted campaigns, strategic ads, and engaging content.",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Build trust & brand credibility",
    desc: "Through consistent, authoritative digital brand experiences.",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Generate qualified leads",
    desc: "Targeting high-intent buyers instead of chasing vanity clicks alone.",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Get actionable campaign insights",
    desc: "Deep performance data to guide smarter future marketing decisions.",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export function MarketingBanner() {
  return (
    <section className="relative overflow-hidden py-5 sm:py-6 lg:py-7 bg-white border-b border-slate-200/80">
      
      {/* Subtle clean background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-slate-100/40 blur-3xl" />
      </div>

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* MAIN TWO-COLUMN SHOWCASE */}
        {/* ========================================================= */}
        <div className="grid gap-5 sm:gap-6 lg:gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT COLUMN: EDITORIAL & CAPABILITIES (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Sharp Architectural Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-none border border-slate-300/80 bg-white px-2.5 py-0.5 shadow-2xs self-start"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#e5231b] opacity-75" />
                <span className="relative inline-flex rounded-none h-2 w-2 bg-[#e5231b]" />
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#e5231b] whitespace-nowrap">
                STRATEGY • DATA • AI • SEO • MARKETING
              </span>
            </motion.div>

            {/* Main Headline (Single Continuous Line) */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="mt-2 font-display text-[18px] sm:text-[21px] md:text-[22px] lg:text-[23px] xl:text-[25px] font-bold tracking-tight text-[#0b132b] leading-[1.25]"
            >
              <span>Digital Marketing That Drives </span>
              <span className="text-[#e5231b]">Real Growth</span>
            </motion.h2>

            {/* Editorial Narrative (All Original Text Kept Intact) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
              className="mt-2.5 space-y-2 text-[13.5px] sm:text-[14px] text-[#334155] leading-[1.65] text-justify [text-align:justify] [text-align-last:left] [text-justify:inter-word]"
            >
              <h3 className="font-display text-[15px] sm:text-[16px] font-bold text-[#0b132b] tracking-tight text-left">
                Turn Digital Presence Into Business Performance.
              </h3>
              <p>
                A strong digital presence should do more than generate visibility. It should attract the right audience, build authority, create demand, and drive action.
              </p>
              <p>
                At <strong className="font-semibold text-[#0b132b]">Hover Business Services LLP</strong>, we unite strategy, technology, AI, SEO, content, and performance marketing to create digital experiences built around your business goals.
              </p>
              <p>
                From being discovered to being chosen—we help your brand move every step closer to growth.
              </p>
            </motion.div>

            {/* ===================================================== */}
            {/* CAPABILITIES (CLEAN & SHARP ARCHITECTURAL - NO BOX BORDER) */}
            {/* ===================================================== */}
            <div className="mt-3.5 pt-1">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="group relative pt-2.5 border-t-2 border-[#810103]"
              >
                <span className="block text-[11.5px] sm:text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#0b132b] mb-2.5 pb-1.5 border-b border-slate-100">
                  Our Digital Marketing Capabilities Can Help You:
                </span>

                <div className="space-y-2.5 sm:space-y-3">
                  {capabilities.map((cap) => (
                    <div key={cap.title} className="flex items-start gap-2.5 sm:gap-3 group/item">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-none bg-slate-50 text-[#810103] border border-slate-300 shadow-2xs mt-0.5 group-hover/item:bg-[#810103] group-hover/item:text-white group-hover/item:border-[#810103] transition-all duration-200">
                        {cap.icon}
                      </span>
                      <div className="flex-1 text-[13px] sm:text-[13.5px] leading-[1.65] text-[#1e293b] text-justify [text-align:justify] [text-align-last:left] [text-justify:inter-word]">
                        <strong className="font-bold text-[#0b132b]">{cap.title}</strong>
                        <span className="text-slate-400 font-normal mx-1.5">—</span>
                        <span className="text-[#334155]">{cap.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D MARKETING HUB GRAPHIC SHOWCASE (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center"
          >
            <Link
              href="/contact"
              className="group relative block cursor-pointer transition-transform duration-300 hover:scale-[1.015] w-full max-w-[460px] lg:max-w-full"
              aria-label="Digital Marketing - Let's Talk"
            >
              <div className="relative w-full flex items-center justify-center lg:justify-end">
                <Image
                  src="/images/growth-digital.png"
                  alt="Digital Marketing Funnel - Hover Business Services"
                  width={1230}
                  height={1278}
                  className="w-full h-auto max-h-[480px] object-contain transition-transform duration-500"
                  priority
                />
              </div>
            </Link>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* FULL-WIDTH CLOSING VALUE PROPOSITION CALLOUT */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mt-4 sm:mt-4.5 relative overflow-hidden rounded-none border-2 border-slate-200 bg-white p-3 sm:p-3.5 pl-5 sm:pl-6 shadow-2xs hover:border-slate-300 transition-colors"
        >
          {/* Straight Vertical Red Accent Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#810103]" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-3.5 pl-1">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-none bg-slate-50 text-[#810103] border border-slate-300 shadow-2xs mt-0.5">
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              <div className="space-y-0.5">
                <h3 className="font-display text-[14px] sm:text-[15px] font-bold text-[#0b132b] tracking-tight">
                  Turn Attention Into Growth.
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                  Get discovered by the right audience, build lasting trust, and turn digital visibility into <strong className="font-semibold text-[#0f172a]">real business results.</strong>
                </p>
              </div>
            </div>

            {/* Growth Funnel Pill / Flow Indicator */}
            <div className="shrink-0 self-start md:self-center pl-9 md:pl-0">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-none bg-slate-50 border border-slate-300 text-[10.5px] sm:text-xs font-bold text-[#0b132b] shadow-2xs flex-wrap">
                <span className="text-[#0f172a]">Visibility</span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="text-[#0f172a]">Engagement</span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="text-[#0f172a]">Conversion</span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="text-[#810103] font-extrabold">Growth</span>
              </div>
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
