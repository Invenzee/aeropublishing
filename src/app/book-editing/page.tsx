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
            title: "Developmental Editing",
            description: "Our developmental editing focuses on the big picture of your manuscript. We help refine structure, pacing, plot or argument flow, and overall clarity—ensuring your book is cohesive, engaging, and aligned with reader expectations before moving to final polish."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Line Editing",
            description: "Line editing improves the style and readability of your writing. Our editors fine-tune sentence flow, word choice, and tone while preserving your unique voice—helping your manuscript read smoothly and professionally from start to finish."
        },
        {
            icon: "/feature-icon-3.png",
            title: "Copy Editing",
            description: "Copy editing ensures accuracy and consistency throughout your manuscript. We correct grammar, punctuation, spelling, and syntax while maintaining consistency in language, formatting, and style across your entire book."
        },
        {
            icon: "/feature-icon-4.png",
            title: "Proofreading",
            description: "Proofreading is the final quality check before publication. We carefully review your manuscript to catch any remaining errors or inconsistencies, ensuring your book is clean, polished, and ready for print and digital release."
        }
    ];


    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Book Editing"
                description="Professional book editing tailored to your voice and genre. Our experienced editors refine structure, clarity, and flow—ensuring your manuscript is polished, publication-ready, and aligned with industry standards for both print and digital release."
            />
            <FeatureSection
                subtitle="Book Editing Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Expertise",
                    suffix: "and Editorial Precision"
                }}
                description={`Take control of your publishing journey with Aero Publishing’s professional book editing services. Whether you’re preparing your first manuscript or refining a completed draft, our experienced editors work closely with you to strengthen clarity, structure, and flow—while preserving your unique voice.

                From developmental feedback to detailed line editing and final polish, we ensure your book meets industry standards and is ready for publication in both print and digital formats. Our streamlined process keeps you informed and involved at every stage, so your manuscript moves forward with confidence and care.                
                `}

                features={[
                    "7-Day Money Back Guarantee",
                    "Professional Editorial Review by Industry Experts",
                    "Full Creative Control & 100% Author Rights"
                ]}
                imageSrc="/service-feature-section-image.png"
                hasFeatures={true}
            />
            <BenefitsGridSection
                subtitle="Why Book Editing with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable Editing </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Editing Solution for Self-Publishing",
                        description: "Our book editing services cover every stage of refinement—from structural feedback to detailed line edits and final proofreading. We streamline the process so you don’t need multiple vendors or confusing workflows to prepare your manuscript for publication."
                    },
                    {
                        title: "Full Creative & Editorial Control",
                        description: "You stay in control of your manuscript at every stage. Our editors collaborate with you to strengthen clarity, flow, and consistency while preserving your voice, vision, and authorial intent—no unwanted changes, no loss of ownership."
                    },
                    {
                        title: "Keep 100% of Your Rights & Royalties",
                        description: "Your work remains fully yours. Aero Publishing ensures you retain complete ownership of your content and earn 100% of your royalties, with no hidden clauses or restrictive contracts."
                    },
                    {
                        title: "Edit Faster with a Streamlined Process",
                        description: "Our structured editorial workflow helps move your manuscript forward efficiently without sacrificing quality. With clear timelines and dedicated support, your book progresses faster than traditional publishing timelines."
                    },
                    {
                        title: "Professional Quality, Powered by Expertise",
                        description: "Every manuscript is handled by experienced editors who understand market standards, genre expectations, and reader engagement. We combine editorial precision with modern tools to deliver polished, publication-ready results."
                    },
                    {
                        title: "Preparation for Publishing & Distribution",
                        description: "Our editing process ensures your manuscript is fully prepared for the next stages of publishing. From formatting readiness to content consistency, we help set your book up for successful print and digital release."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Book Editing",
                    highlight: "Services"
                }}
                description={`Take full control of your publishing journey with Aero Publishing’s professional book editing solutions. Whether you’re preparing your first manuscript or refining a completed draft, our experienced editors help strengthen clarity, structure, and flow—while preserving your unique voice.

                From initial manuscript review to final polish, we combine editorial expertise with a streamlined process to ensure your book is professional, polished, and publication-ready. With dedicated support at every step, we help you move forward confidently toward print and digital release—without sacrificing ownership or creative control.
                `}
                imageSrc="/globe-booked.png"
                isReversed={true}
                subtitle=""
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Book Editing"
                boldTitle=' Services Include'
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
