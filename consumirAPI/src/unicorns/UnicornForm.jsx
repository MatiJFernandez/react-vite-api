// Este archivo define el formulario para crear o editar unicornios.
import BaseForm from "../components/BaseForm";
import { useNavigate, useParams } from "react-router-dom";
import { useUnicorns } from "../context/UnicornContext";
import { useEffect } from "react";
import * as Yup from "yup";

const UnicornForm = () => {
  const { unicorns, createUnicorn, editUnicorn } = useUnicorns();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;
  const unicornToEdit = unicorns.find((u) => u._id === id);

  const handleSubmit = (values) => {
    if (isEdit) {
      editUnicorn(id, values);
    } else {
      createUnicorn(values);
    }
    navigate("/unicornios");
  };

  return (
    <BaseForm
      initialValues={unicornToEdit || { nombre: "", edad: "", color: "", poder: "" }}
      validationSchema={{
        nombre: Yup.string().required("Requerido"),
        edad: Yup.number()
          .typeError("Debe ser un número")
          .positive("Debe ser mayor que 0")
          .integer("Debe ser un número entero")
          .required("Requerido"),
        color: Yup.string().required("Requerido"),
        poder: Yup.string().required("Requerido"),
      }}
      onSubmit={handleSubmit}
      fields={[
        { name: "nombre", label: "Nombre" },
        { name: "edad", label: "Edad", type: "number" },
        { name: "color", label: "Color" },
        { name: "poder", label: "Poder" },
      ]}
    />
  );
};

export default UnicornForm;
