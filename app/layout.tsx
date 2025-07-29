import type { Metadata } from "next";
import "./globals.css";

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
      <header>
          <h4>
            <a href="../">qnon.kr</a>
          </h4>
          <ul>
              <li><a href="../">홈</a></li>
              <li><a href="./exp">경험</a></li>
              <li><a href="./project">프로젝트</a></li>
              <li><a href="./contact">연락</a></li>
          </ul>
      </header>
      <body>
        {children}
      </body>
      <footer>
          &copy; 2025 anon.
      </footer>
    </html>
  );
}
