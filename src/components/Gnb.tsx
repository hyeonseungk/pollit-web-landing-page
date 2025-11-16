\"use client\";

import Link from \"next/link\";
import { useState } from \"react\";

export function Gnb() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigate = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className=\"gnb\">
      <div className=\"gnb-container\">
        <Link
          href=\"/\"
          className=\"gnb-logo\"
          aria-label=\"폴잇 메인으로 이동\"
          onClick={handleNavigate}
        >
          <img src=\"/logo.png\" alt=\"\" width={32} height={32} loading=\"lazy\" />
          <span>폴잇</span>
        </Link>
        <nav
          id=\"gnb-menu\"
          className={`gnb-menu${isMenuOpen ? \" is-open\" : \"\"}`}
          aria-label=\"주요 메뉴\"
        >
          <Link href=\"/term-service\" onClick={handleNavigate}>
            서비스 약관
          </Link>
          <Link href=\"/term-privacy\" onClick={handleNavigate}>
            개인정보 처리방침
          </Link>
        </nav>
        <button
          type=\"button\"
          className={`gnb-menu-toggle${isMenuOpen ? \" is-open\" : \"\"}`}
          aria-label={isMenuOpen ? \"메뉴 닫기\" : \"메뉴 열기\"}
          aria-expanded={isMenuOpen}
          aria-controls=\"gnb-menu\"
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

