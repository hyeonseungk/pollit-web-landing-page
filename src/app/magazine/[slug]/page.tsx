import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Gnb } from "@/components/Gnb";
import {
  getMagazinePostBySlug,
  magazinePosts,
} from "@/content/magazinePosts";

type PageProps = {
  params: {
    slug: string;
  };
};

const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat("ko", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));

export function generateStaticParams() {
  return magazinePosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getMagazinePostBySlug(params.slug);

  if (!post) {
    return {
      title: "폴잇 매거진",
    };
  }

  return {
    title: `${post.title} - 폴잇 매거진`,
    description: post.summary,
  };
}

export default function MagazineDetailPage({ params }: PageProps) {
  const post = getMagazinePostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="magazine-detail-page">
      <Gnb />
      <main className="magazine-detail">
        <div className="container magazine-detail-container">
          <p className="magazine-detail-eyebrow">폴잇 매거진</p>
          <h1>{post.title}</h1>
          <div className="magazine-detail-date">
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="magazine-detail-content">
            {post.content.map((paragraph, index) => (
              <p key={`${post.slug}-paragraph-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

