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

    const features = [
        {
            icon: "/feature-icon-1.png",
            title: "Professional Publishing Without Compromise",
            description: "We deliver industry-standard publishing services without cutting corners. From manuscript preparation to final release, every step is handled with precision, care, and attention to detail—so your book meets professional publishing standards in both print and digital formats."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Expert-Led Editorial and Design Support",
            description: "Your book is supported by experienced editors and designers who understand both storytelling and market expectations. We work collaboratively to refine your manuscript, develop compelling interiors, and create covers that reflect your vision while appealing to your audience."
        },
        {
            icon: "/feature-icon-3.png",
            title: "Full Creative Control and 100% Royalties",
            description: "You retain complete ownership of your work. Every creative decision remains yours, and you earn 100% of your royalties. Our role is to support, guide, and execute—not to take control of your intellectual property."
        },
        {
            icon: "/feature-icon-4.png",
            title: "Global Distribution Across Major Platforms",
            description: "Your book is prepared for distribution across leading online retailers and platforms worldwide. We ensure your title is professionally formatted and positioned to reach readers in the United States and beyond, in both print and digital marketplaces."
        }
    ];

    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection hasForm={false} title="About Us" description="Your story deserves more than just being written—it deserves to be seen, shared, and remembered. At Aero Publishing, we help authors bring their ideas to life and place them in the hands of readers worldwide with confidence and ease." />
            <CounterSection />
            <MissionSection />
            <WhyAeroSection highlightTitle="Publishing" normalTitle="Your Book Should Be " boldTitle=" Simple, Transparent, and Author-First" features={features} description="" />
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
