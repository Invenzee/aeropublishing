"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";
import { X } from "lucide-react";

export default function PromoSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section className="relative py-20 overflow-hidden max-sm:py-12  overflow-x-hidden">
            <div ref={containerRef} className="max-w-[1140px] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-brand-light rounded-[30px] shadow-2xl overflow-hidden flex max-md:flex-col  border border-gray-300"
                >
                    {/* Left Side: Form */}
                    <div className="w-1/2 p-12 max-md:w-full max-sm:p-8 bg-[#F8F9FA]">
                        <div className="mb-8">
                            <h3 className="text-2xl font-syne font-medium text-brand-black mb-1 max-sm:text-[18px]">
                                Activate Your Coupon Now!
                            </h3>
                            <h2 className="text-3xl font-syne font-bold text-brand-black max-sm:text-[24px]">
                                Get Upto 50% Discount
                            </h2>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-transparent border-b border-gray-400 py-3 text-sm font-poppins focus:outline-none focus:border-brand-primary transition-colors placeholder:text-gray-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent border-b border-gray-400 py-3 text-sm font-poppins focus:outline-none focus:border-brand-primary transition-colors placeholder:text-gray-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full bg-transparent border-b border-gray-400 py-3 text-sm font-poppins focus:outline-none focus:border-brand-primary transition-colors placeholder:text-gray-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Type of Services"
                                    className="w-full bg-transparent border-b border-gray-400 py-3 text-sm font-poppins focus:outline-none focus:border-brand-primary transition-colors placeholder:text-gray-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Description"
                                    className="w-full bg-transparent border-b border-gray-400 py-3 text-sm font-poppins focus:outline-none focus:border-brand-primary transition-colors placeholder:text-gray-500"
                                />
                            </div>

                            <Button
                                variant="secondary"
                                className="w-full sm:w-auto"
                            >
                                Publish Worldwide
                            </Button>
                        </form>
                    </div>

                    {/* Right Side: Image */}
                    <div className="w-1/2 relative bg-[#1A2E35] max-md:w-full min-h-[300px]">
                        <img
                            src="/popup-image.png"
                            alt="Book cover"
                            className="w-full h-full object-cover filter drop-shadow-2xl brightness-110"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
