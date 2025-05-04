// Este archivo define el componente de navegación principal de la aplicación.
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <Link className="text-blue-400 hover:text-blue-300 font-medium" to="/">Home</Link>
      <Link className="text-blue-400 hover:text-blue-300 font-medium" to="/unicornios">Unicorns</Link>
      <Link className="text-blue-400 hover:text-blue-300 font-medium" to="/productos">Products</Link>
    </nav>
  );
};

export default Navbar;