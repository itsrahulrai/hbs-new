import { HeroBanner } from "@/components/hero/HeroBanner";
import { ClientTrustSection } from "@/components/sections/ClientTrustSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { MarketingBanner } from "@/components/banners/MarketingBanner";
import { GrowSmarterCTA } from "@/components/sections/GrowSmarterCTA";
import { AboutOverviewSection } from "@/components/sections/AboutOverviewSection";
import { WhyChooseUsSection } from "@/components/sections/WhyHoverSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
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

      <LazyMount minHeight={220} fallback={<SectionFallback height={180} />}>
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
        <ReviewsSection />
      </LazyMount>
    </>
  );
}
