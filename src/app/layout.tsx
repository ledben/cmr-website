import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dress'in - Dépôt-Vente & Friperie à Cestas | Vêtements & Chaussures",
  description: "Votre dépôt-vente de référence à Cestas, près de Bordeaux. Découvrez notre sélection de vêtements, chaussures et accessoires de seconde main pour femme, homme et enfant.",
  keywords: "dépôt-vente Gironde, friperie Cestas, vêtements occasion Cestas, chaussures seconde main, mode durable, magasin vêtements Cestas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
