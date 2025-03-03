import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Dream Mate",
  description: "Discover visionary partnerships",
  icons:[
    {rel:"apple-touch-icon", type:'image/png', sizes:"180x180", url:"/apple-touch-icon.png"},
    {rel:"icon", type:'image/png', sizes:"32x32", url:"/favicon-32x32.png"},
    {rel:"icon", type:'image/png', sizes:"16x16", url:"/favicon-16x16.png"},
    {rel:"manifest", url:"/site.webmanifest"},
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
