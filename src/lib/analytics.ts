declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type AppPlatform = "ios" | "android" | "unknown";

export type DownloadLocation = "hero" | "cta" | "footer" | "404_page";

const hasWindow = () => typeof window !== "undefined";

const sendGtagEvent = (eventName: string, params: Record<string, unknown>) => {
  if (!hasWindow() || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, params);
};

export const trackAppDownload = (
  platform: AppPlatform,
  location: DownloadLocation
) => {
  sendGtagEvent("app_download_click", {
    platform,
    location,
    app_name: "pollit",
    event_category: "engagement",
    event_label: `${platform}_${location}`,
  });
};

export const trackStoreCta = (
  platform: Exclude<AppPlatform, "unknown">,
  label: string,
  location: DownloadLocation
) => {
  sendGtagEvent("app_download_click", {
    event_category: "App Download",
    event_label: label,
    app_platform: platform === "ios" ? "iOS" : "Android",
    button_location: location,
    custom_parameter_1: `${location}_${platform}`,
  });
};

export const trackInstagramClick = (location: "footer" | "404_page" | "main") => {
  sendGtagEvent("social_media_click", {
    event_category: "Social Media",
    event_label: location === "footer" ? "Instagram" : `Instagram_${location}`,
    social_platform: "Instagram",
    button_location: location,
    custom_parameter_1: `instagram_${location}`,
  });
};

export const trackPerformanceMetric = (metric: string, value: number) => {
  sendGtagEvent("page_load_time", {
    event_category: "performance",
    event_label: metric,
    value: Math.round(value),
  });
};

export const detectOS = (): AppPlatform => {
  if (!hasWindow()) {
    return "unknown";
  }

  const win = window as Window & { opera?: string; MSStream?: unknown };
  const userAgent = navigator.userAgent || navigator.vendor || win.opera || "";

  if (/android/i.test(userAgent)) {
    return "android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !win.MSStream) {
    return "ios";
  }

  return "unknown";
};

