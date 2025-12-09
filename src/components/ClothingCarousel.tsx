'use client';

import Image from 'next/image';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './ClothingCarousel.module.css';

const ClothingCarousel = () => {
  // Generate array of 38 image paths
  const images = Array.from({ length: 38 }, (_, i) => ({
    src: `/images/${i + 1}.jpg`,
    alt: `Composition vestimentaire ${i + 1}`
  }));

  return (
    <section id="compositions" className={`section section-primary ${styles.carouselSection}`}>
      <div className="container">
        <div className="section-title">
          <h2>Nos dernières compositions</h2>
        </div>

        <p className={styles.description}>
          Nous postons régulièrement des compositions, issues de nos derniers arrivages, sur les réseaux sociaux.
        </p>

        <div className={styles.carouselWrapper}>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            transitionTime={500}
            centerMode={true}
            centerSlidePercentage={33.33}
            emulateTouch={true}
            swipeable={true}
            dynamicHeight={false}
            className={styles.carousel}
          >
            {images.map((image, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.imageContainer}>
                  {/* Placeholder SVG when images don't exist */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className={styles.socialCta}>
          <p>Retrouvez toutes nos compositions sur</p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/dressin_cestas/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.facebook.com/dressin_cestas-104151251342418/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClothingCarousel;
