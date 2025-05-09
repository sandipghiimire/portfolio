// src/app/layout.tsx

import React from 'react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sandip Ghimire | Full-Stack Developer & Graphic Designer',
  description: 'Professional portfolio of Sandip Ghimire - Experienced Next.js developer and creative graphic designer specializing in web applications and visual design.',
  keywords: [
    'Next.js Developer',
    'Graphic Designer',
    'Full-Stack Developer',
    'React Developer',
    'Web Development',
    'Portfolio',
    'UI/UX Design'
  ],
  openGraph: {
    title: 'Sandip Ghimire | Full-Stack & Graphic Design Portfolio',
    description: 'Professional portfolio showcasing web development projects and graphic design work',
    url: 'https://sandipghimire.com',
    siteName: 'Sandip Ghimire Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sandip Ghimire Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sandip Ghimire | Developer & Designer',
    description: 'Professional portfolio of a full-stack developer and graphic designer',
    images: ['/twitter-og.jpg'],
  },
  alternates: {
    canonical: 'https://sandipghimire.com',
  },
  themeColor: '#1a202c',
  category: 'technology',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sandip Ghimire",
    "jobTitle": "Full-Stack Developer & Graphic Designer",
    "url": "https://sandipghimire.com",
    "sameAs": [
      "https://github.com/sandipghiimire",
      "https://www.linkedin.com/in/sandip-ghiimire/",
      "https://www.facebook.com/sandip.ghiimire"
    ],
    "image": "/sandip.jpg",
    "description": "Professional full-stack developer specializing in Next.js and React applications with strong graphic design capabilities.",
    "skills": [
      "Next.js Development",
      "React Framework",
      "Node.js Programming",
      "Graphic Design",
      "UI/UX Design"
    ],
    "email": "mailto:sandipghimire.np@gmail.com",
    "telephone": "+977-986-9292044"
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-512x512.png"
          sizes="512x512"
        />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-gray-900 text-gray-100">
        {children}
        
        {/* Google Analytics Script (Add your measurement ID) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
};

export default Layout;
