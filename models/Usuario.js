const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    idUsuario: {type:String, required:true},
    nombre: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    rol:{type:String, required:true}
});

module.exports = mongoose.model('Usuario',UsuarioSchema);