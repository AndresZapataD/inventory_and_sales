const mongoose = require('mongoose'); // Asegúrate de que "mongoose" esté importado correctamente
const Producto = require('./Producto'); // Para la relación con productos

const InventarioSchema = new mongoose.Schema({  // Aquí debe ser mongoose.Schema
    idInventario: { type: String, required: true },
    productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Producto' }],  // Relación con productos
    fechaActualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inventario', InventarioSchema);
