import Hero from './Hero';
import JourneySection from './JourneySection';
import ServicesSection from './ServicesSection';
import PromoBanner from './PromoBanner';
import WhyChooseFrontline from './WhyChooseFrontline';
import PartnerBenefitsSection from './PartnerBenefitsSection';
import UpgradeBanner from './UpgradeBanner';
import { Metadata } from "next";
import AuthorsShowcaseSection from '@/components/AuthorsShowcaseSection';
import PromoSection from '@/components/PromoSection';
import FAQSection from '@/components/FAQSection';
import GlobalAudienceSection from '@/components/GlobalAudienceSection';

export const metadata: Metadata = {
    title: "Book Publishing Landing Page – Aero Publishing",
    description:
        "Premium publishing services to help you make your mark. Get professional book publishing with expert support.",
};

export default function BookPublishingLandingPage() {
    return (
        <main className="min-h-screen bg-white pb-20">
            <Hero />
            <JourneySection />
            <ServicesSection />
            <PromoBanner />
            <GlobalAudienceSection />
            <WhyChooseFrontline />
            <PartnerBenefitsSection />
            <UpgradeBanner />
            <AuthorsShowcaseSection />
            <PromoSection />
            <FAQSection />
        </main>
    )
}
