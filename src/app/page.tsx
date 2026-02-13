import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CounterSection from "@/components/CounterSection";
import WhyAeroSection from "@/components/WhyAeroSection";
import GlobalAudienceSection from "@/components/GlobalAudienceSection";
import LogoCarousel from "@/components/LogoCarousel";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ConnectWithUsSection from "@/components/ConnectWithUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AuthorsShowcaseSection from "@/components/AuthorsShowcaseSection";
import FAQSection from "@/components/FAQSection";
import PromoSection from "@/components/PromoSection";

export default function Home() {

  const features = [
    {
        icon: "/feature-icon-1.png",
        title: "Professional Publishing Without Compromise",
        description: "We provide industry-standard publishing services from manuscript preparation to final release—handled with precision, care, and attention to detail for both print and digital formats."
    },
    {
        icon: "/feature-icon-2.png",
        title: "Expert-Led Editorial and Design Support",
        description: "Work with experienced editors and designers who refine your manuscript, craft engaging interiors, and design covers that reflect your vision and appeal to your audience."
    },
    {
        icon: "/feature-icon-3.png",
        title: "Full Creative Control and 100% Royalties",
        description: "You retain complete ownership of your work and receive 100% of your royalties. We support and guide the process—your intellectual property always remains yours."
    },
    {
        icon: "/feature-icon-4.png",
        title: "Global Distribution Across Major Platforms",
        description: "Your book is professionally formatted and distributed across leading online retailers, reaching readers in the United States and worldwide in both print and digital formats."
    }
];


  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CounterSection />
      <WhyAeroSection highlightTitle="Publishing" normalTitle="Your Book Should Be Simple, Transparent, and Author-First" features={features} />
      <GlobalAudienceSection />
      <LogoCarousel />
      <HowWeWorkSection />
      <ConnectWithUsSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <AuthorsShowcaseSection />
      <PromoSection />
      <FAQSection />
    </main>
  );
}
