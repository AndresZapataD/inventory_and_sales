const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController'); // Asegúrate de tener esta línea

// Rutas para usuarios
router.post('/usuarios', usuarioController.crearUsuario);
router.get('/usuarios', usuarioController.obtenerUsuarios);

module.exports = router;
