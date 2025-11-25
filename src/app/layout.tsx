import type { Metadata } from "next";
import "./globals.css";
import { ClientSideInit } from "@/components/ClientSideInit";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { StructuredDataScripts } from "@/components/StructuredDataScripts";
import { DESCRIPTION, KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/constants";

const PAGE_TITLE =
  "직장인 솔로를 위한 착한 소개팅앱, 폴잇";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  title: {
    default: PAGE_TITLE,
    template: "%s | 폴잇",
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: PAGE_TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "이때까지 없던 착한 소개팅앱 폴잇",
      },
      {
        url: "/og-image.png",
        width: 600,
        height: 315,
        alt: "직장인 솔로를 위한 가치관 소개팅앱 폴잇",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ClientSideInit />
        {children}
        <AnalyticsScripts />
        <StructuredDataScripts />
      </body>
    </html>
  );
}
