import Link from "next/link";
import {
  COMPANY_NAME,
  COMPANY_ADDRESS,
  BUSINESS_REG_NUMBER,
  CONTACT_EMAIL,
  MAIL_ORDER_NUMBER,
  REPRESENTATIVE_NAME,
} from "@/lib/constants";
import { InstagramLink } from "@/components/InstagramLink";
import { ThreadsLink } from "@/components/ThreadsLink";

const policyLinks = [
  { label: "서비스 약관", href: "/term-service" },
  { label: "개인정보 처리방침", href: "/term-privacy" },
  {
    label: "고객센터",
    href: "https://open.kakao.com/o/skVEvBbg",
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="company-info">
          <div className="social-media" id="sns">
            <h4>폴잇과 함께하세요</h4>
            <div className="social-links">
              <InstagramLink className="social-link instagram" />
              <ThreadsLink className="social-link threads" />
            </div>
          </div>
          <div className="company-details">
            <h4>{COMPANY_NAME}</h4>
            <div className="info-grid">
              <div className="info-item">
                <span className="label">이메일</span>
                <span className="value">{CONTACT_EMAIL}</span>
              </div>
              <div className="info-item">
                <span className="label">통신판매업</span>
                <span className="value">{MAIL_ORDER_NUMBER}</span>
              </div>
              <div className="info-item">
                <span className="label">대표</span>
                <span className="value">{REPRESENTATIVE_NAME}</span>
              </div>
              <div className="info-item">
                <span className="label">사업자 번호</span>
                <span className="value">{BUSINESS_REG_NUMBER}</span>
              </div>
              <div className="info-item address">
                <span className="label">주소</span>
                <span className="value">{COMPANY_ADDRESS}</span>
              </div>
            </div>
            <div className="policy-links">
              {policyLinks.map(({ label, href, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

