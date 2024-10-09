const { default: mongoose } = require("mongoose");

const ProductoSchema = new mongoose.Schema({
    idProducto: {type:String, required:true},
    nombre: {type:String, required:true},
    descripcion: String,
    precio: Number,
    stock: Number,
    categoria: String
})

module.exports = mongoose.model('Producto',ProductoSchema);