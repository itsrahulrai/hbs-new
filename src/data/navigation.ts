export type MenuLink = {
  label: string;
  href: string;
};

export type MenuColumn = {
  heading: string;
  icon?: string;
  links: MenuLink[];
};

export type MegaMenuItem = {
  label: string;
  href: string;
  columns?: MenuColumn[];
};

/**
 * Primary navigation exactly as specified in the HBS website structure
 * document. Do not add, remove, or rename items here.
 */
export const primaryNav: MegaMenuItem[] = [
  {
    label: "About Us",
    href: "/about",
    columns: [
      {
        heading: "About Us",
        icon: "info",
        links: [
          { label: "Company Overview", href: "/about/company-overview" },
          { label: "Our Team (Life @ Hover)", href: "/about/our-team" },
          { label: "Case Studies", href: "/about/case-studies" },
          { label: "Client Reviews", href: "/about/client-reviews" },
          { label: "Awards & Certifications", href: "/about/awards" },
          { label: "Careers", href: "/about/careers" },
        ],
      },
    ],
  },
  {
    label: "Digital Marketing",
    href: "/digital-marketing",
    columns: [
      {
        heading: "AI Search & Visibility",
        icon: "/icons/ai.svg",
        links: [
          { label: "LLMO Services", href: "/digital-marketing/llmo-services" },
          {
            label: "AI Search Optimization (AISO)",
            href: "/digital-marketing/aiso",
          },
          {
            label: "Generative Engine Optimization (GEO)",
            href: "/digital-marketing/geo",
          },
          {
            label: "Answer Engine Optimization (AEO)",
            href: "/digital-marketing/aeo",
          },
          { label: "AI Brand Visibility", href: "/digital-marketing/ai-brand-visibility" },
        ],
      },
      {
        heading: "SEO Services",
        icon: "/icons/seo.svg",
        links: [
          { label: "SEO Services", href: "/digital-marketing/seo-services" },
          { label: "Local SEO", href: "/digital-marketing/local-seo" },
          { label: "Ecommerce SEO", href: "/digital-marketing/ecommerce-seo" },
          { label: "Technical SEO", href: "/digital-marketing/technical-seo" },
          { label: "Small Business SEO", href: "/digital-marketing/small-business-seo" },
          { label: "SEO Audit", href: "/digital-marketing/seo-audit" },
        ],
      },
      {
        heading: "Content & Link Building",
        icon: "content",
        links: [
          { label: "Content Writing", href: "/digital-marketing/content-writing" },
          { label: "Link Building", href: "/digital-marketing/link-building" },
          { label: "Blog Outreach", href: "/digital-marketing/blog-outreach" },
          { label: "Guest Posting", href: "/digital-marketing/guest-posting" },
          { label: "Digital PR", href: "/digital-marketing/digital-pr" },
        ],
      },
      {
        heading: "Paid Marketing",
        icon: "ads",
        links: [
          { label: "Google Ads", href: "/digital-marketing/google-ads" },
          { label: "PPC Management", href: "/digital-marketing/ppc-management" },
          { label: "Performance Marketing", href: "/digital-marketing/performance-marketing" },
          { label: "Shopping Ads", href: "/digital-marketing/shopping-ads" },
          { label: "Lead Generation", href: "/digital-marketing/lead-generation" },
        ],
      },
      {
        heading: "Social Media",
        icon: "social",
        links: [
          { label: "Social Media Optimisation", href: "/digital-marketing/social-media-optimisation" },
          { label: "Social Media Marketing", href: "/digital-marketing/social-media-marketing" },
          { label: "Facebook/Meta Ads", href: "/digital-marketing/facebook-meta-ads" },
          { label: "Instagram Ads", href: "/digital-marketing/instagram-ads" },
          { label: "YouTube Marketing", href: "/digital-marketing/youtube-marketing" },
          { label: "Influencer Marketing", href: "/digital-marketing/influencer-marketing" },
          { label: "ORM (Online Reputation Management)", href: "/digital-marketing/orm" },
        ],
      },
      {
        heading: "Packages",
        icon: "package",
        links: [
          { label: "SEO Packages", href: "/digital-marketing/seo-packages" },
          { label: "Local SEO Packages", href: "/digital-marketing/local-seo-packages" },
          { label: "Ecommerce SEO Packages", href: "/digital-marketing/ecommerce-seo-packages" },
          { label: "PPC Packages", href: "/digital-marketing/ppc-packages" },
          { label: "Social Media Packages", href: "/digital-marketing/social-media-packages" },
          { label: "Digital Marketing Packages", href: "/digital-marketing/digital-marketing-packages" },
        ],
      },
    ],
  },
  {
    label: "Web & App Development",
    href: "/web-app-development",
    columns: [
      {
        heading: "Website Development",
        icon: "code",
        links: [
          { label: "Custom Web Development", href: "/web-app-development/custom-web-development" },
          { label: "WordPress Development", href: "/web-app-development/wordpress-development" },
          { label: "Laravel Development", href: "/web-app-development/laravel-development" },
          { label: "PHP Development", href: "/web-app-development/php-development" },
          { label: "Shopify Development", href: "/web-app-development/shopify-development" },
          { label: "WooCommerce Development", href: "/web-app-development/woocommerce-development" },
          { label: "Next.js Development", href: "/web-app-development/nextjs-development" },
          { label: "React Development", href: "/web-app-development/react-development" },
          { label: "API Development & Integration", href: "/web-app-development/api-development-integration" },
          { label: "CRM Development", href: "/web-app-development/crm-development" },
          { label: "Website Maintenance & Support", href: "/web-app-development/website-maintenance-support" },
        ],
      },
      {
        heading: "Website Designing",
        icon: "design",
        links: [
          { label: "Website Design", href: "/web-app-development/website-design" },
          { label: "Website Redesign", href: "/web-app-development/website-redesign" },
          { label: "Landing Page Design", href: "/web-app-development/landing-page-design" },
          { label: "Node.js", href: "/web-app-development/nodejs" },
        ],
      },
      {
        heading: "Ecommerce",
        icon: "ecommerce",
        links: [
          { label: "Shopify", href: "/web-app-development/shopify" },
          { label: "WooCommerce", href: "/web-app-development/woocommerce" },
          { label: "Magento", href: "/web-app-development/magento" },
          { label: "Custom Ecommerce", href: "/web-app-development/custom-ecommerce" },
        ],
      },
      {
        heading: "Mobile Apps",
        icon: "mobile",
        links: [
          { label: "Mobile App Development", href: "/web-app-development/mobile-app-development" },
          { label: "Android App Development", href: "/web-app-development/android-app-development" },
          { label: "App Maintenance & Support", href: "/web-app-development/app-maintenance-support" },
        ],
      },
    ],
  },
  {
    label: "Creative & Design",
    href: "/creative-design",
    columns: [
      {
        heading: "Creative Studio",
        icon: "creative",
        links: [
          { label: "Logo Design", href: "/creative-design/logo-design" },
          { label: "Graphic Design", href: "/creative-design/graphic-design" },
          { label: "Video Editing", href: "/creative-design/video-editing" },
          { label: "Social Media Creatives", href: "/creative-design/social-media-creatives" },
          { label: "UI/UX Design", href: "/creative-design/ui-ux-design" },
          { label: "Product Packaging Design", href: "/creative-design/product-packaging-design" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    columns: [
      {
        heading: "Healthcare & Wellness",
        icon: "health",
        links: [
          { label: "Hospitals", href: "/industries/hospitals" },
          { label: "Dental Clinics", href: "/industries/dental-clinics" },
          { label: "Fitness & Wellness", href: "/industries/fitness-wellness" },
          { label: "Pharmaceuticals", href: "/industries/pharmaceuticals" },
        ],
      },
      {
        heading: "Professional Services",
        icon: "professional",
        links: [
          { label: "Law Firms", href: "/industries/law-firms" },
          { label: "Accounting & Finance", href: "/industries/accounting-finance" },
          { label: "Insurance", href: "/industries/insurance" },
          { label: "Consulting", href: "/industries/consulting" },
          { label: "Business Services", href: "/industries/business-services" },
          { label: "Tax Consultants", href: "/industries/tax-consultants" },
          { label: "Corporate Services", href: "/industries/corporate-services" },
        ],
      },
      {
        heading: "Education & Hospitality",
        icon: "education",
        links: [
          { label: "Schools", href: "/industries/schools" },
          { label: "Colleges & Universities", href: "/industries/colleges-universities" },
          { label: "Coaching Institutes", href: "/industries/coaching-institutes" },
          { label: "Hotels & Resorts", href: "/industries/hotels-resorts" },
          { label: "Travel & Tourism", href: "/industries/travel-tourism" },
          { label: "Restaurants & Cafés", href: "/industries/restaurants-cafes" },
          { label: "Event Management", href: "/industries/event-management" },
        ],
      },
      {
        heading: "Real Estate & Industrial",
        icon: "realestate",
        links: [
          { label: "Real Estate", href: "/industries/real-estate" },
          { label: "Construction", href: "/industries/construction" },
          { label: "Manufacturing", href: "/industries/manufacturing" },
          { label: "Interior Design", href: "/industries/interior-design" },
          { label: "Industrial Equipment", href: "/industries/industrial-equipment" },
          { label: "Warehousing & Logistics", href: "/industries/warehousing-logistics" },
        ],
      },
      {
        heading: "Retail & Lifestyle",
        icon: "retail",
        links: [
          { label: "Ecommerce", href: "/industries/ecommerce" },
          { label: "Retail Stores", href: "/industries/retail-stores" },
          { label: "Fashion & Apparel", href: "/industries/fashion-apparel" },
          { label: "Jewellery", href: "/industries/jewellery" },
          { label: "Home Décor", href: "/industries/home-decor" },
          { label: "Furniture", href: "/industries/furniture" },
        ],
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const preHeader = {
  phone: "+91 8800239793",
  email: "info@hovermedia.in",
  whatsapp: "+91 9899691389",
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],
  cta: { label: "Free Website Audit", href: "/contact" },
};
