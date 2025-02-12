import type { Metadata } from "next";
// import { useState } from 'react';
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const a = 9;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ height: "100px", background: "#345" }}>
          <div>
            <Link href="/home">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
          </div>

          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
