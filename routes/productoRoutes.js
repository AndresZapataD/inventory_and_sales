const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/productoController');

//Las rutas
router.post('/productos', productoController.crearProducto);
router.get('/productos', productoController.obtenerProducto);

MediaSourceHandle.exports = router;