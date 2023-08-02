import * as Yup from "yup";

export function initialValues () {
    return {
        email: "",
        password: "",

    };
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string()
            .email("El Email no es valido")
            .required("El Email es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria"),
    });
}