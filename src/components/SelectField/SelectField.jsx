import Select from 'react-select';
import styles from './SelectField.module.css';

const options = [
  { value: "", label: "Selecione um cargo" },
  { value: "frontend", label: "Desenvolvedor Frontend" },
  { value: "backend", label: "Desenvolvedor Backend" },
  { value: "fullstack", label: "Desenvolvedor Full Stack" },
  { value: "mobile", label: "Desenvolvedor Mobile" },
  { value: "software-dev", label: "Desenvolvedor de Software" },
  { value: "software-eng", label: "Engenheiro de Software" },
  { value: "arquiteto", label: "Arquiteto de Software" },
  { value: "uiux", label: "UI/UX Designer" },
  { value: "analista-sistemas", label: "Analista de Sistemas" },
  { value: "analista-programador", label: "Analista Programador" },
  { value: "devops", label: "DevOps Engineer" },
  { value: "dados", label: "Engenheiro de Dados" },
  { value: "qa", label: "QA Engineer" },
  { value: "scrum", label: "Scrum Master" },
  { value: "product-owner", label: "Product Owner" },
];

export default function SelectField() {
  return (
    <div className={styles.cargoSelection}>
      <label htmlFor="cargo" className={styles.selectTitle}>Cargo pretendido</label>
      <Select
  inputId="cargo"
  name="cargo"
  options={options}
  placeholder="Selecione um cargo"
  className={styles.selectField}  // aplica ao wrapper externo
  styles={{
    menu: (base) => ({
      ...base,
      maxHeight: '10rem',     // altura máxima do dropdown
      overflowY: 'auto',      // adiciona scroll se passar da altura
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: '10rem', // altura máxima do menu
      padding: 0,
    }),
  }}
/>
    </div>
  );
}
