"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import {
  TrendingUp,
  MousePointerClick,
  Compass,
  Sparkles,
  BrainCircuit,
  Layers,
  ShieldCheck,
  Sprout,
  BarChart3,
  Bot,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    eyebrow: "STRATEGY MEETS RESULTS",
    titlePrefix: "Results-Driven",
    titleHighlight: "Approach",
    description:
      "We don't just do campaigns and provide digital materials. We aim to achieve results that will be valuable for your business - increased visibility and qualified leads, engagement, and conversion.",
    builtAround: "Measurable Growth",
    badgeLabel: "+230% Growth",
    icon: TrendingUp,
    accent: {
      theme: "rose",
      numberColor: "text-rose-500",
      lineColor: "bg-rose-500",
      highlightColor: "text-[#e5231b]",
      iconBg: "bg-gradient-to-br from-rose-500 to-[#e5231b] text-white shadow-rose-500/25",
      topBorder: "border-t-[#e5231b]",
      pillBg: "bg-rose-50 text-[#e5231b] border-rose-200/90",
      dotColor: "bg-[#e5231b]",
      ambientGlow: "from-rose-200/60 via-red-100/30 to-transparent",
      hoverBorder: "hover:border-rose-300 hover:shadow-[0_20px_50px_rgba(229,35,27,0.14)]",
      badgeStyle: "text-[#e5231b] border-rose-200 bg-white/95 shadow-rose-500/15",
    },
    // 3D Isometric Bar Chart Illustration with Upward Arrow
    illustration: (
      <div className="relative w-32 h-32 min-[400px]:w-36 min-[400px]:h-36 sm:w-40 sm:h-40 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-lg" fill="none">
          {/* Base Platform Grid */}
          <polygon points="20,115 80,145 140,115 80,85" fill="#fee2e2" fillOpacity="0.8" stroke="#fca5a5" strokeWidth="1.2" />
          <polygon points="20,115 80,145 80,152 20,122" fill="#fecaca" />
          <polygon points="80,145 140,115 140,122 80,152" fill="#fca5a5" />

          {/* Bar 1 (Short glass) */}
          <g transform="translate(35, 78)">
            <polygon points="0,20 16,12 32,20 16,28" fill="#ffffff" fillOpacity="0.95" stroke="#fca5a5" strokeWidth="1" />
            <polygon points="0,20 16,28 16,50 0,42" fill="#fee2e2" fillOpacity="0.9" stroke="#fca5a5" strokeWidth="1" />
            <polygon points="16,28 32,20 32,42 16,50" fill="#fca5a5" fillOpacity="0.7" stroke="#fca5a5" strokeWidth="1" />
          </g>

          {/* Bar 2 (Medium glass) */}
          <g transform="translate(60, 56)">
            <polygon points="0,20 16,12 32,20 16,28" fill="#ffffff" fillOpacity="0.95" stroke="#f87171" strokeWidth="1" />
            <polygon points="0,20 16,28 16,72 0,64" fill="#fecaca" fillOpacity="0.95" stroke="#f87171" strokeWidth="1" />
            <polygon points="16,28 32,20 32,64 16,72" fill="#f87171" fillOpacity="0.8" stroke="#f87171" strokeWidth="1" />
          </g>

          {/* Bar 3 (Tall solid red hero) */}
          <g transform="translate(85, 30)">
            <polygon points="0,20 16,12 32,20 16,28" fill="#ef4444" stroke="#dc2626" strokeWidth="0.8" />
            <polygon points="0,20 16,28 16,98 0,90" fill="#dc2626" stroke="#b91c1c" strokeWidth="0.8" />
            <polygon points="16,28 32,20 32,90 16,98" fill="#b91c1c" stroke="#991b1b" strokeWidth="0.8" />
            <line x1="16" y1="28" x2="16" y2="98" stroke="#fca5a5" strokeWidth="1" />
          </g>

          {/* Dynamic 3D Curved Growth Arrow */}
          <path
            d="M 22,110 Q 65,95 105,38"
            stroke="url(#roseArrowGrad)"
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
          />
          <polygon points="108,30 115,46 98,42" fill="#e5231b" />

          {/* Arrow Gradient */}
          <defs>
            <linearGradient id="roseArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#b8140e" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    number: "02",
    eyebrow: "PEOPLE-CENTRIC DESIGN",
    titlePrefix: "Digital Experiences",
    titleHighlight: "That Convert",
    description:
      "Having people visit your site is not enough. Our team develops strategies and digital experiences to attract relevant audiences and drive them towards actions.",
    builtAround: "Better Conversion Opportunities",
    badgeLabel: "More Conversions",
    icon: MousePointerClick,
    accent: {
      theme: "indigo",
      numberColor: "text-indigo-500",
      lineColor: "bg-indigo-500",
      highlightColor: "text-indigo-600",
      iconBg: "bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-indigo-500/25",
      topBorder: "border-t-indigo-600",
      pillBg: "bg-indigo-50 text-indigo-700 border-indigo-200/90",
      dotColor: "bg-indigo-600",
      ambientGlow: "from-indigo-200/60 via-blue-100/30 to-transparent",
      hoverBorder: "hover:border-indigo-300 hover:shadow-[0_20px_50px_rgba(79,70,229,0.14)]",
      badgeStyle: "text-indigo-600 border-indigo-200 bg-white/95 shadow-indigo-500/15",
    },
    // 3D Glass Browser Window + Cursor Illustration
    illustration: (
      <div className="relative w-32 h-32 min-[400px]:w-36 min-[400px]:h-36 sm:w-40 sm:h-40 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-lg" fill="none">
          {/* Back Glow Oval */}
          <ellipse cx="85" cy="85" rx="55" ry="35" fill="#e0e7ff" fillOpacity="0.7" />

          {/* 3D Tilted Browser Window */}
          <g transform="rotate(-6 80 80)">
            <rect x="25" y="32" width="105" height="85" rx="14" fill="#ffffff" stroke="#c7d2fe" strokeWidth="1.8" />
            <rect x="25" y="32" width="105" height="20" rx="14" fill="#f5f7ff" />
            <line x1="25" y1="52" x2="130" y2="52" stroke="#e0e7ff" strokeWidth="1.2" />
            
            {/* Window Dots */}
            <circle cx="36" cy="42" r="3" fill="#818cf8" />
            <circle cx="45" cy="42" r="3" fill="#a5b4fc" />
            <circle cx="54" cy="42" r="3" fill="#c7d2fe" />

            {/* Content Mock: Image Frame & Text Skeleton */}
            <rect x="34" y="60" width="34" height="30" rx="6" fill="#e0e7ff" />
            <path d="M 40,78 Q 47,68 54,78" stroke="#818cf8" strokeWidth="2.2" fill="none" />
            <circle cx="43" cy="68" r="2.5" fill="#6366f1" />

            <rect x="74" y="62" width="48" height="6" rx="3" fill="#6366f1" fillOpacity="0.85" />
            <rect x="74" y="72" width="38" height="5" rx="2.5" fill="#c7d2fe" />
            <rect x="74" y="80" width="44" height="5" rx="2.5" fill="#e0e7ff" />
            <rect x="34" y="96" width="88" height="12" rx="4" fill="#4f46e5" fillOpacity="0.12" stroke="#6366f1" strokeWidth="1" />
          </g>

          {/* 3D Glowing Pointer Cursor */}
          <g transform="translate(85, 78)">
            <polygon points="0,0 24,14 14,18 22,32 16,35 8,21 0,26" fill="#4f46e5" stroke="#ffffff" strokeWidth="2.2" />
          </g>
        </svg>
      </div>
    ),
  },
  {
    number: "03",
    eyebrow: "TAILORED FOR YOUR BUSINESS",
    titlePrefix: "Customized",
    titleHighlight: "Digital Strategy",
    description:
      "Each business, target audience, industry, and competition are unique. We take into account all of them to create a digital strategy for your company instead of providing cookie-cutter solutions.",
    builtAround: "Clear Strategic Direction",
    badgeLabel: "Focused Strategy",
    icon: Compass,
    accent: {
      theme: "emerald",
      numberColor: "text-emerald-500",
      lineColor: "bg-emerald-500",
      highlightColor: "text-emerald-600",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/25",
      topBorder: "border-t-emerald-600",
      pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200/90",
      dotColor: "bg-emerald-600",
      ambientGlow: "from-emerald-200/60 via-teal-100/30 to-transparent",
      hoverBorder: "hover:border-emerald-300 hover:shadow-[0_20px_50px_rgba(5,150,105,0.14)]",
      badgeStyle: "text-emerald-600 border-emerald-200 bg-white/95 shadow-emerald-500/15",
    },
    // 3D Isometric Target & Arrow Illustration
    illustration: (
      <div className="relative w-32 h-32 min-[400px]:w-36 min-[400px]:h-36 sm:w-40 sm:h-40 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-lg" fill="none">
          {/* Ambient Disc */}
          <ellipse cx="85" cy="85" rx="55" ry="40" fill="#d1fae5" fillOpacity="0.6" />

          {/* 3D Tilted Bullseye Target */}
          <g transform="rotate(12 80 80) translate(8, 0)">
            {/* Outer Ring */}
            <ellipse cx="75" cy="80" rx="46" ry="46" fill="#10b981" />
            <ellipse cx="75" cy="84" rx="46" ry="46" fill="#047857" opacity="0.6" />
            <ellipse cx="75" cy="80" rx="46" ry="46" fill="#34d399" />

            {/* White Ring */}
            <ellipse cx="75" cy="80" rx="36" ry="36" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.2" />
            
            {/* Middle Emerald Ring */}
            <ellipse cx="75" cy="80" rx="26" ry="26" fill="#059669" />

            {/* Inner White Ring */}
            <ellipse cx="75" cy="80" rx="16" ry="16" fill="#ffffff" />

            {/* Bullseye Center */}
            <ellipse cx="75" cy="80" rx="8" ry="8" fill="#047857" />
            <circle cx="73" cy="78" r="2.5" fill="#6ee7b7" />
          </g>

          {/* 3D Dart Striking Center */}
          <g transform="translate(68, 48)">
            <line x1="22" y1="36" x2="48" y2="8" stroke="#047857" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="22" y1="36" x2="48" y2="8" stroke="#34d399" strokeWidth="2.2" strokeLinecap="round" />
            {/* Fletching */}
            <polygon points="48,8 60,4 52,16" fill="#059669" />
            <polygon points="48,8 44,-4 56,4" fill="#10b981" />
          </g>
        </svg>
      </div>
    ),
  },
  {
    number: "04",
    eyebrow: "NEXT-GEN SEARCH & AI",
    titlePrefix: "AI-Powered",
    titleHighlight: "Visibility",
    description:
      "AI and the emergence of new platforms are changing the ways businesses become discovered by people. We help companies change their visibility strategy to stay discoverable, relevant, and competitive.",
    builtAround: "Future-Ready Digital Growth",
    badgeLabel: "AI-Ready 2026",
    badgeIcon: Bot,
    icon: BrainCircuit,
    accent: {
      theme: "amber",
      numberColor: "text-amber-500",
      lineColor: "bg-amber-500",
      highlightColor: "text-amber-600",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-amber-500/25",
      topBorder: "border-t-amber-500",
      pillBg: "bg-amber-50 text-amber-800 border-amber-200/90",
      dotColor: "bg-amber-500",
      ambientGlow: "from-amber-200/60 via-orange-100/30 to-transparent",
      hoverBorder: "hover:border-amber-300 hover:shadow-[0_20px_50px_rgba(245,158,11,0.14)]",
      badgeStyle: "text-amber-700 border-amber-200 bg-white/95 shadow-amber-500/15",
    },
    // 3D Volumetric Isometric AI Processor Core with 3D Search Glass & Neural Nodes
    illustration: (
      <div className="relative w-32 h-32 min-[400px]:w-36 min-[400px]:h-36 sm:w-40 sm:h-40 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-xl" fill="none">
          {/* Ambient Warm Glow */}
          <ellipse cx="80" cy="88" rx="56" ry="38" fill="#fef3c7" fillOpacity="0.85" />
          <ellipse cx="80" cy="132" rx="44" ry="12" fill="#fde68a" fillOpacity="0.5" />

          {/* Gradients */}
          <defs>
            <linearGradient id="aiChipTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="30%" stopColor="#fbbf24" />
              <stop offset="75%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="aiChipLeftGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="aiChipRightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="lensGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* ======================================================= */}
          {/* 3D ISOMETRIC MULTI-TIERED PEDESTAL */}
          {/* ======================================================= */}
          {/* Bottom Platform */}
          <polygon points="26,92 80,123 134,92 80,61" fill="#ffffff" stroke="#fde68a" strokeWidth="1.5" />
          <polygon points="26,92 80,123 80,131 26,100" fill="#fef3c7" />
          <polygon points="80,123 134,92 134,100 80,131" fill="#fde68a" />

          {/* Circuit PCB Traces & Nodes on Base */}
          <path d="M 40,84 L 54,76 L 68,84" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.8" />
          <circle cx="40" cy="84" r="2.8" fill="#f59e0b" stroke="#ffffff" strokeWidth="0.8" />
          <path d="M 120,84 L 106,76 L 92,84" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.8" />
          <circle cx="120" cy="84" r="2.8" fill="#f59e0b" stroke="#ffffff" strokeWidth="0.8" />
          <circle cx="80" cy="123" r="3" fill="#d97706" stroke="#ffffff" strokeWidth="0.8" />

          {/* Middle Slab */}
          <polygon points="38,86 80,110 122,86 80,62" fill="#ffffff" stroke="#fef08a" strokeWidth="1.2" fillOpacity="0.95" />
          <polygon points="38,86 80,110 80,116 38,92" fill="#fef3c7" />
          <polygon points="80,110 122,86 122,92 80,116" fill="#fde68a" />

          {/* ======================================================= */}
          {/* BOLD 3D ISOMETRIC AI PROCESSOR CORE (HERO) */}
          {/* ======================================================= */}
          {/* Shadow under chip */}
          <ellipse cx="80" cy="92" rx="34" ry="14" fill="#d97706" opacity="0.4" />

          {/* 3D Chip Thickness / Sides */}
          <polygon points="46,78 80,97 80,111 46,92" fill="url(#aiChipLeftGrad)" />
          <polygon points="80,97 114,78 114,92 80,111" fill="url(#aiChipRightGrad)" />

          {/* Chip Top Surface */}
          <polygon points="80,59 114,78 80,97 46,78" fill="url(#aiChipTopGrad)" stroke="#fef08a" strokeWidth="1.4" />

          {/* Specular Edge Highlight */}
          <path d="M 48,78 L 80,60 L 112,78" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" fill="none" />

          {/* Bold White "AI" Typography */}
          <g transform="translate(80, 78)">
            {/* Letter 'A' */}
            <path
              d="M -14,10 L -6,-9 L 2,10 M -12,4 L 0,4"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Letter 'I' */}
            <line
              x1="10"
              y1="-9"
              x2="10"
              y2="10"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          {/* ======================================================= */}
          {/* 3D FLOATING GLASS SEARCH LENS (VISIBILITY & DISCOVERY) */}
          {/* ======================================================= */}
          <g transform="translate(100, 32)">
            {/* 3D Lens Handle */}
            <line x1="16" y1="16" x2="28" y2="28" stroke="#b45309" strokeWidth="5" strokeLinecap="round" />
            <line x1="16" y1="16" x2="28" y2="28" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
            {/* Lens Outer Rim 3D Shadow */}
            <circle cx="8" cy="8" r="14" fill="#d97706" opacity="0.25" />
            {/* Lens Outer Rim */}
            <circle cx="8" cy="8" r="13" fill="url(#lensGlassGrad)" stroke="#f59e0b" strokeWidth="3" />
            {/* Lens Inner Glass Reflection */}
            <path d="M 2,5 Q 8,1 14,5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <circle cx="12" cy="11" r="1.5" fill="#f59e0b" />
          </g>

          {/* ======================================================= */}
          {/* FLOATING 3D AI SPARKLES (TOP-LEFT & BOTTOM-RIGHT) */}
          {/* ======================================================= */}
          {/* Top-Left Sparkle */}
          <g transform="translate(24, 36)">
            <path d="M 8,0 Q 8,8 16,8 Q 8,8 8,16 Q 8,8 0,8 Q 8,8 8,0 Z" fill="#f59e0b" />
            <circle cx="16" cy="14" r="2" fill="#fbbf24" />
          </g>
          {/* Bottom-Right Mini Sparkle */}
          <g transform="translate(126, 96)">
            <path d="M 6,0 Q 6,6 12,6 Q 6,6 6,12 Q 6,6 0,6 Q 6,6 6,0 Z" fill="#f59e0b" />
          </g>
        </svg>
      </div>
    ),
  },
  {
    number: "05",
    eyebrow: "CONNECTED DIGITAL ECOSYSTEM",
    titlePrefix: "Strategy, Technology",
    titleHighlight: "& Creativity Together",
    description:
      "By combining marketing expertise, technological skills, and creativity, digital growth gets a boost. We unite all these aspects in one company and help build connected digital experiences instead of managing disconnected solutions.",
    builtAround: "One Connected Growth Partner",
    badgeLabel: "One Growth Partner",
    icon: Layers,
    accent: {
      theme: "purple",
      numberColor: "text-purple-500",
      lineColor: "bg-purple-500",
      highlightColor: "text-purple-600",
      iconBg: "bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white shadow-purple-500/25",
      topBorder: "border-t-purple-600",
      pillBg: "bg-purple-50 text-purple-700 border-purple-200/90",
      dotColor: "bg-purple-600",
      ambientGlow: "from-purple-200/60 via-fuchsia-100/30 to-transparent",
      hoverBorder: "hover:border-purple-300 hover:shadow-[0_20px_50px_rgba(147,51,234,0.14)]",
      badgeStyle: "text-purple-700 border-purple-200 bg-white/95 shadow-purple-500/15",
    },
    // 3D Interlocking Prisms / Connected Slabs Illustration
    illustration: (
      <div className="relative w-32 h-32 min-[400px]:w-36 min-[400px]:h-36 sm:w-40 sm:h-40 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-lg" fill="none">
          <ellipse cx="80" cy="85" rx="55" ry="38" fill="#f3e8ff" fillOpacity="0.7" />

          {/* Layer 1 - Bottom Slab (Technology) */}
          <g transform="translate(0, 36)">
            <polygon points="40,65 80,82 120,65 80,48" fill="#a855f7" />
            <polygon points="40,65 80,82 80,94 40,77" fill="#7e22ce" />
            <polygon points="80,82 120,65 120,77 80,94" fill="#6b21a8" />
          </g>

          {/* Layer 2 - Middle Slab (Strategy) */}
          <g transform="translate(0, 14)">
            <polygon points="40,65 80,82 120,65 80,48" fill="#c084fc" />
            <polygon points="40,65 80,82 80,94 40,77" fill="#9333ea" />
            <polygon points="80,82 120,65 120,77 80,94" fill="#7e22ce" />
          </g>

          {/* Layer 3 - Top Slab (Creativity) */}
          <g transform="translate(0, -8)">
            <polygon points="40,65 80,82 120,65 80,48" fill="#f3e8ff" stroke="#e9d5ff" strokeWidth="1.2" />
            <polygon points="40,65 80,82 80,94 40,77" fill="#c084fc" />
            <polygon points="80,82 120,65 120,77 80,94" fill="#a855f7" />
            <circle cx="80" cy="65" r="5" fill="#9333ea" />
          </g>
        </svg>
      </div>
    ),
  },
  {
    number: "06",
    eyebrow: "CONTINUOUS VALUE CREATION",
    titlePrefix: "Built for",
    titleHighlight: "Long-Term Growth",
    description:
      "Our approach goes beyond quick wins. It evolves along with your business and uses performance data, changes in customer behavior, and new opportunities.",
    builtAround: "Sustainable Business Growth",
    badgeLabel: "Sustainable ROI",
    icon: BarChart3,
    accent: {
      theme: "sky",
      numberColor: "text-sky-500",
      lineColor: "bg-sky-500",
      highlightColor: "text-sky-600",
      iconBg: "bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-sky-500/25",
      topBorder: "border-t-sky-600",
      pillBg: "bg-sky-50 text-sky-800 border-sky-200/90",
      dotColor: "bg-sky-600",
      ambientGlow: "from-sky-200/60 via-cyan-100/30 to-transparent",
      hoverBorder: "hover:border-sky-300 hover:shadow-[0_20px_50px_rgba(2,132,199,0.14)]",
      badgeStyle: "text-sky-700 border-sky-200 bg-white/95 shadow-sky-500/15",
    },
    // 3D Isometric Ascending Bar Chart with Flourishing Blue Plant Sprout
    illustration: (
      <div className="relative w-32 h-32 min-[400px]:w-36 min-[400px]:h-36 sm:w-40 sm:h-40 flex items-center justify-center shrink-0">
        <svg viewBox="0 0 160 160" className="w-full h-full drop-shadow-xl" fill="none">
          {/* Ambient Glow Disc */}
          <circle cx="80" cy="92" r="54" fill="#e0f2fe" fillOpacity="0.85" />
          <ellipse cx="80" cy="138" rx="46" ry="12" fill="#bae6fd" fillOpacity="0.5" />

          {/* Scaled & Offset Main Graphic (Leaves top room for floating pill badge) */}
          <g transform="translate(10, 30) scale(0.78)">
            {/* 3D Ascending Growth Arrow (Behind Columns) */}
            <g opacity="0.65">
              <path
                d="M 12,124 Q 52,94 92,48"
                stroke="#bae6fd"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <polygon points="96,40 106,54 90,50" fill="#38bdf8" />
            </g>

            {/* ======================================================= */}
            {/* 4 3D ISOMETRIC ASCENDING COLUMNS */}
            {/* ======================================================= */}

            {/* Column 1: Shortest (Far Left) */}
            <g>
              <polygon points="12,100 24,93 36,100 24,107" fill="#ffffff" stroke="#e0f2fe" strokeWidth="0.8" />
              <polygon points="12,100 24,107 24,122 12,115" fill="#f1f5f9" />
              <polygon points="24,107 36,100 36,115 24,122" fill="#e2e8f0" />
            </g>

            {/* Column 2: Medium-Low */}
            <g>
              <polygon points="34,86 46,79 58,86 46,93" fill="#ffffff" stroke="#e0f2fe" strokeWidth="0.8" />
              <polygon points="34,86 46,93 46,122 34,115" fill="#f1f5f9" />
              <polygon points="46,93 58,86 58,115 46,122" fill="#e2e8f0" />
            </g>

            {/* Column 3: Medium-Tall */}
            <g>
              <polygon points="56,72 68,65 80,72 68,79" fill="#ffffff" stroke="#e0f2fe" strokeWidth="0.8" />
              <polygon points="56,72 68,79 68,122 56,115" fill="#f8fafc" />
              <polygon points="68,79 80,72 80,115 68,122" fill="#e2e8f0" />
            </g>

            {/* Column 4: Tallest Hero Column (Vibrant Blue) */}
            <g>
              {/* Top Face */}
              <polygon points="78,56 92,48 106,56 92,64" fill="#38bdf8" stroke="#7dd3fc" strokeWidth="0.8" />
              {/* Left Shaded Face */}
              <polygon points="78,56 92,64 92,122 78,114" fill="#0284c7" />
              {/* Right Shaded Face */}
              <polygon points="92,64 106,56 106,114 92,122" fill="#0369a1" />
              {/* Edge Highlight Line */}
              <line x1="92" y1="64" x2="92" y2="122" stroke="#7dd3fc" strokeWidth="0.9" opacity="0.6" />
            </g>

            {/* ======================================================= */}
            {/* 3D BLUE PLANT SPROUT (Flourishing Upward from Pillar 4) */}
            {/* ======================================================= */}
            <g>
              {/* Plant Main Stem */}
              <path
                d="M 92,56 L 92,26"
                stroke="#0284c7"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M 92,56 L 92,26"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Left Lush Upward Leaf */}
              <path
                d="M 92,36 C 76,36 64,22 72,8 C 86,8 92,24 92,36 Z"
                fill="url(#growthLeafGradLeft)"
                stroke="#0284c7"
                strokeWidth="1.2"
              />
              {/* Left Leaf Midrib Vein */}
              <path
                d="M 92,36 Q 82,20 75,12"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.9"
                fill="none"
              />

              {/* Right Lush Upward Leaf */}
              <path
                d="M 92,36 C 108,36 120,22 112,8 C 98,8 92,24 92,36 Z"
                fill="url(#growthLeafGradRight)"
                stroke="#0284c7"
                strokeWidth="1.2"
              />
              {/* Right Leaf Midrib Vein */}
              <path
                d="M 92,36 Q 102,20 109,12"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.9"
                fill="none"
              />

              {/* Center Top Sprout Bud */}
              <circle cx="92" cy="24" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
            </g>
          </g>

          {/* Sparkle Nodes */}
          <circle cx="132" cy="42" r="3" fill="#0284c7" />
          <circle cx="132" cy="42" r="1.2" fill="#ffffff" />
          <circle cx="28" cy="62" r="2" fill="#38bdf8" />

          {/* Gradients */}
          <defs>
            <linearGradient id="growthLeafGradLeft" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="growthLeafGradRight" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
  },
];

export function WhyHoverSection() {
  return <WhyChooseUsSection />;
}

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-[#fcfcfe] via-[#f8fafc] to-[#fcfcfe] border-b border-slate-100">
      
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-rose-100/35 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-indigo-50/45 blur-3xl" />
      </div>

      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
        
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
            className="inline-flex items-center gap-2 rounded-full border border-rose-200/90 bg-white/95 px-3 py-1 sm:px-3.5 sm:py-1 shadow-[0_2px_8px_rgba(229,35,27,0.06)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5231b] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5231b]" />
            </span>
            <span className="font-display text-[10px] min-[360px]:text-[11px] font-bold uppercase tracking-[0.14em] text-[#e5231b]">
              WHY CHOOSE US
            </span>
          </motion.div>

          {/* Headline with Brand Accent Badge */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="mt-2.5 sm:mt-3 font-display text-[19px] sm:text-[24px] lg:text-[27px] xl:text-[29px] font-extrabold tracking-[-0.025em] text-[#0b132b] leading-[1.3] sm:leading-[1.28]"
          >
            <span className="block text-[#0b132b]">Why Choose Hover Business Services</span>
            <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5">
              <span className="text-[#0b132b]">for Your</span>
              <span className="relative inline-flex items-center justify-center -rotate-1 sm:-rotate-2 px-2.5 sm:px-3.5 py-0.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-rose-100/90 via-red-50 to-rose-100/70 border border-rose-200/80 shadow-[0_2px_10px_rgba(229,35,27,0.1)] transition-transform duration-300 hover:rotate-0 hover:scale-105 align-middle">
                <span className="italic font-black text-[#e5231b] tracking-tight whitespace-nowrap">
                  Digital Growth?
                </span>
              </span>
            </span>
          </motion.h2>

          {/* Intro Paragraph (Full Width) */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="mt-2 sm:mt-2.5 text-[14px] sm:text-[15px] text-[#475569] leading-[1.6] text-left [text-wrap:pretty] w-full max-w-none"
          >
            Digital growth needs more than individual services. It needs the right strategy, execution, technology, and creative thinking working together. At <strong className="font-semibold text-[#0f172a]">Hover Business Services LLP</strong>, we focus on creating digital solutions aligned with your business goals and built for measurable, sustainable growth.
          </motion.p>
        </div>

        {/* ========================================================= */}
        {/* 6-CARD GRID (HIGH-IMPACT HIGHLIGHTED CARDS & DEDICATED ICONS) */}
        {/* ========================================================= */}
        <div className="mt-6 sm:mt-8 lg:mt-9 grid gap-5 sm:gap-6 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.05 * index, ease: "easeOut" }}
                whileHover={{ y: -7, transition: { duration: 0.25 } }}
                className={`group relative flex flex-col justify-between rounded-xl sm:rounded-2xl border border-slate-200/90 border-t-[3.5px] ${reason.accent.topBorder} bg-white p-5 sm:p-6 lg:p-6.5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ${reason.accent.hoverBorder} transition-all duration-300 overflow-hidden`}
              >
                {/* Soft Ambient Radial Corner Glow */}
                <div className={`pointer-events-none absolute -top-12 -right-12 h-60 w-60 rounded-full bg-gradient-to-br ${reason.accent.ambientGlow} blur-2xl group-hover:scale-130 transition-transform duration-500`} />

                {/* Top Row: Number Badge + Eyebrow with Dash + Themed Header Icon */}
                <div className="relative z-10 flex items-center justify-between pb-3">
                  <div className="flex items-center gap-2">
                    <span className={`font-mono text-[26px] sm:text-[28px] font-black tracking-tighter leading-none ${reason.accent.numberColor}`}>
                      {reason.number}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className={`h-[2px] w-4 rounded-full ${reason.accent.lineColor}`} />
                      <span className="font-display text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        {reason.eyebrow}
                      </span>
                    </div>
                  </div>

                  {/* Dedicated Themed Icon Badge */}
                  <div className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl ${reason.accent.iconBg} shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <IconComponent className="h-4.5 w-4.5 sm:h-5 sm:w-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Middle Row: Content (Left) + 3D Illustration & Floating Badge (Right) */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 sm:gap-2 items-center my-1.5">
                  {/* Text Content */}
                  <div className="flex flex-col pr-1 sm:pr-2">
                    {/* Two-Tone Title */}
                    <h3 className="font-display text-[17.5px] sm:text-[18.5px] font-bold text-slate-900 tracking-tight leading-[1.28]">
                      <span>{reason.titlePrefix} </span>
                      <span className={reason.accent.highlightColor}>{reason.titleHighlight}</span>
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-[12.8px] sm:text-[13.2px] text-slate-600 leading-[1.62] text-left [text-wrap:pretty]">
                      {reason.description}
                    </p>
                  </div>

                  {/* Right 3D Visual Scene with Floating Glass Badge */}
                  <div className="relative flex flex-col items-center justify-center self-center shrink-0 mt-2 sm:mt-0">
                    {/* Floating Metric Pill on Top-Right of 3D Model */}
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                      className={`absolute -top-2 right-1 z-20 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10.5px] sm:text-[11px] font-extrabold backdrop-blur-md shadow-md ${reason.accent.badgeStyle}`}
                    >
                      {reason.badgeIcon ? (
                        <reason.badgeIcon className="w-3 h-3 stroke-[2.5]" />
                      ) : (
                        <CheckCircle2 className="w-3 h-3 stroke-[2.5]" />
                      )}
                      <span>{reason.badgeLabel}</span>
                    </motion.div>

                    {/* 3D Illustration */}
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {reason.illustration}
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Tag: Built around Tag */}
                <div className="mt-4 pt-3.5 border-t border-slate-100/90 relative z-10 flex items-center">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-[11.5px] sm:text-[12px] border ${reason.accent.pillBg}`}>
                    <span className="opacity-80 font-medium">Built around:</span>
                    <span className="font-bold">{reason.builtAround}</span>
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

