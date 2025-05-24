import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Nome completo é obrigatório"),

  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("E-mail é obrigatório"),

  phone: Yup.string()
    .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Digite um número válido")
    .required("Número de telefone é obrigatório"),

  cargo: Yup.string()
    .required("Selecione um cargo"),

  linkedin: Yup.string()
    .url("Digite uma URL válida para o LinkedIn")
    .nullable()
    .notRequired(),

  github: Yup.string()
    .url("Digite uma URL válida para o GitHub")
    .nullable()
    .notRequired(),
});
