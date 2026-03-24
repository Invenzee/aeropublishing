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

const faqs = [
    {
        id: 1,
        question: "What Is The Amazon Publishing Service, And How Does It Work?",
        answer: "Amazon publishing allows authors to publish and distribute their books globally. You can upload your manuscript, set pricing, and make your book available in both digital and print formats."
    },
    {
        id: 2,
        question: "Is Amazon Publishing Service Only For eBooks, Or Can I Publish Print Books Too?",
        answer: "You can publish both eBooks and print-on-demand books, depending on your preference and audience."
    },
    {
        id: 3,
        question: "Should I Be A Professional Author To Use The Amazon Publishing Service?",
        answer: "No. The platform is designed for both new and experienced authors looking to publish their work."
    },
    {
        id: 4,
        question: "What Royalties Can I Earn Through The Amazon Publishing Service?",
        answer: "Royalties vary based on pricing, format, and distribution channels, but authors maintain control over their earnings."
    },
    {
        id: 5,
        question: "How Can I Promote My Book Once It’s Published On Amazon?",
        answer: "Promotion can include social media marketing, author branding, and targeted campaigns to reach your ideal audience."
    }
];

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
            <FAQSection faqs={faqs} />
        </main>
    )
}
