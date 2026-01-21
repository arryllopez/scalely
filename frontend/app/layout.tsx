import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const satoshi = localFont({
  src: [
    {
      path: "../public/Fonts/WEB/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../public/Fonts/WEB/fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Vulpes",
  description: "Turn slow hours into full tables",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${inter.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
