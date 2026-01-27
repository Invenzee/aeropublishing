import HeroSection from '@/components/About/HeroSection'
import PricingSection from '@/components/Pricing/PricingSection'
import GlobalAudienceSection from "@/components/GlobalAudienceSection";
import ConnectWithUsSection from '@/components/ConnectWithUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AuthorsShowcaseSection from '@/components/AuthorsShowcaseSection';
import PromoSection from '@/components/PromoSection';
import FAQSection from '@/components/FAQSection';

export default function page() {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                title="Tailored Plans to Bring Your Book to Life"
                description="All-inclusive packages with copyright protection and a 7-day money-back guarantee. Publish your book with ease."
            />
            <PricingSection />
            <GlobalAudienceSection />
            <ConnectWithUsSection />
            <TestimonialsSection />
            <WhyChooseUsSection />
            <AuthorsShowcaseSection />
            <PromoSection />
            <FAQSection />
        </main>
    )
}
