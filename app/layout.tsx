import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gradientStyle: React.CSSProperties = {
    background: `radial-gradient(circle at center top, #00ADFF, transparent),
                 radial-gradient(circle at center bottom, #00ADFF, transparent),
                 #0F172A`,
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F172A]`} style={gradientStyle}>
        {children}
      </body>
    </html>
  );
}
