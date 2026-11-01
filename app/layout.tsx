import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const socialImage = `${siteUrl.replace(/\/$/, "")}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Do Sumi — Graphic & Brand Designer",
  description:
    "도수미 그래픽·브랜드 디자이너 포트폴리오. 브랜드 아이덴티티, 패키지, 에디토리얼, 디지털 콘텐츠 작업을 소개합니다.",
  applicationName: "Do Sumi Portfolio",
  openGraph: {
    title: "Do Sumi — Graphic & Brand Designer",
    description: "Selected Work 2020—2026",
    type: "website",
    locale: "ko_KR",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Do Sumi Graphic & Brand Designer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Do Sumi — Graphic & Brand Designer",
    description: "Selected Work 2020—2026",
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2efe8",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
