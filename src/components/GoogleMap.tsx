'use client';

import { useEffect, useRef, useState } from 'react';
import { GoogleMap as GoogleMapComponent, useLoadScript, Marker } from '@react-google-maps/api';
import styles from './GoogleMap.module.css';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '16px'
};

const center = {
  lat: 44.7397,
  lng: -0.6819
};

const GoogleMapSection = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const [hasValidKey, setHasValidKey] = useState(false);

  useEffect(() => {
    setHasValidKey(apiKey !== '' && apiKey !== 'YOUR_API_KEY_HERE');
  }, [apiKey]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const renderMap = () => {
    if (!hasValidKey || loadError) {
      return (
        <div className={styles.placeholder}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <h4>Dress&apos;in</h4>
          <p>22 place Chanoine Patry</p>
          <p>33610 Cestas</p>
          <a
            href="https://www.google.com/maps/place/22+Place+du+Chanoine+Patry,+33610+Cestas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11" />
            </svg>
            Voir sur Google Maps
          </a>
        </div>
      );
    }

    if (!isLoaded) {
      return (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <span>Chargement de la carte...</span>
        </div>
      );
    }

    return (
      <GoogleMapComponent
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        options={{
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ],
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true
        }}
      >
        <Marker
          position={center}
          title="Dress'in - Comptoir de la Mode Responsable"
        />
      </GoogleMapComponent>
    );
  };

  return (
    <div className={styles.mapContainer}>
      {renderMap()}
    </div>
  );
};

export default GoogleMapSection;
