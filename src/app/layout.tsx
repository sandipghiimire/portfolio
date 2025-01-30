"use client";

// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadat = {
  title: "Sandip Ghimire",
  description: "Created by Sandip Ghimire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const router = useRouter();

  // useEffect(() => {
  //   if (router.pathname === "/") {
  //     window.location.href = "/home"; // Client-side redirect
  //   }
  // }, [router]);
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="sandip.jpg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
