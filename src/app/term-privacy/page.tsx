import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/PolicyPage";
import { termPrivacyHtml } from "@/content/termPrivacy";

export const metadata: Metadata = {
  title: "개인정보 처리방침 - 폴잇",
  description: "폴잇 개인정보 처리방침 페이지",
};

export default function TermPrivacyPage() {
  return (
    <PolicyPage
      title="개인정보 처리방침"
      contentHtml={termPrivacyHtml}
      bottomAction={
        <Link href="/delete-my-data" className="policy-bottom-link">
          계정 및 데이터 삭제 요청
        </Link>
      }
    />
  );
}

