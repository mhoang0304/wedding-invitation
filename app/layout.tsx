import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import CurtainReveal from "@/components/CurtainReveal";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Minh Hoàng & Mai Phương",
  openGraph: {
    title: "Wedding Invitation",
    description: "Minh Hoàng & Mai Phương",
    url: "https://wedding-invitation-12.vercel.app/",
    siteName: "Wedding Invitation",
    images: [
      {
        url: "/TAW00351.JPG",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation Preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dancing.variable}`}
    >
      <body className="antialiased">
        <Suspense>
          <CurtainReveal>{children}</CurtainReveal>
        </Suspense>
      </body>
    </html>
  );
}
