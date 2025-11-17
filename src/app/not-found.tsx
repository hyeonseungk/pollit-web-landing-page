'use client';

import Link from "next/link";
import { useMemo } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";

const baseMailSubject = encodeURIComponent("404 에러 신고");

const getMailBody = () => {
  if (typeof window === "undefined") {
    return "";
  }
  const currentURL = window.location.href;
  return encodeURIComponent(
    `문제가 발생한 페이지 주소: ${currentURL}\n\n추가 정보:\n`
  );
};

export default function NotFoundPage() {
  const reportHref = useMemo(() => {
    const base = `mailto:${CONTACT_EMAIL}?subject=${baseMailSubject}&body=`;
    const body = getMailBody();
    return `${base}${body}`;
  }, []);

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="not-found-page">
      <div className="not-found-card">
        <p className="not-found-eyebrow">요청하신 페이지를 찾지 못했어요</p>
        <p className="not-found-code" aria-label="404 오류">
          404
        </p>
        <h1 className="not-found-title">
          입력하신 주소가 잘못되었거나<br />페이지가 삭제되었습니다.
        </h1>
        <p className="not-found-description">
          필요한 정보는 홈에서 가장 빠르게 찾을 수 있어요.
          <br />
          아래 버튼으로 바로 이동하거나 이전 페이지로 돌아가 주세요.
        </p>

        <div className="not-found-actions">
          <Link href="/" className="not-found-btn primary">
            홈으로 이동
          </Link>
          <button
            type="button"
            className="not-found-btn secondary"
            onClick={handleBackClick}
          >
            이전 페이지
          </button>
        </div>

        <div className="not-found-support">
          <p>문제가 반복된다면 아래 링크로 알려주세요.</p>
          <a href={reportHref} className="not-found-link">
            문제 신고하기
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="not-found-mail">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}