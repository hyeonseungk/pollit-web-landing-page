import { Footer } from "@/components/Footer";
import { Gnb } from "@/components/Gnb";

type Props = {
  title: string;
  contentHtml: string;
};

export function PolicyPage({ title, contentHtml }: Props) {
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
      </main>
      <Footer />
    </div>
  );
}

