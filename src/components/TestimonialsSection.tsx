"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";

// Sample data for testimonials
const testimonials = [
    {
        id: 1,
        name: "The Alchemist",
        quote: "When a person really desires something, all the universe conspires to help that person to realize his dream",
        details: "This includes professional editing, cover design, formatting, and distribution strategies tailored to your genre.",
        authorImage: "/testimonial.png",
        mainImage: "/why-aero-book.png"
    },
    {
        id: 2,
        name: "J.K. Rowling",
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        details: "Our team of experts will guide you through every step of the publishing process, ensuring your book reaches its full potential.",
        authorImage: "/testimonial.png",
        mainImage: "/why-aero-book.png"
    },
    {
        id: 3,
        name: "Stephen King",
        quote: "Get busy living or get busy dying.",
        details: "We provide comprehensive marketing plans to get your book in front of the right readers and maximize your sales.",
        authorImage: "/testimonial.png",
        mainImage: "/why-aero-book.png"
    }
];

export default function TestimonialsSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const [activeId, setActiveId] = useState(testimonials[0].id);

    const activeTestimonial = testimonials.find((t) => t.id === activeId) || testimonials[0];

    return (
        <section className="relative py-20 bg-brand-light overflow-hidden max-sm:py-12  overflow-x-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-[#D4E9F7] opacity-50 pointer-events-none" />

            <div ref={containerRef} className="max-w-[1140px] mx-auto px-6 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <p className="text-md font-poppins text-brand-primary font-semibold tracking-wider uppercase mb-2">
                        PROBLEM AWARENESS / EDUCATION
                    </p>
                    <h2 className="text-[40px] font-syne font-[500] leading-[1] text-brand-primary max-sm:text-[32px]">
                        Why Most Books
                        <span className="text-brand-secondary text-[50px] font-shaded font-[400] max-sm:text-[40px]"> Never Reach</span><br />
                        <span className="font-[700]"> Readers And How We Change That</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="relative lg:w-1/2 w-full flex justify-center lg:justify-end pr-8"
                    >
                        <div className="absolute top-0 right-24 w-[90%] h-[90%] bg-brand-secondary rounded-2xl -z-10 translate-x-4 -translate-y-4 shadow-lg" />

                        <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl z-10">
                            <img
                                src={activeTestimonial.mainImage}
                                alt="Books stack"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="lg:w-1/2 w-full space-y-8 pl-4"
                    >
                        {/* Speech Bubble & Profile */}
                        <div className="flex items-center gap-6">
                            {/* Speech Bubble */}
                            <div className="rounded-2xl  -mr-8 z-20 bg-white p-4 border border-gray-300 relative max-w-[250px]">
                                <p className="text-sm font-syne text-brand-black">
                                    Best <span className="text-brand-secondary font-shaded !text-lg">Riders</span> With Professional Content Writing Services
                                </p>
                            </div>

                            {/* Author Profile Image */}
                            <div className="relative">
                                <div className="w-32 h-40 rounded-lg overflow-hidden border-2 border-white shadow-md">
                                    <img src={activeTestimonial.authorImage} className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -top-2 -right-2 text-brand-secondary bg-white leading-[1] text-xl p-2 rounded-sm font-serif">
                                    <FaQuoteRight />
                                </div>
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p className="text-sm font-poppins text-brand-gray leading-relaxed mb-4">
                                    This is because the publishing process is full of barriers: overcomplicated, time-consuming, and out of reach for most writers. Frustrated and stuck, many give up before they even get the chance.
                                </p>
                                <p className="text-sm font-poppins text-brand-gray leading-relaxed">
                                    Founded by authors and writers themselves, Aero understands the many challenges authors face, aims to democratize publishing for writers everywhere.
                                </p>

                                {/* Dynamic Detail Text based on Selection */}
                                <p className="text-sm font-poppins text-brand-primary font-medium mt-4 italic">
                                    {activeTestimonial.details}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                    </motion.div>
                </div>

                {/* Bottom Carousel / Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 z-[9999] relative">
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            onClick={() => setActiveId(testimonial.id)}
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: 0.6 + (testimonial.id * 0.1) }}
                            className={`bg-white rounded-2xl p-8 border-2 cursor-pointer transition-all duration-300 flex flex-col items-center text-center shadow-lg relative group overflow-hidden
                        ${activeId === testimonial.id ? "border-brand-primary ring-1 ring-brand-primary" : "border-[#D4E9F7]"}
                    `}
                        >
                            <p className="text-sm font-poppins text-brand-gray mb-6 leading-relaxed italic relative z-10">
                                "{testimonial.quote}"
                            </p>

                            <div className="mt-auto flex flex-col items-center gap-2 relative z-10">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                                    <img src={testimonial.authorImage} className="w-full h-full object-cover" />
                                </div>
                                <span className="font-syne font-bold text-brand-primary text-sm">
                                    {testimonial.name}
                                </span>
                            </div>

                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-brand-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}