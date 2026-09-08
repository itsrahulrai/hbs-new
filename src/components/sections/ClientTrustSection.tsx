"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const clientBrands = [
  {
    name: "Dikshant",
    logo: "/images/company/dikshant.avif",
  },
  {
    name: "EFOS",
    logo: "/images/company/efos.jpg",
  },
  {
    name: "Onco Health Mart",
    logo: "/images/company/onco.png",
  },
  {
    name: "Printhutt",
    logo: "/images/company/printhutt.avif",
  },
];

export function ClientTrustSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white pt-5 sm:pt-6 lg:pt-7 pb-6 sm:pb-7 lg:pb-8 border-b border-slate-100">

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* FULL-WIDTH EDITORIAL SECTION */}
        {/* ========================================================= */}

        <div className="flex flex-col items-center text-center">

          {/* Eyebrow Badge (Sharp & Clean like STRATEGY • DATA • AI • SEO • MARKETING) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center justify-center gap-2 rounded-none border border-slate-300/80 bg-white px-2.5 py-0.5 shadow-2xs"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#e5231b] opacity-75" />
              <span className="relative inline-flex rounded-none h-2 w-2 bg-[#e5231b]" />
            </span>

            <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#e5231b] whitespace-nowrap">
              STRATEGIC PARTNERS IN DIGITAL SUCCESS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="mt-2.5 mx-auto max-w-[900px] text-center font-display text-[20px] sm:text-[23px] lg:text-[26px] xl:text-[28px] font-bold tracking-tight text-[#0b132b] leading-[1.25]"
          >
            <span>Our Clients Trust Us to </span>
            <span className="text-[#e5231b]">
              Drive Digital Growth
            </span>
          </motion.h2>

          {/* Narrative Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="mt-2 mx-auto max-w-[820px] text-center text-[13.5px] sm:text-[14px] text-[#334155] leading-[1.65] font-normal [text-wrap:pretty]"
          >
            We combine strategy, technology, innovation, and AI to help businesses
            stand out, reach the right audience, build lasting digital presence, and
            turn opportunities into measurable growth.
          </motion.p>

        </div>
        {/* ========================================================= */}
        {/* UNIFIED HORIZONTAL TRUST & BRANDS SLIDER BAR (SHARP & CLEAN ARCHITECTURAL) */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-3.5 sm:mt-4 overflow-hidden rounded-none border border-slate-200/95 bg-white p-2.5 sm:p-3 shadow-2xs hover:border-slate-300 transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 md:gap-5">

            {/* Left Pinned Badge: Trusted by 200+ Businesses */}
            <div className="flex shrink-0 items-center justify-center md:justify-start gap-3 px-3 py-1.5 md:py-0 md:px-3.5 md:border-r md:border-slate-200 md:pr-5 rounded-none bg-slate-50/70 md:bg-transparent border border-slate-200 md:border-0 md:border-r shadow-2xs md:shadow-none group cursor-default">
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-none bg-slate-50 border border-slate-300 text-[#810103] shadow-2xs transition-all duration-300 group-hover:bg-[#810103] group-hover:text-white group-hover:border-[#810103]">
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight text-left">
                <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Trusted by
                </span>
                <div className="font-display text-[13.5px] sm:text-[14px] md:text-[15px] font-extrabold text-[#0b132b] my-0.5">
                  <span className="text-[#e5231b] font-black">200+</span> Businesses
                </div>
                <span className="text-[10px] sm:text-[10.5px] font-semibold text-slate-500">
                  Across the Globe
                </span>
              </div>
            </div>

            {/* Right Continuous Infinite Logo Slider */}
            <div className="relative flex-1 overflow-hidden py-0.5 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
              <div className="flex w-max animate-[marquee_24s_linear_infinite] items-center gap-3.5 sm:gap-4 md:gap-5 hover:[animation-play-state:paused]">
                {[...clientBrands, ...clientBrands, ...clientBrands, ...clientBrands].map((client, idx) => (
                  <div
                    key={`${client.name}-${idx}`}
                    className="group flex h-[48px] sm:h-[54px] md:h-[58px] min-w-[130px] sm:min-w-[160px] md:min-w-[185px] shrink-0 items-center justify-center rounded-none bg-slate-50/50 border border-slate-200/70 px-3.5 sm:px-5 py-2 shadow-2xs transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-xs"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={48}
                      className="max-h-[26px] sm:max-h-[32px] md:max-h-[36px] w-auto max-w-[110px] sm:max-w-[140px] md:max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </Container>
    </section>
  );
}
