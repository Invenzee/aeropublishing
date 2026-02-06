"use client";

import { motion } from "framer-motion";
import Button from "./Button";
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
                    <h1 className="text-[60px] font-syne font-semibold leading-[1] text-brand-primary max-sm:text-[40px] max-sm:pt-8">
                        <span className="font-shaded font-[300] text-brand-secondary mr-3 text-[65px] max-sm:text-[45px]">Trusted</span> Partner for Self-Publishing Success
                    </h1>

                    <p className="text-black font-poppins text-md leading-relaxed max-w-md max-sm:text-[14px]">
                        If you do not know where to begin, just relax. We take all the stress of writing,
                        publishing, and promoting your book off your shoulders.
                    </p>

                    {/* Badges Placeholder */}
                    <div className="flex gap-4 items-center py-2">
                        {badges.map((badge, i) => (
                            <Image src={badge} alt="Badge" width={i === 1 && !isMobile ? 70 : isMobile ? 60 : 80} height={i === 1 && !isMobile ? 70 : isMobile ? 60 : 80} />
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button variant="primary" className="max-sm:text-[14px] max-sm:px-4">
                            +1 562 366 7780
                        </Button>
                        <Button variant="secondary" className="max-sm:text-[14px] max-sm:px-4">
                            Chat Now
                        </Button>
                    </div>
                </motion.div>

                {/* Right Column: form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-end w-full mt-4"
                >
                    <div className="w-full max-w-md">
                        <div className="text-center mb-6">
                            <h2 className="text-3xl font-syne font-bold text-brand-black max-sm:text-[24px]">Hire a Book Publisher</h2>
                            <p className="text-lg font-syne text-black max-sm:text-[14px]">Discuss your project with our publishing expert</p>
                        </div>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full h-14 px-6 bg-transparent border border-[#818181] focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all font-poppins"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full h-14 px-6 bg-transparent border border-[#818181] focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all font-poppins"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full h-14 px-6 bg-transparent border border-[#818181] focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all font-poppins"
                            />
                            <textarea
                                placeholder="Write A Message"
                                className="w-full h-32 px-6 py-4 bg-transparent border border-[#818181] focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all resize-none font-poppins"
                            />

                            <div className="flex justify-center pt-4">
                                <Button variant="secondary" className="max-sm:text-[14px] max-sm:px-8">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
