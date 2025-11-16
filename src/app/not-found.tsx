'use client';

import Link from "next/link";
import { useMemo } from "react";
import { CONTACT_EMAIL, INSTAGRAM_URL, STORE_URLS } from "@/lib/constants";
import {
  trackAppDownload,
  trackInstagramClick,
  trackStoreCta,
} from "@/lib/analytics";

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

  const handleAppStoreClick = () => {
    trackAppDownload("ios", "404_page");
    trackStoreCta("ios", "404 Page App Store", "404_page");
  };

  const handlePlayStoreClick = () => {
    trackAppDownload("android", "404_page");
    trackStoreCta("android", "404 Page Play Store", "404_page");
  };

  const handleInstagramClick = () => {
    trackInstagramClick("404_page");
  };

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-logo">
          <picture>
            <source srcSet="/logo.webp" type="image/webp" />
            <img
              src="/logo.png"
              alt="폴잇 로고"
              className="error-logo-image"
              loading="lazy"
            />
          </picture>
          <span className="error-logo-text">폴잇</span>
        </div>

        <div className="error-number">404</div>
        <h1 className="error-title">페이지를 찾을 수 없습니다</h1>
        <p className="error-description">
          요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
          <br />
          <strong>폴잇 사이트는 정상적으로 작동하고 있습니다.</strong>
          <br />
          아래 링크를 통해 원하시는 정보를 찾아보세요.
        </p>

        <div className="error-actions">
          <Link href="/" className="error-button">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            홈페이지로 돌아가기
          </Link>
          <button type="button" className="error-button secondary" onClick={handleBackClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
            이전 페이지로 이동
          </button>
        </div>

        <div className="helpful-links">
          <h3>도움이 될 만한 링크</h3>
          <div className="links-grid">
            <a
              href={STORE_URLS.ios}
              className="help-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleAppStoreClick}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store 다운로드
            </a>
            <a
              href={STORE_URLS.android}
              className="help-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePlayStoreClick}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5"
                  fill="#01875f"
                />
                <path
                  d="M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12"
                  fill="#ffbc00"
                />
                <path
                  d="M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81"
                  fill="#ff5722"
                />
                <path
                  d="M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66"
                  fill="#4285f4"
                />
              </svg>
              Play Store 다운로드
            </a>
            <a
              href={INSTAGRAM_URL}
              className="help-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInstagramClick}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
              Instagram 팔로우
            </a>
          </div>
        </div>

        <div className="report-issue">
          <p>지속적으로 문제가 발생하거나 끊어진 링크를 발견하셨나요?</p>
          <a href={reportHref} className="report-link">
            문제 신고하기
          </a>
        </div>
      </div>
    </div>
  );
}

