import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Noto_Serif_JP } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const notoSerifJP = Noto_Serif_JP({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
});

export const metadata: Metadata = {
  title: 'Twitter Yearly Kanji',
  description: 'Generate your yearly kanji based on your tweets',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Twitter Yearly Kanji',
    description: 'Generate your yearly kanji based on your tweets',
    type: 'website',
    url: 'https://yourwebsite.com', 
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Twitter Yearly Kanji',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Yearly Kanji',
    description: 'Generate your yearly kanji based on your tweets',
    images: ['/favicon.png'],
    creator: '@twiam_jp',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} ${notoSerifJP.variable}`}>{children}</body>
    </html>
  );
}