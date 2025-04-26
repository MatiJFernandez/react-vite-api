import { Routes, Route } from 'react-router-dom';
import UnicornsView from './UnicornsView';
import UnicornForm from './UnicornForm';
import { UnicornProvider } from '../context/UnicornContext';

const UnicornRoutes = () => {
  return (
    <UnicornProvider>
      <Routes>
        <Route path="/" element={<UnicornsView />} />
        <Route path="crear" element={<UnicornForm />} />
        <Route path="editar/:id" element={<UnicornForm />} />
      </Routes>
    </UnicornProvider>
  );
};

export default UnicornRoutes;
