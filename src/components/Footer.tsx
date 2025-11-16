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

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="company-info">
          <div className="social-media">
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
          </div>
        </div>
      </div>
    </footer>
  );
}

