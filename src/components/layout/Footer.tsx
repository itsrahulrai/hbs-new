import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  ArrowUpRight ,
  Globe,
  Headphones,
  HeartPulse,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Plane,
  Rocket,
  Send,
  ShoppingCart,
  Target,

  Globe2,
  Handshake,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { preHeader } from "@/data/navigation";
import { SocialBadge } from "./SocialBadge";


export function Footer() {
  const services = [
    {
      label: "Search Engine Optimization (SEO)",
      href: "/services/seo",
    },
    {
      label: "Social Media Marketing (SMM)",
      href: "/services/social-media-marketing",
    },
    {
      label: "Pay Per Click (PPC) Advertising",
      href: "/services/ppc",
    },
    {
      label: "Web & App Development",
      href: "/services/web-app-development",
    },
    {
      label: "Content Marketing",
      href: "/services/content-marketing",
    },
    {
      label: "AI Search & Visibility",
      href: "/services/ai-search-visibility",
    },
  ];

  const industries = [
    {
      label: "Healthcare",
      href: "/industries/healthcare",
      icon: HeartPulse,
    },
    {
      label: "Education",
      href: "/industries/education",
      icon: BookOpen,
    },
    {
      label: "E-commerce",
      href: "/industries/ecommerce",
      icon: ShoppingCart,
    },
    {
      label: "Real Estate",
      href: "/industries/real-estate",
      icon: Building2,
    },
    {
      label: "Finance & Banking",
      href: "/industries/finance-banking",
      icon: Landmark,
    },
    {
      label: "Travel & Hospitality",
      href: "/industries/travel-hospitality",
      icon: Plane,
    },
  ];

  const companyLinks = [
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Our Work",
      href: "/portfolio",
    },
    {
      label: "Case Studies",
      href: "/case-studies",
    },
    {
      label: "Testimonials",
      href: "/testimonials",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Blog",
      href: "/blogs",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-white text-[#111827]">

      {/* =========================================================
          TOP RED ACCENT
      ========================================================== */}
      <div className="h-[3px] bg-[#EF3037]" />

      {/* =========================================================
          TOP BENEFITS STRIP
      ========================================================== */}
      <div className="px-4 pt-7 sm:px-6 lg:px-8 lg:pt-9">
        <div className="mx-auto max-w-[1480px]">

          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#F2E2E3]
              bg-gradient-to-r
              from-white
              via-[#FFFDFD]
              to-[#FFF7F7]
              px-5
              py-6
              shadow-[0_10px_35px_rgba(17,24,39,0.07)]
              sm:px-7
              lg:px-8
              lg:py-7
            "
          >

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -left-16 -top-20 h-44 w-44 rounded-full bg-[#EF3037]/5 blur-3xl" />

            <div
              className="
                relative
                grid
                gap-6
                lg:grid-cols-[1fr_1fr_1fr_1fr_190px]
                lg:items-center
              "
            >

              {/* =================================================
                  RESULT DRIVEN
              ================================================== */}
              <Benefit
                icon={<Target size={27} strokeWidth={2} />}
                title="Result Driven"
                description="Data-backed strategies that deliver real growth."
                bordered
              />

              {/* =================================================
                  INNOVATIVE
              ================================================== */}
              <Benefit
                icon={<Rocket size={27} strokeWidth={2} />}
                title="Innovative Solutions"
                description="Creative ideas & latest technology for your brand."
                bordered
              />

              {/* =================================================
                  MEASURABLE
              ================================================== */}
              <Benefit
                icon={<BarChart3 size={27} strokeWidth={2} />}
                title="Measurable Impact"
                description="Transparent reporting with measurable ROI."
                bordered
              />

              {/* =================================================
                  ALWAYS HERE
              ================================================== */}
              <Benefit
                icon={<Headphones size={27} strokeWidth={2} />}
                title="Always Here"
                description="Dedicated support whenever you need us."
                bordered
              />

              {/* =================================================
                  CTA
              ================================================== */}
              <div className="lg:min-w-[180px]">

                <p className="text-sm font-bold text-[#111827]">
                  Let&apos;s Grow Your Business
                </p>

                <p className="mt-1 text-xs text-[#6B7280]">
                  Have a project in mind?
                </p>

                <Link
                  href="/contact-us"
                  className="
                    group
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-lg
                    bg-[#EF3037]
                    px-4
                    py-3
                    text-xs
                    font-bold
                    text-white
                    shadow-[0_8px_20px_rgba(239,48,55,0.18)]
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-[#D9232A]
                  "
                >
                  Get In Touch

                  <Send
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </div>
          </div>
        </div>
      </div>


      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}
      <div className="relative">

        {/* Decorative dots */}
        <div
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-20
            h-72
            w-72
            opacity-[0.10]
          "
        >
          <div
            className="
              h-full
              w-full
              rounded-full
              bg-[radial-gradient(circle,#EF3037_1px,transparent_1px)]
              [background-size:7px_7px]
            "
          />
        </div>

        <Container className="relative">

          <div
            className="
              grid
              gap-10
              border-b
              border-[#E5E7EB]
              py-14
              lg:grid-cols-[1.35fr_1.2fr_1fr_1fr_1.35fr]
              lg:gap-8
              lg:py-16
            "
          >

            {/* =====================================================
                BRAND
            ====================================================== */}
            <div className="lg:border-r lg:border-[#E5E7EB] lg:pr-8">

              <Logo />

              <p className="mt-6 max-w-[320px] text-sm leading-7 text-[#4B5563]">
                360° Digital Marketing Solutions to help businesses grow,
                scale and succeed in the digital world.
              </p>

              <div className="mt-6 h-[2px] w-11 bg-[#EF3037]" />

              {/* Social */}
              <div className="mt-7">

                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#9CA3AF]">
                  Follow Us
                </p>

                <div className="flex items-center gap-3">

               {preHeader.socials.map((social) => (
                              <SocialBadge key={social.label} {...social} />
                            ))}

                </div>
              </div>

            </div>


            {/* =====================================================
                SERVICES
            ====================================================== */}
            <div className="lg:border-r lg:border-[#E5E7EB] lg:pr-8">

              <FooterHeading title="Our Services" />

              <ul className="space-y-4">

                {services.map((service) => (
                  <li key={service.label}>

                    <Link
                      href={service.href}
                      className="
                        group
                        flex
                        items-start
                        gap-2
                        text-[13px]
                        leading-5
                        text-[#374151]
                        transition-colors
                        hover:text-[#EF3037]
                      "
                    >
                      <span className="mt-[1px] text-lg leading-4 text-[#EF3037]">
                        ›
                      </span>

                      <span>
                        {service.label}
                      </span>
                    </Link>

                  </li>
                ))}

              </ul>

              <Link
                href="/services"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  text-[#EF3037]
                  transition-colors
                  hover:text-[#D9232A]
                "
              >
                View All Services

                <ArrowRight
                  size={14}
                  strokeWidth={2}
                />
              </Link>

            </div>


            {/* =====================================================
                INDUSTRIES
            ====================================================== */}
            <div className="lg:border-r lg:border-[#E5E7EB] lg:pr-8">

              <FooterHeading title="Industries We Serve" />

              <ul className="space-y-4">

                {industries.map((industry) => {

                  const IndustryIcon = industry.icon;

                  return (
                    <li key={industry.label}>

                      <Link
                        href={industry.href}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          text-[13px]
                          text-[#374151]
                          transition-colors
                          hover:text-[#EF3037]
                        "
                      >

                        <span
                          className="
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-md
                            bg-[#FFF5F5]
                            text-[#EF3037]
                            transition-all
                            duration-200
                            group-hover:bg-[#EF3037]
                            group-hover:text-white
                          "
                        >
                          <IndustryIcon
                            size={14}
                            strokeWidth={2}
                          />
                        </span>

                        {industry.label}

                      </Link>

                    </li>
                  );
                })}

              </ul>

              <Link
                href="/industries"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  text-[#EF3037]
                  transition-colors
                  hover:text-[#D9232A]
                "
              >
                View All Industries

                <ArrowRight
                  size={14}
                  strokeWidth={2}
                />
              </Link>

            </div>


            {/* =====================================================
                COMPANY
            ====================================================== */}
            <div className="lg:border-r lg:border-[#E5E7EB] lg:pr-8">

              <FooterHeading title="Company" />

              <ul className="space-y-4">

                {companyLinks.map((item) => (
                  <li key={item.label}>

                    <Link
                      href={item.href}
                      className="
                        group
                        flex
                        items-center
                        gap-2
                        text-[13px]
                        text-[#374151]
                        transition-colors
                        hover:text-[#EF3037]
                      "
                    >

                      <span
                        className="
                          text-[#EF3037]
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                        "
                      >
                        ›
                      </span>

                      {item.label}

                    </Link>

                  </li>
                ))}

              </ul>

            </div>


            {/* =====================================================
                CONTACT
            ====================================================== */}
            <div>

              <FooterHeading title="Contact Us" />

              <div className="space-y-5">

                {/* Address */}
                <ContactItem
                  icon={<MapPin size={16} strokeWidth={2} />}
                  title="Head Office (India)"
                >
                  <p>
                    916, 9th Floor, Tower-2, Pearls Omaxe,
                    <br />
                    NSP, Pitampura, Delhi - 110034
                  </p>
                </ContactItem>


                {/* Email */}
                <ContactItem
                  icon={<Mail size={16} strokeWidth={2} />}
                  title="Email Us"
                >
                  <a
                    href="mailto:info@hovermedia.in"
                    className="block transition-colors hover:text-[#EF3037]"
                  >
                    info@hovermedia.in
                  </a>

                  <a
                    href="mailto:support@hovermedia.in"
                    className="block transition-colors hover:text-[#EF3037]"
                  >
                    support@hovermedia.in
                  </a>
                </ContactItem>


                {/* Phone */}
                <ContactItem
                  icon={<Phone size={16} strokeWidth={2} />}
                  title="Call Us"
                >
                  <a
                    href="tel:+918800239793"
                    className="block transition-colors hover:text-[#EF3037]"
                  >
                    +91 8800239793
                  </a>

                  <a
                    href="tel:+919311673565"
                    className="block transition-colors hover:text-[#EF3037]"
                  >
                    +91 9311673565
                  </a>

                  <a
                    href="tel:+91981616951"
                    className="block transition-colors hover:text-[#EF3037]"
                  >
                    +91 981616951
                  </a>
                </ContactItem>


                {/* Website */}
                <ContactItem
                  icon={<Globe size={16} strokeWidth={2} />}
                  title="Visit Our Website"
                >
                  <a
                    href="https://www.hovermedia.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#EF3037]"
                  >
                    www.hovermedia.in
                  </a>
                </ContactItem>

              </div>

            </div>

          </div>


         {/* =========================================================
            NEWSLETTER + OUR LOCATIONS
        ========================================================== */}
        <div className="py-10">

         

          {/* =======================================================
              OUR LOCATIONS
          ======================================================== */}

        {/* =========================================================
            OUR LOCATIONS
        ========================================================== */}
        
 
          {/* =========================================================
    GLOBAL PRESENCE
========================================================= */}
<section className="relative overflow-hidden bg-white py-12 lg:py-16">

  {/* =======================================================
      WORLD MAP BACKGROUND
  ======================================================== */}
  <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[390px] overflow-hidden lg:block">

    {/* Map image */}
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
      alt=""
      aria-hidden="true"
      className="
        absolute
        right-[3%]
        top-[-30px]
        h-[370px]
        w-[72%]
        object-contain
        opacity-[0.055]
        grayscale
      "
    />

    {/* Route SVG */}
    <svg
      className="absolute right-[8%] top-[50px] h-[300px] w-[62%]"
      viewBox="0 0 900 360"
      fill="none"
      aria-hidden="true"
    >

      {/* India → NZ route */}
      <path
        d="M520 120
           C610 115 650 145 695 190
           C740 235 770 275 820 300"
        stroke="#EF3037"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        opacity="0.65"
      />

      {/* Delhi marker */}
      <g>
        <circle
          cx="520"
          cy="120"
          r="15"
          fill="#EF3037"
          opacity="0.08"
        />
        <circle
          cx="520"
          cy="120"
          r="8"
          fill="#EF3037"
          opacity="0.16"
        />
        <circle
          cx="520"
          cy="120"
          r="4"
          fill="#EF3037"
        />
      </g>

      {/* Second Delhi marker */}
      <g>
        <circle
          cx="570"
          cy="145"
          r="13"
          fill="#EF3037"
          opacity="0.07"
        />
        <circle
          cx="570"
          cy="145"
          r="7"
          fill="#EF3037"
          opacity="0.14"
        />
        <circle
          cx="570"
          cy="145"
          r="3.5"
          fill="#EF3037"
        />
      </g>

      {/* Auckland marker */}
      <g>
        <circle
          cx="820"
          cy="300"
          r="17"
          fill="#EF3037"
          opacity="0.08"
        />
        <circle
          cx="820"
          cy="300"
          r="9"
          fill="#EF3037"
          opacity="0.15"
        />
        <circle
          cx="820"
          cy="300"
          r="4"
          fill="#EF3037"
        />
      </g>

    </svg>

  </div>


  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">


    {/* =====================================================
        HEADER
    ====================================================== */}
    <div className="relative mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

      <div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2">

          <span className="h-2 w-2 rounded-full bg-[#EF3037]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#667085]">
            Global Presence
          </span>

        </div>


        {/* Heading */}
        <h2
          className="
            mt-3
            max-w-[600px]
            text-[38px]
            font-bold
            leading-[1.05]
            tracking-[-0.045em]
            text-[#172033]
            sm:text-[48px]
          "
        >
          Our Offices
          <br />
          Around{" "}
          <span className="text-[#EF3037]">
            the World
          </span>
        </h2>


        <p className="mt-4 max-w-lg text-sm leading-6 text-[#667085]">
          Local expertise, global impact. We’re closer to you.
        </p>


        {/* Accent */}
        <div className="mt-5 h-[2px] w-12 bg-[#EF3037]" />

      </div>


      {/* ===================================================
          STATS
      ==================================================== */}
      <div
        className="
          relative
          flex
          w-fit
          items-center
          rounded-2xl
          border
          border-[#E7E9ED]
          bg-white/95
          p-2
          shadow-[0_12px_35px_rgba(17,24,39,0.06)]
          backdrop-blur
        "
      >

        {/* Locations */}
        <div className="flex items-center gap-3 px-3 py-2">

          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#FFF1F2]
              text-[#EF3037]
            "
          >
            <MapPin size={19} strokeWidth={1.8} />
          </span>

          <div>
            <p className="text-lg font-bold leading-none text-[#172033]">
              03
            </p>

            <p className="mt-1 text-[9px] font-medium uppercase tracking-wide text-[#7B8492]">
              Locations
            </p>
          </div>

        </div>


        <div className="h-9 w-px bg-[#E5E7EB]" />


        {/* Countries */}
        <div className="flex items-center gap-3 px-3 py-2">

          <span
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[#FFF1F2]
              text-[#EF3037]
            "
          >
            <Globe2 size={19} strokeWidth={1.8} />
          </span>

          <div>
            <p className="text-lg font-bold leading-none text-[#172033]">
              02
            </p>

            <p className="mt-1 text-[9px] font-medium uppercase tracking-wide text-[#7B8492]">
              Countries
            </p>
          </div>

        </div>

      </div>

    </div>


    {/* =====================================================
        OFFICE CARDS
    ====================================================== */}
    <div className="relative grid gap-5 lg:grid-cols-3">


      {/* ===================================================
          DELHI HEAD OFFICE
      ==================================================== */}
      <a
        href="https://www.google.com/maps/place/Hover+Business+Services+LLP+%7C+Digital+Marketing+Agency+in+Delhi/@28.6905841,77.1517968,15z"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          overflow-hidden
          rounded-[20px]
          border
          border-[#E7E9ED]
          bg-white
          shadow-[0_8px_30px_rgba(17,24,39,0.045)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_18px_40px_rgba(17,24,39,0.09)]
        "
      >

        {/* Accent */}
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#EF3037]" />

        <div className="p-6">

          {/* Top */}
          <div className="flex items-start justify-between">

            <span
              className="
                flex
                h-[68px]
                w-[68px]
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#FFF1F2]
                to-[#FFE5E8]
                text-[#EF3037]
              "
            >
              <Building2 size={31} strokeWidth={1.6} />
            </span>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#ECEDEF]
                text-[#A0A6B1]
                transition-all
                duration-300
                group-hover:bg-[#EF3037]
                group-hover:text-white
              "
            >
              <ArrowUpRight size={18} />
            </span>

          </div>


          {/* Label */}
          <div className="mt-7 flex items-center gap-2.5">

            <span className="rounded-lg bg-[#FFF1F2] px-2.5 py-1 text-[10px] font-bold text-[#EF3037]">
              01
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#EF3037]">
              Head Office
            </span>

          </div>


          {/* Title */}
          <h3 className="mt-3 text-[24px] font-bold tracking-[-0.03em] text-[#172033]">
            Delhi, India
          </h3>


          {/* Subtitle */}
          <div className="mt-2 flex items-center gap-2">

            <MapPin
              size={15}
              className="text-[#EF3037]"
            />

            <span className="text-xs font-medium text-[#667085]">
              India Headquarters
            </span>

          </div>


          {/* Divider */}
          <div className="my-5 h-px bg-[#ECEEF1]" />


          {/* Address */}
          <div className="flex gap-3">

            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#FFF6F6]
                text-[#EF3037]
              "
            >
              <MapPin size={16} />
            </span>

            <p className="text-[11px] leading-[1.65] text-[#596170]">
              916, 9th Floor, Tower-2, Pearls Omaxe,
              NSP, Pitampura, Delhi - 110034
            </p>

          </div>

        </div>


        {/* Footer */}
        <div className="border-t border-[#ECEEF1] px-6 py-4">

          <div className="flex items-center justify-between">

            <span className="text-[11px] font-semibold text-[#697386]">
              Delhi Office
            </span>

            <span className="flex items-center gap-2 text-[11px] font-bold text-[#EF3037]">
              View Location
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>

          </div>

        </div>

      </a>


      {/* ===================================================
          DELHI SECOND OFFICE
      ==================================================== */}
      <a
        href="https://www.google.com/maps/place/Hover+Business+Services+LLP+%7C+Digital+Marketing+Agency+in+Delhi/@28.6905841,77.1517968,15z"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          overflow-hidden
          rounded-[20px]
          border
          border-[#E7E9ED]
          bg-white
          shadow-[0_8px_30px_rgba(17,24,39,0.045)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_18px_40px_rgba(17,24,39,0.09)]
        "
      >

        <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#2878F0]" />

        <div className="p-6">

          <div className="flex items-start justify-between">

            <span
              className="
                flex
                h-[68px]
                w-[68px]
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#EFF6FF]
                to-[#E2EEFF]
                text-[#2878F0]
              "
            >
              <Building2 size={31} strokeWidth={1.6} />
            </span>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#ECEDEF]
                text-[#A0A6B1]
                transition-all
                duration-300
                group-hover:bg-[#2878F0]
                group-hover:text-white
              "
            >
              <ArrowUpRight size={18} />
            </span>

          </div>


          <div className="mt-7 flex items-center gap-2.5">

            <span className="rounded-lg bg-[#EFF6FF] px-2.5 py-1 text-[10px] font-bold text-[#2878F0]">
              02
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2878F0]">
              Office
            </span>

          </div>


          <h3 className="mt-3 text-[24px] font-bold tracking-[-0.03em] text-[#172033]">
            Delhi, India
          </h3>


          <div className="mt-2 flex items-center gap-2">

            <MapPin
              size={15}
              className="text-[#2878F0]"
            />

            <span className="text-xs font-medium text-[#667085]">
              NSP · Pitampura
            </span>

          </div>


          <div className="my-5 h-px bg-[#ECEEF1]" />


          <div className="flex gap-3">

            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#F3F7FF]
                text-[#2878F0]
              "
            >
              <MapPin size={16} />
            </span>

            <p className="text-[11px] leading-[1.65] text-[#596170]">
              32, Second Floor, Pearls Omaxe,
              NSP, Pitampura, Delhi - 110034
            </p>

          </div>

        </div>


        <div className="border-t border-[#ECEEF1] px-6 py-4">

          <div className="flex items-center justify-between">

            <span className="text-[11px] font-semibold text-[#697386]">
              Pitampura Office
            </span>

            <span className="flex items-center gap-2 text-[11px] font-bold text-[#2878F0]">
              View Location
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>

          </div>

        </div>

      </a>


      {/* ===================================================
          AUCKLAND
      ==================================================== */}
      <a
        href="https://hoverbusinessservices.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          relative
          overflow-hidden
          rounded-[20px]
          border
          border-[#E7E9ED]
          bg-white
          shadow-[0_8px_30px_rgba(17,24,39,0.045)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_18px_40px_rgba(17,24,39,0.09)]
        "
      >

        <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#7135D4]" />

        <div className="p-6">

          <div className="flex items-start justify-between">

            <span
              className="
                flex
                h-[68px]
                w-[68px]
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#F5F0FF]
                to-[#EDE4FF]
                text-[#7135D4]
              "
            >
              <Globe2 size={31} strokeWidth={1.6} />
            </span>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#ECEDEF]
                text-[#A0A6B1]
                transition-all
                duration-300
                group-hover:bg-[#7135D4]
                group-hover:text-white
              "
            >
              <ArrowUpRight size={18} />
            </span>

          </div>


          <div className="mt-7 flex items-center gap-2.5">

            <span className="rounded-lg bg-[#F5F0FF] px-2.5 py-1 text-[10px] font-bold text-[#7135D4]">
              03
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7135D4]">
              Global Office
            </span>

          </div>


          <h3 className="mt-3 text-[24px] font-bold tracking-[-0.03em] text-[#172033]">
            Auckland, New Zealand
          </h3>


          <div className="mt-2 flex items-center gap-2">

            <Globe2
              size={15}
              className="text-[#7135D4]"
            />

            <span className="text-xs font-medium text-[#667085]">
              Global Presence
            </span>

          </div>


          <div className="my-5 h-px bg-[#ECEEF1]" />


          <div className="flex gap-3">

            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-[#F7F3FF]
                text-[#7135D4]
              "
            >
              <MapPin size={16} />
            </span>

            <p className="text-[11px] leading-[1.65] text-[#596170]">
              529 Great South Road, Manukau City Centre,
              Auckland 2025, New Zealand
            </p>

          </div>

        </div>


        <div className="border-t border-[#ECEEF1] px-6 py-4">

          <div className="flex items-center justify-between">

            <span className="text-[11px] font-semibold text-[#697386]">
              Auckland Office
            </span>

            <span className="flex items-center gap-2 text-[11px] font-bold text-[#7135D4]">
              Visit Website
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>

          </div>

        </div>

      </a>

    </div>


    {/* =====================================================
        TRUST STRIP
    ====================================================== */}
    <div className="mt-5 grid overflow-hidden rounded-2xl border border-[#E7E9ED] bg-white shadow-[0_6px_25px_rgba(17,24,39,0.035)] lg:grid-cols-4">

      {/* Global */}
      <div className="flex items-center gap-3.5 border-b border-[#ECEEF1] p-5 lg:border-b-0 lg:border-r">

        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF1F2] text-[#EF3037]">
          <Globe2 size={20} strokeWidth={1.7} />
        </span>

        <div>
          <h4 className="text-[13px] font-bold text-[#172033]">
            Global Network
          </h4>

          <p className="mt-1 text-[10px] leading-4 text-[#7A8391]">
            Strong presence across key markets
          </p>
        </div>

      </div>


      {/* Local */}
      <div className="flex items-center gap-3.5 border-b border-[#ECEEF1] p-5 lg:border-b-0 lg:border-r">

        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2878F0]">
          <Users size={20} strokeWidth={1.7} />
        </span>

        <div>
          <h4 className="text-[13px] font-bold text-[#172033]">
            Local Expertise
          </h4>

          <p className="mt-1 text-[10px] leading-4 text-[#7A8391]">
            Deep understanding of local markets
          </p>
        </div>

      </div>


      {/* Partner */}
      <div className="flex items-center gap-3.5 border-b border-[#ECEEF1] p-5 lg:border-b-0 lg:border-r">

        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F5F0FF] text-[#7135D4]">
          <Handshake size={20} strokeWidth={1.7} />
        </span>

        <div>
          <h4 className="text-[13px] font-bold text-[#172033]">
            Trusted Partner
          </h4>

          <p className="mt-1 text-[10px] leading-4 text-[#7A8391]">
            Building lasting relationships worldwide
          </p>
        </div>

      </div>


      {/* Quality */}
      <div className="flex items-center gap-3.5 p-5">

        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF1F2] text-[#EF3037]">
          <ShieldCheck size={20} strokeWidth={1.7} />
        </span>

        <div>
          <h4 className="text-[13px] font-bold text-[#172033]">
            Quality Service
          </h4>

          <p className="mt-1 text-[10px] leading-4 text-[#7A8391]">
            Delivering excellence consistently
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
          


        </div>
        </Container>
      </div>


      {/* =========================================================
          DARK BOTTOM / GLOBAL PRESENCE
      ========================================================== */}
      <div className="relative overflow-hidden bg-[#06111F] text-white">

        {/* Red top border */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-[#EF3037]" />

        {/* Subtle dotted background */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.055]
            [background-image:radial-gradient(circle,#ffffff_1px,transparent_1px)]
            [background-size:6px_6px]
          "
        />

        <Container className="relative">

          {/* =====================================================
              LEGAL BAR
          ====================================================== */}
          <div
            className="
              flex
              flex-col
              gap-5
              border-b
              border-white/10
              py-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <p className="text-xs leading-5 text-white/75">
              © {new Date().getFullYear()} Hover Business Services LLP.
              <br className="sm:hidden" />
              {" "}All Rights Reserved.
            </p>


            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

              <FooterLegalLink
                href="/privacy-policy"
                label="Privacy Policy"
              />

              <LegalDivider />

              <FooterLegalLink
                href="/terms-and-conditions"
                label="Terms & Conditions"
              />

              <LegalDivider />

              <FooterLegalLink
                href="/refund-cancellation"
                label="Refund & Cancellation"
              />

              <LegalDivider />

              <FooterLegalLink
                href="/shipping-delivery"
                label="Shipping & Delivery"
              />

              <LegalDivider />

              <FooterLegalLink
                href="/sitemap.xml"
                label="Sitemap"
              />

            </div>


            <p className="text-sm italic text-white/75">
              Made with{" "}
              <span className="text-[#EF3037]">♥</span>{" "}
              in India
            </p>

          </div>


          {/* =====================================================
              GLOBAL PRESENCE
          ====================================================== */}
          <div
            className="
              grid
              gap-8
              py-8
              sm:grid-cols-2
              lg:grid-cols-3
              lg:items-center
            "
          >

            {/* India */}
            <GlobalLocation
              title="India"
              description={
                <>
                  Delivering Excellence
                  <br />
                  Across India
                </>
              }
            />


            {/* New Zealand */}
            <GlobalLocation
              title="New Zealand"
              description={
                <>
                  Global Presence,
                  <br />
                  Local Commitment
                </>
              }
            />


            {/* CTA */}
            <div className="lg:text-right">

              <Link
                href="/contact-us"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-white/15
                  bg-white/5
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:border-[#EF3037]
                  hover:bg-[#EF3037]
                "
              >
                Start a Conversation

                <ArrowRight
                  size={14}
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </Container>
      </div>

    </footer>
  );
}


/* ===============================================================
   BENEFIT COMPONENT
================================================================ */

function Benefit({
  icon,
  title,
  description,
  bordered = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`
        flex
        items-center
        gap-4
        ${
          bordered
            ? "lg:border-r lg:border-[#E5E7EB] lg:pr-6"
            : ""
        }
      `}
    >

      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#FCE1E3]
          bg-white
          text-[#EF3037]
          shadow-[0_8px_25px_rgba(239,48,55,0.12)]
        "
      >
        {icon}
      </div>

      <div>

        <h3 className="text-sm font-bold text-[#111827]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#6B7280]">
          {description}
        </p>

      </div>

    </div>
  );
}


/* ===============================================================
   FOOTER HEADING
================================================================ */

function FooterHeading({
  title,
}: {
  title: string;
}) {
  return (
    <div className="mb-7">

      <h3 className="text-[17px] font-bold tracking-tight text-[#111827]">
        {title}
      </h3>

      <div className="mt-3 h-[2px] w-8 bg-[#EF3037]" />

    </div>
  );
}


/* ===============================================================
   CONTACT ITEM
================================================================ */

function ContactItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">

      <span
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#EF3037]
          shadow-[0_5px_18px_rgba(239,48,55,0.12)]
          ring-1
          ring-[#FCE1E3]
        "
      >
        {icon}
      </span>

      <div className="min-w-0">

        <p className="text-xs font-bold text-[#111827]">
          {title}
        </p>

        <div className="mt-1 text-[12px] leading-5 text-[#4B5563]">
          {children}
        </div>

      </div>

    </div>
  );
}


/* ===============================================================
   LEGAL LINK
================================================================ */

function FooterLegalLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="
        text-xs
        text-white/65
        transition-colors
        hover:text-white
      "
    >
      {label}
    </Link>
  );
}


/* ===============================================================
   LEGAL DIVIDER
================================================================ */

function LegalDivider() {
  return (
    <span className="hidden h-4 w-px bg-[#EF3037] sm:block" />
  );
}


/* ===============================================================
   GLOBAL LOCATION
================================================================ */

function GlobalLocation({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">

      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white/5
          text-[#EF3037]
          ring-1
          ring-white/10
        "
      >
        <MapPin
          size={21}
          strokeWidth={2}
        />
      </div>

      <div>

        <h4 className="text-sm font-bold">
          {title}
        </h4>

        <p className="mt-1 text-[11px] leading-4 text-white/55">
          {description}
        </p>

      </div>

    </div>
  );
}


/* ===============================================================
   SOCIAL ICON
================================================================ */

function SocialIcon({
  name,
  size = 16,
}: {
  name: string;
  size?: number;
}) {
  const iconName = name.toLowerCase();

  /*
   * Your preHeader.socials data can contain names such as:
   * facebook, instagram, linkedin, twitter, youtube.
   *
   * Lucide does not provide official brand icons, so we use
   * simple text fallbacks here rather than introducing another
   * icon package.
   */

  const labels: Record<string, string> = {
    facebook: "f",
    instagram: "◎",
    linkedin: "in",
    twitter: "𝕏",
    x: "𝕏",
    youtube: "▶",
  };

  return (
    <span
      style={{
        fontSize:
          iconName === "linkedin"
            ? size - 2
            : size,
      }}
      className="font-bold leading-none"
    >
      {labels[iconName] ?? "•"}
    </span>
  );
}