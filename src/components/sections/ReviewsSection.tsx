"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  Star,
  MapPin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface GoogleReview {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  date: string;
  service: string;
  quote: string;
}

// 6 Real Client Reviews to paginate cleanly in groups of 3
const ALL_REVIEWS: GoogleReview[] = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "Founder",
    company: "Art Value",
    avatar: "/images/reviews/user1.jpg",
    rating: 5,
    date: "2 weeks ago",
    service: "SEO & Digital Strategy",
    quote:
      "Hover Business Services transformed our online presence completely. Their team is proactive, professional and result-driven. Our website traffic increased significantly and we are getting high-quality leads.",
  },
  {
    id: 2,
    name: "Neha Bansal",
    role: "Marketing Head",
    company: "Care Connects",
    avatar: "/images/reviews/user2.jpg",
    rating: 5,
    date: "3 weeks ago",
    service: "Web App & Conversion",
    quote:
      "The team at HBS is excellent in their work. They understood our goals well and delivered beyond our expectations. Our SEO rankings and brand visibility have improved remarkably.",
  },
  {
    id: 3,
    name: "Vikram Arora",
    role: "Managing Director",
    company: "Biker Press",
    avatar: "/images/reviews/user3.jpg",
    rating: 5,
    date: "1 month ago",
    service: "Digital Marketing & AI",
    quote:
      "From website development to digital marketing, everything was handled with great expertise. The support and communication are outstanding. Highly recommend HBS!",
  },
  {
    id: 4,
    name: "Ananya Sharma",
    role: "Operations Director",
    company: "Apex Healthcare",
    avatar: "/images/reviews/user4.jpg",
    rating: 5,
    date: "1 month ago",
    service: "Local SEO & GEO",
    quote:
      "Working with HBS has been a game-changer for our local patient acquisition. We saw a 180% increase in qualified inquiries within 4 months of their AI-SEO strategy.",
  },
  {
    id: 5,
    name: "Sanjay Singhal",
    role: "CEO",
    company: "Matrix Logistics",
    avatar: "/images/reviews/user5.jpg",
    rating: 5,
    date: "2 months ago",
    service: "Custom Web App",
    quote:
      "Extremely reliable and tech-savvy team. They re-architected our enterprise portal and streamlined our digital customer experience. Transparent reporting and very responsive support.",
  },
  {
    id: 6,
    name: "Pooja Kapoor",
    role: "Co-Founder",
    company: "Style Aura",
    avatar: "/images/reviews/user6.jpg",
    rating: 5,
    date: "2 months ago",
    service: "Brand & Creative Design",
    quote:
      "Creative, agile, and laser-focused on ROI. The branding and conversion-rate optimization they implemented helped double our online checkout rate within 60 days.",
  },
];

// Google 4-Color SVG Icon
function GoogleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

// Authentic Real World & India Map Graphic (public/images/map2.png) - Full Background Cover & Full India Visibility
function DarkWorldMapGraphic() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {/* Background Graphic Image - 100% Full Edge-to-Edge Background Cover */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/map2.png"
          alt="World Map - Serving Clients Across India & Globally"
          fill
          className="object-cover object-[44%_center] sm:object-[43.5%_center] lg:object-[43%_center] opacity-100"
          priority
        />
      </div>

      {/* Subtle soft gradient ONLY behind left text so red India map remains completely unblocked */}
      <div className="absolute inset-y-0 left-0 w-[46%] sm:w-[40%] bg-gradient-to-r from-[#090d16] via-[#090d16]/75 to-transparent pointer-events-none" />
    </div>
  );
}

export function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(ALL_REVIEWS.length / 3);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance reviews pages every 6 seconds
  useEffect(() => {
    if (!isAutoplay) return;
    autoplayRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplay, totalPages]);

  const visibleReviews = ALL_REVIEWS.slice(currentPage * 3, currentPage * 3 + 3);

  return (
    <section className="relative overflow-hidden py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-[#f8fafc] via-[#ffffff] to-[#f8fafc] border-b border-slate-100">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-rose-100/30 blur-3xl" />
        <div className="absolute bottom-10 -left-20 h-96 w-96 rounded-full bg-amber-50/40 blur-3xl" />
      </div>

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* HEADER SECTION: EYEBROW, TITLE & INTRO */}
        {/* ========================================================= */}
        <div className="flex flex-col items-start text-left w-full">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-none border border-slate-300/80 bg-white px-2.5 py-0.5 shadow-2xs"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#e5231b] opacity-75" />
              <span className="relative inline-flex rounded-none h-2 w-2 bg-[#e5231b]" />
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#e5231b] whitespace-nowrap">
              WHAT OUR CLIENTS SAY
            </span>
          </motion.div>

          {/* Headline with Brand Accent */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="mt-2.5 sm:mt-3 font-display text-[18px] sm:text-[22px] lg:text-[25px] xl:text-[28px] font-bold tracking-[-0.015em] text-[#0b132b] leading-[1.3]"
          >
            <span>Trusted by Businesses. Proven by </span>
            <span className="text-[#e5231b]">
              Real Results.
            </span>
          </motion.h2>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="mt-2 sm:mt-2.5 text-[14px] sm:text-[15px] text-[#475569] leading-[1.6] text-left [text-wrap:pretty] w-full max-w-none"
          >
            Our clients trust us to turn their digital goals into meaningful outcomes. From improving online visibility and generating better opportunities to building stronger digital experiences, we work closely with businesses to create solutions that deliver value beyond the project.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* 2-CARD MAIN SECTION (SHARP, COMPACT & EXECUTIVE ARCHITECTURAL STYLE) */}
        {/* ========================================================= */}
        <div className="mt-5 sm:mt-6 lg:mt-7 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* ======================================================= */}
          {/* LEFT CARD: DARK THEME MAP & COMPANY LOCATIONS */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-5 relative flex flex-col justify-between rounded-none bg-[#090d16] text-white p-5 sm:p-6 lg:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.3)] overflow-hidden border-2 border-slate-800/90 min-h-[460px] group"
          >
            {/* Sharp Signature Top Red Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-[#810103] z-20" />

            {/* Background Dark World Map Graphic with Red India */}
            <DarkWorldMapGraphic />

            {/* Foreground Content */}
            <div className="relative z-10 max-w-[225px] sm:max-w-[235px] lg:max-w-[240px]">
              {/* Eyebrow / Step Indicator */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="font-mono text-[13.5px] font-extrabold text-[#e5231b] tracking-wider uppercase">
                  OUR REACH
                </span>
                <span className="h-[2.5px] w-7 bg-[#e5231b]" />
              </div>

              {/* Heading */}
              <h3 className="font-display text-[21px] sm:text-[23px] lg:text-[24px] font-extrabold text-white leading-tight">
                Serving Clients
                <span className="block text-[#e5231b] mt-0.5">Across India &amp; Globally</span>
              </h3>

              {/* Red Divider Line */}
              <div className="h-[2.5px] w-8 bg-[#e5231b] mt-2.5 mb-3" />

              {/* Description */}
              <p className="text-[12.5px] sm:text-[13px] text-slate-300 leading-relaxed [text-wrap:pretty]">
                Proud to deliver digital growth solutions to businesses across India and around the world.
              </p>

              {/* Office Locations List with Sharp Framed Micro-Cards */}
              <div className="mt-4 sm:mt-5 space-y-2 text-[13px]">
                {/* Location 1: Delhi */}
                <div className="flex items-center gap-2.5 p-2 rounded-none bg-white/5 border border-white/15 hover:border-white/30 transition-colors">
                  <div className="flex h-7 w-7 items-center justify-center rounded-none bg-[#810103] text-white shrink-0 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 stroke-[2.4]" />
                  </div>
                  <div className="leading-tight">
                    <p className="font-bold text-white text-[13px]">Delhi, India</p>
                    <p className="text-[11px] text-slate-400 font-medium">Head Office</p>
                  </div>
                </div>

                {/* Location 2: Pitampura */}
                <div className="flex items-center gap-2.5 p-2 rounded-none bg-white/5 border border-white/15 hover:border-white/30 transition-colors">
                  <div className="flex h-7 w-7 items-center justify-center rounded-none bg-[#810103] text-white shrink-0 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 stroke-[2.4]" />
                  </div>
                  <div className="leading-tight">
                    <p className="font-bold text-white text-[13px]">Pitampura, Delhi</p>
                    <p className="text-[11px] text-slate-400 font-medium">Branch Office</p>
                  </div>
                </div>

                {/* Location 3: Auckland */}
                <div className="flex items-center gap-2.5 p-2 rounded-none bg-white/5 border border-white/15 hover:border-white/30 transition-colors">
                  <div className="flex h-7 w-7 items-center justify-center rounded-none bg-[#810103] text-white shrink-0 shadow-2xs">
                    <MapPin className="w-3.5 h-3.5 stroke-[2.4]" />
                  </div>
                  <div className="leading-tight">
                    <p className="font-bold text-white text-[13px]">Auckland, New Zealand</p>
                    <p className="text-[11px] text-slate-400 font-medium">Global Office</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button: Our Locations */}
            <div className="relative z-10 mt-5 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-none border border-slate-700 bg-slate-900/90 hover:bg-[#810103] hover:border-[#810103] text-white text-[12px] font-bold transition-all group shadow-xs"
              >
                <span>Our Locations</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#e5231b] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* ======================================================= */}
          {/* RIGHT CARD: GOOGLE REVIEWS PROFILE & 3-CARD SLIDER */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-between rounded-none border-2 border-slate-200/95 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            {/* Sharp Signature Top Red Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-[#810103]" />

            <div>
              {/* Header: Google Reviews + 4.9 Stars + Review on Google CTA Button */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  {/* Google Logo Box */}
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-none bg-slate-50 border-[1.5px] border-slate-300 shadow-2xs">
                    <GoogleIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <div>
                    <h3 className="font-display text-[17px] sm:text-[19px] font-bold text-[#0b132b] leading-tight">
                      Google Reviews
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="font-display text-[16px] sm:text-[17px] font-black text-slate-900">
                        4.9
                      </span>
                      <div className="flex items-center text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-none bg-slate-100 border border-slate-300 text-[11px] font-semibold text-slate-800 ml-0.5 shadow-2xs">
                        120+ Verified Reviews
                      </span>
                    </div>
                  </div>
                </div>

                {/* Red CTA Button: Review us on Google */}
                <a
                  href="https://maps.google.com/?q=Hover+Business+Services+LLP+Pearls+Omaxe+Tower+Netaji+Subhash+Place+Pitampura+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-none bg-[#e5231b] hover:bg-red-700 text-white text-[12px] sm:text-[12.5px] font-bold shadow-[0_4px_14px_rgba(229,35,27,0.28)] transition-all cursor-pointer"
                >
                  <span>Review us on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 3 Review Cards Grid / Slider */}
              <div className="mt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3.5 items-stretch"
                  >
                    {visibleReviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="group relative flex flex-col justify-between rounded-none border-2 border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:border-[#e5231b] hover:shadow-[0_12px_24px_rgba(229,35,27,0.12)] transition-all overflow-hidden"
                      >
                        {/* Sharp Top Signature Red Accent Line */}
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#810103] group-hover:bg-[#e5231b] transition-colors duration-300" />

                        <div>
                          {/* Reviewer Header: Avatar + Name + Rating Badge */}
                          <div className="flex items-start justify-between gap-2 pb-1">
                            <div className="flex items-center gap-2">
                              {/* Avatar Initials Box */}
                              <div className="flex h-8.5 w-8.5 items-center justify-center rounded-none bg-[#0b132b] text-white font-bold text-xs shadow-2xs group-hover:bg-[#e5231b] transition-colors shrink-0">
                                {rev.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>

                              <div className="min-w-0">
                                <h4 className="font-display text-[13.5px] font-bold text-[#0b132b] leading-tight truncate group-hover:text-[#e5231b] transition-colors">
                                  {rev.name}
                                </h4>
                                <p className="text-[11px] text-slate-500 font-medium truncate">
                                  {rev.company}
                                </p>
                              </div>
                            </div>

                            {/* 5-Star Badge */}
                            <div className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-none bg-amber-50 border border-amber-300 text-[10px] font-black text-amber-950 shrink-0 shadow-2xs">
                              <span>5.0</span>
                              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                            </div>
                          </div>

                          {/* Service Chip (Sharp & High Definition) */}
                          <div className="my-2 flex items-center">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-none bg-slate-50 border border-slate-300 text-[10px] sm:text-[10.5px] font-semibold text-slate-800 truncate shadow-2xs">
                              <span className="opacity-60 font-medium">Service:</span>
                              <span className="font-bold text-slate-900 truncate">{rev.service}</span>
                            </span>
                          </div>

                          {/* Review Text Quote */}
                          <p className="text-[12px] sm:text-[12.5px] text-slate-700 leading-[1.6] line-clamp-4 [text-wrap:pretty]">
                            {rev.quote}
                          </p>
                        </div>

                        {/* Bottom Row: Timestamp + Google Verified Badge */}
                        <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-medium">
                            {rev.date}
                          </span>
                          <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-none bg-slate-50 border border-slate-200 text-[10.5px] font-bold text-slate-700 shadow-2xs">
                            <GoogleIcon className="w-3.5 h-3.5" />
                            <span>Verified</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Slider Dash Indicators (Sharp Architectural Look) */}
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setIsAutoplay(false);
                    setCurrentPage(idx);
                  }}
                  aria-label={`Go to review slide ${idx + 1}`}
                  className={`h-1.5 rounded-none transition-all duration-300 ${
                    currentPage === idx ? "w-8 bg-[#e5231b]" : "w-3 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>

        </div>

      </Container>
    </section>
  );
}


