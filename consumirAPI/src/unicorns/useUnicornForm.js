import { useFormik } from "formik";
import * as Yup from "yup";

export function useUnicornForm({ initialValues, onSubmit }) {
  return useFormik({
    initialValues,
    validationSchema: Yup.object({
      nombre: Yup.string().required("Requerido"),
      edad: Yup.number()
        .typeError("Debe ser un número")
        .positive("Debe ser mayor que 0")
        .integer("Debe ser un número entero")
        .required("Requerido"),
      color: Yup.string().required("Requerido"),
      poder: Yup.string().required("Requerido"),
    }),
    onSubmit,
  });
} 