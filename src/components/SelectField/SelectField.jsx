import { Controller } from 'react-hook-form';
import Select from 'react-select';
import PropTypes from 'prop-types'; // para validação de props
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

export default function SelectField({ control, errors }) {
  return (
    <div className={styles.cargoSelection}>
      <label htmlFor="cargo" className={styles.selectTitle}>Cargo pretendido</label>
      
      <Controller
        name="cargo"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            placeholder="Selecione um cargo"
            inputId="cargo"
            className={styles.selectField}
            value={options.find(option => option.value === field.value)}
            onChange={(selectedOption) => field.onChange(selectedOption.value)}
            styles={{
              menu: (base) => ({
                ...base,
                maxHeight: '10rem',
                overflowY: 'auto',
              }),
              menuList: (base) => ({
                ...base,
                maxHeight: '10rem',
                padding: 0,
              }),
            }}
          />
        )}
      />
      
      {errors.cargo && <p className={styles.error}>{errors.cargo.message}</p>}
    </div>
  );
}

// Para evitar os avisos do linter
SelectField.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
