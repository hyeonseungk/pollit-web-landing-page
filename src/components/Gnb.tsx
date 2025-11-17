"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type MenuItem = {
  label: string;
  href: string;
  hash?: string;
};

export function Gnb() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const anchorMenuItems: MenuItem[] = [
    { label: "폴잇이 좋은 이유", href: "/#features", hash: "#features" },
    { label: "후기", href: "/#reviews", hash: "#reviews" },
    { label: "SNS", href: "/#sns", hash: "#sns" },
    { label: "매거진", href: "/magazine" },
  ];

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigate = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (hash: string) => {
    if (typeof window === "undefined") return;
    const target = document.querySelector(hash);
    if (!target) return;
    const gnbElement = document.querySelector(".gnb");
    const headerHeight = gnbElement
      ? gnbElement.getBoundingClientRect().height
      : 0;
    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: MenuItem
  ) => {
    if (item.hash && pathname === "/") {
      event.preventDefault();
      scrollToSection(item.hash);
    }
    handleNavigate();
  };

  return (
    <header className="gnb">
      <div className="gnb-container">
        <Link
          href="/"
          className="gnb-logo"
          aria-label="폴잇 메인으로 이동"
          onClick={handleNavigate}
        >
          <img src="/logo.png" alt="" width={32} height={32} loading="lazy" />
          <span>폴잇</span>
        </Link>
        <nav
          id="gnb-menu"
          className={`gnb-menu${isMenuOpen ? " is-open" : ""}`}
          aria-label="주요 메뉴"
        >
          {anchorMenuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(event) => handleMenuItemClick(event, item)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className={`gnb-menu-toggle${isMenuOpen ? " is-open" : ""}`}
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isMenuOpen}
          aria-controls="gnb-menu"
          onClick={handleToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

