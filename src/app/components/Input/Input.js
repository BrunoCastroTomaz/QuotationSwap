import styles from './input.module.css'

export default function Input({ onValorChange, valor}) {

    const handleChange = (e) => {
        const valor = parseFloat(e.target.value);
        onValorChange(isNaN(valor) ? 0 : valor);
    };

    return (
        <input 
            onChange={handleChange} 
            className={styles.input} 
            type="number" 
            placeholder={valor ? `${valor} BRL` : "0,00 BRL"}
        ></input>
    );
}