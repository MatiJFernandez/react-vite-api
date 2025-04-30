import { Routes, Route } from 'react-router-dom';
import ProductsView from './ProductsView';
import ProductForm from './ProductForm';

const ProductRoutes = () => (
  <Routes>
    <Route path="/" element={<ProductsView />} />
    <Route path="crear" element={<ProductForm />} />
    <Route path="editar/:id" element={<ProductForm />} />
  </Routes>
);

export default ProductRoutes;
