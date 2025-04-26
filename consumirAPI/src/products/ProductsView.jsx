import { useState, useEffect } from "react";
import { productsData } from "./productsData";
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

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
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Lista de Productos</h2>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Link to="/productos/crear">
          <Button label="Agregar Producto" icon="pi pi-plus" className="p-button-success" />
        </Link>
      </div>
      <div className="p-grid">
        {products.map((product) => (
          <div key={product.id} className="p-col-12 p-md-4">
            <Card title={product.name} subTitle={`$${product.price}`} style={{ marginBottom: '20px' }}>
              <p>{product.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button label="Eliminar" icon="pi pi-trash" className="p-button-danger" onClick={() => deleteProduct(product.id)} />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsView;
