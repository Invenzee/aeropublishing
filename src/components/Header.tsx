"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "About", href: "/about" },
    { name: "Services", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "#" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
            >
                <div className="max-w-[1140px] mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                            <Image src="/logo.png" alt="Logo" width={100} height={100} />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="flex items-center gap-12">
                            <nav className="hidden md:flex space-x-10 items-center">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative group"
                                    >
                                        <Link
                                            href={item.href}
                                            className="text-base font-poppins font-medium text-brand-black transition-colors relative group-hover:text-brand-secondary"
                                        >
                                            {item.name}

                                            {/* Animated underline */}
                                            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-brand-secondary transition-all duration-300 group-hover:w-full" />

                                            {/* Animated dot */}
                                            <motion.span
                                                className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand-secondary rounded-full opacity-0"
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileHover={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.2 }}
                                            />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* CTA Button - Desktop */}
                            <div className="hidden md:flex items-center">
                                <Button variant="secondary" className="!px-6 !py-2.5 !text-base">
                                    Get Started
                                </Button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait">
                                    {mobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-6 h-6 text-brand-black" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="w-6 h-6 text-brand-black" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                            onClick={toggleMobileMenu}
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-20 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-40 md:hidden overflow-y-auto"
                        >
                            <div className="p-6 space-y-6">
                                {/* Mobile Navigation */}
                                <nav className="space-y-1">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={toggleMobileMenu}
                                                className="block px-4 py-3 rounded-lg font-poppins font-medium text-brand-black hover:bg-brand-light hover:text-brand-secondary transition-all"
                                            >
                                                <motion.div
                                                    whileHover={{ x: 4 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {item.name}
                                                </motion.div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Mobile CTA */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-4 border-t border-gray-200"
                                >
                                    <Button variant="secondary" className="w-full !text-base">
                                        Get Started
                                    </Button>
                                </motion.div>

                                {/* Decorative Element */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.6, type: "spring" }}
                                    className="absolute bottom-6 right-6 w-32 h-32 bg-gradient-to-br from-brand-secondary/10 to-brand-accent/10 rounded-full blur-2xl -z-10"
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
