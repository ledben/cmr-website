import OpeningHours from './OpeningHours';
import GoogleMapSection from '../GoogleMap';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className="section-title">
          <h2>Nous trouver</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Adresse
              </h3>
              <p>
                22 place Chanoine Patry<br />
                33610 Cestas
              </p>
              <a
                href="https://www.google.com/maps/place/22+Place+du+Chanoine+Patry,+33610+Cestas"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Voir sur Google Maps →
              </a>
            </div>

            <div className={styles.infoCard}>
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Téléphone
              </h3>
              <a href="tel:+33748458848" className={styles.contactValue}>
                07 48 45 88 48
              </a>
            </div>

            <div className={styles.infoCard}>
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email
              </h3>
              <a href="mailto:nathalie@dressin-cestas.com" className={styles.contactValue}>
                nathalie@dressin-cestas.com
              </a>
            </div>
          </div>

          <div className={styles.hoursColumn}>
            <OpeningHours />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
