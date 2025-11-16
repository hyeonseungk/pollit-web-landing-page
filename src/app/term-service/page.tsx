import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { termServiceHtml } from "@/content/termService";

export const metadata: Metadata = {
  title: "서비스 약관 - 폴잇",
  description: "폴잇 서비스 약관 페이지",
};

export default function TermServicePage() {
  return <PolicyPage title="서비스 약관" contentHtml={termServiceHtml} />;
}

