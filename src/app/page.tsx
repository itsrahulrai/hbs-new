import { HeroBanner } from "@/components/hero/HeroBanner";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { MarketingBanner } from "@/components/banners/MarketingBanner";
import { IndustriesOverview } from "@/components/sections/IndustriesOverview";
import { TrustBanner } from "@/components/banners/TrustBanner";
import { CTASection } from "@/components/sections/CTASection";
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
      <ServicesOverview />

      <LazyMount minHeight={480} fallback={<SectionFallback height={420} />}>
        <MarketingBanner />
      </LazyMount>

      <LazyMount minHeight={520} fallback={<SectionFallback height={460} />}>
        <IndustriesOverview />
      </LazyMount>

      <LazyMount minHeight={480} fallback={<SectionFallback height={420} />}>
        <TrustBanner />
      </LazyMount>

      <LazyMount minHeight={280} fallback={<SectionFallback height={240} />}>
        <CTASection
          title="Ready to grow with a data-driven digital partner?"
          description="Get a free website audit and a custom growth roadmap for your business."
          ctaPrimary={{ label: "Get Free Website Audit", href: "/contact" }}
          ctaSecondary={{ label: "Book Free Consultation", href: "/contact" }}
        />
      </LazyMount>
    </>
  );
}
