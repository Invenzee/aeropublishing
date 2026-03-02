import CounterSection from "@/components/CounterSection";
import GlobalAudienceSection from "@/components/GlobalAudienceSection";
import LogoCarousel from "@/components/LogoCarousel";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ConnectWithUsSection from "@/components/ConnectWithUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AuthorsShowcaseSection from "@/components/AuthorsShowcaseSection";
import FAQSection from "@/components/FAQSection";
import PromoSection from "@/components/PromoSection";
import HeroSection from "@/components/About/HeroSection";
import ServicesGridSection from "@/components/ServicesGridSection";

export default function Page() {
    return (
        <main className="min-h-screen">
            <HeroSection
                title="Explore Aero Publishing Services"
                description="All-inclusive publishing packages designed to support authors at every stage. With copyright protection, transparent pricing, and a 7-day money-back guarantee, Aero Publishing makes publishing your book simple and stress-free."
            />
            <ServicesGridSection />
            <ConnectWithUsSection />
            <TestimonialsSection />
            <WhyChooseUsSection />
            <AuthorsShowcaseSection />
            <PromoSection />
            <FAQSection />
        </main>
    );
}
