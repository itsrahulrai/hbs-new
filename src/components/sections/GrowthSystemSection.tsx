"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function GrowthSystemSection() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#fbfbfe] text-[#0f172a]">
      
      {/* Ambient Luxury Background Lighting Effects */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle mesh dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 0.75px, transparent 0.75px)",
            backgroundSize: "24px 24px"
          }}
        />
        {/* Soft Rose Glow on Top-Left */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl" />
        {/* Soft Indigo/Blue Glow behind the Orbit Card */}
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-indigo-100/40 blur-3xl" />
        {/* Subtle Ember Glow at Bottom */}
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-orange-100/30 blur-3xl" />
      </div>

      <Container className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* TOP ROW: LEFT EDITORIAL & RIGHT DYNAMIC ORBIT ENGINE */}
        {/* ========================================================= */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">

          {/* ----------------- LEFT COLUMN ----------------- */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between">
            
            {/* Ultra-Luxury Eyebrow Badge with Pulsing Beacon */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-rose-200/90 bg-white/95 px-4 py-1.5 shadow-[0_2px_12px_rgba(229,35,27,0.08)] backdrop-blur-md self-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5231b] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5231b]" />
              </span>
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.16em] text-[#e5231b]">
                ONE CONNECTED DIGITAL GROWTH SYSTEM
              </span>
            </div>

            {/* Premium High-Impact Headline */}
            <h2 className="mt-5 font-display text-xl sm:text-2xl lg:text-[32px] xl:text-[35px] font-extrabold tracking-[-0.025em] text-[#0b132b] leading-[1.3]">
              <span className="block text-[#0b132b]">Digital Growth Rarely</span>
              <span className="inline-flex items-center gap-2 whitespace-nowrap mt-1">
                <span>Comes From</span>
                <span className="relative inline-flex items-center justify-center -rotate-2 px-3 py-0.5 rounded-xl bg-gradient-to-r from-rose-100/90 via-red-50 to-rose-100/70 border border-rose-200/80 shadow-[0_2px_12px_rgba(229,35,27,0.12)] transition-transform hover:rotate-0">
                  <span className="italic font-black text-[#e5231b] tracking-tight">
                    One Channel
                  </span>
                </span>
              </span>
            </h2>

            {/* User's Exact Customer Journey Story */}
            <p className="mt-6 text-sm sm:text-base text-[#475569] leading-relaxed">
              A customer might discover your business through <strong className="font-bold text-[#0f172a]">Google</strong>, see your content on <strong className="font-bold text-[#0f172a]">social media</strong>, visit your <strong className="font-bold text-[#0f172a]">website</strong>, compare you with competitors, return through an <strong className="font-bold text-[#0f172a]">advertisement</strong>, and finally <strong className="font-bold text-[#0f172a]">contact you or make a purchase</strong>.
            </p>

            {/* User's Exact 6-Stage Journey from Discovery to Growth */}
            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-2xs backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748b]">
                  Creating A Stronger Journey From:
                </span>
                <span className="text-[10px] font-semibold text-[#e5231b] bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                  FULL-FUNNEL
                </span>
              </div>
              
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#0f172a]">
                <span className="rounded-lg bg-[#f8fafc] px-2.5 py-1 font-medium border border-slate-200/70 shadow-2xs">
                  Discovery
                </span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="rounded-lg bg-[#f8fafc] px-2.5 py-1 font-medium border border-slate-200/70 shadow-2xs">
                  Visibility
                </span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="rounded-lg bg-[#f8fafc] px-2.5 py-1 font-medium border border-slate-200/70 shadow-2xs">
                  Engagement
                </span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="rounded-lg bg-[#f8fafc] px-2.5 py-1 font-medium border border-slate-200/70 shadow-2xs">
                  Consideration
                </span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="rounded-lg bg-[#f8fafc] px-2.5 py-1 font-medium border border-slate-200/70 shadow-2xs">
                  Conversion
                </span>
                <span className="text-[#e5231b] font-bold">→</span>
                <span className="rounded-lg bg-rose-50 px-2.5 py-1 font-bold border border-rose-200 text-[#e5231b] shadow-2xs">
                  ★ Growth
                </span>
              </div>
            </div>


            {/* "Every interaction matters" Callout Box with Dual CTAs */}
            <div className="mt-7 rounded-2xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition-all hover:shadow-[0_12px_36px_rgba(15,23,42,0.09)]">
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#020617] text-white shadow-md shadow-slate-900/20 border border-white/10">
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white" />
                  </span>
                </div>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-[#0b132b]">
                    Every interaction matters.
                  </h4>
                  <p className="text-xs text-[#64748b] leading-relaxed mt-0.5">
                    That is why Hover takes a connected, full-funnel approach to digital growth.
                  </p>
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact?intent=website-audit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#0b132b] px-5 py-3 text-xs font-semibold text-white shadow-[0_4px_16px_rgba(11,19,43,0.25)] transition-all hover:bg-[#e5231b] hover:shadow-[0_8px_24px_rgba(229,35,27,0.35)] hover:-translate-y-0.5 cursor-pointer group"
                  style={{ color: "#ffffff" }}
                >
                  <span className="text-white font-semibold tracking-wide">Get Your Free Website Audit</span>
                  <span className="transition-transform group-hover:translate-x-1 text-white">→</span>
                </Link>

                <Link
                  href="/contact?intent=growth-expert"
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-slate-200/90 bg-white px-4 py-3 text-xs font-semibold text-[#0b132b] shadow-2xs transition-all hover:border-[#e5231b] hover:text-[#e5231b] hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Talk to a Growth Expert</span>
                </Link>
              </div>
            </div>

          </div>

          {/* ----------------- RIGHT IMAGE / DIAGRAM ----------------- */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-stretch justify-center">
            <div className="relative w-full h-full min-h-[460px] sm:min-h-[500px] lg:min-h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 p-3 sm:p-5 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_22px_65px_rgba(15,23,42,0.12)] flex items-center justify-center">
              {/* Soft ambient aura behind image */}
              <div className="pointer-events-none absolute -inset-2 bg-gradient-to-tr from-rose-100/30 via-indigo-50/20 to-transparent blur-xl" />
              
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
                <Image
                  src="/images/growth.png"
                  alt="One Connected Digital Growth System - Hover Business Services"
                  width={1440}
                  height={960}
                  className="w-full h-auto max-h-[510px] object-contain rounded-2xl transition-transform duration-500 hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM CONTAINER: OUR CONNECTED APPROACH */}
        {/* ========================================================= */}
        <div className="mt-14 rounded-3xl border border-slate-200/90 bg-white/90 p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          
          {/* Header Row */}
          <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#020617] text-white shadow-md shadow-slate-900/15 border border-white/10">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="8.5" y="14" width="7" height="7" rx="1.5" />
                <path d="M6.5 10v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
                <path d="M12 14v-2" />
              </svg>
            </span>
            <div>
              <h3 className="font-display text-base sm:text-lg font-black uppercase tracking-wider text-[#0b132b]">
                OUR CONNECTED APPROACH
              </h3>
              <p className="text-xs text-[#64748b] mt-0.5">We bring together Digital Marketing + AI + Technology + Creative around one objective: helping your business grow.</p>
            </div>
            <span className="hidden sm:block flex-1 h-px bg-slate-100 ml-4" />
          </div>

          {/* Center Pipeline Grid: 4 Steps on Left, Red Target on Right */}
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">

            {/* LEFT 4 STEPS PIPELINE */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                
                {/* Step 01: Digital Marketing */}
                <div className="relative rounded-2xl border border-slate-200/80 bg-[#fbfbfe] p-4.5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-rose-300 hover:shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] font-mono font-bold text-[#64748b]">
                      01
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50 text-[#e5231b]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </span>
                  </div>
                  <h4 className="mt-3.5 font-display text-xs sm:text-sm font-bold text-[#0b132b]">Digital Marketing</h4>
                  <p className="mt-1 text-[11px] text-[#64748b] leading-relaxed">Build visibility & drive high-intent traffic</p>
                </div>

                {/* Step 02: AI */}
                <div className="relative rounded-2xl border border-slate-200/80 bg-[#fbfbfe] p-4.5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] font-mono font-bold text-[#64748b]">
                      02
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14-1.41 1.41" />
                      </svg>
                    </span>
                  </div>
                  <h4 className="mt-3.5 font-display text-xs sm:text-sm font-bold text-[#0b132b]">AI</h4>
                  <p className="mt-1 text-[11px] text-[#64748b] leading-relaxed">Smart automation & deep personalization</p>
                </div>

                {/* Step 03: Technology */}
                <div className="relative rounded-2xl border border-slate-200/80 bg-[#fbfbfe] p-4.5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] font-mono font-bold text-[#64748b]">
                      03
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </span>
                  </div>
                  <h4 className="mt-3.5 font-display text-xs sm:text-sm font-bold text-[#0b132b]">Technology</h4>
                  <p className="mt-1 text-[11px] text-[#64748b] leading-relaxed">Robust platforms & seamless user funnels</p>
                </div>

                {/* Step 04: Creative */}
                <div className="relative rounded-2xl border border-slate-200/80 bg-[#fbfbfe] p-4.5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] font-mono font-bold text-[#64748b]">
                      04
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0-9 4.5 4.5 0 0 1 0-9z" />
                      </svg>
                    </span>
                  </div>
                  <h4 className="mt-3.5 font-display text-xs sm:text-sm font-bold text-[#0b132b]">Creative</h4>
                  <p className="mt-1 text-[11px] text-[#64748b] leading-relaxed">High-converting content that demands attention</p>
                </div>

              </div>
            </div>

            {/* RIGHT RED TARGET & SLOGAN */}
            <div className="lg:col-span-4 lg:border-l lg:border-slate-100 lg:pl-8 flex items-center gap-5">
              
              {/* Layered Optical Bullseye Graphic */}
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-rose-50/80 p-2 shadow-inner border border-rose-100">
                <svg className="h-16 w-16 text-[#e5231b]" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="28" stroke="#f43f5e" strokeWidth="3" strokeOpacity="0.25" />
                  <circle cx="32" cy="32" r="20" stroke="#e5231b" strokeWidth="3.5" />
                  <circle cx="32" cy="32" r="10" fill="#e5231b" />
                  <circle cx="32" cy="32" r="4" fill="white" />
                  {/* Arrow stuck in center */}
                  <line x1="52" y1="12" x2="33" y2="31" stroke="#0b132b" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M52 12 L45 13 L51 19 Z" fill="#0b132b" />
                </svg>
              </div>

              <div>
                <h4 className="font-display text-lg sm:text-xl font-extrabold text-[#0b132b] leading-tight tracking-tight">
                  One strategy. <br />
                  Every channel. <br />
                  <span className="text-[#e5231b] font-black">Maximum impact.</span>
                </h4>
                <p className="mt-2 text-xs text-[#64748b] leading-relaxed">
                  Instead of treating SEO, advertising, websites, content, and creative as separate activities, we connect them around one objective: <strong className="font-bold text-[#e5231b]">helping your business grow</strong>.
                </p>
              </div>

            </div>

          </div>

          {/* BOTTOM ROW: 4 PILLARS */}
          <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1: Unified Strategy */}
            <div className="flex items-center gap-3.5 rounded-2xl p-3 transition-all hover:bg-slate-50">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b132b] text-white shadow-xs">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </span>
              <div>
                <h5 className="font-display text-xs sm:text-sm font-bold text-[#0b132b]">Unified Strategy</h5>
                <p className="text-[11px] text-[#64748b]">All channels working together</p>
              </div>
            </div>

            {/* Pillar 2: Better Performance */}
            <div className="flex items-center gap-3.5 rounded-2xl p-3 transition-all hover:bg-slate-50">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b132b] text-white shadow-xs">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </span>
              <div>
                <h5 className="font-display text-xs sm:text-sm font-bold text-[#0b132b]">Better Performance</h5>
                <p className="text-[11px] text-[#64748b]">Higher ROI across the entire funnel</p>
              </div>
            </div>

            {/* Pillar 3: Faster Growth */}
            <div className="flex items-center gap-3.5 rounded-2xl p-3 transition-all hover:bg-slate-50">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b132b] text-white shadow-xs">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <div>
                <h5 className="font-display text-xs sm:text-sm font-bold text-[#0b132b]">Faster Growth</h5>
                <p className="text-[11px] text-[#64748b]">Smarter execution, quicker results</p>
              </div>
            </div>

            {/* Pillar 4: Sustainable Results */}
            <div className="flex items-center gap-3.5 rounded-2xl p-3 transition-all hover:bg-slate-50">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b132b] text-white shadow-xs">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </span>
              <div>
                <h5 className="font-display text-xs sm:text-sm font-bold text-[#0b132b]">Sustainable Results</h5>
                <p className="text-[11px] text-[#64748b]">Long-term compounding scale</p>
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}