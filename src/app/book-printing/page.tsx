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
            title: "Print-On-Demand Setup",
            description: "We configure your book for efficient print-on-demand production, ensuring high-quality output without upfront inventory costs."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Offset Printing Options",
            description: "For bulk orders and special editions, we provide offset printing solutions with superior color accuracy, paper quality, and binding durability."
        },
        {
            icon: "/feature-icon-3.png",
            title: "Paper & Binding Customization",
            description: "Choose from multiple trim sizes, paper stocks, finishes, and binding styles to match your book’s genre and audience expectations."
        },
        {
            icon: "/feature-icon-4.png",
            title: "ISBN & Barcode Placement",
            description: "We ensure proper ISBN assignment and barcode placement so your book is fully compliant with U.S. and global retail standards."
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Book Printing"
                description="All-inclusive book printing solutions with copyright protection and a 7-day money-back guarantee. Print your book professionally—without the stress."
            />
            <FeatureSection
                subtitle="Book Printing Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Innovation",
                    suffix: "and Human Expertise"
                }}
                description="At Aero Publishing, we simplify the book printing process so you can focus on what matters—your story. Whether you’re printing your first book or scaling distribution for an existing title, our expert-led approach ensures professional quality, consistency, and reliability at every stage.
                From print setup to final delivery, we combine modern printing technology with hands-on publishing support to produce books that meet industry standards and reader expectations—without hidden fees or lost rights."
                features={[
                    "7-Day Money-Back Guarantee",
                    "Copyright & ISBN Assistance",
                    "Retain 100% Ownership of Your Book"
                ]}
                imageSrc="/service-feature-section-image.png"
                hasFeatures={true}
            />
            <BenefitsGridSection
                subtitle="Why Book Printing with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Platform for Seamless Self-Publishing",
                        description: "Our integrated publishing system handles everything—from print setup to distribution—eliminating the need for multiple vendors or costly third-party services."
                    },
                    {
                        title: "Full Creative & Financial Control",
                        description: "You decide your trim size, paper quality, binding, pricing, and print quantity. No pressure. No deadlines. Just complete control over your publishing choices."
                    },
                    {
                        title: "Keep 100% of Your Royalties & Track Sales in Real Time",
                        description: "Print and distribute your book across major platforms including Amazon and Barnes & Noble while maintaining full ownership and transparency."
                    },
                    {
                        title: "Publish Faster with Our Streamlined Process",
                        description: "Our efficient workflows help bring your book to print quickly—often faster than traditional publishing timelines."
                    },
                    {
                        title: "Professional Quality, Backed by AI & Human Expertise",
                        description: "Every book is reviewed for print accuracy, layout consistency, and production quality by experienced publishing professionals."
                    },
                    {
                        title: "Marketing & Distribution Support",
                        description: "From print-ready files to global availability, our tools and team help position your book for long-term success."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Book Printing Your",
                    highlight: "Book"
                }}
                description="Take full control of your book’s production with Aero Publishing’s expert-managed printing services. We guide you through every step—from selecting print specifications to preparing final files—ensuring your book is polished, durable, and market-ready.
                Whether you need short-run copies or scalable print solutions, our team ensures your book meets professional publishing standards while preserving your rights and creative vision."
                imageSrc="/globe-booked.png"
                isReversed={true}
                subtitle=""
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Book Printing"
                boldTitle=' Services Include'
                description='Publishing doesn’t need to be complicated. Aero Publishing offers a clear, honest, and author-focused printing experience—keeping you informed, in control, and confident from start to finish.'
                features={features}
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
