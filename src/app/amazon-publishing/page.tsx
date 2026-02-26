import HeroSection from '@/components/About/HeroSection'
import FeatureSection from '@/components/About/FeatureSection';
import BenefitsGridSection from '@/components/About/BenefitsGridSection';
import ConnectWithUsSection from '@/components/ConnectWithUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AuthorsShowcaseSection from '@/components/AuthorsShowcaseSection';
import PromoSection from '@/components/PromoSection';
import FAQSection from '@/components/FAQSection';
import WhyAeroSection from '@/components/WhyAeroSection';

export default function page() {

    const features = [
        {
            icon: "/feature-icon-1.png",
            title: "Amazon KDP Account Setup & Optimization",
            description: "We create or optimize your Amazon KDP account to ensure all publishing settings are correctly configured. This includes accurate author details, tax and payment information, royalty preferences, and marketplace setup—so your book is published smoothly and your earnings are tracked correctly from day one."
        },
        {
            icon: "/feature-icon-2.png",
            title: "Kindle & Print Formatting for Amazon",
            description: "We professionally format your manuscript for Kindle eBooks and Amazon paperback or hardcover editions. Our formatting meets all KDP technical standards, ensuring proper layout, readability, and compatibility across devices while delivering a polished, professional reading experience."
        },
        {
            icon: "/feature-icon-3.png",
            title: "Amazon Listing Creation & Metadata Optimization",
            description: "We strategically craft your book’s Amazon listing by optimizing titles, subtitles, descriptions, keywords, and category selections. This improves search visibility, increases discoverability within your genre, and positions your book to reach the right audience organically."
        },
        {
            icon: "/feature-icon-4.png",
            title: "Publishing, Pricing & Launch Setup",
            description: "We handle the complete publishing process—from file uploads and distribution settings to pricing strategy and final pre-launch checks. Our team ensures your book goes live professionally, error-free, and aligned with Amazon’s best practices for a successful launch."
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Amazon Publishing"
                description="All-inclusive publishing solutions designed to bring your book to market professionally and confidently. From account setup to launch, Aero Publishing simplifies the Amazon publishing process—so you stay in control while we handle the technical details."
            />
            <FeatureSection
                subtitle="Amazon Publishing Made Effortless:"
                title={{
                    prefix: "Powered by",
                    highlight: "Innovation",
                    suffix: "and Human Expertise"
                }}
                description="Take full control of your publishing journey with Aero Publishing’s professional Amazon publishing services. Whether you’re publishing your first book or expanding an existing catalog, our streamlined process combines technical precision with personalized guidance.
                From initial setup to final launch, we focus on clarity, compliance, and quality—ensuring your book is professionally prepared, properly positioned, and ready for Amazon’s global marketplace."
                features={[
                    "7-Day Money-Back Guarantee",
                    "Dedicated Publishing Support",
                    "100% Ownership of Your Publishing Rights"
                ]}
                imageSrc="/audio-book-1.jpg"
                hasFeatures={true}
            />
            <BenefitsGridSection
                subtitle="Why Amazon Publishing with Aero?"
                title={{
                    text: <>A Faster, Easier, and More <br className='max-sm:hidden' /> Profitable </>,
                    highlight: "Experience"
                }}
                benefits={[
                    {
                        title: "All-in-One Publishing Solution",
                        description: "We manage every stage of the Amazon publishing process—from KDP account setup and formatting to metadata optimization and final launch—so you don’t have to juggle platforms, vendors, or technical requirements."
                    },
                    {
                        title: "Full Creative & Financial Control",
                        description: "You remain in control of your content, pricing, and publishing decisions. We work collaboratively to ensure your book aligns with your vision, audience, and long-term publishing goals."
                    },
                    {
                        title: "Keep 100% of Your Royalties",
                        description: "Your book remains fully yours. You retain complete ownership and earn 100% of your royalties, with no hidden fees, long-term contracts, or restrictive agreements."
                    },
                    {
                        title: "Publish Faster Without Compromising Quality",
                        description: "Our streamlined workflow helps bring your book to market efficiently while maintaining professional standards that meet Amazon’s publishing requirements."
                    },
                    {
                        title: "Professional Quality, Backed by Expertise",
                        description: "Every book is prepared by experienced publishing professionals using industry-standard tools and best practices to ensure consistency, compliance, and a polished final product."
                    },
                    {
                        title: "Distribution & Visibility Support",
                        description: "We help position your book for visibility within Amazon’s ecosystem by optimizing listings, categories, and backend metadata—supporting discoverability across U.S. and global marketplaces."
                    }
                ]}
            />
            <FeatureSection
                title={{
                    prefix: "Publishing your book on",
                    highlight: "Amazon"
                }}
                description="Transform your manuscript into a professionally published book with Aero Publishing’s Amazon services. We help authors reach new readers by handling the technical, strategic, and compliance aspects of publishing—so your book is not just uploaded, but launched correctly.
                Whether you’re releasing your first title or expanding your author portfolio, our team provides expert guidance, accurate execution, and dependable support—ensuring your book goes live professionally and without technical errors."
                imageSrc="/audio-book-2.jpg"
                isReversed={true}
                subtitle=""
            />
            <WhyAeroSection
                highlightTitle="What"
                normalTitle=" Our Amazon Publishing "
                boldTitle='Services Include'
                description='Publishing doesn’t need to be complicated. We provide a clear, transparent, and author-focused Amazon publishing experience—keeping you informed, in control, and confident at every stage while delivering professional results you can trust.'
                features={features}
                imageUrl='/audio-book-3.jpg'
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
