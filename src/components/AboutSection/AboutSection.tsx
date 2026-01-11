import styles from './AboutSection.module.css';

const AboutSection = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: 'Où nous trouver ?',
      description: "Dress'in se situe dans le centre de Cestas. Nos clients viennent des quatre coins de la Gironde."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      ),
      title: 'On y trouve quoi ?',
      description: 'Des vêtements, bien sûr, mais également des chaussures, des sacs à main, des bijoux, des lunettes, des foulards, …'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Pour qui ?',
      description: 'Nous proposons des articles de seconde main pour femmes, hommes et enfants de plus de 8 ans. Toute la famille peut trouver son bonheur !'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: 'Quelles marques ?',
      description: 'Retrouvez vos marques préférées comme Stella Forest, Zadig & Voltaire, Promod, Tommy Hilfiger, Zara, New Balance, Comptoir des Cotonniers, Sézane, et bien d\'autres.'
    }
  ];

  return (
    <section id="apropos" className={`section section-primary ${styles.about}`}>
      <div className="container">
        <div className="section-title">
          <h2>Que proposons-nous ?</h2>
        </div>

        <div className={styles.intro}>
          <p className={styles.lead}>
            Bienvenue chez Dress&apos;in, votre dépôt-vente à Cestas spécialisé dans les vêtements, chaussures et accessoires de seconde main. Nous proposons une sélection chic et tendance pour une mode plus durable.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
