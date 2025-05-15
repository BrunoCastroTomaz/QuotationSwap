import styles from './Card.module.css';

export default function Card({sigla, valor}) {
    return (
        <div className={styles.card}>
            <p className={styles.title}>{sigla}</p>
            <p className={styles.currency}>{valor}</p>
        </div>
    )
}