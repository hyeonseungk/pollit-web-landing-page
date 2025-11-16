'use client';

import type { ReactNode } from "react";
import { INSTAGRAM_URL } from "@/lib/constants";
import { trackInstagramClick } from "@/lib/analytics";

type Props = {
  location?: "footer" | "404_page" | "main";
  className?: string;
  children?: ReactNode;
};

export function InstagramLink({
  location = "footer",
  className,
  children,
}: Props) {
  const handleClick = () => {
    trackInstagramClick(location);
  };

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

