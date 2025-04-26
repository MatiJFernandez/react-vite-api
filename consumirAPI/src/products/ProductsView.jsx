import { useState, useEffect } from "react";
import { productsData } from "./productsData";
import { Link } from "react-router-dom";

const ProductsView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || productsData;
    setProducts(storedProducts);
  }, []);

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <Link to="/productos/crear">Agregar Producto</Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
            <p>{product.description}</p>
            <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsView;
