const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController'); // Asegúrate de importar el controlador

// Rutas para inventarios
router.post('/inventarios', inventarioController.crearInventario);  // Crear inventario
router.get('/inventarios', inventarioController.obtenerInventarios); // Obtener inventarios

module.exports = router;
