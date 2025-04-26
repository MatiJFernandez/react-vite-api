import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UnicornProvider } from './context/UnicornContext';
import UnicornRoutes from './unicorns';
import ProductRoutes from './products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/unicornios" />} />
        
        <Route path="/unicornios/*" element={
          <UnicornProvider>
            <UnicornRoutes />
          </UnicornProvider>
        } />
        
        <Route path="/productos/*" element={<ProductRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
