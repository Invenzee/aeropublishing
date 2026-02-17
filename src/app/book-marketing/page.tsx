import HeroSection from '@/components/About/HeroSection'
import FeatureSection from '@/components/About/FeatureSection';
import BenefitsGridSection from '@/components/About/BenefitsGridSection';
import ConnectWithUsSection from '@/components/ConnectWithUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AuthorsShowcaseSection from '@/components/AuthorsShowcaseSection';
import PromoSection from '@/components/PromoSection';
import FAQSection from '@/components/FAQSection';
import WhyAeroSection from '@/components/WhyAeroSection';

export default function page() {

    const features = [
        {
            icon: "/feature-icon-1.png",
            title: "Amazon Listing Optimization",
            description: "We optimize your book’s Amazon presence to improve visibility and conversions. From keyword research and metadata to compelling descriptions and category placement, we ensure your listing is positioned to attract the right readers and perform competitively in the U.S. marketplace."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Book Launch Strategy",
            description: "We develop a focused launch plan tailored to your goals, genre, and audience. Our team coordinates timing, messaging, and promotional activities to help your book gain momentum at release and establish a strong foundation for long-term visibility."
        },
        {
            icon: "/feature-icon-3.png",
            title: "Social Media Campaign Setup",
            description: "We create targeted social media campaigns designed to build awareness and engagement around your book. From platform selection to content direction and audience targeting, we help you connect with readers and drive interest across key channels."
        },
        {
            icon: "/feature-icon-4.png",
            title: "Press & Media Outreach",
            description: "We support your book’s exposure through strategic media and promotional outreach. By identifying relevant opportunities and crafting professional messaging, we help expand your reach and introduce your book to broader audiences across the U.S. and beyond."
        }
    ];


    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Book Marketing"
                description="All-inclusive book marketing packages designed to help authors reach the right readers. With transparent strategies, measurable results, and a 7-day money-back guarantee, Aero Publishing makes book marketing clear, effective, and stress-free."
            />
            <FeatureSection
                subtitle="Book Marketing Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Innovation",
                    suffix: "and Human Expertise"
                }}
                description="Take full control of how your book reaches readers with Aero Publishing’s professional book marketing services. Whether you’re launching a new title or reviving an existing book, our marketing solutions combine data-driven strategy with hands-on expertise to build visibility and momentum.
                From optimized listings and promotional campaigns to audience targeting and ongoing performance tracking, we help position your book for success in competitive U.S. and global markets. Our team works closely with you to ensure your marketing efforts align with your goals—without long-term contracts or loss of creative control.
                "
                features={[
                    "7-Day Money-Back Guarantee",
                    "Targeted Marketing Strategies Built for Authors",
                    "100% Ownership of Your Book & Campaigns"
                ]}
                imageSrc="/marketing-1.png"
                hasFeatures={true}
            />
            <BenefitsGridSection
                subtitle="Why Book Marketing with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Marketing Platform",
                        description: "Our marketing services cover every essential area—listing optimization, audience targeting, promotional campaigns, analytics, and ongoing adjustments—so you don’t need multiple agencies or disconnected tools."
                    },
                    {
                        title: "Full Creative & Financial Control",
                        description: "You choose how your book is marketed. From campaign messaging to budget decisions, we work collaboratively to ensure your marketing aligns with your vision, timeline, and publishing goals."
                    },
                    {
                        title: "Keep 100% of Your Royalties & Track Performance",
                        description: "Your earnings remain yours. We help you track campaign performance and reader engagement while ensuring full transparency—so you always know what’s working."
                    },
                    {
                        title: "Launch Faster with Streamlined Campaigns",
                        description: "Our structured marketing process helps get your book in front of readers quickly. With proven strategies and efficient execution, your campaigns go live faster than traditional marketing timelines."
                    },
                    {
                        title: "Professional Quality, Backed by Expertise",
                        description: "Every campaign is managed by experienced marketing professionals who understand book markets, reader behavior, and platform algorithms—supported by modern tools and real-time insights."
                    },
                    {
                        title: "Marketing and Distribution Support",
                        description: "From Amazon optimization to multi-platform promotion, we help extend your book’s reach across major marketplaces—building awareness, driving traffic, and increasing discoverability."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Market Your",
                    highlight: "Book"
                }}
                description="Grow your readership with Aero Publishing’s professional book marketing solutions. We help authors build visibility, attract the right audience, and create momentum through strategic marketing campaigns designed for today’s publishing landscape.
                Whether you’re launching a new release or scaling an existing title, our team provides clear strategy, expert execution, and ongoing support—so your book doesn’t just get published, it gets noticed.
                "
                imageSrc="/marketing-2.jpg"
                isReversed={true}
                subtitle=""
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Book Marketing"
                boldTitle=' Services Include'
                description='Publishing—and marketing—doesn’t need to be complicated. We offer a clear, honest, and author-focused marketing experience that keeps you informed, in control, and confident at every stage while delivering professional results you can trust.'
                features={features}
                imageUrl='/marketing-3.png'
            />
            <ConnectWithUsSection />
            <TestimonialsSection />
            <WhyChooseUsSection />
            <AuthorsShowcaseSection />
            <PromoSection />
            <FAQSection />
        </main>
    )
}
