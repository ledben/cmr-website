'use client';

import { useState } from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Nina',
      date: 'Juin 2023',
      text: "Superbe boutique de dépôt vente ! Très bon rapport qualité prix ! Accueil au top de la Gérante, qui n'hésite pas à vous conseiller et vous donner son avis !",
      rating: 5
    },
    {
      id: 2,
      name: 'Marie',
      date: 'Mai 2023',
      text: "Je recommande vivement cette boutique pour la diversité des pièces vendues et la qualité de la sélection faite par Nathalie qui est par ailleurs de très bon conseil. Elle sait parfaitement identifier le style et les goûts de ses clientes. C'est un plaisir de m'y rendre à chaque fois.",
      rating: 5
    },
    {
      id: 3,
      name: 'Marion',
      date: 'Mai 2023',
      text: "Super démarche éco responsable. Permet de donner une nouvelle vie aux vêtements. J'ai découvert ce magasin il y a quelques mois et je recommande vivement. Style de vêtements variés et à la mode (hommes, femmes, enfants). Nathalie a beaucoup de goût dans l'exposition de ses vêtements et elle est aussi très agréable.",
      rating: 5
    },
    {
      id: 4,
      name: 'Nelly et Matt',
      date: 'Visité en octobre',
      text: "Belle boutique avec accueil super sympa par Nathalie! Je vous recommande, il y en a pour tous les gouts et c'est écoresponsable. 1ère visite et déjà deux trouvailles ! merci",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={i < rating ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.star}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section id="temoignages" className={`section ${styles.testimonials}`}>
      <div className="container">
        <div className="section-title">
          <h2>Témoignages</h2>
        </div>

        <p className={styles.subtitle}>
          Ils ont adopté une démarche écolo-chic :
        </p>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.card} ${index === activeIndex ? styles.active : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className={styles.quote}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.005zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l-.007.005z" />
                </svg>
              </div>

              <p className={styles.text}>{testimonial.text}</p>

              <div className={styles.footer}>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.date}>{testimonial.date}</div>
                  </div>
                </div>
                <div className={styles.rating}>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
