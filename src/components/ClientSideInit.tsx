'use client';

import { useEffect } from "react";
import { trackPerformanceMetric } from "@/lib/analytics";

const supportsWebP = () => {
  try {
    const canvas = document.createElement("canvas");
    return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  } catch {
    return false;
  }
};

export function ClientSideInit() {
  useEffect(() => {
    document.body.classList.add("loading");
    const timer = setTimeout(() => {
      document.body.classList.remove("loading");
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("loading");
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement.classList;
    if (root.contains("webp") || root.contains("no-webp")) {
      return;
    }

    if (supportsWebP()) {
      root.add("webp");
    } else {
      root.add("no-webp");
    }
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      const [navigationEntry] = performance.getEntriesByType(
        "navigation"
      ) as PerformanceNavigationTiming[];

      if (!navigationEntry) {
        return;
      }

      const loadTime =
        navigationEntry.loadEventEnd - navigationEntry.loadEventStart;

      if (loadTime > 0) {
        trackPerformanceMetric("load_time", loadTime);
      }
    };

    if ("performance" in window) {
      window.addEventListener("load", handleLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return null;
}

