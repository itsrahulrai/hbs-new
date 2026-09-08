"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { aboutOverview } from "@/data/banners";

export function AboutOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white py-7 sm:py-9 lg:py-10 border-b border-slate-200/80">
      
      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* MAIN TWO-COLUMN SHOWCASE */}
        {/* ========================================================= */}
        <div className="grid gap-6 lg:gap-8 xl:gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT COLUMN: EDITORIAL, STORY, MISSION & VISION */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex max-w-full items-center gap-2 rounded-none border border-slate-300/80 bg-white px-3 py-1 shadow-2xs self-start"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#e5231b] opacity-75" />
                <span className="relative inline-flex rounded-none h-2 w-2 bg-[#e5231b]" />
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#e5231b] whitespace-nowrap">
                {aboutOverview.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline (Single Continuous Line) */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="mt-2.5 font-display text-[18px] sm:text-[21px] md:text-[22px] lg:text-[23px] xl:text-[25px] font-bold tracking-tight text-[#0b132b] leading-[1.3]"
            >
              <span>We Don’t Just Get You Seen. We Build </span>
              <span className="text-[#e5231b]">Digital Growth.</span>
            </motion.h2>

            {/* Narrative Editorial Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
              className="mt-3.5 space-y-2.5 text-[13.5px] sm:text-[14px] lg:text-[14.5px] text-[#475569] leading-[1.65] text-justify [text-align:justify] [text-align-last:left] [text-justify:inter-word] [text-wrap:pretty]"
            >
              <p>
                <strong className="font-semibold text-[#0f172a]">Hover Business Services LLP</strong> combines strategy, technology, AI, marketing, and creativity to help businesses strengthen their online presence, reach the right audience, and drive digital growth.
              </p>
              <p>
                From SEO and AI-powered search visibility to web development, performance marketing, social media, content, and creative services, we bring everything together into one focused digital strategy.
              </p>
              <p>
                Whether you’re a startup, SME, or established business, our solutions are designed to improve visibility, build credibility, generate relevant leads, and support sustainable growth.
              </p>
            </motion.div>

            {/* ===================================================== */}
            {/* MISSION & VISION CARD (CLEAN & SHARP ARCHITECTURAL STYLE) */}
            {/* ===================================================== */}
            <div className="mt-4 pt-3.5 border-t border-slate-200/80">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-none border-2 border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:border-[#e5231b] hover:shadow-[0_12px_24px_rgba(229,35,27,0.12)] transition-all duration-300"
              >
                {/* Top Signature Red Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#810103] group-hover:bg-[#e5231b] transition-colors duration-300" />

                <span className="block text-[11px] sm:text-xs md:text-[12.5px] font-bold uppercase tracking-wider text-[#0b132b] mb-3 pb-2 border-b border-slate-100">
                  Our Purpose & Strategic Vision:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 md:gap-5">
                  {/* Our Mission */}
                  <div className="flex items-start gap-2.5 group/item">
                    <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-none bg-slate-50 text-[#810103] border border-slate-300 shadow-2xs mt-0.5 group-hover/item:bg-[#810103] group-hover/item:text-white group-hover/item:border-[#810103] transition-all">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l5-5m-5 0h5v5" />
                      </svg>
                    </span>
                    <div className="text-[12.5px] sm:text-[13px] leading-[1.65] text-justify [text-align:justify] [text-align-last:left] [text-justify:inter-word]">
                      <strong className="font-semibold text-[#0f172a]">Our Mission</strong>{" "}
                      <span className="text-[#475569]">— To empower businesses to seize digital opportunities efficiently through smart strategy, meaningful creativity, modern technology, and AI — delivering tailored solutions that make sustainable growth simple and achievable.</span>
                    </div>
                  </div>

                  {/* Our Vision */}
                  <div className="flex items-start gap-2.5 group/item sm:border-l sm:border-slate-200/90 sm:pl-3.5 md:pl-4">
                    <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-none bg-slate-50 text-[#810103] border border-slate-300 shadow-2xs mt-0.5 group-hover/item:bg-[#810103] group-hover/item:text-white group-hover/item:border-[#810103] transition-all">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </span>
                    <div className="text-[12.5px] sm:text-[13px] leading-[1.65] text-justify [text-align:justify] [text-align-last:left] [text-justify:inter-word]">
                      <strong className="font-semibold text-[#0f172a]">Our Vision</strong>{" "}
                      <span className="text-[#475569]">— To be recognized globally as the trusted digital growth partner — helping companies stay visible, relevant, and resilient while building scalable foundations for lasting success in a connected world.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* RIGHT COLUMN: DIGITAL GROWTH GRAPHIC SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 25 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center items-center"
          >
            <Link
              href="/contact"
              className="group relative w-full block cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              aria-label="Digital Growth Impact - Let's Talk"
            >
              {/* Sharp Framed Canvas */}
              <div className="relative w-full overflow-hidden rounded-none border-2 border-slate-200/95 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:border-slate-300 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] transition-all duration-300 bg-white">
                <Image
                  src="/images/digital-grow.png"
                  alt="Digital Growth That Creates Impact - Hover Business Services"
                  width={1374}
                  height={1145}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </Link>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* FULL-WIDTH CONNECTED STRATEGY CLOSING CALLOUT */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mt-5 sm:mt-6 relative overflow-hidden rounded-none border-2 border-slate-200 bg-white p-3.5 sm:p-4 pl-6 sm:pl-7 shadow-2xs hover:border-slate-300 transition-colors"
        >
          {/* Straight Vertical Red Accent Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#810103]" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3.5 sm:gap-4 pl-1">
            <div className="flex items-start gap-3 sm:gap-3.5">
              <span className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-none bg-slate-50 text-[#810103] border border-slate-300 shadow-2xs mt-0.5">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              <div className="space-y-0.5">
                <h3 className="font-display text-[15px] sm:text-base lg:text-[17px] font-bold text-[#0b132b] tracking-tight">
                  One Connected Digital Approach
                </h3>
                <p className="text-[13px] sm:text-[14px] lg:text-[14.5px] text-[#475569] leading-relaxed">
                  At <strong className="font-semibold text-[#0f172a]">Hover Business Services LLP</strong>, we believe digital growth works best when strategy, technology, marketing, AI, and creativity move in the same direction. That connected approach shapes everything we do.
                </p>
              </div>
            </div>

            {/* Strategy Flow Indicator */}
            <div className="shrink-0 self-start md:self-center pl-11 md:pl-0">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-none bg-slate-50 border border-slate-300 text-[11px] sm:text-xs md:text-[13px] font-bold text-[#0b132b] shadow-2xs flex-wrap">
                <span className="text-[#0f172a]">Strategy</span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="text-[#0f172a]">Technology</span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="text-[#0f172a]">Marketing</span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="text-[#0f172a]">AI</span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="text-[#810103] font-extrabold">Creativity</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* ACTION BUTTONS DISPLAYED AFTER THE CARD */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
          className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-3.5"
        >
          <Link
            href="/about/case-studies"
            className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 rounded-none bg-[#e5231b] hover:bg-red-700 active:scale-[0.98] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_14px_rgba(229,35,27,0.28)] hover:-translate-y-0.5 transition-all cursor-pointer group"
          >
            <span className="text-white font-extrabold tracking-wider">View Our Work</span>
            <svg
              className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 rounded-none bg-white border-2 border-slate-300 hover:border-[#e5231b] text-[#0b132b] hover:text-[#e5231b] active:scale-[0.98] font-extrabold text-xs uppercase tracking-wider shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer group"
          >
            <span className="font-extrabold tracking-wider">Contact Us</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

      </Container>
    </section>
  );
}

