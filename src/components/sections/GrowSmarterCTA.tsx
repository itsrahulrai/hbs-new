"use client";

import { useState } from "react";
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
    <section className="relative overflow-hidden bg-[#970205] pt-3 sm:pt-4 lg:pt-4.5 pb-4 sm:pb-5 lg:pb-6 shadow-inner">
      
      {/* Background Ambience with Soft Floating Glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#970205] via-[#a80b0f] to-[#800103]" />
        
        {/* Luminous Glow Orbs for Depth */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-24 right-[10%] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-20 -left-12 h-[460px] w-[460px] rounded-full bg-black/20 blur-3xl"
        />
      </div>

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* TOP HERO SECTION: EDITORIAL STORY (LEFT ALIGNED & FULL WIDTH) */}
        {/* ========================================================= */}
        <div className="flex flex-col items-start text-left w-full pb-1 sm:pb-2">
          
          {/* Luminous Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/15 px-3 py-1 sm:px-3.5 sm:py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.1)] backdrop-blur-md self-start"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="font-display text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-white">
              SMART DIGITAL GROWTH
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            style={{ color: "#ffffff" }}
            className="mt-2.5 sm:mt-3 font-display text-[20px] sm:text-[24px] lg:text-[27px] xl:text-[29px] font-bold tracking-[-0.025em] text-white !text-white leading-[1.3] sm:leading-[1.28]"
          >
            Ready to Grow Smarter in the Digital World?
          </motion.h2>

          {/* Narrative text with high-contrast white typography in a single line */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="mt-2 sm:mt-2.5 text-[14px] sm:text-[15px] lg:text-[16px] text-white/95 leading-normal max-w-none w-full"
          >
            Reach the right people, build stronger connections, and turn digital opportunities into measurable growth with smarter strategies.
          </motion.p>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM HERO CARD: INTERACTIVE CONSULTATION LEAD FORM */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
          className="relative z-10 mt-3.5 sm:mt-4 overflow-hidden rounded-xl sm:rounded-2xl border border-white/25 bg-white/15 p-3 sm:p-4 lg:p-4.5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl"
        >
          <div className="relative z-10 w-full">
            
            {/* Interactive Lead Form */}
            {status === "success" ? (
              <div className="rounded-2xl bg-white p-4 text-emerald-800 font-semibold text-sm sm:text-base animate-in fade-in duration-300 flex items-center justify-center gap-2.5 shadow-lg">
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
                    className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-white border border-white text-[#0f172a] placeholder-slate-400 text-sm font-medium focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-white/60 outline-none transition-all shadow-md"
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
                    className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-white border border-white text-[#0f172a] placeholder-slate-400 text-sm font-medium focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-white/60 outline-none transition-all shadow-md"
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
                    className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-white border border-white text-[#0f172a] placeholder-slate-400 text-sm font-medium focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-white/60 outline-none transition-all shadow-md"
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
                    className="w-full h-12 pl-10 pr-3.5 rounded-xl bg-white border border-white text-[#0f172a] placeholder-slate-400 text-sm font-medium focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-white/60 outline-none transition-all shadow-md"
                  />
                </div>

                {/* Submit Button */}
                <div className="w-full sm:col-span-2 lg:col-span-1">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative w-full h-12 px-6 rounded-xl bg-[#0b132b] hover:bg-[#070d1e] active:scale-[0.98] text-white font-extrabold text-xs tracking-wider uppercase shadow-[0_6px_20px_rgba(0,0,0,0.3)] transition-all disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer shrink-0 whitespace-nowrap border border-white/10"
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
