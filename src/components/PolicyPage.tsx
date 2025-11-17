import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Gnb } from "@/components/Gnb";

type Props = {
  title: string;
  contentHtml: string;
  bottomAction?: ReactNode;
};

export function PolicyPage({ title, contentHtml, bottomAction }: Props) {
  return (
    <div className="policy-page">
      <Gnb />
      <main className="policy-content">
        <div className="container policy-container">
          <h1 className="section-title">{title}</h1>
          <div
            className="terms"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
        {bottomAction ? (
          <div className="policy-bottom-action">{bottomAction}</div>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

