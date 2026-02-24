"use client";

import { motion } from "framer-motion";
import Button from "../Button";
import Image from "next/image";
import { useEffect, useState } from "react";

const badges = [
    "/hero-badge-1.png",
    "/hero-badge-2.png",
    "/hero-badge-3.png",
    "/hero-badge-4.png",
]

export default function HeroSection() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center">
            <div className="max-w-[1140px] mx-auto my-24 relative z-10 w-full flex gap-12 items-start max-sm:flex-col max-sm:my-12 max-sm:px-6">

                {/* Left Column: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-2"
                >
                    <h1 className="text-[60px] font-syne font-semibold leading-[1] text-brand-primary max-sm:text-[40px]">
                        Contact Us
                    </h1>

                    <p className="text-black font-poppins text-md leading-relaxed max-w-xl max-sm:text-[14px]">
                        Things are easy here even if you don't know how to write. Explain the crazy plot you hide in your mind for years and see your imagination on paper. Aqua Book Publishing is interpreting millions of dreams of being published authors globally. That’s what they all truly wanted.
                    </p>


                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button variant="primary" className="max-sm:text-[14px] max-sm:px-4">
                            <a href="tel:+17602801847">760 280 1847</a>
                        </Button>
                        <Button
                            variant="secondary"
                            className="max-sm:text-[14px] max-sm:px-4"
                            onClick={() => (window as any).Tawk_API?.maximize()}
                        >
                            Chat Now
                        </Button>
                    </div>
                </motion.div>

                {/* Right Column: form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-end  mt-4"
                >
                    <div className="w-full max-w-md">


                        <img src="/contactus.png" alt="Contact Form" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
