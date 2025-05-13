/**
 * App.jsx
 * 
 * Componente principal de la aplicación.
 * Define la estructura base y el enrutamiento de la aplicación.
 * 
 * Características:
 * - Configuración de rutas principales
 * - Layout base de la aplicación
 * - Manejo de navegación
 * - Integración de componentes globales
 */

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UnicornProvider } from './context/UnicornContext';
import UnicornRoutes from './unicorns';
import ProductRoutes from './products';
import Home from './Home';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* Contenedor de notificaciones toast */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unicornios/*" element={
            <UnicornProvider>
              <UnicornRoutes />
            </UnicornProvider>
          } />
          <Route path="/productos/*" element={<ProductRoutes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
