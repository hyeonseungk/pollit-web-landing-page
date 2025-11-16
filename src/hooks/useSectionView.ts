"use client";

import { useEffect, useRef } from "react";
import { trackSectionView } from "@/lib/analytics";

type Options = {
  threshold?: number;
};

export function useSectionView(sectionName: string, options?: Options) {
  const elementRef = useRef<HTMLElement | null>(null);
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTrackedRef.current) {
          trackSectionView(sectionName);
          hasTrackedRef.current = true;
        }
      },
      {
        threshold: options?.threshold ?? 0.4,
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [sectionName, options?.threshold]);

  return elementRef;
}


