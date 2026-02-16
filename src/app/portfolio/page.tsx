'use client'

import HeroSection from '@/components/About/HeroSection'
import ConnectWithUsSection from '@/components/ConnectWithUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import AuthorsShowcaseSection from '@/components/AuthorsShowcaseSection';
import PromoSection from '@/components/PromoSection';
import FAQSection from '@/components/FAQSection';
import { useInView, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export default function page() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const books = [
        {
            id: 1,
            image: "/carousel-1.png",
            title: "Book 1"
        },
        {
            id: 2,
            image: "/carousel-2.png",
            title: "Book 2"
        },
        {
            id: 3,
            image: "/carousel-3.png",
            title: "Book 3"
        },
        {
            id: 4,
            image: "/carousel-4.png",
            title: "Book 4"
        },
        {
            id: 5,
            image: "/carousel-1.png",
            title: "Book 5"
        },
        {
            id: 6,
            image: "/carousel-2.png",
            title: "Book 6"
        },
        {
            id: 7,
            image: "/carousel-3.png",
            title: "Book 7"
        },
        {
            id: 8,
            image: "/carousel-4.png",
            title: "Book 8"
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                title="Portfolio"
                description="Explore a curated selection of projects crafted by Aero Publishing—where ideas turn into professionally published books. Our portfolio reflects the quality, creativity, and care we bring to every author we work with.
                From fiction and nonfiction to ebooks, children’s books, and visual marketing assets, each project showcases our commitment to polished execution, author ownership, and market-ready results."
            />
            <section className="relative py-20 !pt-0 max-sm:py-12 bg-[url('/carousel-bg.png')] bg-contain bg-right bg-no-repeat">

                <div ref={containerRef} className="max-w-[1140px] mx-auto px-6">
                    {/* Carousel Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Previous Button */}
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className="absolute -left-16 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center hover:bg-brand-secondary transition-all duration-300 hover:scale-110 max-sm:w-10 max-sm:h-10 max-sm:-translate-x-2 cursor-pointer"
                            aria-label="Previous books"
                        >
                            <ChevronLeft className="w-6 h-6 text-white max-sm:w-5 max-sm:h-5" />
                        </button>

                        {/* Swiper Carousel */}
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={32}
                            slidesPerView={4}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            speed={600}
                            onSwiper={setSwiperInstance}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 32,
                                },
                            }}
                            className="!py-4"
                        >
                            {books.map((book, index) => (
                                <SwiperSlide key={book.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            ease: "easeOut"
                                        }}
                                        whileHover={{
                                            y: -10,
                                            transition: { duration: 0.3 }
                                        }}
                                        className="flex justify-center"
                                    >
                                        <div className="relative w-full max-w-[200px] aspect-[2/3] rounded-lg overflow-hidden mx-auto">
                                            <img
                                                src={book.image}
                                                alt={book.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Next Button */}
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className="absolute -right-16 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center hover:bg-brand-secondary transition-all duration-300 hover:scale-110 max-sm:w-10 max-sm:h-10 max-sm:translate-x-2 cursor-pointer"
                            aria-label="Next books"
                        >
                            <ChevronRight className="w-6 h-6 text-white max-sm:w-5 max-sm:h-5" />
                        </button>
                    </motion.div>
                </div>
                <div ref={containerRef} className="max-w-[1140px] mx-auto px-6">
                    {/* Carousel Container */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Previous Button */}
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className="absolute -left-16 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center hover:bg-brand-secondary transition-all duration-300 hover:scale-110 max-sm:w-10 max-sm:h-10 max-sm:-translate-x-2 cursor-pointer"
                            aria-label="Previous books"
                        >
                            <ChevronLeft className="w-6 h-6 text-white max-sm:w-5 max-sm:h-5" />
                        </button>

                        {/* Swiper Carousel */}
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={32}
                            slidesPerView={4}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            speed={600}
                            onSwiper={setSwiperInstance}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 32,
                                },
                            }}
                            className="!py-4"
                        >
                            {books.map((book, index) => (
                                <SwiperSlide key={book.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                            ease: "easeOut"
                                        }}
                                        whileHover={{
                                            y: -10,
                                            transition: { duration: 0.3 }
                                        }}
                                        className="flex justify-center"
                                    >
                                        <div className="relative w-full max-w-[200px] aspect-[2/3] rounded-lg overflow-hidden mx-auto">
                                            <img
                                                src={book.image}
                                                alt={book.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Next Button */}
                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className="absolute -right-16 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center hover:bg-brand-secondary transition-all duration-300 hover:scale-110 max-sm:w-10 max-sm:h-10 max-sm:translate-x-2 cursor-pointer"
                            aria-label="Next books"
                        >
                            <ChevronRight className="w-6 h-6 text-white max-sm:w-5 max-sm:h-5" />
                        </button>
                    </motion.div>
                </div>
            </section>
            <ConnectWithUsSection />
            <TestimonialsSection />
            <WhyChooseUsSection />
            <AuthorsShowcaseSection />
            <PromoSection />
            <FAQSection />
        </main>
    )
}
