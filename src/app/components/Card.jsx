import styles from './Card.module.css';

export default function Card({sigla, valor}) {
    return (
        <div className={styles.card}>
            <div className={styles.innercard}>
                <p className={styles.title}>{sigla}</p>
            </div>
            <p className={styles.currency}>{valor}</p>
        </div>
    )
}