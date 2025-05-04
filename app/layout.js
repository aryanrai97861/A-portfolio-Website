"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aside from "./components/Header";
import SpaceBackground from "./components/SpaceBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#151515] text-white"> 
        <SpaceBackground />
        <Aside/>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
