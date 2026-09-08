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
    <section className="relative overflow-hidden bg-[#810103] py-2.5 sm:py-3 lg:py-3.5 border-y border-[#970205]">
      
      {/* Clean Architectural Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7a0103] via-[#810103] to-[#700102]" />
      </div>

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP HEADER: CRISP & CLEAN */}
        <div className="flex flex-col items-start text-left w-full">
          
          {/* Sharp Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-flex items-center gap-1.5 rounded-none border border-slate-300/80 bg-white px-2.5 py-0.5 shadow-2xs self-start"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#e5231b] opacity-75" />
              <span className="relative inline-flex rounded-none h-1.5 w-1.5 bg-[#e5231b]" />
            </span>
            <span className="font-sans text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#e5231b] whitespace-nowrap">
              SMART DIGITAL GROWTH
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.04, ease: "easeOut" }}
            className="mt-1.5 font-display text-[17px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold tracking-tight text-white leading-tight"
          >
            Ready to Grow Smarter in the Digital World?
          </motion.h2>

          {/* Narrative text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="mt-1 text-[12.5px] sm:text-[13.5px] lg:text-[14px] text-white/90 leading-normal max-w-none w-full"
          >
            Reach the right people, build stronger connections, and turn digital opportunities into measurable growth with smarter strategies.
          </motion.p>

        </div>

        {/* HERO CARD: SHARP LEAD FORM (COMPACT, NO EXTRA SPACE) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          className="relative z-10 mt-2 sm:mt-2.5 overflow-hidden rounded-none border-2 border-white/25 bg-black/20 p-2 sm:p-2.5 lg:p-3 shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-md"
        >
          {/* Top Signature White Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/90" />

          {status === "success" ? (
            <div className="rounded-none border-2 border-emerald-500 bg-white p-3 text-emerald-900 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs">
              <span className="flex h-5 w-5 items-center justify-center rounded-none bg-emerald-600 text-white text-xs font-bold">✓</span>
              <span>Thank you! Your consultation request has been received. Our team will contact you shortly.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-2 sm:gap-2.5 items-center w-full"
            >
              {/* Name */}
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-hover:text-slate-600 group-focus-within:text-slate-700 transition-colors">
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
                  className="w-full h-10 pl-9 pr-3 rounded-none bg-white border border-white focus:border-slate-400 text-[#0b132b] placeholder-slate-400 text-xs sm:text-[13px] font-semibold !outline-none focus:!outline-none focus-visible:!outline-none focus:!ring-0 focus-visible:!ring-0 transition-all shadow-2xs"
                />
              </div>

              {/* Email */}
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-hover:text-slate-600 group-focus-within:text-slate-700 transition-colors">
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
                  className="w-full h-10 pl-9 pr-3 rounded-none bg-white border border-white focus:border-slate-400 text-[#0b132b] placeholder-slate-400 text-xs sm:text-[13px] font-semibold !outline-none focus:!outline-none focus-visible:!outline-none focus:!ring-0 focus-visible:!ring-0 transition-all shadow-2xs"
                />
              </div>

              {/* Phone */}
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-hover:text-slate-600 group-focus-within:text-slate-700 transition-colors">
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
                  className="w-full h-10 pl-9 pr-3 rounded-none bg-white border border-white focus:border-slate-400 text-[#0b132b] placeholder-slate-400 text-xs sm:text-[13px] font-semibold !outline-none focus:!outline-none focus-visible:!outline-none focus:!ring-0 focus-visible:!ring-0 transition-all shadow-2xs"
                />
              </div>

              {/* Website */}
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-hover:text-slate-600 group-focus-within:text-slate-700 transition-colors">
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
                  className="w-full h-10 pl-9 pr-3 rounded-none bg-white border border-white focus:border-slate-400 text-[#0b132b] placeholder-slate-400 text-xs sm:text-[13px] font-semibold !outline-none focus:!outline-none focus-visible:!outline-none focus:!ring-0 focus-visible:!ring-0 transition-all shadow-2xs"
                />
              </div>

              {/* Submit Button */}
              <div className="w-full sm:col-span-2 lg:col-span-1">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group relative w-full h-10 px-5 sm:px-6 rounded-none bg-[#0b132b] hover:bg-black active:scale-[0.98] text-white font-extrabold text-[11px] sm:text-xs tracking-wider uppercase border-2 border-[#0b132b] hover:border-black shadow-xs hover:-translate-y-0.5 transition-all disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer shrink-0 whitespace-nowrap"
                >
                  <span>{status === "submitting" ? "Submitting..." : "GET FREE CONSULTATION"}</span>
                  {status !== "submitting" && (
                    <svg
                      className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-1"
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
        </motion.div>

      </Container>
    </section>
  );
}
