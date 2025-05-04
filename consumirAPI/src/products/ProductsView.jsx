// Este archivo muestra una lista de productos y permite editarlos o eliminarlos.
import BaseListView from "../components/BaseListView";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductsView = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <BaseListView
      title="Lista de Productos"
      items={products}
      onEdit={(id) => navigate(`/productos/editar/${id}`)}
      onDelete={handleDelete}
      fields={[
        { name: "name", label: "Nombre" },
        { name: "price", label: "Precio" },
        { name: "description", label: "Descripción" },
      ]}
      createPath="/productos/crear"
    />
  );
};

export default ProductsView;
