import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Demo ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full m-0">
      <body className="min-h-full relative">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
