import HeroSection from "@/components/home/HeroSection";
import BusinessSection from "@/components/home/BusinessSection";
import TrustSection from "@/components/home/TrustSection";
import FeaturedEquipment from "@/components/home/FeaturedEquipment";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTASection from "@/components/layout/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedEquipment />
      <BusinessSection />
      <TrustSection />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
