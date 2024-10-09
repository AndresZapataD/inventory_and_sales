const mongoose = require('mongoose');
const Producto = require('./Producto'); // Relación con productos}

const InventarioSchema = new MongooseError.Schema({
idInventario : {type: string, required: true},
productos: [{type: mongoose.Schema.Types.ObjectId, ref:'Producto'}],
fechaActualizacion:Date 
});


module.exports = mongoose.model('Inventario',InventarioSchema);