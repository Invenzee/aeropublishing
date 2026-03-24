"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// This tells TypeScript that 'fbq' exists on the window object
declare global {
  interface Window {
    fbq: any;
  }
}

export default function FacebookPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // We check if window and fbq are available
    if (typeof window !== "undefined" && window.fbq) {
      // Use requestIdleCallback for non-critical tracking
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          window.fbq("track", "PageView");
        });
      } else {
        setTimeout(() => {
          window.fbq("track", "PageView");
        }, 1000);
      }
    }
  }, [pathname, searchParams]); 

  return null;
}