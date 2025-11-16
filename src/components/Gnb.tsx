import Link from "next/link";

export function Gnb() {
  return (
    <header className="gnb">
      <div className="gnb-container">
        <Link href="/" className="gnb-logo" aria-label="폴잇 메인으로 이동">
          <img src="/logo.png" alt="" width={32} height={32} loading="lazy" />
          <span>폴잇</span>
        </Link>
        <nav className="gnb-menu" aria-label="주요 메뉴">
          <Link href="/term-service">서비스 약관</Link>
          <Link href="/term-privacy">개인정보 처리방침</Link>
        </nav>
      </div>
    </header>
  );
}

