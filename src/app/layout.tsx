import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies",
  description: "The best movies view platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="px-4 w-screen h-12 bg-green-600 sticky top-0">
          <Header/>
        </section>
        <section>
          {children}
        </section>
        <section>
          <Footer/>
        </section>
      </body>
    </html>
  );
}
