import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanos Letsoalo | Data Scientist & Analyst",
  description:
    "Computer Science postgraduate specialising in machine learning, data analysis, and predictive modelling. Based in Limpopo, South Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        {/* lg:pl-72 matches the w-72 (288px) sidebar width */}
        <div className="lg:pl-72 pt-16 lg:pt-0">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}