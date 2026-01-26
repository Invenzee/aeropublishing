import type { Metadata } from "next";
import { Syne, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const ShadedLarsh = localFont({
  src: "../../public/fonts/shaded-larsh.ttf",
  variable: "--font-shaded-larsh",
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Aero Publishing",
  description: "Aero Publishing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${syne.variable} ${poppins.variable} ${ShadedLarsh.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
