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

const faqs = [
    {
        id: 1,
        question: "How long does self-publishing take?",
        answer: "The timeline for self-publishing depends on the condition of your manuscript and the services required. On average, professionally publishing a book can take anywhere from 4 to 12 weeks. This includes editing, formatting, cover design, ISBN registration, and distribution setup. If your manuscript is already finalized, the process can move faster. At Aero Publishing, we provide a clear timeline at the beginning of every project so you know exactly what to expect."
    },
    {
        id: 2,
        question: "Do I keep full rights and royalties?",
        answer: "Yes. When you publish with Aero Publishing, you retain 100% ownership of your manuscript and creative rights. You also receive the royalties generated from book sales based on the platform's payout structure. We assist with the publishing process, but you remain the legal owner of your work at all times."
    },
    {
        id: 3,
        question: "Can you publish eBooks, paperbacks, and hardcovers?",
        answer: "Yes, we offer publishing solutions for eBooks, paperback editions, and hardcover books. We format your manuscript according to platform-specific requirements and ensure it meets professional printing and digital distribution standards. Whether you want to publish on Amazon Kindle, distribute globally, or produce print-ready copies, we handle the technical setup for you."
    },
    {
        id: 4,
        question: "Do you offer ghostwriting and editing services?",
        answer: "Yes. In addition to publishing, we provide professional ghostwriting, developmental editing, copy editing, proofreading, formatting, cover design, and marketing support. Whether you need help starting your manuscript or refining a completed draft, our team offers end-to-end services designed for self-publishing authors."
    }
];

export default function page() {
    const containerRef = useRef(null);
    const containerRef2 = useRef(null); // Create a separate ref for the second carousel
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const isInView2 = useInView(containerRef2, { once: true, margin: "-100px" }); // Second inView state
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [swiperInstance2, setSwiperInstance2] = useState<SwiperType | null>(null); // Second swiper instance

    const books = [
        {
            id: 1,
            image: "/book-landing-page-11.png",
            title: "Book 1"
        },
        {
            id: 2,
            image: "/book-landing-page-4.png",
            title: "Book 2"
        },
        {
            id: 3,
            image: "/book-landing-page-5.png",
            title: "Book 3"
        },
        {
            id: 4,
            image: "/book-landing-page-6.png",
            title: "Book 4"
        },
        {
            id: 5,
            image: "/book-landing-page-7.png",
            title: "Book 5"
        },
        {
            id: 6,
            image: "/book-landing-page-8.png",
            title: "Book 6"
        },
        {
            id: 7,
            image: "/book-landing-page-9.png",
            title: "Book 7"
        },
        {
            id: 8,
            image: "/book-landing-page-10.png",
            title: "Book 8"
        }
    ];

    // Create reversed copy of books for the second carousel
    const reversedBooks = [...books].reverse();

    return (
        <main className="min-h-screen bg-white pb-20">
            <HeroSection
                hasForm={false}
                title="Portfolio"
                description="Explore a curated selection of projects crafted by Aero Publishing—where ideas turn into professionally published books. Our portfolio reflects the quality, creativity, and care we bring to every author we work with.
                From fiction and nonfiction to ebooks, children's books, and visual marketing assets, each project showcases our commitment to polished execution, author ownership, and market-ready results."
            />
            <section className="relative py-20 !pt-0 max-sm:py-12 bg-[url('/carousel-bg.png')] bg-contain bg-right bg-no-repeat">

                {/* First Carousel */}
                <div ref={containerRef} className="max-w-[1140px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <button
                            onClick={() => swiperInstance?.slidePrev()}
                            className="absolute -left-16 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center hover:bg-brand-secondary transition-all duration-300 hover:scale-110 max-sm:w-10 max-sm:h-10 max-sm:-translate-x-2 cursor-pointer"
                            aria-label="Previous books"
                        >
                            <ChevronLeft className="w-6 h-6 text-white max-sm:w-5 max-sm:h-5" />
                        </button>

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

                        <button
                            onClick={() => swiperInstance?.slideNext()}
                            className="absolute -right-16 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center hover:bg-brand-secondary transition-all duration-300 hover:scale-110 max-sm:w-10 max-sm:h-10 max-sm:translate-x-2 cursor-pointer"
                            aria-label="Next books"
                        >
                            <ChevronRight className="w-6 h-6 text-white max-sm:w-5 max-sm:h-5" />
                        </button>
                    </motion.div>
                </div>

                {/* Second Carousel - With Reversed Order */}
                <div ref={containerRef2} className="max-w-[1140px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView2 ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <button
                            onClick={() => swiperInstance2?.slidePrev()}
                            className="absolute -left-16 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center hover:bg-brand-secondary transition-all duration-300 hover:scale-110 max-sm:w-10 max-sm:h-10 max-sm:-translate-x-2 cursor-pointer"
                            aria-label="Previous books"
                        >
                            <ChevronLeft className="w-6 h-6 text-white max-sm:w-5 max-sm:h-5" />
                        </button>

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
                            onSwiper={setSwiperInstance2}
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
                            {reversedBooks.map((book, index) => (
                                <SwiperSlide key={book.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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

                        <button
                            onClick={() => swiperInstance2?.slideNext()}
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
            <FAQSection faqs={faqs} />
        </main>
    )
}