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

export default function HeroSection({ title, description, showButton = true }: { title: string, description: string, showButton?: boolean }) {

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
            <div className="max-w-[1140px] mx-auto my-24 relative z-10 w-full flex justify-center gap-5 items-center max-sm:flex-col max-sm:my-12 max-sm:px-6">

                {/* Left Column: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-2"
                >
                    <h1 className="text-[60px] text-center font-syne font-semibold leading-[1] text-brand-primary max-sm:text-[40px] max-w-3xl mx-auto">
                        {title}
                    </h1>

                    <p className="text-black text-center font-poppins text-md leading-relaxed max-w-2xl max-sm:text-[14px] mx-auto">
                        {description}
                    </p>

                    {showButton && (
                        <div className="flex flex-wrap gap-4 pt-4 justify-center">
                            <Button variant="primary" className="max-sm:text-[14px] max-sm:px-4">
                                +1 562 366 7780
                            </Button>
                            <Button variant="secondary" className="max-sm:text-[14px] max-sm:px-4">
                                Chat Now
                            </Button>
                        </div>
                    )}
                </motion.div>



            </div>
        </section>
    );
}
