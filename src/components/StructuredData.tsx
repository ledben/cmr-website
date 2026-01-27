// src/components/StructuredData.tsx

const StructuredData = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: "Dress'in",
    url: 'https://dressin-cestas.com',
    logo: 'https://dressin-cestas.com/logo.png',
    description: "Boutique de mode femme et dépôt-vente à Cestas. Vêtements, chaussures et accessoires de seconde main de marque.",
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;
