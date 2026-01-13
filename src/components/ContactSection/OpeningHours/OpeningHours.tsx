'use client';

import styles from './OpeningHours.module.css';

const OpeningHours = () => {
  const hours = [
    { day: 'Lundi', time: 'Fermé', closed: true },
    { day: 'Mardi', time: '10:15 – 12:15, 14:45 – 19:00', closed: false },
    { day: 'Mercredi', time: '10:15 – 12:15, 14:45 – 19:00', closed: false },
    { day: 'Jeudi', time: '10:15 – 12:15, 14:45 – 19:00', closed: false },
    { day: 'Vendredi', time: '10:15 – 12:15, 14:45 – 19:00', closed: false },
    { day: 'Samedi', time: '10:15 – 12:15, 15:00 – 19:00', closed: false },
    { day: 'Dimanche', time: 'Fermé', closed: true },
  ];

  const now = new Date();
  console.log("now !!!!!", now);
  const today = now.getDay();
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <div className={styles.hours}>
      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        Horaires d&apos;ouverture
      </h3>

      <ul className={styles.list}>
        {hours.map((item, index) => (
          <li
            key={item.day}
            className={`${styles.item} ${item.closed ? styles.closed : ''} ${index === todayIndex ? styles.today : ''}`}
          >
            <span className={styles.day}>{item.day}</span>
            <span className={styles.separator}></span>
            <span className={styles.time}>{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpeningHours;
