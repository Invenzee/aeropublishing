import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CounterSection from "@/components/CounterSection";
import WhyAeroSection from "@/components/WhyAeroSection";
import GlobalAudienceSection from "@/components/GlobalAudienceSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CounterSection />
      <WhyAeroSection />
      <GlobalAudienceSection />
    </main>
  );
}
