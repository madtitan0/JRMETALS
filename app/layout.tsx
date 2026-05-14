import type { Metadata } from "next";
import { Bebas_Neue, Rajdhani, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});
const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JR Metal Chennai | Premium TMT Bars & Steel Manufacturer",
  description: "South India's trusted manufacturer of TMT Bars, CRS Re-Bars & Mild Steel Billets. 20+ years, ISO certified, 75,000+ customers.",
  keywords: "TMT Bars Chennai, Steel Manufacturer, JR Metal, CRS Re-Bars, MS Billets",
  openGraph: {
    title: "JR Metal Chennai | Forging Strength, Building Trust",
    description: "Premium steel manufacturer with 20+ years of excellence.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${rajdhani.variable} ${inter.variable}`}>
      <body className="bg-white text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
