import BlogSection from '@/components/Blog/BlogSection';
import React from 'react'
import HeroSection from '@/components/About/HeroSection'

export default function page() {
    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                hasForm={false}
                title="Publishing Made Simple"
                description="All-inclusive packages with copyright protection and a 7-day money-back guarantee. Publish your book with ease."
            />
            <BlogSection />
        </main>
    )
}
