import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido a la App de Gestión</h1>
      <p>Elige una de las siguientes opciones:</p>
      <div>
        <Link to="/unicornios" style={{ margin: '10px', display: 'inline-block' }}>
          <Button label="Unicornios" className="p-button-raised p-button-rounded" />
        </Link>
        <Link to="/productos" style={{ margin: '10px', display: 'inline-block' }}>
          <Button label="Productos" className="p-button-raised p-button-rounded" />
        </Link>
      </div>
    </div>
  );
};

export default Home;