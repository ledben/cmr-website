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
  title: "Dress'in | Boutique de Vêtements Femme & Dépôt-Vente à Cestas",
  description: "Découvrez Dress'in, votre boutique de mode femme à Cestas. Vêtements, chaussures et accessoires de marque en seconde main. Dépôt-vente chic pour une garde-robe durable.",
  keywords: "vêtements femme Cestas, boutique mode femme Gironde, dépôt-vente femme, friperie de luxe, vêtements occasion marque, chaussures femme seconde main, mode éco-responsable",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
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
