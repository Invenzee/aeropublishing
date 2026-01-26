"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
}

function Counter({ end, duration = 2, suffix = "" }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animateCount);
    }, [isInView, end, duration]);

    return (
        <div ref={ref} className="text-[60px] font-syne font-bold text-brand-primary leading-none max-sm:text-[40px]">
            {count}{suffix}
        </div>
    );
}

export default function CounterSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const stats = [
        {
            icon: (
                <img src="/book.svg" alt="Book icon" className="w-12 h-12 max-sm:w-10 max-sm:h-10" />
            ),
            number: 800,
            suffix: "+",
            label: "Books Published"
        },
        {
            icon: (
                <img src="/reload.svg" alt="Reload icon" className="w-12 h-12 max-sm:w-10 max-sm:h-10" />
            ),
            number: 100,
            suffix: "+",
            label: "Authors published manuscripts with us"
        },
        {
            icon: (
                <img src="/growth.svg" alt="Growth icon" className="w-12 h-12 max-sm:w-10 max-sm:h-10" />
            ),
            number: 200,
            suffix: "+",
            label: "Annual growth in manuscript"
        }
    ];

    return (
        <section className="relative bg-brand-light py-10 max-sm:py-12">
            {/* Triangle Decoration */}
            <motion.div
                className="absolute left-20 -top-16 w-44 h-44 max-sm:w-20 max-sm:h-20 max-sm:left-10 max-sm:-top-8"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <img
                    src="/triangle.png"
                    alt="Triangle decoration"
                    className="w-full h-full object-contain"
                />
            </motion.div>

            <div ref={containerRef} className="max-w-[1140px] mx-auto px-6">
                <div className="grid grid-cols-3 gap-12 max-sm:grid-cols-1 max-sm:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                                ease: "easeOut"
                            }}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2 + 0.2,
                                    ease: "backOut"
                                }}
                                className=""
                            >
                                {stat.icon}
                            </motion.div>

                            {/* Counter */}
                            <Counter end={stat.number} suffix={stat.suffix} duration={2.5} />

                            {/* Label */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2 + 0.4
                                }}
                                className="text-[14px] font -poppins text-brand-primary leading-relaxed max-sm:text-[13px]"
                            >
                                {stat.label}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
