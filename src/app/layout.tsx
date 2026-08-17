import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MPKflix",
    template: "%s | MPKflix",
  },
  description:
    "Discover movies and TV shows on MPKflix.",
  keywords: [
    "MPKflix",
    "movies",
    "TV shows",
    "movie discovery",
    "TV discovery",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-black text-white">
		<Header />
		{children}
		<Footer />
		</body>
    </html>
  );
}
