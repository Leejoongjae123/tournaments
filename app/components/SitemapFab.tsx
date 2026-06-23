"use client";

import Link from "next/link";

export default function SitemapFab() {
  return (
    <Link
      href="/sitemap"
      aria-label="사이트맵 보기"
      className="
        fixed bottom-20 right-4
        md:bottom-6 md:right-6
        z-50
        flex items-center gap-2
        px-3 py-2.5
        rounded-full
        bg-[#6D28D9] text-white
        shadow-lg shadow-[#6D28D9]/30
        hover:bg-[#5B21B6] hover:shadow-[#5B21B6]/40 hover:scale-105
        active:scale-95
        transition-all duration-200
        text-xs font-semibold tracking-wide
        group
      "
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect x="1" y="1" width="5" height="5" rx="1" fill="white" fillOpacity="0.9" />
        <rect x="10" y="1" width="5" height="5" rx="1" fill="white" fillOpacity="0.9" />
        <rect x="1" y="10" width="5" height="5" rx="1" fill="white" fillOpacity="0.9" />
        <rect x="10" y="10" width="5" height="5" rx="1" fill="white" fillOpacity="0.4" />
        <line x1="3.5" y1="6" x2="3.5" y2="10" stroke="white" strokeOpacity="0.6" strokeWidth="1" />
        <line x1="12.5" y1="6" x2="12.5" y2="10" stroke="white" strokeOpacity="0.6" strokeWidth="1" />
        <line x1="6" y1="3.5" x2="10" y2="3.5" stroke="white" strokeOpacity="0.6" strokeWidth="1" />
      </svg>
      <span className="hidden sm:inline">사이트맵</span>
    </Link>
  );
}
