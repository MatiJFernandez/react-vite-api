// Este archivo define el formulario para crear o editar productos.
import BaseForm from "../components/BaseForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import * as Yup from "yup";
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;
  const toast = useRef(null);

  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  const productToEdit = storedProducts.find((product) => product.id === id?.toString());

  const handleSubmit = (values) => {
    try {
      if (isEdit) {
        const updatedProducts = storedProducts.map((product) =>
          product.id === id ? { ...product, ...values } : product
        );
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        toast.current.show({ severity: 'success', summary: 'Producto actualizado', detail: 'El producto ha sido actualizado correctamente', life: 3000 });
      } else {
        const newProduct = { id: crypto.randomUUID(), ...values };
        storedProducts.push(newProduct);
        localStorage.setItem("products", JSON.stringify(storedProducts));
        toast.current.show({ severity: 'success', summary: 'Producto creado', detail: 'El producto ha sido creado correctamente', life: 3000 });
      }
      navigate("/productos");
    } catch (error) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al guardar el producto', life: 3000 });
    }
  };

  return (
    <>
      <Toast ref={toast} />
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
    </>
  );
};

export default ProductForm;
