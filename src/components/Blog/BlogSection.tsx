"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

// Dummy blog data
const featuredPost = {
    category: "Recent News",
    title: "Why Most First-Time Authors Fail at Self-Publishing (And How to Avoid It)",
    description: "Many first-time authors assume that once their manuscript is finished, publishing the book will be simple. In reality, the publishing journey involves far more than uploading a file online. Editing, formatting, cover design, metadata optimization, and distribution all play a crucial role in whether a book actually reaches readers. One of the biggest challenges new authors face is navigating the technical side of publishing. A poorly formatted book, an unprofessional cover, or weak book descriptions can significantly impact a book's visibility and sales.",
    date: "05 January 2026",
    comments: "0 Comments",
    image: "/main-blog-image.png",
    href: "#"
};

const blogPosts = [
    {
        category: "Tips & Tricks",
        title: "How Professional Book Editing Can Transform Your Manuscript",
        description: "Many authors underestimate the importance of professional editing. Even the most talented writers benefit from expert editing that improves clarity, structure, and readability. Proper editing not only strengthens your story but also ensures your book meets publishing standards and creates a better experience for readers..",
        date: "04 January 2026",
        comments: "10 Comments",
        image: "/blog-1.png",
        href: "#"
    },
    {
        category: "Tips & Tricks",
        title: "Amazon KDP Explained: A Beginner’s Guide for New Authors",
        description: "Amazon Kindle Direct Publishing has made it easier than ever for authors to publish their own books. However, understanding the platform, formatting requirements, and publishing process is essential for success. With the right preparation, authors can turn their manuscripts into professionally published books available worldwide…",
        date: "04 January 2026",
        comments: "4 Comments",
        image: "/blog-2.png",
        href: "#"
    },
    {
        category: "Tips & Tricks",
        title: "Why Book Cover Design Is One of the Most Important Parts of Publishing",
        description: "Readers often judge a book by its cover before they ever read the description. A professionally designed cover communicates genre, tone, and credibility. Investing in strong cover design can dramatically improve a book’s chances of attracting readers and standing out in competitive marketplaces…",
        date: "04 January 2026",
        comments: "0 Comments",
        image: "/blog-3.png",
        href: "#"
    },
    {
        category: "Tips & Tricks",
        title: "From Manuscript to Published Book: Understanding the Publishing Process",
        description: "Writing a manuscript is only the first step in becoming a published author. The publishing process includes editing, formatting, cover design, distribution setup, and marketing preparation. Understanding each step helps authors navigate the journey more confidently and avoid common mistakes….",
        date: "04 January 2026",
        comments: "14 Comments",
        image: "/blog-2.png",
        href: "#"
    },
    {
        category: "Tips & Tricks",
        title: "How Self-Publishing Gives Authors More Control Over Their Work",
        description: "Self-publishing allows authors to maintain full ownership of their books, including rights and royalties. Unlike traditional publishing models, authors have more flexibility in pricing, marketing, and distribution, allowing them to build their careers on their own terms….",
        date: "04 January 2026",
        comments: "8 Comments",
        image: "/blog-3.png",
        href: "#"
    },
    {
        category: "Tips & Tricks",
        title: "Common Mistakes First-Time Authors Make When Publishing a Book",
        description: "Many new authors rush the publishing process without fully preparing their book for readers. Skipping professional editing, ignoring formatting standards, or neglecting marketing can reduce a book’s chances of success. Avoiding these mistakes can make a major difference in a book’s visibility and impact….",
        date: "04 January 2026",
        comments: "2 Comments",
        image: "/blog-4.png",
        href: "#"
    },
];

export default function BlogSection() {
    return (
        <section className="py-20 bg-white bg-[url('/why-aero-gradient-bg.png')] bg-contain bg-no-repeat bg-left">
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
                            Why Most First-Time <br />
                            2026: The Book <span className="text-brand-secondary font-shaded italic font-light text-[40px]">Authors Fail </span> <br />
                            at Self-Publishing (And How to Avoid It)
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
