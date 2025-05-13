/**
 * usuarios.js
 * 
 * Este archivo define todas las rutas y lógica relacionada con la gestión de usuarios.
 * Implementa un CRUD completo (Create, Read, Update, Delete) para la entidad Usuario.
 * 
 * Características principales:
 * - Almacenamiento en memoria (array)
 * - Validación de datos
 * - Manejo de errores específicos
 * - IDs autoincrementales
 * 
 * Endpoints implementados:
 * GET    /api/usuarios     - Lista todos los usuarios
 * GET    /api/usuarios/:id - Obtiene un usuario específico
 * POST   /api/usuarios     - Crea un nuevo usuario
 * PUT    /api/usuarios/:id - Actualiza un usuario existente
 * DELETE /api/usuarios/:id - Elimina un usuario
 */

import express from 'express';
const router = express.Router();

// Almacenamiento en memoria
// En una aplicación real, esto sería reemplazado por una base de datos
let usuarios = [];
let idCounter = 1;

/**
 * Middleware de validación de datos de usuario
 * Verifica:
 * 1. Que todos los campos obligatorios estén presentes
 * 2. Que la edad sea un número válido
 * 3. Que el email no esté duplicado
 */
const validarUsuario = (req, res, next) => {
    const { nombre, email, edad } = req.body;
    
    // Validación de campos obligatorios
    if (!nombre || !email || !edad) {
        return res.status(400).json({ 
            error: 'Faltan datos obligatorios',
            detalles: 'Se requieren nombre, email y edad'
        });
    }

    // Validación de tipo y rango de edad
    if (typeof edad !== 'number' || edad < 0) {
        return res.status(400).json({
            error: 'Edad inválida',
            detalles: 'La edad debe ser un número positivo'
        });
    }

    // Validación de email duplicado
    if (usuarios.some(u => u.email === email)) {
        return res.status(400).json({
            error: 'Email duplicado',
            detalles: 'Ya existe un usuario con ese email'
        });
    }

    next();
};

// GET /usuarios - Obtiene el listado completo de usuarios
router.get('/', (req, res) => {
    res.json(usuarios);
});

// GET /usuarios/:id - Obtiene un usuario específico por su ID
router.get('/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) {
        return res.status(404).json({
            error: 'Usuario no encontrado',
            detalles: `No existe un usuario con el ID ${req.params.id}`
        });
    }
    res.json(usuario);
});

// POST /usuarios - Crea un nuevo usuario
// Utiliza el middleware de validación antes de procesar la petición
router.post('/', validarUsuario, (req, res) => {
    const { nombre, email, edad } = req.body;
    // Crea un nuevo usuario con ID autoincremental
    const nuevoUsuario = {
        id: idCounter++,
        nombre,
        email,
        edad
    };
    usuarios.push(nuevoUsuario);
    // Devuelve el usuario creado con código 201 (Created)
    res.status(201).json(nuevoUsuario);
});

// PUT /usuarios/:id - Actualiza un usuario existente
// Utiliza el middleware de validación antes de procesar la petición
router.put('/:id', validarUsuario, (req, res) => {
    const { nombre, email, edad } = req.body;
    // Busca el usuario a actualizar
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    
    if (!usuario) {
        return res.status(404).json({
            error: 'Usuario no encontrado',
            detalles: `No existe un usuario con el ID ${req.params.id}`
        });
    }

    // Validación especial para email duplicado en actualización
    // Permite que el usuario mantenga su email actual
    const emailDuplicado = usuarios.find(u => u.email === email && u.id !== parseInt(req.params.id));
    if (emailDuplicado) {
        return res.status(400).json({
            error: 'Email duplicado',
            detalles: 'Ya existe otro usuario con ese email'
        });
    }

    // Actualiza los datos del usuario
    usuario.nombre = nombre;
    usuario.email = email;
    usuario.edad = edad;

    res.json(usuario);
});

// DELETE /usuarios/:id - Elimina un usuario existente
router.delete('/:id', (req, res) => {
    // Verifica que el usuario exista antes de eliminarlo
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    
    if (!usuario) {
        return res.status(404).json({
            error: 'Usuario no encontrado',
            detalles: `No existe un usuario con el ID ${req.params.id}`
        });
    }

    // Elimina el usuario del array
    usuarios = usuarios.filter(u => u.id !== parseInt(req.params.id));
    res.json({
        mensaje: 'Usuario eliminado exitosamente',
        id: parseInt(req.params.id)
    });
});

export default router; 