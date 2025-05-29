import type { Metadata } from "next";
import { Geist, Geist_Mono, Advent_Pro, Great_Vibes, Cormorant_SC } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import localFont from 'next/font/local';

const mariannaFont = localFont({
  src: "../fonts/Marianna.woff2", // path relative to the public folder
  variable: '--font-marianna',
  weight: '400',
  style: 'normal',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const adventPro = Advent_Pro({
  variable: "--font-advent-pro",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({ 
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const cormorantSC = Cormorant_SC({
  variable: "--font-cormorant-sc",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Александр и Марина",
  description: "Приглашение на свадьбу Александра и Марины",
  icons: {
    icon: '/ring.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${adventPro.variable} ${greatVibes.variable} ${mariannaFont.variable} ${cormorantSC.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
