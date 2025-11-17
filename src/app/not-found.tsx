'use client';

import Link from "next/link";
import { useMemo } from "react";
import { StoreButtons } from "@/components/StoreButtons";
import { CONTACT_EMAIL, INSTAGRAM_URL } from "@/lib/constants";
import { trackInstagramClick } from "@/lib/analytics";

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

  const handleInstagramClick = () => {
    trackInstagramClick("404_page");
  };

  const handleBackClick = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  const highlightItems = [
    {
      title: "직장인 인증 100%",
      description: "검증된 직장인만 연결해요",
    },
    {
      title: "무료 맞춤 매칭",
      description: "과금 없이 매일 두근거림",
    },
    {
      title: "실제 후기 기반",
      description: "회원들의 목소리를 반영했어요",
    },
  ];

  const resourceLinks = [
    {
      title: "폴잇 기능 다시 보기",
      description: "믿을 수 있는 매칭 프로세스를 확인하세요",
      href: "/#features",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a1 1 0 0 1 .94.66l2.05 5.63 5.78.1a1 1 0 0 1 .59 1.81l-4.64 3.51 1.73 5.5a1 1 0 0 1-1.52 1.12L12 16.97l-4.93 3.36a1 1 0 0 1-1.52-1.12l1.73-5.5-4.64-3.5a1 1 0 0 1 .6-1.82l5.78-.1 2.05-5.63A1 1 0 0 1 12 2Z"
          />
        </svg>
      ),
    },
    {
      title: "회원 후기 확인",
      description: "직접 경험한 후기와 별점을 살펴보세요",
      href: "/#reviews",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M5 3h14a2 2 0 0 1 2 2v15.5a.5.5 0 0 1-.82.38L15 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
          />
        </svg>
      ),
    },
    {
      title: "Instagram 소식",
      description: "신규 기능과 이벤트를 빠르게 받아보세요",
      href: INSTAGRAM_URL,
      isExternal: true,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5m0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5m5.25-3a1 1 0 1 1-1 1 1 1 0 0 1 1-1"
          />
        </svg>
      ),
      onClick: handleInstagramClick,
    },
  ];

  return (
    <div className="error-page">
      <div className="error-shell">
        <header className="error-header">
          <Link href="/" className="error-logo">
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
          </Link>
          <div className="error-code-badge">
            <span className="error-code-number">404</span>
            <p>찾으시는 페이지가 보이지 않습니다</p>
          </div>
        </header>

        <div className="error-grid">
          <section className="error-main">
            <p className="error-eyebrow">직장인 소개팅 앱 폴잇</p>
            <h1 className="error-title">
              길을 잃었지만,
              <br />
              인연은 계속 이어집니다
            </h1>
            <p className="error-copy">
              요청하신 페이지가 삭제되었거나 주소가 바뀐 것 같아요.
              <br />
              원하는 정보를 빠르게 찾을 수 있도록 아래에서 안내를 도와드릴게요.
            </p>

            <div className="error-cta">
              <Link href="/" className="error-button primary">
                <span>홈으로 이동</span>
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M5 12h12.17l-4.58-4.59L14 6l7 7-7 7-1.41-1.41L17.17 13H5z"
                  />
                </svg>
              </Link>
              <button
                type="button"
                className="error-button ghost"
                onClick={handleBackClick}
              >
                이전 페이지로 돌아가기
              </button>
            </div>

            <div className="error-store">
              <div>
                <p className="error-store-label">앱에서 바로 이어가기</p>
                <span className="error-store-helper">
                  iOS / Android에서 무료 매칭을 시작하세요
                </span>
              </div>
              <StoreButtons
                location="404_page"
                className="error-store-buttons"
              />
            </div>

            <div className="error-highlight-grid">
              {highlightItems.map((item) => (
                <div key={item.title} className="error-highlight-card">
                  <span className="error-highlight-dot" aria-hidden="true" />
                  <div>
                    <p className="error-highlight-title">{item.title}</p>
                    <p className="error-highlight-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="error-panel" aria-label="도움이 필요한가요?">
            <div className="error-panel-heading">
              <p className="error-panel-eyebrow">Need a shortcut?</p>
              <h2>원하는 정보를 더 빠르게 찾아보세요</h2>
              <p>
                자주 방문하시는 섹션과 최신 소식을 모았어요. 아래 링크를 통해
                바로 이동할 수 있습니다.
              </p>
            </div>

            <div className="error-links">
              {resourceLinks.map((link) => {
                const content = (
                  <>
                    <div className="error-link-icon" aria-hidden="true">
                      {link.icon}
                    </div>
                    <div className="error-link-text">
                      <p className="error-link-title">{link.title}</p>
                      <p className="error-link-desc">{link.description}</p>
                    </div>
                    <span className="error-link-arrow" aria-hidden="true">
                      {link.isExternal ? ">" : ">"}
                    </span>
                  </>
                );

                return link.isExternal ? (
                  <a
                    key={link.title}
                    href={link.href}
                    className="error-link-card"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={link.onClick}
                  >
                    {content}
                  </a>
                ) : (
                  <Link key={link.title} href={link.href} className="error-link-card">
                    {content}
                  </Link>
                );
              })}
            </div>

            <div className="error-report-card">
              <div>
                <p className="error-report-title">
                  문제가 반복된다면 알려주세요
                </p>
                <p className="error-report-desc">
                  링크가 끊어졌거나 접근이 어려운 페이지가 있다면 24시간 내로
                  확인해드릴게요.
                </p>
              </div>
              <a href={reportHref} className="error-report-link">
                문제 신고하기
              </a>
              <p className="error-contact">
                또는{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="error-contact-link">
                  {CONTACT_EMAIL}
                </a>{" "}
                로 문의하시면 빠르게 도와드릴게요.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}