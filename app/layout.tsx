import { ThemeProvider } from '@/components/ThemeProvider';
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
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${pretendard.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TransitionProvider>{children}</TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
