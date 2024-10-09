const Producto = require('../models/Producto');

//Crear un producto
exports.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await producto.find();
        res.status(200).json(productos);
    }catch (error) {
        res.status(500).json({ message: error.message});
    }
};