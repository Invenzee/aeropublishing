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
            title: "Custom Author Website Design",
            description: "We design a custom website tailored to your author brand, genre, and audience. Every layout is crafted to reflect your identity while presenting your books and content professionally."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Book Showcase & Landing Pages",
            description: "Your books are highlighted through dedicated pages designed to inform, engage, and convert visitors—supporting launches, promotions, and long-term visibility."
        },
        {
            icon: "/feature-icon-3.png",
            title: "SEO-Optimized Website Structure",
            description: "We build your site with search visibility in mind, using SEO-friendly structure and best practices to help readers find you through search engines."
        },
        {
            icon: "/feature-icon-4.png",
            title: "Mobile-Responsive Development",
            description: "Your website is fully responsive and optimized for all devices. We ensure smooth performance, readability, and navigation across desktop, tablet, and mobile screens."
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Authors Website"
                description="All-inclusive author website packages designed to help you build a strong online presence. With professional design, SEO-ready structure, and a 7-day money-back guarantee, Aero Publishing makes launching your author website simple and stress-free."
            />
            <FeatureSection
                subtitle="Authors Website Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Innovation",
                    suffix: "and Human Expertise"
                }}
                description="Take full control of your author brand with Aero Publishing’s professional author website solutions. Whether you’re launching your first book or expanding your publishing portfolio, we design websites that reflect your identity, showcase your work, and connect you with readers.
                Our team combines modern website design with publishing and marketing expertise to deliver sites that are visually polished, easy to manage, and built for long-term growth—without taking control of your content or rights.
                "
                features={[
                    "7-Day Money-Back Guarantee",
                    "Professional Website Design & Setup",
                    "100% Ownership of Your Website & Content"
                ]}
                imageSrc="/author-website-1.jpg"
                hasFeatures={true}
            />
            <BenefitsGridSection
                subtitle="Why Authors Website with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Platform for Author Growth",
                        description: "Your author website integrates seamlessly with your publishing and marketing efforts. We eliminate the need for multiple providers by handling design, setup, and optimization in one streamlined process."
                    },
                    {
                        title: "Full Creative & Financial Control",
                        description: "You control your content, branding, and messaging. Our role is to guide and build—not restrict—ensuring your website aligns with your goals and evolves as your career grows."
                    },
                    {
                        title: "Keep 100% of Your Royalties & Sales",
                        description: "Your website works as an extension of your author brand, supporting direct sales, reader engagement, and platform links—while you retain full ownership and earnings."
                    },
                    {
                        title: "Launch Faster with a Streamlined Process",
                        description: "Our efficient workflow allows your author website to go live quickly, without unnecessary delays or technical confusion."
                    },
                    {
                        title: "Professional Quality, Backed by Expertise",
                        description: "Every site is built with industry best practices in design, usability, and SEO—supported by experienced professionals who understand author branding and reader behavior."
                    },
                    {
                        title: "Marketing and Distribution Support",
                        description: "Your website is designed to support book launches, email sign-ups, and promotional campaigns—helping you attract readers and grow your audience across platforms."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Build Your Author ",
                    highlight: "Website"
                }}
                description="Establish a professional online presence with Aero Publishing’s author website design services. We help authors create websites that showcase books, highlight achievements, and connect directly with readers.
                Whether you’re just starting out or rebranding your author platform, our team delivers clean design, clear structure, and reliable functionality—so your website works for you, not against you.
                "
                imageSrc="/author-website-2.jpg"
                isReversed={true}
                subtitle=""
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Author Website Design"
                boldTitle=' Services Include'
                description="Publishing doesn’t need to be complicated. We offer a clear, honest, and author-focused website experience—keeping you informed, in control, and confident at every stage while delivering professional results you can trust."
                features={features}
                imageUrl='/author-website-3.jpg'
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
