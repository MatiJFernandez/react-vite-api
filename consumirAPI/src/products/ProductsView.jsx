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
    <div className="p-6">
      <h2 className="text-center text-2xl font-bold mb-6">Lista de Productos</h2>
      <div className="text-center mb-6">
        <Link to="/productos/crear">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Agregar Producto</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <button 
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
              onClick={() => deleteProduct(product.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsView;
