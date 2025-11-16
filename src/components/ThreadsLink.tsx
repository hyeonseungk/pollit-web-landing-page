'use client';

import type { ReactNode } from "react";
import { THREADS_URL } from "@/lib/constants";
import { trackThreadsClick } from "@/lib/analytics";

type Props = {
  location?: "footer" | "404_page" | "main";
  className?: string;
  children?: ReactNode;
};

export function ThreadsLink({
  location = "footer",
  className,
  children,
}: Props) {
  const handleClick = () => {
    trackThreadsClick(location);
  };

  const defaultContent = (
    <>
      <img
        src="/threads.png"
        alt="Threads"
        className="social-chip-icon"
        loading="lazy"
      />
      <span className="social-chip-label">스레드</span>
    </>
  );

  return (
    <a
      href={THREADS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children ?? defaultContent}
    </a>
  );
}

