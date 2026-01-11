import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: "Dress'in",
    url: 'https://www.dress-in-cestas.fr',
    logo: 'https://www.dress-in-cestas.fr/logo.png',
    description: 'Votre dépôt-vente de référence à Cestas, près de Bordeaux. Découvrez notre sélection de vêtements, chaussures et accessoires de seconde main pour femme, homme et enfant.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '22 place du Chanoine Patry',
      addressLocality: 'Cestas',
      postalCode: '33610',
      addressRegion: 'Gironde',
      addressCountry: 'FR',
    },
    telephone: '+33748458848',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:15',
        closes: '12:15',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '14:45',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:15',
        closes: '12:15',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '15:00',
        closes: '19:00',
      },
    ],
  };

  return (
    <html lang="fr">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
