const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

//Las rutas
router.post('/inventarios', inventarioController.crearInventario);
router.get('/inventarios', inventarioController.obtenerInventario);

MediaSourceHandle.exports = router;