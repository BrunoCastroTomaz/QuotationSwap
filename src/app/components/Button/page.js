import { useRouter } from 'next/navigation';
import styles from './button.module.css'

export function BackButton () {

    const router = useRouter();

    return (
        <button className={styles.backButton} onClick={() => router.push('/')}>
            <img className={styles.img} src="/back.png"></img>
        </button>
    );
}