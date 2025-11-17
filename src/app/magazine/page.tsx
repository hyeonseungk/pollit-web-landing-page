import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Gnb } from "@/components/Gnb";
import { magazinePosts } from "@/content/magazinePosts";

export const metadata: Metadata = {
  title: "폴잇 매거진",
  description:
    "연애와 결혼을 준비하는 직장인을 위한 폴잇 매거진 이야기 모음",
};

const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat("ko", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));

export default function MagazinePage() {
  return (
    <div className="magazine-page">
      <Gnb />
      <main>
        <section className="magazine-hero">
          <div className="container">
            <p className="magazine-hero-eyebrow">폴잇 매거진</p>
            <h1>연애와 결혼 사이, 마음의 속도를 맞추는 이야기</h1>
            <p>
              직장인 솔로를 만나온 폴잇 매칭팀이 전하는 경험과 인사이트를
              모았어요. 마음의 방향을 정리하고 싶은 날, 매거진에서 가벼운
              영감을 받아보세요.
            </p>
          </div>
        </section>

        <section className="magazine-list-section">
          <div className="container">
            <div className="magazine-grid">
              {magazinePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/magazine/${post.slug}`}
                  className="magazine-card"
                >
                  <div className="magazine-card-body">
                    <div className="magazine-meta">
                      <span className="magazine-date">
                        {formatDate(post.publishedAt)}
                      </span>
                      <div className="magazine-tags">
                        {post.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.summary}</p>
                    <span className="magazine-card-link">자세히 보기</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

