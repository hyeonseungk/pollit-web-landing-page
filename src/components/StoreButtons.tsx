'use client';

import { useEffect, useMemo, useState } from "react";
import { STORE_URLS } from "@/lib/constants";
import {
  DownloadLocation,
  detectOS,
  trackAppDownload,
  trackStoreCta,
} from "@/lib/analytics";

type Props = {
  location: DownloadLocation;
  className?: string;
};

const EVENT_LABEL_MAP: Record<
  DownloadLocation,
  { ios: string; android: string }
> = {
  hero: { ios: "Hero App Store", android: "Hero Play Store" },
  cta: { ios: "CTA App Store", android: "CTA Play Store" },
  footer: { ios: "Footer App Store", android: "Footer Play Store" },
  "404_page": { ios: "404 Page App Store", android: "404 Page Play Store" },
};

const BUTTONS = [
  {
    platform: "android" as const,
    className: "store-btn google",
    label: "Play Store",
    icon: (
      <img
        src="/playstore.png"
        alt=""
        width={20}
        height={20}
        loading="lazy"
        aria-hidden="true"
      />
    ),
    href: STORE_URLS.android,
  },
  {
    platform: "ios" as const,
    className: "store-btn apple",
    label: "App Store",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
        />
      </svg>
    ),
    href: STORE_URLS.ios,
  },
];

export function StoreButtons({ location, className }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateMatch = () => setIsMobile(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  const preferredPlatform = useMemo(() => detectOS(), []);

  const orderedButtons = useMemo(() => {
    if (isMobile || preferredPlatform === "unknown") {
      return BUTTONS;
    }

    return [...BUTTONS].sort((a, b) => {
      if (a.platform === preferredPlatform) return -1;
      if (b.platform === preferredPlatform) return 1;
      return 0;
    });
  }, [isMobile, preferredPlatform]);

  const handleClick = (platform: "ios" | "android") => () => {
    trackAppDownload(platform, location);
    const labels = EVENT_LABEL_MAP[location];
    const label = labels?.[platform];

    if (label) {
      trackStoreCta(platform, label, location);
    }
  };

  return (
    <div className={className ?? "store-buttons"}>
      {orderedButtons.map((button) => (
        <a
          key={`${location}-${button.platform}`}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          className={button.className}
          onClick={handleClick(button.platform)}
        >
          <span className="store-icon">{button.icon}</span>
          <span className="store-text">{button.label}</span>
        </a>
      ))}
    </div>
  );
}

