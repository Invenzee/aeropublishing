"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function GlobalAudienceSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1140px] mx-auto px-6">

                {/* Maintenance Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#F8F9FB] rounded-xl py-6 px-4 text-center mb-16"
                >
                    <p className="text-brand-black font-poppins font-semibold text-lg sm:text-lg">
                        All publishing plans include 3 years of membership & maintenance
                    </p>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center text-center space-y-4"
                >
                    <h2 className="relative inline-block text-[40px] sm:text-[50px] font-syne font-semibold text-brand-primary leading-tight">
                        <span className="relative z-10">
                            Want to publish on a <span className="text-brand-secondary italic font-shaded font-[300] text-[60px]">global</span> scale?
                        </span>
                    </h2>

                    <Button variant="secondary" className="!h-14 !px-10 !text-lg !rounded-full shadow-lg hover:shadow-xl transition-shadow">
                        Choose Global Premium
                    </Button>
                </motion.div>

            </div>
        </section>
    );
}
