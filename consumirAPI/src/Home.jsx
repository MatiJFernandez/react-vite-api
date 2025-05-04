// Este archivo define la página de inicio de la aplicación, proporcionando enlaces a las secciones principales.

import { Link } from 'react-router-dom';
 

const Home = () => {
  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a la App de Gestión</h1>
      <p className="text-lg mb-6">Elige una de las siguientes opciones:</p>
      <div className="flex justify-center gap-4">
        <Link to="/unicornios">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Unicornios</button>
        </Link>
        <Link to="/productos">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Productos</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;