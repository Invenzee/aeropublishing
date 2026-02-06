"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake, Copyright, UserCheck, Store, Share2, Target } from "lucide-react";

const features = [
    {
        icon: Handshake,
        title: "Pre-order\ncampaign support",
        description: "When a person really desires something, all the universe conspires to help that person to realize his dream",
        highlight: false
    },
    {
        icon: Copyright,
        title: "ISBN & copyright\nfiling included",
        description: "When a person really desires something, all the universe conspires to help that person to realize his dream",
        highlight: false
    },
    {
        icon: UserCheck,
        title: "Genre-matched\neditors & designers",
        description: "When a person really desires something, all the universe conspires to help that person to realize his dream",
        highlight: false
    },
    {
        icon: Store,
        title: "Bookstore &\nonline distribution",
        description: "When a person really desires something, all the universe conspires to help that person to realize his dream",
        highlight: false
    },
    {
        icon: Share2,
        title: "Social media\nmarketing setup",
        description: "When a person really desires something, all the universe conspires to help that person to realize his dream",
        highlight: false
    },
    {
        icon: Target,
        title: "Author royalty\ntracking portal",
        description: "When a person really desires something, all the universe conspires to help that person to realize his dream",
        highlight: false
    }
];

export default function WhyChooseUsSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section className="relative py-20 bg-brand-light overflow-hidden max-sm:py-12  overflow-x-hidden">
            {/* Subtle background glow effect if needed, similar to image light blue tint */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-30 pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-30 pointer-events-none translate-y-1/2 -translate-x-1/2" />


            <div ref={containerRef} className="max-w-[1140px] mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[50px] font-syne font-bold leading-[1] text-brand-primary max-sm:text-[32px]">
                        <span className="font-[400]">Why</span> Choose <span className="text-brand-secondary font-shaded font-[400]">Us?</span>
                    </h2>
                    <p className="text-md font-poppins text-brand-primary font-medium">
                        Why Authors Choose Aero Publishing Over Generic Publishing Platforms
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className={`rounded-[30px] p-8 text-center flex flex-col items-center transition-all duration-300 shadow-sm hover:shadow-xl hover:bg-brand-primary hover:text-white group cursor-pointer
                ${feature.highlight
                                    ? "bg-brand-primary text-white"
                                    : "bg-white text-brand-primary"
                                }
              `}
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl
                ${feature.highlight
                                    ? "bg-white text-brand-primary"
                                    : "bg-brand-light text-brand-primary"
                                }
              `}>
                                <feature.icon className="group-hover:text-brand-secondary" strokeWidth={1.5} size={32} />
                            </div>

                            <h3 className={`text-xl font-syne font-bold mb-4 whitespace-pre-line leading-tight group-hover:text-white
                 ${feature.highlight ? "text-white" : "text-brand-primary"}
              `}>
                                {feature.title}
                            </h3>

                            <p className={`text-[13px] font-poppins leading-relaxed group-hover:!text-white
                ${feature.highlight ? "text-white/80" : "text-brand-gray"}
              `}>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
