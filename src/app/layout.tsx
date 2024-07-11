import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/components/Header";
import SubHeader from "../components/components/SubHeader";
import Footer from "../components/components/Footer";
import NewsletterSection from "@/components/components/NewsletterSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The European Engineer",
  description: "Generated by Priyansh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <SubHeader />
        {children}
        <NewsletterSection />
        <Footer />
        </body>
    </html>
  );
}
