import styles from "./FormHeader.module.css";

export default function FormHeader() {
  return (
    <>
      <section className={styles.container}>
        <header>
          <article className={styles.headerTitle}>
            <article className={styles.title}>
              <img src="/assets/logo.svg" alt="Logo Frontend Fusion" />
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
