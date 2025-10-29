import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'W Ian Douglas, Customer/Product Advocate',
  description: 'Portfolio site showcasing videos, workshops, conference talks, and blog posts by William "Ian" Douglas',
  keywords: ['developer relations', 'API', 'testing', 'conferences', 'workshops', 'videos'],
  authors: [{ name: 'Ian Douglas' }],
  openGraph: {
    title: 'W Ian Douglas, Customer/Product Advocate',
    description: 'Portfolio site showcasing videos, workshops, conference talks, and blog posts',
    url: 'https://iandouglas736.com',
    siteName: 'W Ian Douglas, Customer/Product Advocate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'W Ian Douglas, Customer/Product Advocate',
    description: 'Portfolio site showcasing videos, workshops, conference talks, and blog posts',
    creator: '@iandouglas736',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
