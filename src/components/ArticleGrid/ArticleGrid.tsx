'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ArticleGrid.module.css';

interface ImageItem {
  src: string;
  alt: string;
}

interface ArticleGridProps {
  columns?: number;
  imageNames?: string[];
}

const ArticleGrid = ({ columns = 5, imageNames = [] }: ArticleGridProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [lastPointerPos, setLastPointerPos] = useState({ x: 0, y: 0 });

  // Handle body scroll locking and keyboard navigation
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'Escape') closeLightbox();
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedIndex]);

  // Generate array of image paths based on imageNames
  const images: ImageItem[] = imageNames.map((fileName, i) => {
    // Extract a cleaner name for SEO from filename if possible
    // e.g., "robe-ete-bleue.jpg" -> "Robe ete bleue"
    const cleanName = fileName
      .replace(/\.[^/.]+$/, "") // remove extension
      .replace(/[-_]/g, " ")    // replace - and _ with space
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return {
      src: `/images/${fileName}`,
      alt: `${cleanName}`
    };
  });

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsZoomed(false);
    setAspectRatio(null);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    setIsZoomed(false);
    setPanOffset({ x: 0, y: 0 });
    setAspectRatio(null);
  };

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
    setIsZoomed(false);
    setPanOffset({ x: 0, y: 0 });
  };

  const goToPrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
    setIsZoomed(false);
    setPanOffset({ x: 0, y: 0 });
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isZoomed) {
      setPanOffset({ x: 0, y: 0 });
    }
    setIsZoomed(!isZoomed);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight) {
      setAspectRatio(naturalWidth / naturalHeight);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed || e.button === 2) return;
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setLastPointerPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isZoomed || !isDragging) return;

    const deltaX = e.clientX - lastPointerPos.x;
    const deltaY = e.clientY - lastPointerPos.y;

    setPanOffset(prev => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY
    }));
    setLastPointerPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isZoomed) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setLastPointerPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isZoomed || !isDragging) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - lastPointerPos.x;
    const deltaY = touch.clientY - lastPointerPos.y;

    setPanOffset(prev => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY
    }));
    setLastPointerPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="compositions" className={`section section-primary ${styles.gridSection}`}>
      <div className="container">
        <div className="section-title">
          <h2>Nos dernières compositions</h2>
        </div>
      </div>

      <div className={styles.gridWrapper}>
        <div
          className={styles.grid}
          style={{ '--grid-cols': columns } as React.CSSProperties}
        >
          {images.map((image, index) => (
            <article
              key={index}
              className={styles.gridItem}
              onClick={() => openLightbox(index)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  // The grid is responsive and uses var(--grid-cols)
                  // On desktop, the max-width is 1800px.
                  sizes={`(max-width: 1800px) ${Math.floor(100 / columns)}vw, ${Math.floor(1800 / columns)}px`}
                  style={{ objectFit: 'cover' }}
                  // Load first row with priority for better LCP
                  priority={index < columns}
                  // Standard loading for others
                  loading={index < columns ? undefined : 'lazy'}
                />
              </div>
            </article>
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
      {selectedIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeButton} onClick={closeLightbox} aria-label="Fermer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button className={styles.navButton} data-direction="prev" onClick={goToPrevious} aria-label="Image précédente">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button className={styles.navButton} data-direction="next" onClick={goToNext} aria-label="Image suivante">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div
            className={`${styles.lightboxImageContainer} ${isZoomed ? styles.zoomed : ''}`}
            data-dragging={isDragging}
            onClick={toggleZoom}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onContextMenu={(e) => isZoomed && e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              '--aspect-ratio': aspectRatio || 'auto',
              '--pan-x': `${panOffset.x}px`,
              '--pan-y': `${panOffset.y}px`
            } as React.CSSProperties}
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              onLoad={handleImageLoad}
              draggable={false}
              style={{
                objectFit: 'contain'
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

export default ArticleGrid;

