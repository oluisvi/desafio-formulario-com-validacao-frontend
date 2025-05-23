import * as Yup from 'yup';

export const validation = Yup.object().shape({
    name: Yup.string().required("Nome completo é obrigatório"),
    email: Yup.string().email("Digite um e-mail válido").required("E-mail é obrigatório"),
    linkedin: Yup.string().url("Digite uma URL válida para o LinkedIn").nullable().notRequired,
    github: Yup.string().url("Digite uma URL válida para o Github").nullable().notRequired,

})