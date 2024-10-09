const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/usuarioController');

//Las rutas
router.post('/usuarios', usuarioController.crearUsuario);
router.get('/usuarios', usuarioController.obtenerUsuario);

MediaSourceHandle.exports = router;