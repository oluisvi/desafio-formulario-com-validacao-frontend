import styles from './SelectField.module.css'

export default function SelectField() {
  return (
    <>
      <label htmlFor="cargo" className={styles.selectField}>Cargo pretendido</label>
      <select id="cargo" name="cargo" required>
        <option value="">Selecione um cargo</option>
        <option value="frontend">Desenvolvedor Frontend</option>
        <option value="backend">Desenvolvedor Backend</option>
        <option value="fullstack">Desenvolvedor Full Stack</option>
        <option value="mobile">Desenvolvedor Mobile</option>
        <option value="software-dev">Desenvolvedor de Software</option>
        <option value="software-eng">Engenheiro de Software</option>
        <option value="arquiteto">Arquiteto de Software</option>
        <option value="uiux">UI/UX Designer</option>
        <option value="analista-sistemas">Analista de Sistemas</option>
        <option value="analista-programador">Analista Programador</option>
        <option value="devops">DevOps Engineer</option>
        <option value="dados">Engenheiro de Dados</option>
        <option value="qa">QA Engineer</option>
        <option value="scrum">Scrum Master</option>
        <option value="product-owner">Product Owner</option>
      </select>
    </>
  );
}
