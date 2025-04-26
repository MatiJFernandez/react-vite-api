import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Requerido"),
      price: Yup.number().positive("Debe ser mayor a 0").required("Requerido"),
      description: Yup.string().required("Requerido"),
    }),
    onSubmit: (values) => {
      const newProduct = { id: crypto.randomUUID(), ...values };
      const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
      storedProducts.push(newProduct);
      localStorage.setItem("products", JSON.stringify(storedProducts));
      navigate("/productos");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Agregar Producto</h2>
      <label>
        Nombre:
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <span>{formik.errors.name}</span>}
      </label>
      <label>
        Precio:
        <input
          name="price"
          type="number"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        {formik.errors.price && <span>{formik.errors.price}</span>}
      </label>
      <label>
        Descripción:
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        {formik.errors.description && <span>{formik.errors.description}</span>}
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ProductForm;
