/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Footer } from "@/components/Footer";

type Props = {
  title: string;
  contentHtml: string;
};

export function PolicyPage({ title, contentHtml }: Props) {
  return (
    <div className="policy-page">
      <header className="site-header">
        <div className="container">
          <Link href="/" className="brand">
            <img src="/logo.png" alt="폴잇 로고" />
            <span>폴잇</span>
          </Link>
        </div>
      </header>
      <main className="policy-content">
        <div className="container policy-container">
          <h1 className="section-title">{title}</h1>
          <div
            className="terms"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

