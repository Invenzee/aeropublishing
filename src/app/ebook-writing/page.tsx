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
            title: "Topic Research & Outline Creation",
            description: "We begin with in-depth research and a clear, structured outline to ensure your ebook is informative, focused, and aligned with reader expectations."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Professional Manuscript Writing",
            description: "Our experienced writers craft engaging, original content in your preferred tone and style—designed to educate, inspire, or convert your audience."
        },
        {
            icon: "/feature-icon-3.png",
            title: "SEO-Optimized Ebook Structure",
            description: "We optimize headings, flow, and content structure to improve discoverability and performance across major ebook platforms."
        },
        {
            icon: "/feature-icon-4.png",
            title: "Editing & Quality Review",
            description: "Every manuscript undergoes thorough editing and quality checks for clarity, consistency, grammar, and originality—ensuring a polished final product."
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Ebook Writing"
                description="All-inclusive packages with copyright protection and a 7-day money-back guarantee. Publish your ebook with ease."
            />
            <FeatureSection
                subtitle="Ebook Writing Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Innovation",
                    suffix: "and Human Expertise"
                }}
                description="At Aero Publishing, we help you transform ideas into professionally written ebooks that inform, inspire, and sell. Whether you’re starting with a rough concept or a detailed outline, our expert writers combine creativity, research, and market insight to craft ebooks that resonate with readers and perform well across digital platforms.
                From concept development to final manuscript delivery, every step is guided by publishing professionals—ensuring your ebook is polished, engaging, and ready for success in today’s competitive market."
                features={[
                    "7-Day Money-Back Guarantee",
                    "Copyright & ISBN Certification",
                    "Retain 100% of Your Book Rights"
                ]}
                imageSrc="/ebook-writing-1.jpg"
                hasFeatures={true}
            />
            <BenefitsGridSection
                subtitle="Why Ebook Writing with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Platform for Seamless Self-Publishing",
                        description: "We manage every stage of the ebook writing process—from research and drafting to editing and final review—so you don’t have to juggle multiple freelancers or tools."
                    },
                    {
                        title: "Full Creative & Financial Control",
                        description: "Your vision leads the way. You approve outlines, drafts, tone, and direction while maintaining full ownership of your content and royalties."
                    },
                    {
                        title: "Keep 100% of Your Royalties & Track Sales in Real Time",
                        description: "Once published, your ebook is distributed to leading platforms like Amazon Kindle, Apple Books, Barnes & Noble, and more—while you retain full earnings."
                    },
                    {
                        title: "Publish Faster with Our Streamlined Process",
                        description: "Our structured workflow allows us to deliver high-quality ebooks efficiently—helping you launch faster without compromising quality."
                    },
                    {
                        title: "Professional Quality, Backed by AI & Human Expertise",
                        description: "We blend advanced writing tools with skilled human writers to ensure clarity, originality, consistency, and reader engagement."
                    },
                    {
                        title: "Marketing and Distribution Support",
                        description: "Beyond writing, we help position your ebook for success with SEO-friendly structure and market-ready content."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Ebook Writing Your",
                    highlight: "Book"
                }}
                description="Take full control of your publishing journey with Aero Publishing’s ebook writing services. Whether you’re launching your first ebook or expanding your catalog, our experienced writers and editors work closely with you to produce compelling, well-structured content tailored to your audience.
                From idea to final manuscript, we ensure your ebook is professionally written, market-ready, and aligned with your goals—while you remain in control every step of the way."
                imageSrc="/ebook-writing-2.jpg"
                isReversed={true}
                subtitle=""
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Ebook Writing"
                boldTitle=' Services Include'
                description='Publishing doesn’t need to be complicated. We offer a clear, honest, and author-focused publishing experience—keeping you informed, in control, and confident at every stage while delivering professional results you can trust.'
                features={features}
                imageUrl='/ebook-writing-3.jpg'
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
