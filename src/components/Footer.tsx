"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 bg-white px-4">
            <div
                className="max-w-[1140px] mx-auto rounded-[50px] overflow-hidden relative bg-cover bg-center min-h-[400px] flex flex-col justify-between"
                style={{ backgroundImage: "url('/connect-with-us.png')" }}
            >

                <div className="relative z-10 px-12 pt-20 pb-12 grid grid-cols-1 md:grid-cols-12 gap-12 text-white">
                    {/* Brand Column */}
                    <div className="md:col-span-3 space-y-6">
                        {/* Logo Placeholder - simplified text/icon match */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-26">
                                <img src="/footer-logo.png" alt="Aero Publishing" className="w-full h-auto object-contain" />
                            </div>
                        </div>

                        <p className="text-sm font-poppins leading-relaxed opacity-90 max-w-[250px]">
                            Get An Idea. Get Published, Get Fame. Get Paid. Get Away And Explore.
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-[#36C0E7] font-syne font-bold text-lg mb-4">Contact</h4>
                        <div className="space-y-4 font-poppins text-sm opacity-90">
                            <p>12501 Center Dr, South Gate,<br />CA 90201, United States</p>
                            <p>760 280 1847</p>
                            <p>www.aeropublishing.com</p>
                        </div>
                    </div>

                    {/* Social Media Column */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-[#36C0E7] font-syne font-bold text-lg mb-4">Social Media</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all duration-300 group">
                                <FaFacebookF size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all duration-300 group">
                                <FaInstagram size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all duration-300 group">
                                <FaLinkedinIn size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all duration-300 group">
                                <FaTwitter size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 border-t border-white/20 px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/70 font-poppins">
                    <p>Powered by Aero Publishing . All rights reserved.</p>
                    <div className="flex gap-1">
                        <Link href="#" className="hover:text-white transition-colors text-brand-secondary">Terms & Conditions</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
