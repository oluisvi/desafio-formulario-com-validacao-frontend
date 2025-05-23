import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../utils/validationSchema";
import SelectField from "../SelectField/SelectField";
import styles from "./InputField.module.css";

export default function InputField() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formBox}>
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
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </article>
        <article className={styles.inputField}>
          <label htmlFor="phone">Nome completo</label>
          <input
            {...register("phone")}
            id="phone"
            placeholder="Digite seu número de telefone"
          />
          {errors.phone && (
            <p className={styles.error}>{errors.phone.message}</p>
          )}
        </article>
        <SelectField />
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
      </form>
    </>
  );
}
