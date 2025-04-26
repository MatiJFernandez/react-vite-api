import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', background: '#f4f4f4' }}>
      <Link to="/">Home</Link>
      <Link to="/unicornios">Unicorns</Link>
      <Link to="/productos">Products</Link>
    </nav>
  );
};

export default Navbar;