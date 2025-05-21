'use client';

import styles from './Card.module.css';
import { useRouter } from 'next/navigation';

export default function Card({sigla, valor}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/moeda/${sigla}`);
  };

  return (
    <div className={styles.card} onClick={handleClick} style={{cursor: 'pointer'}}>
      <div className={styles.innercard}>
        <p className={styles.title}>{sigla}</p>
      </div>
      <p className={styles.currency}>{valor}</p>
    </div>
  );
}