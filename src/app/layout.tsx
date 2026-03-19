import type { Metadata } from "next";
import { Syne, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import { Suspense } from "react";
import FacebookPixel from "@/components/FacebookPixel";
import Script from "next/script";

const ShadedLarsh = localFont({
  src: "../../public/fonts/shaded-larsh.ttf",
  variable: "--font-shaded-larsh",
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aeropublishing.us"),
  title: {
    default: "Publish Your Book with Aero – Ghostwriting, Editing & More",
    template: "%s | Aero Publishing",
  },
  description:
    "Turn your manuscript into a published book with Aero Publishing's expert services—ghostwriting, editing, design, and global book marketing included.",
  keywords: [
    "book publishing",
    "ghostwriting services",
    "book editing",
    "book marketing",
    "self publishing",
    "book cover design",
  ],
  openGraph: {
    title: "Publish Your Book with Aero – Ghostwriting, Editing & More",
    description:
      "Turn your manuscript into a published book with Aero Publishing's expert services—ghostwriting, editing, design, and global marketing.",
    url: "https://aeropublishing.us",
    siteName: "Aero Publishing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aero Publishing",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Publish Your Book with Aero",
    description:
      "Ghostwriting, editing, publishing and marketing services for authors.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon-3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external origins — eliminates connection setup delays */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://embed.tawk.to" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload hero background image — fixes LCP */}
        <link
          rel="preload"
          href="/hero-bg.png"
          as="image"
          type="image/png"
        />

        <link rel="icon" href="/favicon-3.png" />
      </head>
      <body
        className={`${syne.variable} ${poppins.variable} ${ShadedLarsh.variable} antialiased`}
      >
        {/* Wrap in Suspense to prevent build-time errors with useSearchParams */}
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-ML8Q9N76"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel Code (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1595522894901835&ev=PageView&noscript=1"
          />
        </noscript>

        <Header />
        {children}
        <Footer />
        <PromoPopup />

        {/* ── Deferred 3rd-party scripts (afterInteractive = no render blocking) ── */}

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-ML8Q9N76');`,
          }}
        />

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NDYR2R3WP0"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NDYR2R3WP0');
            `,
          }}
        />

        {/* Meta Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1595522894901835');fbq('track','PageView');`,
          }}
        />

        {/* Tawk.to Live Chat — deferred so it never blocks rendering */}
        <Script
          id="tawk-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6855bbafc96da61913b7204e/1iu7ea9e7';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
