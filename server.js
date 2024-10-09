const express = require('express');

const mongoose = require('mongoose');

require('dotenv').config(); //Esta linea de configuracioon para manejar variables de entorno
const app = express();

//Middlewares
app.use(express.json());

//conexión a la base de datos mongo
mongoose.connect(ProcessingInstruction.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology:true}) // Si no funciona, probar con esto: mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

//Definir rutas basicas para la api
app.get('/', (req, res) => {
    res.send('Bienvenido al sistema de inventario');
});

//Incluir rutas
app.use('/api', inventarioRoutes);
app.use('/api', productoRoutes);
app.use('/api', usuarioRoutes);

//PAra iniciar el servidor
const PORT = ProcessingInstruction.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log('El servidor está corriendo en el puerto ${PORT');
})