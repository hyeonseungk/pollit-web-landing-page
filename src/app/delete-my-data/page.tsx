import type { Metadata } from "next";
import { DeleteMyDataPageClient } from "@/components/DeleteMyDataPageClient";
import { Footer } from "@/components/Footer";
import { SITE_NAME } from "@/lib/constants";

const PAGE_TITLE = "계정 및 데이터 삭제 요청";
const PAGE_DESCRIPTION =
  "폴잇 계정과 데이터 삭제 요청을 위한 전용 페이지입니다. 가입 이메일과 닉네임을 입력하면 최대 2일 이내에 데이터를 안전하게 삭제해 드립니다.";

export const metadata: Metadata = {
  title: `${PAGE_TITLE} | ${SITE_NAME}`,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function DeleteMyDataPage() {
  return (
    <>
      <DeleteMyDataPageClient />
      <Footer />
    </>
  );
}

