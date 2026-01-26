"use client";

import { useState } from "react";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: "primary" | "secondary";
    className?: string;
    font?: "syne" | "poppins" | "shaded";
}

export default function Button({
    children,
    onClick,
    href,
    variant = "primary",
    className = "",
    font = "syne"
}: ButtonProps) {
    const [isHovering, setIsHovering] = useState(false);
    const [animationClass, setAnimationClass] = useState("");

    const variantStyles = {
        primary: {
            baseColor: "#3F3774",
            fillerColor: "#FE695B",
            baseTextColor: "#FFFFFF",
            hoverTextColor: "#FFFFFF",
        },
        secondary: {
            baseColor: "#FE695B",
            fillerColor: "#3F3774",
            baseTextColor: "#FFFFFF",
            hoverTextColor: "#FFFFFF",
        },
    };

    const fontClasses = {
        syne: "font-syne",
        poppins: "font-poppins",
        shaded: "font-shaded",
    };

    const styles = variantStyles[variant];
    const fontClass = fontClasses[font];

    const handleMouseEnter = () => {
        setIsHovering(true);
        setAnimationClass("hover-in");
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setAnimationClass("hover-out");
    };

    const Component = href ? "a" : "button";

    return (
        <Component
            href={href}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`
        button-wave
        ${animationClass}
        ${fontClass}
        appearance-none
        border-0
        max-w-xs
        px-8
        h-10
        text-sm
        rounded-full
        overflow-hidden
        flex
        items-center
        justify-center
        relative
        font-[600]
        tracking-wide
        transition-none
        cursor-pointer
        ${className}
      `}
            style={{
                backgroundColor: styles.baseColor,
                color: styles.baseTextColor,
                // @ts-ignore
                "--baseColor": styles.baseColor,
                "--fillerColor": styles.fillerColor,
                "--baseTextColor": styles.baseTextColor,
                "--hoverTextColor": styles.hoverTextColor,
            }}
        >
            <span className="button__text relative z-10 block">
                {children}
            </span>
            <div
                className="button__filler absolute w-[150%] h-[200%] rounded-[50%] top-[-50%] left-[-25%] z-[1]"
                style={{
                    backgroundColor: styles.fillerColor,
                }}
            />
        </Component>
    );
}
