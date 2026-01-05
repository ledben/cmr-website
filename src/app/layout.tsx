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
  metadataBase: new URL('https://www.dressin-cestas.com'),
  title: "Dress'in Dépôt-vente | Mode Seconde Main à Cestas, Bordeaux - Gironde",
  description: "Dress'in est un dépôt-vente de vêtements, chaussures et accessoires chics et tendance à Cestas, près de Bordeaux en Gironde. Découvrez la mode responsable et donnez une seconde vie à vos vêtements.",
  keywords: [
    "dépôt-vente",
    "seconde main",
    "vêtements",
    "accessoires",
    "chaussures",
    "magasin",
    "boutique",
    "Cestas",
    "Bordeaux",
    "Gironde",
    "mode responsable",
    "éco-responsable",
    "friperie",
    "vêtements d'occasion",
    "mode durable"
  ],
  authors: [{ name: "Dress'in Cestas" }],
  creator: "Dress'in Cestas",
  publisher: "Dress'in Cestas",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.dressin-cestas.com',
    siteName: "Dress'in - Comptoir de la Mode Responsable",
    title: "Dress'in Dépôt-vente | Mode Seconde Main à Cestas, Bordeaux",
    description: "Dress'in est un dépôt-vente de vêtements, chaussures et accessoires chics et tendance à Cestas, près de Bordeaux. Découvrez la mode responsable!",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: "Dress'in - Comptoir de la Mode Responsable",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dress'in Dépôt-vente | Mode Seconde Main à Cestas",
    description: "Dépôt-vente de vêtements chics et tendance à Cestas, Gironde. Mode responsable et seconde main.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.dressin-cestas.com',
  },
  icons: {
    icon: '/logo-d.svg',
    apple: '/logo-d.svg',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dress'in - Comptoir de la Mode Responsable",
              "image": "https://www.dressin-cestas.com/logo.png",
              "@id": "https://www.dressin-cestas.com",
              "url": "https://www.dressin-cestas.com",
              "telephone": "+33748458848",
              "email": "nathalie@dressin-cestas.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "22 place Chanoine Patry",
                "addressLocality": "Cestas",
                "postalCode": "33610",
                "addressRegion": "Gironde",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.7397,
                "longitude": -0.6819
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:15",
                  "closes": "12:15"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "14:45",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:15",
                  "closes": "12:15"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "15:00",
                  "closes": "19:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/dressin_cestas/",
                "https://www.facebook.com/dressin_cestas-104151251342418/"
              ],
              "priceRange": "€€",
              "description": "Dépôt-vente de vêtements, chaussures et accessoires chics et tendance à Cestas, près de Bordeaux en Gironde. Mode responsable et seconde main.",
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 44.7397,
                  "longitude": -0.6819
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Vêtements et accessoires de seconde main",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Vêtements femme"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Vêtements homme"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Vêtements enfant"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Chaussures"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Accessoires"
                    }
                  }
                ]
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
