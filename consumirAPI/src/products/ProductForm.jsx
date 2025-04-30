import BaseForm from "../components/BaseForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import * as Yup from "yup";

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;

  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  const productToEdit = storedProducts.find((product) => product.id === id.toString());

  const handleSubmit = (values) => {
    if (isEdit) {
      const updatedProducts = storedProducts.map((product) =>
        product.id === id ? { ...product, ...values } : product
      );
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    } else {
      const newProduct = { id: crypto.randomUUID(), ...values };
      storedProducts.push(newProduct);
      localStorage.setItem("products", JSON.stringify(storedProducts));
    }
    navigate("/productos");
  };

  return (
    <BaseForm
      initialValues={productToEdit || { name: "", price: "", description: "" }}
      validationSchema={{
        name: Yup.string().required("Requerido"),
        price: Yup.number().positive("Debe ser mayor a 0").required("Requerido"),
        description: Yup.string().required("Requerido"),
      }}
      onSubmit={handleSubmit}
      fields={[
        { name: "name", label: "Nombre" },
        { name: "price", label: "Precio", type: "number" },
        { name: "description", label: "Descripción", type: "textarea" },
      ]}
    />
  );
};

export default ProductForm;
