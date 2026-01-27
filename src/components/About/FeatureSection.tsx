"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import Image from "next/image";

interface FeatureSectionProps {
    subtitle?: string;
    title: {
        prefix: string;
        highlight: string;
        suffix?: string;
    };
    description: string;
    features?: string[];
    ctaText?: string;
    ctaLink?: string;
    imageSrc: string;
    imageAlt?: string;
    isReversed?: boolean; // To swap image and content side
}

export default function FeatureSection({
    subtitle = "Self-Publishing Made Effortless:",
    title,
    description,
    features = [],
    ctaText = "Start Now",
    ctaLink = "/contact-us",
    imageSrc,
    imageAlt = "Feature Image",
    isReversed = false,
}: FeatureSectionProps) {
    return (
        <section className="py-20 bg-white overflow-hidden bg-[url('/why-aero-gradient-bg.png')] bg-contain bg-no-repeat bg-left">
            <div className={`max-w-[1140px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 space-y-3"
                >
                    {subtitle && (
                        <h4 className="text-brand-primary font-syne font-medium text-lg md:text-xl">
                            {subtitle}
                        </h4>
                    )}

                    <h2 className="text-4xl md:text-[40px] leading-[1] font-syne font-semibold text-brand-primary">
                        {title.prefix}{" "}
                        <span className="text-brand-secondary font-shaded font-[300] text-5xl md:text-[50px]">
                            {title.highlight}
                        </span>
                        {title.suffix && <><br className="hidden md:block" /> {title.suffix}</>}
                    </h2>

                    <p className="text-brand-gray font-poppins text-sm leading-relaxed text-justify">
                        {description}
                    </p>

                    {features.length > 0 && (
                        <ul className="space-y-3 pt-2">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-brand-black">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-black flex-shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="pt-6">
                        <Button href={ctaLink} variant="secondary" className="">
                            {ctaText}
                        </Button>
                    </div>
                </motion.div>

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: isReversed ? -50 : 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 relative w-full max-w-[500px]"
                >

                    <div className="relative w-full">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
