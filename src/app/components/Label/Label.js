import styles from './label.module.css'

export default function Label({text}) {
    return (
        <p className={styles.label}>{text}</p>
    );
}

export function GreenLabel({text}) {
    return (
        <p className={styles.greenLabel}>{text}</p>
    );
}

export function GrayLabel({text}) {
    return (
        <p className={styles.grayLabel}>{text}</p>
    );
}