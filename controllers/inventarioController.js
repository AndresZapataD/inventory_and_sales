const Inventario = require('../models/Inventario');

// Crear un inventario
exports.crearInventario = async (req, res) => {
    try {
        const nuevoInventario = new Inventario(req.body);
        await nuevoInventario.save();
        res.status(201).json(nuevoInventario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todos los inventarios
exports.obtenerInventarios = async (req, res) => {
    try {
        const inventarios = await Inventario.find().populate('productos');
        res.status(200).json(inventarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
