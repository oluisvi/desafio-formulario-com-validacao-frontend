import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { validationSchema } from "../../utils/validationSchema";
import SelectField from "../SelectField/SelectField";
import styles from "./InputField.module.css";

export default function InputField() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
  register,
  handleSubmit,
  control,
  formState: { errors },
} = useForm({
  resolver: yupResolver(validationSchema),
});


  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
    setIsSubmitted(true); // Marca como enviado
  };

  if (isSubmitted) {
    return (
      <div className={styles.successContainer}>
        <img
          src="/assets/check.svg"
          alt="Sucesso"
          className={styles.successIcon}
        />
        <h2>Cadastro realizado com sucesso!</h2>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formBox}>
      {/* Campos do formulário */}
      <article className={styles.inputField}>
        <label htmlFor="name">Nome completo</label>
        <input
          {...register("name")}
          id="name"
          placeholder="Digite seu nome completo"
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </article>

      <article className={styles.inputField}>
        <label htmlFor="email">E-mail</label>
        <input
          {...register("email")}
          id="email"
          placeholder="Digite seu e-mail"
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </article>

      <article className={styles.inputField}>
        <label htmlFor="phone">Número de telefone</label>
        <input
          {...register("phone")}
          id="phone"
          placeholder="Digite seu número de telefone"
        />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </article>

      <SelectField control={control} errors={errors} />

      <article className={styles.inputField}>
        <label htmlFor="linkedin">
          LinkedIn <span>(opcional)</span>
        </label>
        <input
          {...register("linkedin")}
          id="linkedin"
          placeholder="Digite seu LinkedIn"
        />
        {errors.linkedin && (
          <p className={styles.error}>{errors.linkedin.message}</p>
        )}
      </article>

      <article className={styles.inputField}>
        <label htmlFor="github">
          GitHub <span>(opcional)</span>
        </label>
        <input
          {...register("github")}
          id="github"
          placeholder="Digite seu GitHub"
        />
        {errors.github && (
          <p className={styles.error}>{errors.github.message}</p>
        )}
      </article>

      <button type="submit" className={styles.submitButton}>
        Concluir Cadastro
      </button>
    </form>
  );
}
