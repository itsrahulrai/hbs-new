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
      <svg className="w-3.5 h-3.5 text-[#e5231b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    bg: "bg-rose-50 border-rose-100",
  },
  {
    title: "Reach relevant audiences",
    desc: "With precision-targeted campaigns, strategic ads, and engaging content.",
    icon: (
      <svg className="w-3.5 h-3.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    bg: "bg-indigo-50 border-indigo-100",
  },
  {
    title: "Build trust & brand credibility",
    desc: "Through consistent, authoritative digital brand experiences.",
    icon: (
      <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    bg: "bg-emerald-50 border-emerald-100",
  },
  {
    title: "Generate qualified leads",
    desc: "Targeting high-intent buyers instead of chasing vanity clicks alone.",
    icon: (
      <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    bg: "bg-amber-50 border-amber-100",
  },
  {
    title: "Get actionable campaign insights",
    desc: "Deep performance data to guide smarter future marketing decisions.",
    icon: (
      <svg className="w-3.5 h-3.5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    bg: "bg-purple-50 border-purple-100",
  },
];

export function MarketingBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fcfcfe] via-[#f8fafc] to-[#fcfcfe] py-8 sm:py-12 lg:py-16 border-b border-slate-100">
      
      {/* Soft Ambient Aura with gentle floating animation */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-1/4 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-rose-100/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-1/4 h-64 sm:h-80 w-64 sm:w-80 rounded-full bg-indigo-50/40 blur-3xl"
        />
      </div>

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* MAIN TWO-COLUMN SHOWCASE */}
        {/* ========================================================= */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 xl:gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT COLUMN: EDITORIAL & CAPABILITIES */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex max-w-full items-center gap-1.5 sm:gap-2 rounded-full border border-rose-200/90 bg-white/95 px-2.5 py-1 sm:px-3.5 sm:py-1.5 shadow-[0_2px_10px_rgba(229,35,27,0.06)] backdrop-blur-md self-start"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5231b] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5231b]" />
              </span>
              <span className="font-display text-[8.5px] min-[360px]:text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-[0.14em] text-[#e5231b] whitespace-nowrap">
                STRATEGY • DATA • AI • SEO • MARKETING
              </span>
            </motion.div>

            {/* Headline matching ClientTrustSection 2-line style */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="mt-3 sm:mt-3.5 font-display text-2xl sm:text-[28px] lg:text-[31px] xl:text-[33px] font-extrabold tracking-[-0.025em] text-[#0b132b] leading-[1.24] sm:leading-[1.28]"
            >
              <span className="block text-[#0b132b]">Digital Marketing That</span>
              <span className="inline-flex items-center gap-2 whitespace-nowrap mt-1">
                <span>Drives</span>
                <span className="relative inline-flex items-center justify-center -rotate-2 px-3 sm:px-3.5 py-0.5 rounded-xl bg-gradient-to-r from-rose-100/90 via-red-50 to-rose-100/70 border border-rose-200/80 shadow-[0_2px_12px_rgba(229,35,27,0.12)] transition-transform duration-300 hover:rotate-0 hover:scale-105">
                  <span className="italic font-black text-[#e5231b] tracking-tight">
                    Real Growth
                  </span>
                </span>
              </span>
            </motion.h2>

            {/* Opening Hook Statement */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }}
              className="mt-3 sm:mt-4 text-[14.5px] sm:text-[16px] lg:text-[17px] font-semibold text-[#0f172a] leading-relaxed"
            >
              Visibility alone is just the start. Your digital presence has to get seen by the right audience, develop authority, and convince them to act.
            </motion.p>

            {/* Narrative Story */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
              className="mt-3 sm:mt-4 text-[14px] sm:text-[15.5px] lg:text-[17px] text-[#475569] leading-relaxed text-justify hyphens-auto [text-wrap:pretty] break-words"
            >
              With <strong className="font-semibold text-[#0f172a]">Hover Business Services LLP</strong>, strategy, data, artificial intelligence, content, search engine optimization (SEO), and performance marketing come together in a combination that focuses on achieving your business objectives. Our primary focus lies in connecting with the right target audience, enhancing your online presence, and providing digital experiences that drive them towards taking action. From ensuring higher search visibility to engaging them on the platforms where they interact, we focus on creating compelling digital experiences for you.
            </motion.p>

            {/* Capabilities List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.26, ease: "easeOut" }}
              className="mt-4 sm:mt-5 rounded-2xl border border-slate-200/80 bg-white/90 p-3.5 sm:p-4.5 lg:p-5 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <span className="block text-[11px] sm:text-xs md:text-[13px] font-bold uppercase tracking-wider text-[#0b132b] mb-3 sm:mb-3.5">
                Our Digital Marketing Capabilities Can Help You:
              </span>
              
              <div className="space-y-2.5 sm:space-y-3">
                {capabilities.map((cap, idx) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: 0.28 + idx * 0.05, ease: "easeOut" }}
                    className="flex items-start gap-2.5 sm:gap-3 group"
                  >
                    <span className={`flex h-5.5 w-5.5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-lg ${cap.bg} border shadow-2xs mt-0.5 transition-transform duration-300 group-hover:scale-110`}>
                      {cap.icon}
                    </span>
                    <div className="text-[13px] sm:text-[14.5px] lg:text-[15px] leading-relaxed">
                      <strong className="font-semibold text-[#0f172a]">{cap.title}</strong>{" "}
                      <span className="text-[#475569]">— {cap.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 3D MARKETING HUB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center items-center w-full"
          >
            <div className="group relative w-full max-w-[540px] lg:max-w-none mx-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 p-2 sm:p-3 shadow-[0_16px_50px_rgba(15,23,42,0.07)] hover:shadow-[0_22px_60px_rgba(229,35,27,0.1)] transition-all duration-500 backdrop-blur-xl hover:-translate-y-1">
              <Image
                src="/images/growth2.png"
                alt="Digital Marketing Capabilities - Hover Business Services"
                width={1200}
                height={1200}
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-[1.015]"
                priority
              />
            </div>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* FULL-WIDTH CLOSING VALUE PROPOSITION CALLOUT */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
          className="mt-6 sm:mt-8 relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-3.5 sm:p-4.5 lg:p-5 pl-4 sm:pl-5 lg:pl-6 shadow-2xs hover:shadow-xs transition-shadow"
        >
          {/* Straight Vertical Red Accent Bar */}
          <div className="absolute left-2.5 top-3.5 bottom-3.5 w-1.5 rounded-full bg-[#e5231b]" />

          <div className="flex items-start sm:items-center gap-3 sm:gap-3.5 pl-1.5 sm:pl-2">
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#e5231b] border border-rose-100 shadow-2xs">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </span>
            <p className="text-[13.5px] sm:text-[15px] lg:text-[17px] text-[#475569] leading-relaxed text-justify sm:text-left hyphens-auto [text-wrap:pretty] break-words">
              It does not matter whether it is <strong className="font-semibold text-[#0f172a]">organic growth in traffic or SEO visibility</strong>, <strong className="font-semibold text-[#0f172a]">digital marketing activities</strong>, or <strong className="font-semibold text-[#0f172a]">higher levels of engagement</strong> with your audience — our digital marketing services will help you <span className="font-semibold text-[#e5231b]">increase your visibility</span>, <span className="font-semibold text-indigo-600">strengthen audience engagement</span>, and <span className="font-semibold text-emerald-600">turn more opportunities into business</span>.
            </p>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
