import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UnicornProvider } from './context/UnicornContext';
import UnicornRoutes from './unicorns';
import ProductRoutes from './products';
import Home from './Home';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router>
      <Navbar /> {/* Add the Navbar component here */}
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
  );
}

export default App;
