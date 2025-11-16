/* eslint-disable @next/next/no-img-element */

import { StoreButtons } from "@/components/StoreButtons";
import { Footer } from "@/components/Footer";
import { Gnb } from "@/components/Gnb";

export default function HomePage() {
  return (
    <>
      <Gnb />
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                직장인을 위한
                <br />
                <span className="hero-title-accent">
                  <span className="highlight">착한</span> 소개팅앱
                </span>{" "}
                <span className="hero-title-accent">폴잇</span>
              </h1>
              <p className="hero-subtitle hero-subtitle-desktop">
                믿을 수 있는 직장인들만
                <br />
                과금없는 편안한 인연찾기
              </p>
              <p className="hero-subtitle hero-subtitle-mobile">
                믿을 수 있는 직장인들만
                <br />
                과금없는 편안한 인연찾기
              </p>
              <div className="cta-buttons">
                <StoreButtons location="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="container">
          <h2 className="section-title">사용자들의 이야기</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                직장인증을 한 분들만
                <br />
                만날 수 있어서 정말 좋아요.
                <br />
                매일 쓰다보면 곧 제 인연을
                <br />
                찾을 수 있을 것 같아요.
              </p>
              <div className="reviewer">
                <picture>
                  <source srcSet="/man.webp" type="image/webp" />
                  <img
                    src="/man.png"
                    alt="김○○"
                    className="reviewer-image"
                    loading="lazy"
                  />
                </picture>
                김○○, 27세
              </div>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                부담없이 매일
                <br />
                다양한 직장인 또는 전문직 이성들을
                <br />
                소개받을 수 있어요.
                <br />
                저만 알고 싶은 서비스예요. ㅎㅎ
              </p>
              <div className="reviewer">
                <picture>
                  <source srcSet="/woman1.webp" type="image/webp" />
                  <img
                    src="/woman1.png"
                    alt="이○○"
                    className="reviewer-image"
                    loading="lazy"
                  />
                </picture>
                이○○, 29세
              </div>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>
                상대방의 가치관과 성향 설문조사
                <br />
                응답을 보여주니까 좋아요.
                <br />
                서로 잘 통할지도
                <br />
                폴잇AI가 솔직하게 알려주니까
                <br />
                도움이 돼요.
              </p>
              <div className="reviewer">
                <picture>
                  <source srcSet="/woman2.webp" type="image/webp" />
                  <img
                    src="/woman2.png"
                    alt="박○○"
                    className="reviewer-image"
                    loading="lazy"
                  />
                </picture>
                박○○, 31세
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="final-cta-title-desktop">늦기 전에 시작하세요</h2>
            <h2 className="final-cta-title-mobile">
              늦기 전에
              <br />
              시작하세요
            </h2>
            <p>
              매일 내 인연을 찾다보면
              <br />
              언젠가 그 사람이 내 옆에 있을 거예요.
            </p>
            <div className="cta-buttons">
              <StoreButtons
                location="cta"
                className="store-buttons-in-footer"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
