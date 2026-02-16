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
            description: "We help select the right narrator for your book based on genre, tone, and audience. Our professional voice talent brings your story to life with clarity, emotion, and consistency."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Studio-Quality Recording & Production",
            description: "Your audiobook is recorded and produced using industry-standard equipment and techniques. We focus on clean audio, balanced sound, and a professional listening experience from start to finish."
        },
        {
            icon: "/feature-icon-3.png",
            title: "Audio Editing & Mastering",
            description: "We carefully edit and master your audiobook to ensure smooth pacing, clear narration, and consistent audio levels—delivering a polished final product ready for distribution."
        },
        {
            icon: "/feature-icon-4.png",
            title: "ACX & Audible Compliance Formatting",
            description: "Your audiobook is prepared to meet ACX, Audible, and major platform requirements. We ensure proper formatting, technical compliance, and readiness for release in the U.S. and global marketplaces."
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Audio Book Narration"
                description="All-inclusive audiobook narration packages designed to bring your story to life. With professional voice talent, studio-quality production, and a 7-day money-back guarantee, Aero Publishing makes audiobook creation simple and stress-free."
            />
            <FeatureSection
                subtitle="Audio Book Narration Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Innovation",
                    suffix: "and Human Expertise"
                }}
                description="Take full control of your audiobook journey with Aero Publishing’s professional narration services. Whether you’re converting a published book into audio or launching your first audiobook, our streamlined process combines skilled voice talent with expert audio production.
                From narration planning to final delivery, we ensure your audiobook sounds polished, engaging, and market-ready. With clear communication, dedicated support, and full creative control, we help you confidently expand your book’s reach into the fast-growing audiobook market.
                "
                features={[
                    "7-Day Money-Back Guarantee",
                    "Professional Audio Production Support",
                    "100% Ownership of Your Audiobook Rights"
                ]}
                imageSrc="/service-feature-section-image.png"
                hasFeatures={true}
            />
            <BenefitsGridSection
                subtitle="Why Audio Book Narration with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Audiobook Solution",
                        description: "We manage every stage of audiobook creation—from narration to final mastering—so you don’t need to coordinate multiple vendors or navigate complex technical requirements."
                    },
                    {
                        title: "Full Creative & Financial Control",
                        description: "You choose the voice, pacing, and overall tone of your audiobook. We work collaboratively to ensure the final production aligns with your vision, audience, and publishing goals."
                    },
                    {
                        title: "Keep 100% of Your Royalties",
                        description: "Your audiobook remains fully yours. You retain complete ownership and earn 100% of your royalties, with no hidden restrictions or long-term contracts."
                    },
                    {
                        title: "Produce Audiobooks Faster",
                        description: "Our streamlined production workflow helps bring your audiobook to market efficiently, without sacrificing audio quality or listener experience."
                    },
                    {
                        title: "Professional Quality, Backed by Expertise",
                        description: "Every audiobook is produced by experienced professionals using industry-standard tools and techniques to ensure clarity, consistency, and a polished listening experience."
                    },
                    {
                        title: "Distribution & Marketing Support",
                        description: "We help prepare your audiobook for distribution across major platforms, giving your story greater reach and visibility among U.S. and global listeners."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Narrate Your",
                    highlight: "Book"
                }}
                description="Transform your book into a compelling listening experience with Aero Publishing’s audiobook narration services. We help authors connect with new audiences by producing high-quality audiobooks that are engaging, professional, and platform-ready.
                Whether you’re expanding an existing title or launching an audiobook for the first time, our team provides expert guidance and reliable production—so your story is heard, not just read.
                "
                imageSrc="/globe-booked.png"
                isReversed={true}
                subtitle=""
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Audiobook Narration "
                boldTitle='Services Include'
                description='Publishing doesn’t need to be complicated. We offer a clear, honest, and author-focused audiobook experience—keeping you informed, in control, and confident at every stage while delivering professional results you can trust.'
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
