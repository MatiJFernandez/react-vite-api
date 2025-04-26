import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';                   // Estilos base de PrimeReact
import 'primeicons/primeicons.css';                                 // Iconos de PrimeReact

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UnicornProvider } from './context/UnicornContext'; // 👈 ¡esto es clave!
import UnicornRoutes from './unicorns';
import ProductRoutes from './products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/unicornios" />} />
        
        <Route path="/unicornios/*" element={
          <UnicornProvider> {/* ✅ envolver solo las rutas unicornio */}
            <UnicornRoutes />
          </UnicornProvider>
        } />
        
        <Route path="/productos/*" element={<ProductRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
