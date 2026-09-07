"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { aboutOverview } from "@/data/banners";

export function AboutOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12 border-b border-slate-100">
      
      {/* Soft Ambient Aura with gentle floating animation */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-rose-50/60 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -15, 0],
            y: [0, 12, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-indigo-50/50 blur-3xl"
        />
        <div className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-sky-50/40 blur-3xl" />
      </div>

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
              className="inline-flex items-center gap-2 rounded-full border border-rose-200/90 bg-white/95 px-3 py-1 shadow-[0_2px_10px_rgba(229,35,27,0.06)] backdrop-blur-md self-start"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5231b] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5231b]" />
              </span>
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-[#e5231b]">
                {aboutOverview.eyebrow}
              </span>
            </motion.div>

            {/* Main Headline with Badge Styling */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="mt-2.5 font-display text-[19px] sm:text-[24px] md:text-[25px] lg:text-[27px] xl:text-[29px] font-extrabold tracking-[-0.025em] text-[#0b132b] leading-[1.3] sm:leading-[1.26] [text-wrap:balance]"
            >
              <span className="block text-[#0b132b]">We Don’t Just Get You Seen.</span>
              <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5">
                <span className="text-[#0b132b]">We Build</span>
                <span className="relative inline-flex items-center justify-center -rotate-1 sm:-rotate-2 px-2.5 sm:px-3.5 py-0.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-rose-100/90 via-red-50 to-rose-100/70 border border-rose-200/80 shadow-[0_2px_10px_rgba(229,35,27,0.1)] transition-transform duration-300 hover:rotate-0 hover:scale-105 align-middle">
                  <span className="italic font-black text-[#e5231b] tracking-tight whitespace-nowrap">
                    Digital Growth.
                  </span>
                </span>
              </span>
            </motion.h2>

            {/* Narrative Editorial Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
              className="mt-3.5 space-y-2.5 text-[14.5px] sm:text-[15.5px] md:text-base text-[#475569] leading-[1.68] sm:leading-relaxed text-justify [text-align-last:left] [text-justify:inter-word] [text-wrap:pretty] break-normal hyphens-none"
            >
              <p>
                <strong className="font-semibold text-[#0f172a]">Hover Business Services LLP</strong> combines strategy, technology, AI, marketing, and creativity to help businesses strengthen their online presence, reach the right audience, and drive digital growth.
              </p>
              <p>
                From <strong className="font-semibold text-[#0f172a]">SEO and AI-powered search visibility to web development, performance marketing, social media, content, and creative services</strong>, we bring everything together into one focused digital strategy.
              </p>
              <p>
                Whether you’re a <strong className="font-semibold text-[#0f172a]">startup, SME, or established business</strong>, our solutions are designed to improve visibility, build credibility, generate relevant leads, and support sustainable growth.
              </p>
            </motion.div>

            {/* ===================================================== */}
            {/* MISSION & VISION COMPACT CARDS (DISTINCT BACKGROUNDS) */}
            {/* ===================================================== */}
            <div className="mt-4 pt-3.5 border-t border-slate-200/80">
              <div className="grid gap-3 sm:gap-3.5 sm:grid-cols-2">
                
                {/* Our Mission Card - Rose Pastel */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/85 via-red-50/40 to-white p-3.5 sm:p-4 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#e5231b] border border-rose-200 shadow-2xs transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="5" />
                          <circle cx="12" cy="12" r="1.5" fill="#e5231b" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l5-5m-5 0h5v5" />
                        </svg>
                      </div>
                      <h3 className="font-display text-[15px] sm:text-base font-bold text-[#0b132b] tracking-tight">
                        {aboutOverview.mission.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-[13.5px] sm:text-[14px] text-[#475569] leading-relaxed text-justify [text-align-last:left] [text-justify:inter-word] [text-wrap:pretty] break-normal hyphens-none">
                      {aboutOverview.mission.description}
                    </p>
                  </div>
                </motion.div>

                {/* Our Vision Card - Indigo Pastel */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-2xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/85 via-blue-50/40 to-white p-3.5 sm:p-4 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 border border-indigo-200 shadow-2xs transition-transform duration-300 group-hover:scale-110">
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <h3 className="font-display text-[15px] sm:text-base font-bold text-[#0b132b] tracking-tight">
                        {aboutOverview.vision.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-[13.5px] sm:text-[14px] text-[#475569] leading-relaxed text-justify [text-align-last:left] [text-justify:inter-word] [text-wrap:pretty] break-normal hyphens-none">
                      {aboutOverview.vision.description}
                    </p>
                  </div>
                </motion.div>

              </div>

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
              className="group relative w-full block cursor-pointer transition-transform duration-500 hover:-translate-y-1.5"
              aria-label="Digital Growth Impact - Let's Talk"
            >
              {/* Vibrant Ambient Backlight Glow with soft pulse */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 sm:-inset-5 rounded-3xl bg-gradient-to-tr from-rose-200/50 via-indigo-100/40 to-sky-200/40 blur-2xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Frameless Floating Image Canvas */}
              <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl ring-1 ring-slate-900/[0.07] shadow-[0_20px_50px_rgba(11,19,43,0.09)] group-hover:shadow-[0_25px_65px_rgba(229,35,27,0.14)] transition-shadow duration-500 bg-white">
                <Image
                  src="/images/digital-growth.png"
                  alt="Digital Growth That Creates Impact - Hover Business Services"
                  width={1200}
                  height={1000}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
                
                {/* Subtle Hover Sheen Overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
          className="mt-6 relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 sm:p-4 pl-4.5 sm:pl-5 shadow-2xs hover:shadow-xs transition-shadow"
        >
          {/* Straight Vertical Red Accent Bar */}
          <div className="absolute left-2.5 top-3 bottom-3 w-1.5 rounded-full bg-[#e5231b]" />

          <div className="flex items-start sm:items-center gap-3 pl-1.5 sm:pl-2">
            <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#e5231b] border border-rose-100 shadow-2xs">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            <p className="text-xs sm:text-[14.5px] text-[#334155] leading-relaxed font-medium">
              At <strong className="font-bold text-[#0b132b]">Hover Business Services LLP</strong>, we believe digital growth works best when{" "}
              <span className="inline-block px-1.5 py-0.5 rounded-[4px] bg-amber-50 text-amber-900 border border-amber-200/90 font-semibold text-[11.5px] sm:text-[13px] whitespace-nowrap">strategy</span>{" "}
              <span className="text-[#e5231b] font-bold">→</span>{" "}
              <span className="inline-block px-1.5 py-0.5 rounded-[4px] bg-sky-50 text-sky-900 border border-sky-200/90 font-semibold text-[11.5px] sm:text-[13px] whitespace-nowrap">technology</span>{" "}
              <span className="text-[#e5231b] font-bold">→</span>{" "}
              <span className="inline-block px-1.5 py-0.5 rounded-[4px] bg-emerald-50 text-emerald-900 border border-emerald-200/90 font-semibold text-[11.5px] sm:text-[13px] whitespace-nowrap">marketing</span>{" "}
              <span className="text-[#e5231b] font-bold">→</span>{" "}
              <span className="inline-block px-1.5 py-0.5 rounded-[4px] bg-rose-50 text-rose-900 border border-rose-200/90 font-semibold text-[11.5px] sm:text-[13px] whitespace-nowrap">AI</span>{" "}
              <span className="text-[#e5231b] font-bold">→</span>{" "}
              <span className="inline-block px-1.5 py-0.5 rounded-[4px] bg-purple-50 text-purple-900 border border-purple-200/90 font-semibold text-[11.5px] sm:text-[13px] whitespace-nowrap">creativity</span>{" "}
              move in the same direction. That connected approach shapes everything we do.
            </p>
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
            className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#e5231b] via-[#ea3829] to-[#d81a12] hover:from-[#d81a12] hover:to-[#c8160f] active:scale-[0.98] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(229,35,27,0.32)] hover:shadow-[0_6px_22px_rgba(229,35,27,0.42)] hover:-translate-y-0.5 transition-all cursor-pointer group"
            style={{ color: "#ffffff" }}
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
            className="inline-flex shrink-0 items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-[#e5231b] text-[#0b132b] hover:text-[#e5231b] active:scale-[0.98] font-extrabold text-xs uppercase tracking-wider shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer group"
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

