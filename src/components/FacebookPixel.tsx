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
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]); 

  return null;
}