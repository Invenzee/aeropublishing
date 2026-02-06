"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function WhyAeroSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const features = [
        {
            icon: "/feature-icon-1.png",
            title: "Professional Publishing Without Compromise",
            description: "If you do not know where to begin, just relax. We take all the stress of writing, publishing,"
        },
        {
            icon: "/feature-icon-2.png",
            title: "Expert-Led Editorial and Design Support",
            description: "If you do not know where to begin, just relax. We take all the stress of writing, publishing,"
        },
        {
            icon: "/feature-icon-3.png",
            title: "Full Creative Control and 100% Royalties",
            description: "If you do not know where to begin, just relax. We take all the stress of writing, publishing,"
        },
        {
            icon: "/feature-icon-4.png",
            title: "Global Distribution Across Major Platforms",
            description: "If you do not know where to begin, just relax. We take all the stress of writing, publishing,"
        }
    ];

    return (
        <section
            className="relative py-20 bg-contain bg-top bg-no-repeat max-sm:py-12"
            style={{ backgroundImage: "url('/why-aero-bg.png')" }}
        >
            <div className="absolute inset-0 left-0 bottom-0">
                <img src="/why-aero-gradient-bg.png" alt="Why Aero" className="object-contain bg-no-repeat" />
            </div>
            <div ref={containerRef} className="max-w-[1140px] mx-auto max-sm:px-4 overflow-x-hidden">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-3 flex flex-col items-center mb-16"
                >
                    <p className="text-md font-poppins text-brand-primary font-semibold tracking-wider uppercase">
                        WHY AERO
                    </p>
                    <h2 className="text-[50px] text-center font-syne font-bold leading-[1.1] max-sm:text-[32px] max-w-2xl">
                        <span className="text-brand-secondary font-shaded font-[300] text-[60px] max-sm:text-[40px] leading-[.8]">Publishing</span>{" "}
                        <span className="text-brand-primary font-[500]">Your Book Should Be </span>
                        <span className="text-brand-primary">Simple, Transparent, and Author-First</span>
                    </h2>
                </motion.div>
                <div className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-12">
                    {/* Left Column: Content */}
                    <div className="space-y-8">
                        {/* Features List */}
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + index * 0.1,
                                        ease: "easeOut"
                                    }}
                                    className="flex items-start gap-4 p-4 rounded-xl border border-black hover:border-brand-secondary transition-colors duration-300"
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                                        <img
                                            src={feature.icon}
                                            alt={feature.title}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-[16px] font-poppins font-semibold text-black mb-1 max-sm:text-[14px]">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[13px] font-poppins text-brand-gray leading-relaxed max-sm:text-[12px]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut"
                        }}
                        className="relative max-lg:order-first flex justify-end"
                    >
                        <div className="relative w-[90%] max-sm:w-full rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/why-aero-book.png"
                                alt="Open book"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
