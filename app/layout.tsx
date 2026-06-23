import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import SitemapFab from "./components/SitemapFab";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "피클볼 KR | 한국 피클볼 토너먼트 플랫폼",
  description: "한국 피클볼 토너먼트 플랫폼 - 대회 참가, 대진표 확인, 랭킹 조회",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable}`}>
      <body className="min-h-full bg-white text-[#1F2937]">
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <BottomNav />
        <SitemapFab />
      </body>
    </html>
  );
}
