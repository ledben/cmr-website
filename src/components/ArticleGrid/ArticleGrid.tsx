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
  totalImages?: number;
}

const ArticleGrid = ({ columns = 5, totalImages = 0 }: ArticleGridProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [lastPointerPos, setLastPointerPos] = useState({ x: 0, y: 0 });

  // Handle body scroll locking
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  // Generate array of image paths based on totalImages
  const images: ImageItem[] = Array.from({ length: totalImages }, (_, i) => ({
    src: `/images/${i + 1}.jpg`,
    alt: `Composition vestimentaire ${i + 1}`
  }));

  const openLightbox = (image: ImageItem) => {
    setSelectedImage(image);
    setIsZoomed(false);
    setAspectRatio(null);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsZoomed(false);
    setPanOffset({ x: 0, y: 0 });
    setAspectRatio(null);
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
              src={selectedImage.src}
              alt={selectedImage.alt}
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

