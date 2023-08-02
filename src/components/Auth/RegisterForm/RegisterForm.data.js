import { yupToFormErrors } from "formik";
import * as Yup from "yup";

export function initialValues() {
    return{
        email: "",
        password: "",
        repeatPassword: "",
    };
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string()
        .email("El e-mail no es correcto")
        .required("El e-mail es obligatorio"),

        password: Yup.string().required("La contraseña es obligatoria"),
        repeatPassword: Yup.string()
            .required("La contraseña es obligatoria")
            .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir"),
    });
}