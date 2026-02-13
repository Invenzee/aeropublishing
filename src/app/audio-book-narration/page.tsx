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
            title: "Professional Voice Talent Casting",
            description: "We deliver industry-standard publishing services without cutting corners. From manuscript preparation to final release, every step is handled with precision, care, and attention to detail—so your book meets professional publishing standards in both print and digital formats."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Studio-Quality Recording & Production",
            description: "Your book is supported by experienced editors and designers who understand both storytelling and market expectations. We work collaboratively to refine your manuscript, develop compelling interiors, and create covers that reflect your vision while appealing to your audience."
        },
        {
            icon: "/feature-icon-3.png",
            title: "Audio Editing & Mastering",
            description: "You retain complete ownership of your work. Every creative decision remains yours, and you earn 100% of your royalties. Our role is to support, guide, and execute—not to take control of your intellectual property."
        },
        {
            icon: "/feature-icon-4.png",
            title: "ACX & Audible Compliance Formatting",
            description: "Your book is prepared for distribution across leading online retailers and platforms worldwide. We ensure your title is professionally formatted and positioned to reach readers in the United States and beyond, in both print and digital marketplaces."
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Audio Book Narration"
                description="All-inclusive packages with copyright protection and a 7-day money-back guarantee. Publish your book with ease."
            />
            <FeatureSection
                subtitle="Audio Book Narration Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Innovation",
                    suffix: "and Human Expertise"
                }}
                description="Take full control of your publishing journey with Spines' all-in-one self-publishing platform. Whether you're launching your first book or adding to your catalog, our advanced technology combined with personalized editorial and publishing expertise ensures your book is professional, polished, and market-ready, without giving up any royalties. From manuscript upload to global distribution and marketing, manage everything through one intuitive dashboard, with the support of your dedicated account manager every step of the way."
                features={[
                    "7-Day Money Back Guarantee",
                    "Copyright & ISBN Certificate",
                    "Retain 100% of Your Book Rights"
                ]}
                imageSrc="/service-feature-section-image.png"
            />
            <BenefitsGridSection
                subtitle="Why Audio Book Narration with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Platform For Seamless Self-Publishing",
                        description: "Our comprehensive platform covers every stage of publishing - editing, formatting, cover design, printing, distribution, and marketing - eliminating the need for costly third-party tools or complex workflows."
                    },
                    {
                        title: "Full Creative & Financial Control",
                        description: "You set your book's content, cover, pricing, and distribution options, fitting your publishing goals into your schedule without pressure or deadlines."
                    },
                    {
                        title: "Keep 100% of Your Royalties & Track Sales in Real Time",
                        description: "Get your book into the hands of readers worldwide through distribution to Amazon, Barnes & Noble, IngramSpark, Apple Books, and over 100 other major platforms."
                    },
                    {
                        title: "Publish Faster with Our Streamlined Process",
                        description: "Bring your book to market within only a month - significantly faster than the industry average."
                    },
                    {
                        title: "Professional Quality, Backed by AI & Human Expertise",
                        description: "Every book is enhanced by AI-driven tools for formatting, proofreading, and metadata optimization, combined with hands-on editorial and design support from industry professionals."
                    },
                    {
                        title: "Marketing and Distribution",
                        description: "From launch to bestseller, our tools drive your book's success - promote your book with built-in marketing tools and strategies."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Audio Book Narration Your",
                    highlight: "Book"
                }}
                description="Take full control of your publishing journey with Spines' all-in-one self-publishing platform. Whether you're launching your first book or adding to your catalog, our advanced technology combined with personalized editorial and publishing expertise ensures your book is professional, polished, and market-ready, without giving up any royalties. From manuscript upload to global distribution and marketing, manage everything through one intuitive dashboard, with the support of your dedicated account manager every step of the way."
                imageSrc="/globe-booked.png"
                isReversed={true}
                subtitle=""
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Audiobook Narration "
                boldTitle='Services Include'
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
