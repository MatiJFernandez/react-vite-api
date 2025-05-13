/**
 * vite.config.js
 * 
 * Archivo de configuración principal de Vite.
 * Vite es un bundler y servidor de desarrollo moderno que ofrece:
 * - Hot Module Replacement (HMR) extremadamente rápido
 * - Optimización de build para producción
 * - Soporte nativo para ES modules
 * 
 * Esta configuración establece:
 * - El plugin de React para Vite
 * - La configuración base del proyecto
 */

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite para el proyecto
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
