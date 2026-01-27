import Header from "@/components/Header";
import HeroSection from "@/components/About/HeroSection";
import MissionSection from "@/components/About/Mission";
import CounterSection from "@/components/CounterSection";
import WhyAeroSection from "@/components/WhyAeroSection";
import GlobalAudienceSection from "@/components/GlobalAudienceSection";
import LogoCarousel from "@/components/LogoCarousel";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ConnectWithUsSection from "@/components/ConnectWithUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import PromoSection from "@/components/PromoSection";

export default function About() {
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection title="About Us" description="Your story is about to be in the hands of millions, and that's true! If you see our side, we are the opportunity for millions of authors to get published." />
            <CounterSection />
            <MissionSection />
            <WhyAeroSection />
            <GlobalAudienceSection />
            <LogoCarousel />
            <HowWeWorkSection />
            <ConnectWithUsSection />
            <TestimonialsSection />
            <PromoSection />
            <FAQSection />
        </main>
    );
}
