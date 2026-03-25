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
import PortfolioSection from './PortfolioSection';

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

    const facebookPagePlugin = (
        <div className="w-full">
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100069250598189&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=25813019315030230"
                width="200%"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
        </div>
    );

    const instagramFeed = (
        <div className="w-full">
            {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className="elfsight-app-0fa2e1f2-bf6f-4ce1-888b-a08759ee1301" data-elfsight-app-lazy></div>
        </div>
    );

    return (
        <main className="min-h-screen bg-white pb-20">
            <Hero />
            <JourneySection />
            <ServicesSection />
            <PromoBanner />
            <PortfolioSection />
            <WhyChooseFrontline />
            <PartnerBenefitsSection />
            <UpgradeBanner />
            <AuthorsShowcaseSection />
            <PromoSection />
            <FAQSection faqs={faqs} />
            {/* Social Media Section - Facebook & Instagram */}
            <section className="py-16 max-w-[1140px] mx-auto">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Connect With Us on Social Media</h2>
                    <div className="flex justify-center gap-8 max-sm:flex-col max-sm:items-center">
                        {instagramFeed}
                        {facebookPagePlugin}
                    </div>
                </div>
            </section>
        </main>
    )
}
