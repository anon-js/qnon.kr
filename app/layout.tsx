import type { Metadata } from "next";
import "./globals.css";
import { header, logo, logoLink, nav, navLink, main, footer } from "./layout.css";
import Link from "next/link";

// Meta Tag
// <meta charset="utf-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <meta http-equiv="Title" content="anon" />
// <meta name="Description" content="i'm anon!" />
// <meta http-equiv="Author" content="anon" />
// <meta http-equiv="publisher" content="anon" />
// <meta http-equiv="Other Agent" content="anon" />
// <meta http-equiv="Reply-To" content="anon@qnon.kr" />
// <meta http-equiv="Email" content ="anon@qnon.kr" />
// <meta name="keywords" content="anon">
// <meta name="keywords" content="frontend">
// <meta http-equiv="Subject" content="portfoilo" />

// Open Graph Tag
// <meta property="og:url" content="https://qnon.kr" />
// <meta property="og:type" content="website" />
// <meta property="og:site_name" content="anon" />
// <meta property="og:title" content="anon" />
// <meta property="og:description" content="i'm anon!" />

export const metadata: Metadata = {
  title: "anon",
  description: "I'm anon!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header className={header}>
          <h4 className={logo}>
            <a href="../" className={logoLink}>qnon.kr</a>
          </h4>
          <nav className={nav}>
              <Link href="../" className={navLink}>홈</Link>
              <Link href="./exp" className={navLink}>경험</Link>
              <Link href="./project" className={navLink}>프로젝트</Link>
              <Link href="./contact" className={navLink}>연락</Link>
          </nav>
        </header>
        <main className={main}>
          {children}
        </main>
        <footer className={footer}>
          &copy; 2025 anon.
        </footer>
      </body>
    </html>
  );
}
