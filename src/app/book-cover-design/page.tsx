import HeroSection from '@/components/About/HeroSection'
import FeatureSection from '@/components/About/FeatureSection';
import BenefitsGridSection from '@/components/About/BenefitsGridSection';
import ConnectWithUsSection from '@/components/ConnectWithUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AuthorsShowcaseSection from '@/components/AuthorsShowcaseSection';
import PromoSection from '@/components/PromoSection';
import FAQSection from '@/components/FAQSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import WhyAeroSection from '@/components/WhyAeroSection';

export default function page() {

    const features = [
        {
            icon: "/feature-icon-1.png",
            title: "Custom Front Cover Design",
            description: "Each cover is designed from scratch to reflect your story, genre expectations, and target audience—ensuring originality and market relevance."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Spine & Back Cover Layout",
            description: "We professionally design the spine and back cover, including typography, barcode placement, and layout compliance for print platforms."
        },
        {
            icon: "/feature-icon-3.png",
            title: "Genre-Specific Market Research",
            description: "Our designers analyze top-performing titles in your genre to ensure your cover aligns with reader expectations while standing out competitively."
        },
        {
            icon: "/feature-icon-4.png",
            title: "Print & Digital Platform Optimization",
            description: "Your final cover is optimized for both print and digital distribution, meeting specifications for Amazon KDP, IngramSpark, and other major platforms in the U.S. and beyond."
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Book Cover Design"
                description="All-inclusive packages with copyright protection and a 7-day money-back guarantee. Design your book cover with confidence."
            />
            <FeatureSection
                subtitle="Book Cover Design Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Innovation",
                    suffix: "and Human Expertise"
                }}
                description="Take full control of your publishing journey with Aero Publishing’s all-in-one author services. Whether you’re launching your first book or refreshing an existing title, our design-led approach blends creative expertise with market insight to ensure your cover is professional, compelling, and ready to compete.
                From concept development to final production, we manage the entire process with precision—without taking ownership of your rights. Every design is crafted to meet platform standards and attract readers across print and digital marketplaces."
                features={[
                    "7-Day Money-Back Guarantee",
                    "Copyright & ISBN Assistance",
                    "You Retain 100% of Your Book Rights"
                ]}
                imageSrc="/carousel-1.png"
                hasFeatures={true}
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Book Cover Design"
                boldTitle=' Services Include'
                description='Publishing doesn’t need to be complicated. We offer a clear, honest, and author-focused design experience—keeping you informed, in control, and confident at every stage.'
                features={features}
                imageUrl='/carousel-3.png'
            />
            <BenefitsGridSection
                subtitle="Why Book Cover Design with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Platform for Seamless Publishing",
                        description: "Our comprehensive platform supports every stage of publishing—from cover design and formatting to distribution and marketing—so you don’t need multiple vendors or complicated workflows."
                    },
                    {
                        title: "Full Creative & Financial Control",
                        description: "You stay in control of your vision, pricing, and publishing decisions. We guide and execute, ensuring your book aligns with your goals without creative pressure or hidden costs."
                    },
                    {
                        title: "Keep 100% of Your Royalties & Track Sales in Real Time",
                        description: "Your book is distributed through Amazon, Barnes & Noble, IngramSpark, Apple Books, and more—while you maintain full ownership and transparency."
                    },
                    {
                        title: "Publish Faster with Our Streamlined Process",
                        description: "Our proven workflows bring your book to market efficiently—often in weeks, not months."
                    },
                    {
                        title: "Professional Quality, Backed by AI & Human Expertise",
                        description: "We combine industry-tested design practices with smart technology to deliver covers that are visually striking and marketplace-ready."
                    },
                    {
                        title: "Marketing and Distribution Support",
                        description: "From launch preparation to ongoing visibility, we help position your book for long-term success."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Book Cover Design Your",
                    highlight: "Book"
                }}
                description="Your book’s cover is the first impression readers see—and often the deciding factor in whether they click, browse, or buy.
                At Aero Publishing, we design covers that don’t just look good—they sell. Our team combines creative design with genre research and marketplace trends to ensure your book stands out while meeting professional publishing standards.
                Every project includes guided collaboration, revision rounds, and platform-ready delivery—so your book is polished, credible, and ready for readers."
                imageSrc="/carousel-2.png"
                isReversed={true}
                subtitle=""
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
