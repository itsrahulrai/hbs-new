"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function GrowSmarterCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", website: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 800);
  };

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] pt-2.5 sm:pt-3 lg:pt-4 pb-5 sm:pb-6 lg:pb-7 border-y border-slate-200/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]">
      
      {/* Background Container with Realistic Blurred Office Scene & Circular Arch */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Right-Side Soft Office Interior Backdrop */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-3/5 h-full opacity-55">
          <Image
            src="/images/office-bg.jpg"
            alt="Modern Office Background"
            fill
            className="object-cover object-right blur-[6px] scale-105"
            priority
          />
        </div>

        {/* Seamless White / Off-White Left-to-Right Editorial Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/95 lg:via-[#f8fafc]/80 to-transparent" />
        
        {/* Soft Vertical Edge Fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/70 via-transparent to-[#f8fafc]/85" />

        {/* Circular Ambient Aura Arc Behind Visual */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 right-[8%] lg:right-[14%] h-[580px] w-[580px] rounded-full bg-gradient-to-tr from-sky-100/50 via-white/60 to-rose-100/40 border border-white/80 shadow-[0_0_90px_rgba(255,255,255,0.85)] backdrop-blur-[2px]"
        />
        
        {/* Warm Rose Spotlight on Right */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 h-[500px] w-[540px] rounded-full bg-gradient-to-bl from-rose-300/25 via-amber-100/20 to-transparent blur-3xl"
        />
        
        {/* Soft Sky Blue Spotlight on Left */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -top-16 -left-12 h-[460px] w-[460px] rounded-full bg-gradient-to-br from-sky-200/35 via-indigo-100/20 to-transparent blur-3xl"
        />
      </div>

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* TOP HERO SECTION: EDITORIAL STORY + VISUAL */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-end">
          
          {/* Left Column: Heading, Narrative */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center pb-2 sm:pb-3 lg:pb-4">
            
            {/* Luminous Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-rose-200/90 bg-white/95 px-3.5 py-1.5 shadow-[0_2px_10px_rgba(229,35,27,0.06)] backdrop-blur-md self-start"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5231b] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5231b]" />
              </span>
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.15em] text-[#e5231b]">
                SMART DIGITAL GROWTH
              </span>
            </motion.div>

            {/* Headline matching MarketingBanner & ClientTrustSection style */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="mt-3.5 font-display text-2xl sm:text-[28px] lg:text-[31px] xl:text-[33px] font-extrabold tracking-[-0.025em] text-[#0b132b] leading-[1.28]"
            >
              <span className="block text-[#0b132b]">Ready to Grow Smarter</span>
              <span className="inline-flex items-center gap-2 whitespace-nowrap mt-1">
                <span>in the</span>
                <span className="relative inline-flex items-center justify-center -rotate-2 px-3.5 py-0.5 rounded-xl bg-gradient-to-r from-rose-100/90 via-red-50 to-rose-100/70 border border-rose-200/80 shadow-[0_2px_12px_rgba(229,35,27,0.12)] transition-transform duration-300 hover:rotate-0 hover:scale-105">
                  <span className="italic font-black text-[#e5231b] tracking-tight">
                    Digital World?
                  </span>
                </span>
              </span>
            </motion.h2>

            {/* Narrative text with clean, uniform regular font weight */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
              className="mt-3.5 text-base sm:text-[17px] text-[#475569] leading-[1.65] max-w-xl font-normal"
            >
              Find out more about the possibilities of using an effective approach, modern technologies, AI, and creativity for your business development.
            </motion.p>

          </div>

          {/* Right Column: Visual Mockup Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-5 flex items-end justify-center lg:justify-end -mb-1 sm:-mb-2"
          >
            <div className="relative w-full max-w-[500px] transition-transform duration-500 hover:-translate-y-1">
              <Image
                src="/images/ai-powered-growth.png"
                alt="AI-Powered Digital Growth - Hover Business Services"
                width={600}
                height={400}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_14px_28px_rgba(15,23,42,0.07)] translate-y-1 sm:translate-y-1.5 transition-transform duration-500 hover:scale-[1.015]"
              />
            </div>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM HERO CARD: INTERACTIVE CONSULTATION LEAD FORM */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
          className="relative z-10 overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 sm:p-4.5 lg:p-5 shadow-[0_18px_45px_rgba(15,23,42,0.07),0_2px_8px_rgba(15,23,42,0.03)] backdrop-blur-xl"
        >
          {/* Top Gradient Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-[#e5231b] to-amber-400" />

          <div className="relative z-10 w-full">
            
            {/* Interactive Lead Form */}
            {status === "success" ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 font-semibold text-sm sm:text-base animate-in fade-in duration-300 flex items-center justify-center gap-2.5 shadow-xs">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">✓</span>
                <span>Thank you! Your consultation request has been received. Our team will contact you shortly.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-2.5 sm:gap-3 lg:gap-3.5 items-center w-full"
              >
                {/* Name */}
                <div className="relative w-full group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-hover:text-slate-600 group-focus-within:text-slate-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    style={{ outline: "none", boxShadow: "none" }}
                    className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-[#f8fafc] hover:bg-slate-100/60 focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-slate-300 text-[#0f172a] placeholder-slate-400 text-sm font-medium focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 outline-none transition-all shadow-2xs"
                  />
                </div>

                {/* Email */}
                <div className="relative w-full group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-hover:text-slate-600 group-focus-within:text-slate-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    style={{ outline: "none", boxShadow: "none" }}
                    className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-[#f8fafc] hover:bg-slate-100/60 focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-slate-300 text-[#0f172a] placeholder-slate-400 text-sm font-medium focus:bg-white focus:border-slate-300 focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 outline-none transition-all shadow-2xs"
                  />
                </div>

                {/* Phone */}
                <div className="relative w-full group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-hover:text-slate-600 group-focus-within:text-slate-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                    style={{ outline: "none", boxShadow: "none" }}
                    className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-[#f8fafc] hover:bg-slate-100/60 focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-slate-300 text-[#0f172a] placeholder-slate-400 text-sm font-medium focus:bg-white focus:border-slate-300 focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 outline-none transition-all shadow-2xs"
                  />
                </div>

                {/* Website */}
                <div className="relative w-full group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-hover:text-slate-600 group-focus-within:text-slate-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="Website (Optional)"
                    style={{ outline: "none", boxShadow: "none" }}
                    className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-[#f8fafc] hover:bg-slate-100/60 focus:bg-white border border-slate-200 hover:border-slate-300 focus:border-slate-300 text-[#0f172a] placeholder-slate-400 text-sm font-medium focus:bg-white focus:border-slate-300 focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 outline-none transition-all shadow-2xs"
                  />
                </div>

                {/* Submit Button */}
                <div className="w-full sm:col-span-2 lg:col-span-1">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative w-full h-12 px-6 rounded-xl bg-gradient-to-r from-[#e5231b] via-[#ea3829] to-[#d81a12] hover:from-[#d81a12] hover:to-[#c8160f] active:scale-[0.98] text-white font-extrabold text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(229,35,27,0.32)] hover:shadow-[0_6px_22px_rgba(229,35,27,0.42)] transition-all disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer shrink-0 whitespace-nowrap"
                  >
                    <span>{status === "submitting" ? "Submitting..." : "GET FREE CONSULTATION"}</span>
                    {status !== "submitting" && (
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
