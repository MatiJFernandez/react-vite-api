/**
 * eslint.config.js
 * 
 * Archivo de configuración de ESLint.
 * ESLint es una herramienta de análisis de código estático que:
 * - Encuentra y arregla problemas en el código JavaScript
 * - Mantiene un estilo de código consistente
 * - Previene errores comunes
 * 
 * Esta configuración establece:
 * - Reglas específicas para React
 * - Configuración del entorno
 * - Plugins necesarios
 * - Globals permitidos
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

// Configuración base de ESLint
export default [
  // Configuración base de JavaScript
  js.configs.recommended,
  
  // Configuración específica para el proyecto
  {
    // Archivos a los que se aplica la configuración
    files: ['**/*.{js,jsx,ts,tsx}'],
    
    // Entorno de ejecución
    languageOptions: {
      globals: {
        ...globals.browser,  // Variables globales del navegador
        ...globals.node,     // Variables globales de Node.js
        ...globals.es2021    // Características de ES2021
      },
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true  // Habilita el soporte para JSX
        }
      }
    },
    
    // Plugins y sus configuraciones
    plugins: {
      'react-hooks': reactHooks,      // Reglas para React Hooks
      'react-refresh': reactRefresh   // Soporte para React Fast Refresh
    },
    
    // Reglas personalizadas
    rules: {
      'react-hooks/rules-of-hooks': 'error',           // Asegura el uso correcto de Hooks
      'react-hooks/exhaustive-deps': 'warn',           // Verifica las dependencias de useEffect
      'react-refresh/only-export-components': 'warn',   // Optimiza el Fast Refresh
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
    
    // Configuración del entorno
    env: {
      browser: true,  // Habilita variables globales del navegador
      node: true,     // Habilita variables globales de Node.js
      es2021: true    // Habilita características de ES2021
    }
  },
]
