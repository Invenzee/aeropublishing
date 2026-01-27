"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

// Dummy blog data
const featuredPost = {
    category: "Recent News",
    title: "Publishing Industry Trends 2026: The Book Publishing News Authors Need",
    description: "The publishing landscape in 2026 feels bigger and more vast. Publishing didn't suddenly change overnight. It's been shifting for years, but by late 2025 the signals got harder to ignore. \n\nIn fact, major publisher revenue was still edging up in late 2025, with the AAP's October 2025 StatShot showing industry revenue up 8.7% year over year for the month and up 6.2% year to date.",
    date: "05 January 2026",
    comments: "0 Comments",
    image: "/main-blog-image.png",
    href: "#"
};

const blogPosts = [
    {
        category: "Tips & Tricks",
        title: "Publishing Industry Trends 2026: The Book Publishing News Authors Need",
        description: "The publishing landscape in 2026 feels bigger and more vast. Publishing didn't suddenly change overnight. It's been shifting for years, but by late 2025 the signals got harder to ignore.",
        date: "04 January 2026",
        comments: "10 Comments",
        image: "/blog-1.png",
        href: "#"
    },
    {
        category: "Tips & Tricks",
        title: "Publishing Industry Trends 2026: The Book Publishing News Authors Need",
        description: "The publishing landscape in 2026 feels bigger and more vast. Publishing didn't suddenly change overnight. However shifting for years, but by late 2025 the signals got harder to ignore",
        date: "04 January 2026",
        comments: "4 Comments",
        image: "/blog-2.png",
        href: "#"
    },
    {
        category: "Tips & Tricks",
        title: "Publishing Industry Trends 2026: The Book Publishing News Authors Need",
        description: "The publishing landscape in 2026 feels bigger and more vast. Publishing didn't suddenly change overnight. It's been shifting for years, but by late 2025 the signals got harder to ignore",
        date: "04 January 2026",
        comments: "0 Comments",
        image: "/blog-3.png",
        href: "#"
    },
    {
        category: "Tips & Tricks",
        title: "Publishing Industry Trends 2026: The Book Publishing News Authors Need",
        description: "The publishing landscape in 2026 feels bigger and more vast. Publishing didn't suddenly change overnight. It's been shifting for years, but by late 2025 the signals got harder to ignore",
        date: "04 January 2026",
        comments: "14 Comments",
        image: "/blog-2.png",
        href: "#"
    },
    {
        category: "Tips & Tricks",
        title: "Publishing Industry Trends 2026: The Book Publishing News Authors Need",
        description: "The publishing landscape in 2026 feels bigger and more vast. Publishing didn't suddenly change overnight. However shifting for years, but by late 2025 the signals got harder to ignore",
        date: "04 January 2026",
        comments: "8 Comments",
        image: "/blog-3.png",
        href: "#"
    },
    {
        category: "Tips & Tricks",
        title: "Publishing Industry Trends 2026: The Book Publishing News Authors Need",
        description: "The publishing landscape in 2026 feels bigger and more vast. Publishing didn't suddenly change overnight. It's been shifting for years, but by late 2025 the signals got harder to ignore",
        date: "04 January 2026",
        comments: "2 Comments",
        image: "/blog-4.png",
        href: "#"
    },
];

export default function BlogSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1140px] mx-auto px-6">

                {/* Featured Post */}
                <div className="mb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative">
                            <img src={featuredPost.image} alt="Featured Blog" className="object-cover  rounded-2xl" />
                            {/* Decorative Sparkle */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-10 -left-10 w-32 h-32 bg-brand-secondary/20 blur-3xl rounded-full"
                            />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 space-y-3"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-[36px] leading-[1.2] font-syne font-semibold text-brand-primary">
                            Publishing Industry Trends <br />
                            2026: The Book <span className="text-brand-secondary font-shaded italic font-light text-[40px]">Publishing</span> <br />
                            News Authors Need
                        </h2>

                        <p className="text-gray-600 font-poppins text-sm leading-relaxed whitespace-pre-line">
                            {featuredPost.description}
                        </p>

                        <Link href={featuredPost.href} className="inline-block text-[#FE695B] font-medium text-sm hover:underline">
                            Read Now
                        </Link>

                        <div className="flex items-center gap-4 text-xs text-gray-400 font-poppins pt-2">
                            <span>{featuredPost.date}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span>{featuredPost.comments}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Grid Posts */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] mb-6 shadow-md group-hover:shadow-xl transition-all duration-300">
                                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />

                                {/* Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="bg-[#FE695B] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col text-center px-2">
                                <h3 className="text-lg font-syne font-bold text-brand-primary leading-tight mb-3 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-xs text-gray-500 font-poppins leading-relaxed mb-4 line-clamp-3">
                                    {post.description}
                                </p>

                                <div className="mt-auto flex flex-col items-center gap-3">
                                    <Link href={post.href} className="text-[#FE695B] font-medium text-sm hover:underline">
                                        Read Now
                                    </Link>

                                    <div className="flex items-center gap-3 text-[10px] text-gray-400 font-poppins">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                                        <span>{post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
}
