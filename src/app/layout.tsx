import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'Watch hot movie free',
    template: '%s | watch movie',
  },
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
        <section className="px-4 w-screen h-12 bg-primary sticky top-0 z-10">
          <Header/>
        </section>
        <section className="dark:bg-slate-950 dark:text-gray-400">
          {children}
        </section>
        <section>
          <Footer/>
        </section>
      </body>
    </html>
  );
}
