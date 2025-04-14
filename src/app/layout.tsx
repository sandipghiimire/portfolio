"use client";

import "./globals.css";


export const metadat = {
  title: "Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
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
