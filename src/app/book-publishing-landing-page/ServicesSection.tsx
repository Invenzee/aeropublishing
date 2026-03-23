"use client"
import Image from "next/image";
import Button from "@/components/Button";

export default function ServicesSection() {
    const services = [
        {
            num: "01.",
            title: "Manuscript Evaluation",
            desc: "The review comprises a thorough reading of the work by an editor, who then summarizes its advantages and weaknesses."
        },
        {
            num: "02.",
            title: "Quality Assurance",
            desc: "To guarantee that spelling and grammatical errors are found and fixed, we complete a thorough copyedit and a final proofread of your text."
        },
        {
            num: "03.",
            title: "Book Cover Design",
            desc: "Our design team includes some of the top designers in the world who have created bestsellers like It's Me, Chelsea & Choose Yourself."
        },
        {
            num: "04.",
            title: "Interior Layout",
            desc: "Our expertise in interior design guarantees that your book will provide a seamless visual experience from the cover to the last page."
        },
        {
            num: "05.",
            title: "Distribution & Royalty Setup",
            desc: "We establish major distributor and retailer accounts under your name, ensuring full ownership of your material and royalties."
        },
        {
            num: "06.",
            title: "Ebook Creation And Distribution",
            desc: "Your eBook or Kindle will be available on major eBook stores such as Amazon and Barnes & Noble, making it accessible worldwide."
        }
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-[1140px] mx-auto max-sm:px-4">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">

                    <h2 className="text-[50px] text-brand-primary text-center font-syne font-bold leading-[1.1] max-sm:text-[32px] ">
                        <span className="text-brand-secondary font-shaded font-[300] text-[60px] max-sm:text-[40px] leading-[.8]"> What’s</span>{" "}
                        In The Aero Publishing Services?
                    </h2>
                    <p className="text-gray-700 font-poppins text-[15px]">
                        Our publishing services has everything you need to turn your completed manuscript into a polished and officially published book.
                    </p>
                </div>

                {/* Main Content: Left Grid and Right Image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Services Grid */}
                    <div className="lg:col-span-8 flex flex-col items-start">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-10 w-full">
                            {services.map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="font-semibold text-brand-primary text-xl  font-syne mb-2">
                                        {item.num}
                                    </span>
                                    <div className="flex items-center gap-2 mb-3">
                                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="shrink-0 group-hover:scale-110 transition-transform">
                                            <circle cx="8" cy="8" r="7" stroke="#333" strokeWidth="1.5" />
                                            <circle cx="8" cy="8" r="3.5" fill="#333" />
                                        </svg>
                                        <h4 className="text-brand-secondary font-syne font-bold text-lg mb-4 leading-tight max-w-[80%] mx-auto">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <p className="text-gray-600 text-[14px] leading-relaxed font-poppins pr-4">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Buttons as requested */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button font="poppins" variant="primary" className="max-sm:text-[14px] max-sm:px-4">
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
                    </div>

                    {/* Right: Book Mockups Image */}
                    <div className="lg:col-span-4 relative flex justify-center lg:justify-end w-full">
                        <div className="relative w-full max-w-[400px] aspect-3/4">
                            {/* Using placeholder. Update to the Schizophrenia book image later */}
                            <Image
                                src="/carousel-1.png"
                                alt="Book Publishing Services"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
