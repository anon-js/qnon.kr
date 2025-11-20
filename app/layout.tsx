import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { TransitionProvider } from './context/TransitionContext';
import './globals.css';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'anon',
  description: "anon's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className}`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
