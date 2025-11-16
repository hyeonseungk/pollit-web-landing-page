import type { Metadata } from "next";
import "./globals.css";
import { ClientSideInit } from "@/components/ClientSideInit";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { StructuredDataScripts } from "@/components/StructuredDataScripts";
import { DESCRIPTION, KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/constants";

const PAGE_TITLE =
  "폴잇 | 직장인&전문직 블라인드 소개팅앱으로 진짜 연애 상대 찾기 - 결정사 대신 스마트한 소개팅 매칭 서비스";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "폴잇 - 직장인&전문직 블라인드 소개팅앱",
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
