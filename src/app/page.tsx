import { HeroBanner } from "@/components/hero/HeroBanner";
import { ClientTrustSection } from "@/components/sections/ClientTrustSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { MarketingBanner } from "@/components/banners/MarketingBanner";
import { GrowSmarterCTA } from "@/components/sections/GrowSmarterCTA";
import { IndustriesOverview } from "@/components/sections/IndustriesOverview";
import { TrustBanner } from "@/components/banners/TrustBanner";
import { CTASection } from "@/components/sections/CTASection";
import { AboutOverviewSection } from "@/components/sections/AboutOverviewSection";
import { GrowthSystemSection } from "@/components/sections/GrowthSystemSection";
import { ServicesDeepDive } from "@/components/sections/ServicesDeepDive";
import { WhyChooseUsSection } from "@/components/sections/WhyHoverSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { PainPointsSection } from "@/components/sections/PainPointsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GrowthStagesSection } from "@/components/sections/GrowthStagesSection";
import { MeasurableGrowthSection } from "@/components/sections/MeasurableGrowthSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { LazyMount } from "@/components/ui/LazyMount";
import { Skeleton } from "@/components/ui/Skeleton";
import { Container } from "@/components/ui/Container";

function SectionFallback({ height }: { height: number }) {
  return (
    <div className="section-space">
      <Container>
        <Skeleton className="w-full rounded-[var(--radius-lg)]" style={{ height }} />
      </Container>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      <ClientTrustSection />

      <LazyMount minHeight={480} fallback={<SectionFallback height={420} />}>
        <MarketingBanner />
      </LazyMount>

      <LazyMount minHeight={380} fallback={<SectionFallback height={340} />}>
        <GrowSmarterCTA />
      </LazyMount>

      <LazyMount minHeight={480} fallback={<SectionFallback height={420} />}>
        <AboutOverviewSection />
      </LazyMount>

      <LazyMount minHeight={480} fallback={<SectionFallback height={420} />}>
        <ServicesOverview />
      </LazyMount>

      <LazyMount minHeight={520} fallback={<SectionFallback height={460} />}>
        <WhyChooseUsSection />
      </LazyMount>

      <LazyMount minHeight={520} fallback={<SectionFallback height={460} />}>
        <GrowthSystemSection />
      </LazyMount>

      <LazyMount minHeight={560} fallback={<SectionFallback height={500} />}>
        <ServicesDeepDive />
      </LazyMount>

      <LazyMount minHeight={520} fallback={<SectionFallback height={460} />}>
        <ReviewsSection />
      </LazyMount>

      <LazyMount minHeight={520} fallback={<SectionFallback height={460} />}>
        <IndustriesOverview />
      </LazyMount>

      <LazyMount minHeight={480} fallback={<SectionFallback height={420} />}>
        <PainPointsSection />
      </LazyMount>

      <LazyMount minHeight={480} fallback={<SectionFallback height={420} />}>
        <ProcessSection />
      </LazyMount>

      <LazyMount minHeight={420} fallback={<SectionFallback height={360} />}>
        <GrowthStagesSection />
      </LazyMount>

      <LazyMount minHeight={420} fallback={<SectionFallback height={360} />}>
        <MeasurableGrowthSection />
      </LazyMount>

      <LazyMount minHeight={480} fallback={<SectionFallback height={420} />}>
        <FAQSection />
      </LazyMount>

      <LazyMount minHeight={280} fallback={<SectionFallback height={240} />}>
        <CTASection
          title="Ready to Turn Your Digital Presence Into a Growth Engine?"
          description="You don't need more disconnected marketing activities — you need a strategy that connects goals, audience, marketing, technology, creative, AI, and measurement. Let's build your digital growth roadmap."
          ctaPrimary={{ label: "Get Your Free Website Audit", href: "/contact" }}
          ctaSecondary={{ label: "Talk to a Growth Expert", href: "/contact" }}
        />
      </LazyMount>
    </>
  );
}
