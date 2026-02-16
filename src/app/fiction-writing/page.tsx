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
            title: "Plot Development & Story Structuring",
            description: "We help shape strong story arcs, pacing, and chapter flow to keep readers engaged from start to finish."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Character Creation & World-Building",
            description: "Develop memorable characters and believable worlds that resonate with your target audience."
        },
        {
            icon: "/feature-icon-3.png",
            title: "Dialogue & Narrative Crafting",
            description: "Natural dialogue, compelling narration, and emotionally driven scenes crafted by experienced fiction writers."
        },
        {
            icon: "/feature-icon-4.png",
            title: "Genre-Specific Writing Expertise",
            description: "Our writers specialize in multiple fiction genres—romance, fantasy, sci-fi, thrillers, mystery, and more—ensuring market-aligned storytelling."
        }
    ];


    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Fiction Writing"
                description="All-inclusive packages with copyright protection and a 7-day money-back guarantee. Publish your book with ease."
            />
            <FeatureSection
                subtitle="Fiction Writing Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Innovation",
                    suffix: "and Human Expertise"
                }}
                description="Bring your story to life with Aero Publishing’s end-to-end fiction writing solutions. Whether you’re developing your first novel or expanding an existing series, our experienced fiction writers, editors, and publishing specialists work closely with you to create compelling, market-ready stories—without compromising your creative vision.
From concept to final manuscript, we combine human storytelling expertise with modern publishing tools to ensure your book is polished, engaging, and ready for global readers."
                features={[
                    "7-Day Money-Back Guarantee",
                    "Copyright & ISBN Certificate",
                    "Retain 100% of Your Book Rights"
                ]}
                imageSrc="/service-feature-section-image.png"
                hasFeatures={true}
            />
            <BenefitsGridSection
                subtitle="Why Fiction Writing with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Platform for Seamless Publishing",
                        description: "We handle writing, editing, formatting, cover design, printing, distribution, and marketing—so you don’t need multiple vendors."
                    },
                    {
                        title: "Full Creative & Financial Control",
                        description: "Your story, your voice, your decisions. You stay in control of content, pricing, and publishing timelines."
                    },
                    {
                        title: "Keep 100% of Your Royalties & Track Sales in Real Time",
                        description: "Distribute globally through Amazon, Barnes & Noble, IngramSpark, Apple Books, and more—while keeping full ownership."
                    },
                    {
                        title: "Publish Faster with Our Streamlined Process",
                        description: "Launch your fiction book in significantly less time than traditional publishing routes."
                    },
                    {
                        title: "Professional Quality, Backed by AI & Human Expertise",
                        description: "Industry-experienced writers and editors supported by smart publishing tools for consistent quality."
                    },
                    {
                        title: "Marketing and Distribution",
                        description: "From launch to long-term visibility, we help position your fiction book for maximum reach and sales."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Fiction Writing Your",
                    highlight: "Book"
                }}
                description="Turn your ideas into a professionally written fiction book with Aero Publishing. We guide you through every step—from early brainstorming to a finished manuscript—ensuring your story is immersive, well-structured, and reader-ready.
                Our collaborative process ensures your voice remains authentic while meeting modern fiction market expectations."
                imageSrc="/globe-booked.png"
                isReversed={true}
                subtitle=""
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Fiction Writing"
                boldTitle=' Services Include'
                description=''
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
