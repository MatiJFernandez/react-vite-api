import { useFormik } from "formik";
import * as Yup from "yup";
import { useUnicorns } from "../context/UnicornContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

// Estilos de error para mostrar al usuario
const errorStyle = {
  color: "red",
  fontSize: "12px",
};

const UnicornForm = () => {
  const { unicorns, createUnicorn, editUnicorn } = useUnicorns();
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = !!id;
  const unicornToEdit = unicorns.find(u => u.id === id);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      edad: "",
      color: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Requerido"),
      edad: Yup.number()
        .typeError("Debe ser un número")
        .positive("Debe ser mayor que 0")
        .integer("Debe ser un número entero")
        .required("Requerido"),
      color: Yup.string().required("Requerido"),
    }),
    onSubmit: values => {
      if (isEdit) {
        editUnicorn(id, values);
      } else {
        createUnicorn(values);
      }
      navigate("/unicornios");
    },
  });

  useEffect(() => {
    if (isEdit && unicornToEdit) {
      formik.setValues(unicornToEdit);
    }
  }, [isEdit, unicornToEdit]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>{isEdit ? "Editar Unicornio" : "Crear Unicornio"}</h2>

      <label htmlFor="nombre">Nombre:</label>
      <input
        id="nombre"
        name="nombre"
        onChange={formik.handleChange}
        value={formik.values.nombre}
      />
      {formik.errors.nombre && (
        <span style={errorStyle}>{formik.errors.nombre}</span>
      )}

      <label htmlFor="edad">Edad:</label>
      <input
        id="edad"
        name="edad"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.edad}
      />
      {formik.errors.edad && (
        <span style={errorStyle}>{formik.errors.edad}</span>
      )}

      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        onChange={formik.handleChange}
        value={formik.values.color}
      />
      {formik.errors.color && (
        <span style={errorStyle}>{formik.errors.color}</span>
      )}

      <div>
        <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
          Guardar
        </button>
        <button type="button" onClick={() => navigate("/unicornios")}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default UnicornForm;
