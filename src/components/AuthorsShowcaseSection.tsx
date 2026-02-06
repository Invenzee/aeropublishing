"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        id: 1,
        name: "Jaya Stewart",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        avatar: "/testimonial.png",
        width: "w-[400px] max-sm:w-[280px]"
    },
    {
        id: 2,
        name: "Emilia",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ",
        avatar: "/testimonial.png",
        width: "w-[320px] max-sm:w-[280px]"
    },
    {
        id: 3,
        name: "Andrea",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        avatar: "/testimonial.png ",
        width: "w-[380px] max-sm:w-[280px]"
    },
    {
        id: 4,
        name: "Claudia",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        avatar: "/testimonial.png",
        width: "w-[300px] max-sm:w-[280px]"
    },
    {
        id: 5,
        name: "Hanna",
        text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ",
        avatar: "/testimonial.png",
        width: "w-[420px] max-sm:w-[280px]"
    },
    {
        id: 6,
        name: "John Smith",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        avatar: "/testimonial.png",
        width: "w-[350px] max-sm:w-[280px]"
    },
    {
        id: 7,
        name: "Cordelia",
        text: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        avatar: "/testimonial.png",
        width: "w-[300px] max-sm:w-[280px]"
    },
    {
        id: 8,
        name: "Yasmin",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        avatar: "/testimonial.png",
        width: "w-[360px] max-sm:w-[280px]"
    }
];

// Duplicate reviews to fill rows for seamless scrolling
const row1 = [...reviews, ...reviews, ...reviews];
const row2 = [...reviews].reverse().concat([...reviews].reverse());
const row3 = [...reviews, ...reviews, ...reviews];

export default function AuthorsShowcaseSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);
    const row3Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Row 1 & 3 move LEFT (negative X)
            gsap.to(row1Ref.current, {
                x: -500,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });

            gsap.to(row3Ref.current, {
                x: -600,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                }
            });

            // Row 2 moves RIGHT (positive X) - start form left to allow movement
            gsap.fromTo(row2Ref.current,
                { x: -500 },
                {
                    x: 100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.2,
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative py-20 bg-brand-light overflow-hidden">
            {/* Header */}
            <div className="text-center mb-16 relative z-10 px-6">
                <h2 className="text-[50px] font-syne font-[400] leading-[1] text-brand-primary max-sm:text-[32px]">
                    Authors Around the World Trust <br />
                    <span className="text-brand-secondary font-shaded font-[400] text-[60px]max-sm:text-[40px]"> Aero Publishing </span>
                    <span className="font-bold">With Their Books</span>
                </h2>
            </div>

            {/* Scroll Container */}
            <div ref={containerRef} className="flex flex-col gap-6 relative pb-10">

                {/* Left Gradient Overlay - using brand-light color #F3F3F3 */}
                <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#F3F3F3] to-transparent z-20 pointer-events-none" />
                {/* Right Gradient Overlay */}
                <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#F3F3F3] to-transparent z-20 pointer-events-none" />


                {/* Row 1 */}
                <div ref={row1Ref} className="flex items-start gap-6 w-max pl-10">
                    {row1.map((item, i) => (
                        <ReviewCard key={`r1-${i}`} item={item} />
                    ))}
                </div>

                {/* Row 2 */}
                <div ref={row2Ref} className="flex items-start gap-6 w-max -ml-[500px]">
                    {row2.map((item, i) => (
                        <ReviewCard key={`r2-${i}`} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ReviewCard({ item }: { item: any }) {
    return (
        <div className={`bg-white p-6 max-sm:p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 shrink-0 transition-all hover:shadow-md ${item.width}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
                        <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-syne font-bold text-sm text-brand-primary whitespace-nowrap">{item.name}</span>
                </div>
                {/* Google G Logo Placeholder */}
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                </div>
            </div>
            <p className="text-[13px] font-poppins text-gray-500 leading-relaxed max-sm:text-[10px]">
                {item.text}
            </p>
        </div>
    )
}
