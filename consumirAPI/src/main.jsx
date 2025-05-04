// Este archivo inicializa la aplicación y monta el componente principal en el DOM.
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
