// Este archivo define el formulario para crear o editar unicornios.
import BaseForm from "../components/BaseForm";
import { useNavigate, useParams } from "react-router-dom";
import { useUnicorns } from "../context/UnicornContext";
import { useEffect } from "react";
import * as Yup from "yup";
import { useUnicornForm } from "./useUnicornForm";

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

  const initialValues = {
    nombre: unicornToEdit?.nombre || "",
    edad: unicornToEdit?.edad || "",
    color: unicornToEdit?.color || "",
    poder: unicornToEdit?.poder || "",
  };

  const formik = useUnicornForm({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <BaseForm
      initialValues={formik.initialValues}
      validationSchema={{}} // La validación ya está en el hook
      onSubmit={formik.handleSubmit}
      fields={[
        { name: "nombre", label: "Nombre" },
        { name: "edad", label: "Edad", type: "number" },
        { name: "color", label: "Color" },
        { name: "poder", label: "Poder" },
      ]}
      formik={formik}
    />
  );
};

export default UnicornForm;
