"use client";

import './assets/globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

// ✅ Import fonts
const SaansFont = localFont({
  src: './saans-font.woff2',
  display: 'swap',
});

const JetBrainsMonoFont = JetBrains_Mono({
  display: 'swap',
  variable: '--font-monospace',
  subsets: ['latin'],
});

// ✅ JSON-LD for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pranay Ratan",
  image: "https://pranayratan.com/avatar.jpeg",
  url: "https://pranayratan.com",
  jobTitle: "Data Science Student",
  sameAs: [
    "https://twitter.com/pranayratan",
    "https://www.github.com/pranay-ratan",
    "https://www.linkedin.com/in/pranay-ratan/",
  ],
};

// ✅ Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={clsx(SaansFont.className, JetBrainsMonoFont.variable, "bg-slate-50")}>
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          {/* ✅ Navigation */}
          <header className="pt-8 md:pt-16 pb-16 px-4 md:px-0 flex justify-between">
            <Link href="/">
              <h1 className="text-base font-mono font-semibold text-slate-950">pr</h1>
            </Link>
            <nav className="flex gap-4">
              <Link href="/info" className="text-950 text-sm tracking-tighter font-mono font-semibold">
                Information
              </Link>
              <Link href="/experience" className="text-950 text-sm tracking-tighter font-mono font-semibold">
                Experience
              </Link>
              <Link href="/contact" className="text-950 text-sm tracking-tighter font-mono font-semibold">
                Contact
              </Link>
            </nav>
          </header>

          {/* ✅ Smooth Page Transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>

          {/* ✅ Footer */}
          <footer className="px-4 md:px-0 border-t border-slate-200 py-8 text-slate-700 font-mono text-xs tracking-tight flex justify-between">
            <p>&copy; 2010 - {new Date().getFullYear()} / Pranay Ratan</p>
            <p>
              <Link href="https://github.com/pranay-ratan/portfolio-website">View Source</Link>
            </p>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
