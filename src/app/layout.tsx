import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import DemoBanner from "@/components/DemoBanner";
import { SITE_INDEXED } from "@/lib/constants";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Fisiomoncloa — Fisioterapia en Madrid | Suelo Pélvico, Deportiva, Osteopatía",
  description:
    "Centro de fisioterapia en Madrid con más de 15 años de experiencia. Especializados en suelo pélvico, fisioterapia deportiva y osteopatía. Únicos en Chamberí con Indiba y NESA.",
  openGraph: {
    title: "Fisiomoncloa — Fisioterapia en Madrid",
    description:
      "Centro de fisioterapia en Madrid con más de 15 años de experiencia. Tecnología Indiba y NESA.",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
    googleBot: {
      index: SITE_INDEXED,
      follow: SITE_INDEXED,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-dark antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <DemoBanner />
      </body>
    </html>
  );
}
