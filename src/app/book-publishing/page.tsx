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
            title: "ISBN Registration & Copyright Assistance",
            description: "We deliver industry-standard publishing services without cutting corners. From manuscript preparation to final release, every step is handled with precision, care, and attention to detail—so your book meets professional publishing standards in both print and digital formats."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Manuscript Formatting & Layout",
            description: "Your book is supported by experienced editors and designers who understand both storytelling and market expectations. We work collaboratively to refine your manuscript, develop compelling interiors, and create covers that reflect your vision while appealing to your audience."
        },
        {
            icon: "/feature-icon-3.png",
            title: "Cover Design Integration",
            description: "You retain complete ownership of your work. Every creative decision remains yours, and you earn 100% of your royalties. Our role is to support, guide, and execute—not to take control of your intellectual property."
        },
        {
            icon: "/feature-icon-4.png",
            title: "Platform Upload & Distribution",
            description: "Your book is prepared for distribution across leading online retailers and platforms worldwide. We ensure your title is professionally formatted and positioned to reach readers in the United States and beyond, in both print and digital marketplaces."
        }
    ];


    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Book Publishing"
                description="All-inclusive publishing packages designed to support authors at every stage. With copyright protection, transparent pricing, and a 7-day money-back guarantee, Aero Publishing makes publishing your book simple and stress-free."
            />
            <FeatureSection
                subtitle="Book Publishing Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Innovation",
                    suffix: "and Human Expertise"
                }}
                description="Take full control of your publishing journey with Aero Publishing’s all-in-one self-publishing solutions. Whether you’re launching your first book or expanding your catalog, our streamlined process combines modern publishing tools with personalized editorial and production support.
                From manuscript submission to final release, our team ensures your book is professionally edited, designed, and prepared for market—without sacrificing creative control or royalties. You’ll have clear guidance, expert support, and a dedicated publishing team every step of the way.
                "
                features={[
                    "7-Day Money Back Guarantee",
                    "Copyright & ISBN Registration",
                    "100% Ownership of Your Book Rights"
                ]}
                imageSrc="/publishing-1.png"
                hasFeatures={true}
            />
            <BenefitsGridSection
                subtitle="Why Book Publish with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Platform for Seamless Publishing",
                        description: "Our publishing platform covers every stage of the process—editing, formatting, cover design, printing, distribution, and marketing—so you don’t need multiple vendors or complicated workflows."
                    },
                    {
                        title: "Full Creative & Financial Control",
                        description: "You remain in charge of your book’s content, pricing, and distribution decisions. We work around your goals and schedule, offering guidance without pressure or restrictive contracts."
                    },
                    {
                        title: "Keep 100% of Your Royalties & Track Sales",
                        description: "Your earnings stay yours. We ensure full royalty transparency and help position your book across major platforms, so you can monitor performance and growth with confidence."
                    },
                    {
                        title: "Publish Faster with a Streamlined Process",
                        description: "Our efficient publishing workflow helps bring your book to market faster than traditional publishing timelines without compromising quality or professionalism."
                    },
                    {
                        title: "Professional Quality, Backed by Expertise",
                        description: "Every book is handled by experienced publishing professionals who understand industry standards, reader expectations, and market trends—supported by modern publishing technology."
                    },
                    {
                        title: "Marketing and Distribution Support",
                        description: "From launch to long-term visibility, we help promote and distribute your book across leading platforms, giving it the best chance to reach the right readers."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Publish Your",
                    highlight: "Book"
                }}
                description="Bring your manuscript to life with Aero Publishing’s professional book publishing services. We help authors transform their ideas into polished, publication-ready books through expert editing, design, and production support.
                Whether you’re publishing for the first time or refining a finished manuscript, our team ensures your book meets industry standards and is ready for print and digital distribution. With a clear process and dedicated guidance, we make publishing approachable, transparent, and author-focused.
                "
                imageSrc="/publishing-2.png"
                isReversed={true}
                subtitle=""
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Book Publishing"
                boldTitle=' Services Include'
                description='Publishing doesn’t need to be complicated. We provide a clear, honest, and author-focused publishing experience—keeping you informed, in control, and confident at every stage while delivering professional results you can trust.'
                features={features}
                imageUrl='/publishing-3.png'
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
