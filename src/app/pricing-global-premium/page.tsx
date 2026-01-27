import HeroSection from '@/components/About/HeroSection'
import GlobalPremiumCard from '@/components/Pricing/GlobalPremiumCard'

export default function page() {
    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Global Premium"
                description="Built for Bold Authors with Big Ambitions"
                showButton={false}
                className="!min-h-[0px] pb-12"
            />
            <div className="px-6 -mt-20 relative z-10 w-full flex justify-center">
                <GlobalPremiumCard />
            </div>
        </main>
    )
}
