/**
 * server.js
 * 
 * Este archivo es el punto de entrada principal de la API REST.
 * Se encarga de:
 * 1. Configurar y levantar el servidor Express
 * 2. Configurar middleware esencial (cors, json parser)
 * 3. Definir las rutas principales de la API
 * 4. Manejar errores globales
 * 5. Iniciar el servidor en el puerto especificado
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usuariosRouter from './src/api/usuarios.js';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware esencial
// CORS: Permite peticiones desde otros dominios
app.use(cors());
// JSON Parser: Permite procesar cuerpos de petición en formato JSON
app.use(express.json());

// Rutas de la API
// Todas las rutas de usuarios estarán bajo /api/usuarios
app.use('/api/usuarios', usuariosRouter);

// Ruta de prueba para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.json({ mensaje: 'API de Usuarios funcionando correctamente' });
});

// Middleware de manejo de errores global
// Captura cualquier error no manejado en las rutas
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Error interno del servidor',
        detalles: err.message
    });
});

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 