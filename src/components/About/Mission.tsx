"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function MissionSection() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const isSection1InView = useInView(section1Ref, { once: true, margin: "-100px" });
    const isSection2InView = useInView(section2Ref, { once: true, margin: "-100px" });
    const missionText = "Congrats in advance to all literary minds who want to be a published author in the future! Aero Book Publishing is addictive to make authors published worldwide - creating a bridge to fulfill millions of dreams. Focused and proud of delivering advanced ebook publishing services known for its interesting competition between old and new authors. Staying on our toes to provide the best book publishing services to authors worldwide. And they did publish their hottest and trending digital stories with a few clicks. Digitally and Globally! Inviting all authors to come and join the vast community of writers who are fanatic about writing as they were born to write. To provide the digital page-turners aesthetic and greatest e-books of all time that satisfy their literary needs. Aero Design Publishing redefines the old-school lazy publishing process and makes it the quickest and most reliable resource, with decades of experience and connections in the publishing industry. So, you're in seniors hands.";
    return (
        <section className="bg-white overflow-hidden">
            {/* Section 1: Laptop with Books */}
            <div ref={section1Ref} className="max-w-[1240px] mx-auto px-6 py-20 max-md:py-12">
                <div className="flex items-center gap-16 max-lg:flex-col max-lg:gap-12">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isSection1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-1/2 max-lg:w-full flex justify-center"
                    >
                        <div className="relative w-full aspect-[4/3]">
                            <Image
                                src="/booksabout.png"
                                alt="Laptop with books"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isSection1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-1/2 max-lg:w-full space-y-6"
                    >
                        <h2 className="text-[50px] font-syne font-bold leading-[1] max-sm:text-[32px]">
                            <span className="text-brand-secondary font-shaded italic font-light text-[65px] max-md:text-[42px]">The </span>
                            <span className="text-brand-primary font-[500]">Mission is Shooting </span>
                            <span className="text-brand-primary font-[500]">For The </span>
                            <span className="text-brand-primary ">Moon Easier</span>
                        </h2>
                        {/* <div className="border-t border-brand-accent/30 w-1/3 pt-4"></div> */}
                        <p className="text-[14px] text-brand-gray font-poppins leading-[1.6] text-justify">
                            {missionText}
                        </p>
                    </motion.div>
                </div>
            </div>
            {/* Section 2: Book House */}
            <div ref={section2Ref} className="max-w-[1240px] mx-auto px-6 py-20 max-md:py-12">
                <div className="flex items-center gap-16 max-lg:flex-col-reverse max-lg:gap-12">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isSection2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-1/2 max-lg:w-full space-y-6"
                    >
                        <h2 className="text-[50px] font-syne font-bold leading-[1] max-sm:text-[32px]">
                            <span className="text-brand-secondary font-shaded italic font-light text-[65px] max-md:text-[42px]">How </span>
                            <span className="text-brand-primary font-[500]">to Craft </span>
                            <span className="text-brand-primary ">Professional eBook</span>
                        </h2>
                        {/* <div className="border-t border-brand-accent/30 w-1/3 pt-4"></div> */}
                        <p className="text-[14px] text-brand-gray font-poppins leading-[1.6] text-justify">
                            {missionText}
                        </p>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isSection2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-1/2 max-lg:w-full flex justify-center "
                    >
                        {/* Background Color Layer */}
                        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[100%] bg-brand-secondary rounded-xl"></div> */}

                        {/* Image Layer */}
                        <div className="relative w-full aspect-[4/5] z-10 transition-transform duration-500 hover:scale-105">
                            <Image
                                src="/rightbook2.png"
                                alt="Book house structure"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
