import './assets/globals.css';

import { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';

import clsx from 'clsx';

const SaansFont = localFont({
  src: './saans-font.woff2',
  display: 'swap',
});

const JetBrainsMonoFont = JetBrains_Mono({
  display: 'swap',
  variable: '--font-monospace',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pranay Ratan - Data Scientist',
  description:
    'Pranay Ratan is a data scientist based in Burnaby, BC, currently working as a Research Assistant at Simon Fraser University and as an SFSS Council Representative. Experienced in data analysis, web development, and content creation.',
  twitter: {
    card: 'summary_large_image',
    creator: '@pranay_ratan',
    images: ['/og.png'],
    title: 'Pranay Ratan - Data Scientist',
  },
  openGraph: {
    title: 'Pranay Ratan - Data Scientist',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Pranay Ratan - Data Scientist',
      },
    ],
    siteName: 'Pranay Ratan - Data Scientist',
  },
  metadataBase: new URL('https://pranay-ratan.com'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pranay Ratan',
  image: 'https://pranay-ratan.com/avatar.jpeg',
  url: 'https://pranay-ratan.com',
  jobTitle: 'Data Scientist',
  sameAs: [
    'https://twitter.com/pranay_ratan',
    'https://www.github.com/pranay-ratan',
    'https://www.linkedin.com/in/pranay-ratan/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={clsx(
          SaansFont.className,
          JetBrainsMonoFont.variable,
          'bg-slate-50'
        )}
      >
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          <header className="pt-8 md:pt-16 pb-16 px-4 md:px-0 flex justify-between">
            <Link href="/">
              <h1 className="text-base font-mono font-semibold text-slate-950">
                pr
              </h1>
            </Link>
            <nav className="flex gap-4">
              <Link
                href="/info"
                className="text-950 text-sm tracking-tighter font-mono font-semibold"
              >
                Information
              </Link>
              <Link
                href="/posts"
                className="text-950 text-sm tracking-tighter font-mono font-semibold"
              >
                Writing
              </Link>
              <Link
                className="text-950 text-sm tracking-tighter font-mono font-semibold"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </header>
          {children}
          <footer className="px-4 md:px-0 border-t border-slate-200 py-8 text-slate-700 font-mono text-xs tracking-tight flex justify-between">
            <p>
              &copy; 2010 - {new Date().getFullYear()} {'/'} Pranay Ratan
            </p>
            <p>
              <Link href="https://github.com/pranay-ratan/www">View Source</Link>
            </p>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
