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
            title: "Concept Development & Planning",
            description: "We help shape your idea into a strong, structured concept with clear direction, chapter planning, and audience positioning before writing begins."
        },
        {
            icon: "/feature-icon-2.png",
            title: "In-Depth Research",
            description: "Our writers conduct thorough research to ensure accuracy, credibility, and depth—especially for memoirs, business books, and non-fiction titles."
        },
        {
            icon: "/feature-icon-3.png",
            title: "Full Manuscript Writing",
            description: "Experienced ghostwriters craft your manuscript in your voice and style, delivering engaging, original content tailored to your genre and goals."
        },
        {
            icon: "/feature-icon-4.png",
            title: "Collaborative Revisions",
            description: "You’re part of the process. We revise based on your feedback until the manuscript aligns perfectly with your vision."
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Ghostwriting"
                description="All-inclusive packages with copyright protection and a 7-day money-back guarantee. Publish your book with ease."
            />
            <FeatureSection
                subtitle="Ghostwriting Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Innovation",
                    suffix: "and Human Expertise"
                }}
                description="Take full control of your publishing journey with Aero Publishing’s all-in-one self-publishing platform. Whether you have a rough idea, an outline, or just a story to tell, our experienced ghostwriters work closely with you to craft a book that sounds authentically you.
                We combine advanced publishing technology with professional writers, editors, and publishing specialists to deliver a manuscript that is polished, compelling, and market-ready—without giving up your rights or royalties. From concept to final draft, you’re supported every step of the way by a dedicated account manager."
                features={[
                    "7-Day Money-Back Guarantee",
                    "Copyright & ISBN Certificate",
                    "Retain 100% of Your Book Rights"
                ]}
                imageSrc="/service-feature-section-image.png"
            />
            <BenefitsGridSection
                subtitle="Why Ghostwriting with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Platform For Seamless Self-Publishing",
                        description: "Our comprehensive platform supports every stage of publishing—from writing and editing to formatting, printing, and distribution—so you never need multiple vendors."
                    },
                    {
                        title: "Full Creative & Financial Control",
                        description: "You stay in charge of your story, voice, and vision. We write with you, not over you, and you keep full ownership of your work."
                    },
                    {
                        title: "Keep 100% of Your Royalties & Track Sales in Real Time",
                        description: "Publish globally through Amazon, Barnes & Noble, IngramSpark, Apple Books, and 100+ platforms while monitoring performance from one dashboard."
                    },
                    {
                        title: "Publish Faster with Our Streamlined Process",
                        description: "Our structured ghostwriting workflow helps you move from idea to finished manuscript significantly faster than industry averages."
                    },
                    {
                        title: "Professional Quality, Backed by AI & Human Expertise",
                        description: "We pair experienced ghostwriters with editorial specialists and smart publishing tools to ensure clarity, consistency, and market appeal."
                    },
                    {
                        title: "Marketing and Distribution Support",
                        description: "From launch planning to long-term visibility, our built-in marketing tools help position your book for success."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Ghostwriting Your",
                    highlight: "Book"
                }}
                description="Bring your story to life with confidence. Whether you’re writing a memoir, business book, fiction, or non-fiction, Aero Publishing transforms your ideas into a professionally written manuscript that reflects your voice, goals, and audience.
                From early brainstorming to final revisions, everything is managed through one intuitive system—with expert guidance at every step."
                imageSrc="/globe-booked.png"
                isReversed={true}
                subtitle=""
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Ghostwriting"
                boldTitle=' Services Include'
                description='Publishing doesn’t need to be complicated. We offer a clear, honest, and author-focused publishing experience—keeping you informed, in control, and confident at every stage while delivering professional results you can trust.'
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
