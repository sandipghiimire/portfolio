// src/app/layout.tsx

import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Sandip Ghimire - Portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
