import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="accueil" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
        <div className={styles.shapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>

      <div className={styles.logoWrapper}>
        <Image
          src="/logo.png"
          alt="Logo CMR"
          width={1000}
          height={1000}
          priority
          className={styles.logo}
        />
      </div>

      <div className={`container ${styles.content}`}>

        <h1 className={styles.title}>
          Dépôt-vente de mode
          <span className={styles.highlight}>responsable</span>
        </h1>

        <p className={styles.subtitle}>
          Vêtements, chaussures et accessoires chics et tendance à Cestas, près de Bordeaux
        </p>

        <div className={styles.cta}>
          <a href="#apropos" className="btn btn-primary">
            Découvrir la boutique
          </a>
          <a href="#depot" className="btn btn-outline">
            Déposer vos vêtements
          </a>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span>Éco-responsable</span>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 18V6" />
              </svg>
            </div>
            <span>Prix attractifs</span>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <span>Sélection soignée</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
