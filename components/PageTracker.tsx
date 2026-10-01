"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    window.gtag?.("event", "page_view", {
      page_path: pathname,
    });

    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
