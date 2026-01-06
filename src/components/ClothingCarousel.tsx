'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ClothingCarousel.module.css';

interface ImageItem {
  src: string;
  alt: string;
}

interface ClothingCarouselProps {
  columns?: number;
}

const ClothingCarousel = ({ columns = 5 }: ClothingCarouselProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  // Generate array of 38 image paths
  const images: ImageItem[] = Array.from({ length: 38 }, (_, i) => ({
    src: `/images/${i + 1}.jpg`,
    alt: `Composition vestimentaire ${i + 1}`
  }));

  const openLightbox = (image: ImageItem) => {
    setSelectedImage(image);
    setIsZoomed(false);
    setAspectRatio(null);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsZoomed(false);
    setAspectRatio(null);
    document.body.style.overflow = 'auto';
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight) {
      setAspectRatio(naturalWidth / naturalHeight);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const touch = e.touches[0];
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((touch.clientX - left) / width) * 100;
    const y = ((touch.clientY - top) / height) * 100;

    setMousePos({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y))
    });
  };

  return (
    <section id="compositions" className={`section section-primary ${styles.carouselSection}`}>
      <div className="container">
        <div className="section-title">
          <h2>Nos dernières compositions</h2>
        </div>

        <p className={styles.description}>
          Nous postons régulièrement des compositions, issues de nos derniers arrivages, sur les réseaux sociaux.
        </p>
      </div>

      <div className={styles.gridWrapper}>
        <div
          className={styles.grid}
          style={{ '--grid-cols': columns } as React.CSSProperties}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.gridItem}
              onClick={() => openLightbox(image)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
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

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeButton} onClick={closeLightbox}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div
            className={`${styles.lightboxImageContainer} ${isZoomed ? styles.zoomed : ''}`}
            onClick={toggleZoom}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            style={{
              '--aspect-ratio': aspectRatio || 'auto'
            } as React.CSSProperties}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              onLoad={handleImageLoad}
              style={{
                objectFit: 'contain',
                transformOrigin: `${mousePos.x}% ${mousePos.y}%`
              }}
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ClothingCarousel;

