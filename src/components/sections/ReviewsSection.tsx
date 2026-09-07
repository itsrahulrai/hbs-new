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

// Authentic Real World & India Map Graphic (public/images/mapss.png) - Fully Visible
function DarkWorldMapGraphic() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {/* Background Graphic Image - 100% Full Visibility */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/mapss.png"
          alt="World Map - Serving Clients Across India & Globally"
          fill
          className="object-cover object-[66%_center] sm:object-[67%_center] lg:object-[68%_center] opacity-100"
          priority
        />
      </div>

      {/* Soft gradient ONLY on the far left behind the text, leaving the map completely unobstructed */}
      <div className="absolute inset-y-0 left-0 w-[52%] sm:w-[46%] bg-gradient-to-r from-[#090d16] via-[#090d16]/75 to-transparent pointer-events-none" />
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
    <section className="relative overflow-hidden py-10 sm:py-14 lg:py-18 bg-gradient-to-b from-[#f8fafc] via-[#ffffff] to-[#f8fafc] border-b border-slate-100">
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
            className="inline-flex items-center gap-2 rounded-full border border-rose-200/90 bg-white/95 px-3 py-1 sm:px-3.5 sm:py-1.5 shadow-[0_2px_10px_rgba(229,35,27,0.06)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5231b] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5231b]" />
            </span>
            <span className="font-display text-[10px] min-[360px]:text-[11px] font-bold uppercase tracking-[0.14em] text-[#e5231b]">
              WHAT OUR CLIENTS SAY
            </span>
          </motion.div>

          {/* Headline with Brand Accent Badge */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="mt-2.5 sm:mt-3 font-display text-[20px] sm:text-[25px] lg:text-[28px] xl:text-[30px] font-bold tracking-[-0.025em] text-[#0b132b] leading-[1.3] sm:leading-[1.28]"
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
            className="mt-3 text-[14px] sm:text-[15.5px] text-[#475569] leading-[1.68] sm:leading-relaxed text-left [text-wrap:pretty] w-full max-w-none"
          >
            Our clients trust us to turn their digital goals into meaningful outcomes. From improving online visibility and generating better opportunities to building stronger digital experiences, we work closely with businesses to create solutions that deliver value beyond the project.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* 2-CARD MAIN SECTION (MATCHING TARGET DESIGN) */}
        {/* ========================================================= */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* ======================================================= */}
          {/* LEFT CARD: DARK THEME MAP & COMPANY LOCATIONS */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-5 relative flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-[#090d16] text-white p-6 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.22)] overflow-hidden border border-slate-800/80 min-h-[460px]"
          >
            {/* Background Dark World Map Graphic with Red India */}
            <DarkWorldMapGraphic />

            {/* Foreground Content (constraining width so the right side map is completely visible) */}
            <div className="relative z-10 max-w-[250px]">
              {/* Heading */}
              <h3 className="font-display text-[22px] sm:text-[24px] font-extrabold text-white leading-tight drop-shadow-sm">
                Serving Clients
                <span className="block text-[#e5231b] mt-0.5">Across India &amp; Globally</span>
              </h3>

              {/* Red Divider Line */}
              <div className="h-[2.5px] w-9 rounded-full bg-[#e5231b] mt-3 mb-4" />

              {/* Description */}
              <p className="text-[13px] sm:text-[13.5px] text-slate-300 leading-relaxed [text-wrap:pretty]">
                Proud to deliver digital growth solutions to businesses across India and around the world.
              </p>

              {/* Office Locations List with Red Pin Icons */}
              <div className="mt-6 space-y-3 text-[13px]">
                {/* Location 1: Delhi */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#e5231b] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-[13.5px]">Delhi, India</p>
                    <p className="text-[11.5px] text-slate-400">(Head Office)</p>
                  </div>
                </div>

                {/* Location 2: Pitampura */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#e5231b] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-[13.5px]">Pitampura, Delhi</p>
                    <p className="text-[11.5px] text-slate-400">(Branch Office)</p>
                  </div>
                </div>

                {/* Location 3: Auckland */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#e5231b] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white text-[13.5px]">Auckland, New Zealand</p>
                    <p className="text-[11.5px] text-slate-400">(Global Office)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button: Our Locations */}
            <div className="relative z-10 mt-6 pt-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-white text-[12.5px] font-semibold transition-all hover:border-[#e5231b] group backdrop-blur-xs"
              >
                <span>Our Locations</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#e5231b] group-hover:translate-x-1 transition-transform" />
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
            className="lg:col-span-7 flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            <div>
              {/* Header: Google Reviews + 4.9 Stars + Review on Google CTA Button */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  {/* Google Logo */}
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-xs">
                    <GoogleIcon className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-slate-900 leading-tight">
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
                      <span className="text-[12px] text-slate-500 font-medium ml-0.5">
                        (120+ Reviews)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Red CTA Button: Review us on Google */}
                <a
                  href="https://maps.google.com/?q=Hover+Business+Services+LLP+Pearls+Omaxe+Tower+Netaji+Subhash+Place+Pitampura+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl bg-[#e5231b] hover:bg-red-700 text-white text-[12px] sm:text-[13px] font-bold shadow-[0_4px_12px_rgba(229,35,27,0.2)] transition-all cursor-pointer"
                >
                  <span>Review us on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* 3 Review Cards Grid / Slider */}
              <div className="mt-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 items-stretch"
                  >
                    {visibleReviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="flex flex-col justify-between rounded-xl border border-slate-100 bg-[#fbfcfe] p-4 shadow-2xs hover:shadow-sm hover:border-slate-200 transition-all"
                      >
                        <div>
                          {/* Reviewer Header: Avatar + Name + 5 Stars + Red Quote Icon */}
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5">
                              {/* User Photo Placeholder / Initials Avatar */}
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white font-bold text-xs shadow-xs">
                                {rev.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>

                              <div>
                                <h4 className="font-display text-[13px] font-bold text-slate-900 leading-tight">
                                  {rev.name}
                                </h4>
                                <p className="text-[11px] text-slate-500 font-medium">
                                  {rev.company}
                                </p>
                              </div>
                            </div>

                            {/* Red Quote Symbol */}
                            <span className="text-[#e5231b] font-serif text-[22px] font-black leading-none">
                              ”
                            </span>
                          </div>

                          {/* 5 Gold Stars */}
                          <div className="flex items-center gap-0.5 text-amber-400 mt-2">
                            {Array.from({ length: rev.rating }).map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>

                          {/* Review Text Quote */}
                          <p className="mt-2.5 text-[12.5px] text-slate-600 leading-[1.6] line-clamp-4">
                            {rev.quote}
                          </p>
                        </div>

                        {/* Bottom Row: Timestamp + Google "G" Icon */}
                        <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-medium">
                            {rev.date}
                          </span>
                          <GoogleIcon className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Slider Dots Indicator */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setIsAutoplay(false);
                    setCurrentPage(idx);
                  }}
                  aria-label={`Go to review slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === idx ? "w-6 bg-[#e5231b]" : "w-2 bg-slate-200 hover:bg-slate-300"
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


