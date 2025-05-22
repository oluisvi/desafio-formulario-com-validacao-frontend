import styles from "./FormHeader.module.css";

export default function Form() {
  return (
    <>
      <section className={styles.container}>
        <header>
          <article className={styles.headerTitle}>
            <article className={styles.title}>
              <h1>Frontend Fusion</h1>
            </article>
            <article className={styles.subtitle}>
              <h2>Cadastro de Membros do Projeto</h2>
            </article>
          </article>
        </header>
      </section>
    </>
  );
}
