// Este archivo muestra una lista de productos y permite editarlos o eliminarlos.
import BaseListView from "../components/BaseListView";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Toast } from 'primereact/toast';

const ProductsView = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const toast = useRef(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    const updatedProducts = products
      .filter((product) => product && product.id) // solo productos válidos con id
      .filter((product) => product.id.toString() !== id.toString());
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    if (toast.current) {
      toast.current.show({ severity: 'success', summary: 'Producto eliminado', detail: 'El producto ha sido eliminado correctamente', life: 3000 });
    }
  };

  return (
    <>
      <Toast ref={toast} />
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
    </>
  );
};

export default ProductsView;
