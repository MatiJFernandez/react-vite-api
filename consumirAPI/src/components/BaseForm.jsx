// Este archivo define un componente base reutilizable para formularios con validación.
import { useFormik } from "formik";
import * as Yup from "yup";

const BaseForm = ({ initialValues, validationSchema, onSubmit, fields, formik: externalFormik }) => {
  const formik = externalFormik || useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      {fields.map(({ name, label, type = "text" }) => (
        <div key={name} className="flex flex-col">
          <label htmlFor={name} className="font-medium mb-1">{label}</label>
          {type === "textarea" ? (
            <textarea
              id={name}
              name={name}
              value={formik.values[name]}
              onChange={formik.handleChange}
              className="border rounded p-2"
            />
          ) : (
            <input
              id={name}
              name={name}
              type={type}
              value={formik.values[name]}
              onChange={formik.handleChange}
              className="border rounded p-2"
            />
          )}
          {formik.errors[name] && <span className="text-red-500 text-sm">{formik.errors[name]}</span>}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Guardar
      </button>
    </form>
  );
};

export default BaseForm;