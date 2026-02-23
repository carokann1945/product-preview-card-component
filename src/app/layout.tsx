import type { Metadata } from 'next';
import { Fraunces, Montserrat } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'], // 영문/숫자 서브셋 최적화 (한글 폰트의 경우 일반적으로 latin 포함)
  display: 'swap',
  variable: '--font-fraunces', //tailwind와 연동할 css 변수명 지정
});

const montserrat = Montserrat({
  subsets: ['latin'], // 영문/숫자 서브셋 최적화 (한글 폰트의 경우 일반적으로 latin 포함)
  display: 'swap',
  variable: '--font-montserrat', //tailwind와 연동할 css 변수명 지정
});

export const metadata: Metadata = {
  title: 'product-preview-card-component',
  description: 'frontend mentor challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${montserrat.variable}`}>
      <body className="antialiased w-dvw h-dvh flex justify-center items-center bg-cream">{children}</body>
    </html>
  );
}
