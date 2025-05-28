import styles from './cardMoeda.module.css'
import { useRouter } from 'next/navigation'

export default function CardMoeda({nome, valorMoeda, cotacao}) {
    const router = useRouter();

    return (
        <article className={styles.card} onClick={() => router.push(`/moeda/${nome}?valorMoeda=${valorMoeda}&cotacao=${cotacao}`)}>
            <p id={styles.nome}>{nome}</p>
            <p id={styles.valorMoeda}>{valorMoeda}</p>
        </article>
    );
}

export function LargeCard({nome, valorMoeda}) {
    return (
        <article className={styles.largeCard} >
            <p id={styles.nome}>{nome}</p>
            <p id={styles.valorMoeda}>{valorMoeda}</p>
        </article>
    );
}