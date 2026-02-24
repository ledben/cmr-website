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

// https://medium.com/@amirjld/10-tiny-next-js-tricks-youll-wish-you-knew-earlier-5b4a671a24d6
export const metadata: Metadata = {
  metadataBase: new URL('https://dressin-cestas.com'),
  title: "Dress'in | Boutique de Vêtements Femme & Dépôt-Vente à Cestas",
  description: "Découvrez Dress'in, votre boutique de mode femme à Cestas. Vêtements, chaussures et accessoires de marque en seconde main. Dépôt-vente chic pour une garde-robe durable.",
  keywords: "vêtements femme Cestas, boutique mode femme Gironde, dépôt-vente femme, friperie de luxe, vêtements occasion marque, chaussures femme seconde main, mode éco-responsable",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: '/',
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
