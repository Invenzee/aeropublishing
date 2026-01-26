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
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CounterSection />
      <WhyAeroSection />
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
