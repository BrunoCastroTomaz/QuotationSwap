import styles from "./grid.module.css";

export default function Grid({children}) {
    return (
        <section className={styles.grid}>
            {children}
        </section>
    );
}