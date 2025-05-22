import styles from './InputField.module.css';

export default function InputField() {
    return (
        <>
        <article className={styles.formBox}>
            <article className={styles.inputField}>
                <label htmlFor="name">
                    Nome completo
                </label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome completo" required />
            </article>
            <article className={styles.inputField}>
                <label htmlFor="name">
                    E-mail
                </label>
                <input type="text" id="name" name="name" placeholder="Digite seu e-mail" required />
            </article>
            <article className={styles.inputField}>
                <label htmlFor="name">
                    LinkedIn
                </label>
                <input type="text" id="name" name="name" placeholder="Digite seu linkedIn" required />
            </article>
            <article className={styles.inputField}>
                <label htmlFor="name">
                    GitHub
                </label>
                <input type="text" id="name" name="name" placeholder="Digite seu GitHub" required />
            </article>
        </article>
        </>
    )
}