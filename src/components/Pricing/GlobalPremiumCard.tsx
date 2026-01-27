"use client";

import { motion } from "framer-motion";
import { Check, HelpCircle, Info } from "lucide-react";
import Button from "../Button";

// Feature list data
const features = [
    { text: "Translations in 2 languages", bold: ["2 languages"] },
    { text: "Softcover, Hardcover, eBook & Audiobook - 12 versions!", bold: ["12 versions!"] },
    { text: "Cover design service" },
    { text: "Proofreading support" },
    { text: "Expert formatting services" },
    { text: "Book category and keywords guidance" },
    { text: "2 dedicated marketing dashboards" },
    { text: "Lifetime access to Octavo platform and tools" },
    { text: "Premium Billboard", hasInfo: true },
    { text: "$2,500 paid ads credit", hasInfo: true },
    { text: "Video book trailer" },
    { text: "YouTube commercial" },
    { text: "Custom book banners" },
    { text: "News press release" },
    { text: "Book-to-screen pitch" },
    { text: "Author podcast", hasInfo: true },
];

const addOns = [
    "Cover design service",
    "Proofreading support",
    "Book translation",
    "Line editing",
    "Proofreading",
];

export default function GlobalPremiumCard() {
    return (
        <div className="max-w-[500px] w-full mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-8 rounded-[2rem] border border-brand-secondary bg-white shadow-2xl overflow-hidden"
            >
                {/* Header Description */}
                <div className="mb-8 pb-8 border-b border-gray-100">
                    <p className="text-brand-black text-sm leading-relaxed font-medium">
                        All formats. All channels. All handled for you — publish and promote your book in 2 languages with 12 formats, expert editing, and global distribution.
                    </p>
                </div>

                {/* Features Label */}
                <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase">FEATURES</h4>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-brand-black/80">
                            <div className="mt-0.5 rounded-full p-0.5 flex-shrink-0 bg-[#00D084] text-white w-5 h-5 flex items-center justify-center">
                                <Check size={12} strokeWidth={4} />
                            </div>
                            <span className="flex-1 flex items-center gap-2">
                                <span dangerouslySetInnerHTML={{
                                    __html: feature.bold
                                        ? feature.text.replace(
                                            new RegExp(`(${feature.bold.join('|')})`, 'g'),
                                            '<strong>$1</strong>'
                                        )
                                        : feature.text
                                }} />
                                {feature.hasInfo && (
                                    <HelpCircle size={14} className="text-gray-400 cursor-help hover:text-brand-secondary transition-colors" />
                                )}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Add-Ons Label */}
                <div className="mb-6 mt-8 pt-8 border-t border-gray-100">
                    <h4 className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-6">ADD-ONS</h4>
                    <ul className="space-y-4">
                        {addOns.map((addon, idx) => (
                            <li key={idx} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full p-0.5 flex-shrink-0 bg-[#00D084] text-white w-5 h-5 flex items-center justify-center">
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className="text-brand-black/80">{addon}</span>
                                </div>
                                <span className="text-gray-400 text-xs text-right">included</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Section */}
                <div className="mt-10 mb-8 pt-8 border-t border-gray-100 w-full">
                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl font-syne font-bold text-brand-black">$21,498</span>
                    </div>
                    <p className="text-[#FE695B] text-xs font-medium mb-1">
                        Three years of membership included
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-400 text-xs">One-time payment</p>
                        <span className="text-gray-300">...</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3 w-full">
                    <Button
                        variant="primary"
                        className="!max-w-full w-full !border-none"
                    >
                        Contact us for more details
                    </Button>
                    <Button
                        variant="secondary"
                        className="!max-w-full w-full"
                    >
                        Get started
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
