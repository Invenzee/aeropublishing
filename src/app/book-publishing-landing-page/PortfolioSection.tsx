"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Book {
    id: number;
    image: string;
    title: string;
}

interface Category {
    id: string;
    label: string;
    books: Book[];
}

interface PortfolioSectionProps {
    title?: string;
    categories?: Category[];
}

export default function PortfolioSection({
    title = "Portfolio",
    categories = defaultCategories,
}: PortfolioSectionProps) {

    const [activeTab, setActiveTab] = useState<string>("");

    // ✅ FIX: sync active tab when categories load/change
    useEffect(() => {
        if (categories && categories.length > 0) {
            setActiveTab(categories[0].id);
        }
    }, [categories]);

    const activeCategory = categories.find(
        (cat) => cat.id === activeTab
    );

    return (
        <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 relative z-40">
            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-primary">
                    {title}
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors cursor-pointer
                                ${
                                    activeTab === category.id
                                        ? "bg-brand-primary text-white border-brand-primary"
                                        : "bg-white text-brand-gray border-gray-300 hover:border-brand-primary hover:text-brand-primary"
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Books Grid */}
                {activeCategory && activeCategory.books.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {activeCategory.books.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-brand-muted">
                            No books in this category yet.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

function BookCard({ book }: { book: Book }) {
    return (
        <div className="rounded-lg overflow-hidden border border-gray-200 bg-white">
            <div className="relative w-full aspect-[2/3] bg-brand-light">
                <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    );
}


// ✅ Default Data
const defaultCategories: Category[] = [
    {
        id: "business",
        label: "Business",
        books: [
            { id: 1, image: "/book-landing-page-11.png", title: "Business Strategy Guide" },
            { id: 2, image: "/book-landing-page-4.png", title: "Entrepreneurship 101" },
            { id: 3, image: "/book-landing-page-5.png", title: "Corporate Excellence" },
            { id: 4, image: "/book-landing-page-6.png", title: "Leadership Mastery" },
        ],
    },
    {
        id: "adventure",
        label: "Adventure",
        books: [
            { id: 5, image: "/book-landing-page-7.png", title: "Journey to Unknown" },
            { id: 6, image: "/book-landing-page-8.png", title: "Wild Expeditions" },
            { id: 7, image: "/book-landing-page-9.png", title: "Adventure Awaits" },
            { id: 8, image: "/book-landing-page-10.png", title: "Explorer's Diary" },
        ],
    },
    {
        id: "religious",
        label: "Religious",
        books: [
            { id: 9, image: "/book-landing-page-11.png", title: "Spiritual Awakening" },
            { id: 10, image: "/book-landing-page-4.png", title: "Faith & Devotion" },
            { id: 11, image: "/book-landing-page-5.png", title: "Sacred Wisdom" },
            { id: 12, image: "/book-landing-page-6.png", title: "Divine Teachings" },
        ],
    },
    {
        id: "children",
        label: "Children's",
        books: [
            { id: 13, image: "/book-landing-page-7.png", title: "Adventures of Pip" },
            { id: 14, image: "/book-landing-page-8.png", title: "Magic Kingdom" },
            { id: 15, image: "/book-landing-page-9.png", title: "Bedtime Stories" },
            { id: 16, image: "/book-landing-page-10.png", title: "Rainbow Tales" },
        ],
    },
    {
        id: "fiction",
        label: "Fiction",
        books: [
            { id: 17, image: "/book-landing-page-11.png", title: "The Lost City" },
            { id: 18, image: "/book-landing-page-4.png", title: "Whispers in the Dark" },
            { id: 19, image: "/book-landing-page-5.png", title: "Love & Betrayal" },
            { id: 20, image: "/book-landing-page-6.png", title: "Mystery Unfolded" },
        ],
    },
    {
        id: "biography",
        label: "Biography",
        books: [
            { id: 21, image: "/book-landing-page-7.png", title: "Life Untold" },
            { id: 22, image: "/book-landing-page-8.png", title: "Success Stories" },
            { id: 23, image: "/book-landing-page-9.png", title: "Journey of a Legend" },
            { id: 24, image: "/book-landing-page-10.png", title: "My Memoir" },
        ],
    },
    {
        id: "poetry",
        label: "Poetry",
        books: [
            { id: 25, image: "/book-landing-page-11.png", title: "Words of the Soul" },
            { id: 26, image: "/book-landing-page-4.png", title: "Verses & Dreams" },
            { id: 27, image: "/book-landing-page-5.png", title: "Poetry Collection" },
            { id: 28, image: "/book-landing-page-6.png", title: "Emotions in Verse" },
        ],
    },
];