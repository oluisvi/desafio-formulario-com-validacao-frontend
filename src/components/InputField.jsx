import styles from "./InputField.module.css";

export default function InputField() {
  return (
    <>
      <article className={styles.formBox}>
        <article className={styles.inputField}>
          <label htmlFor="name">Nome completo</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome completo"
            required
          />
        </article>
        <article className={styles.inputField}>
          <label htmlFor="name">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
        </article>
        <article className={styles.inputField}>
          <label htmlFor="name">Telefone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Digite seu telefone"
            required
          />
        </article>

        <article className={styles.inputField}>
          <label htmlFor="name">
            LinkedIn <span>(Opcional)</span>
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            placeholder="Digite seu linkedIn"
            
          />
        </article>
        <article className={styles.inputField}>
          <label htmlFor="name">
            GitHub <span>(Opcional)</span>
          </label>
          <input
            type="url"
            id="github"
            name="github"
            placeholder="Digite seu GitHub"
            
          />
        </article>
      </article>
    </>
  );
}
