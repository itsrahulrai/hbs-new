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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-8 sm:py-12 lg:py-16 border-b border-slate-100">
      
      {/* Ambient background lighting with gentle floating animation */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-1/4 h-72 sm:h-96 w-72 sm:w-96 rounded-full bg-rose-100/40 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-1/4 h-64 sm:h-80 w-64 sm:w-80 rounded-full bg-indigo-50/50 blur-3xl"
        />
      </div>

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* FULL-WIDTH EDITORIAL SECTION */}
        {/* ========================================================= */}
        <div className="flex flex-col">
          
          {/* Luminous Eyebrow Badge */}
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
            <span className="font-display text-[9px] min-[360px]:text-[10px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-[0.14em] text-[#e5231b] whitespace-nowrap">
              STRATEGIC PARTNERS IN DIGITAL SUCCESS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="mt-3.5 sm:mt-4 font-display text-2xl sm:text-[28px] lg:text-[32px] xl:text-[34px] font-extrabold tracking-[-0.025em] text-[#0b132b] leading-[1.26] sm:leading-[1.3]"
          >
            <span className="block text-[#0b132b]">Our Clients Trust Us to</span>
            <span className="inline-flex items-center gap-2 whitespace-nowrap mt-1">
              <span>Drive</span>
              <span className="relative inline-flex items-center justify-center -rotate-2 px-3 sm:px-3.5 py-0.5 rounded-xl bg-gradient-to-r from-rose-100/90 via-red-50 to-rose-100/70 border border-rose-200/80 shadow-[0_2px_12px_rgba(229,35,27,0.12)] transition-transform duration-300 hover:rotate-0 hover:scale-105">
                <span className="italic font-black text-[#e5231b] tracking-tight">
                  Digital Growth
                </span>
              </span>
            </span>
          </motion.h2>

          {/* Full-Length Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="mt-3.5 sm:mt-5 text-[14.5px] sm:text-base lg:text-[17px] text-[#475569] leading-relaxed text-justify hyphens-auto [text-wrap:pretty] break-words w-full"
          >
            From start-ups finding their feet to established enterprises wanting to expand, hundreds of enterprises around the world have relied on us at <strong className="font-semibold text-[#0f172a]">Hover Business Services LLP</strong> for their digital growth. Strategy, technology, innovation, and Artificial Intelligence go hand in hand at Hover Business Services LLP to ensure that businesses become more visible to their target audience through digital platforms.
          </motion.p>

        </div>

        {/* ========================================================= */}
        {/* UNIFIED HORIZONTAL TRUST & BRANDS SLIDER BAR */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 lg:mt-10 overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 p-2.5 sm:p-3.5 md:p-4 shadow-[0_16px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.09)]"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 md:gap-6">
            
            {/* Left Pinned Badge: Trusted by 200+ Businesses */}
            <div className="flex shrink-0 items-center justify-center md:justify-start gap-3 px-2 sm:px-3 md:px-4 pb-2.5 md:pb-0 border-b md:border-b-0 md:border-r border-slate-200/80 md:pr-6 group cursor-default">
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-rose-50 border border-rose-100 text-[#e5231b] shadow-xs transition-transform duration-300 group-hover:scale-110">
                <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-slate-400">
                  Trusted by
                </span>
                <div className="font-display text-[14px] sm:text-[15px] md:text-[16px] font-black text-[#0b132b] my-0.5">
                  <span className="text-[#e5231b] font-black">200+</span> Businesses
                </div>
                <span className="text-[10.5px] sm:text-[11px] font-semibold text-slate-500">
                  Across the Globe
                </span>
              </div>
            </div>

            {/* Right Continuous Infinite Logo Slider */}
            <div className="relative flex-1 overflow-hidden py-0.5 sm:py-1 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
              <div className="flex w-max animate-[marquee_24s_linear_infinite] items-center gap-3.5 sm:gap-5 md:gap-6 hover:[animation-play-state:paused]">
                {[...clientBrands, ...clientBrands, ...clientBrands, ...clientBrands].map((client, idx) => (
                  <div
                    key={`${client.name}-${idx}`}
                    className="group flex h-[52px] sm:h-[58px] md:h-[62px] min-w-[140px] sm:min-w-[170px] md:min-w-[195px] shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-slate-100/90 bg-slate-50/50 px-3.5 sm:px-5 py-2 sm:py-2.5 shadow-2xs backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-200 hover:bg-white hover:shadow-xs"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={48}
                      className="max-h-[28px] sm:max-h-[34px] md:max-h-[38px] w-auto max-w-[110px] sm:max-w-[140px] md:max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105"
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
