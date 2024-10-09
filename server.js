const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Para manejar variables de entorno

const app = express();

// Middlewares
app.use(express.json()); // Para procesar datos JSON

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Definir rutas básicas para la API
app.get('/', (req, res) => {
    res.send('Bienvenido al sistema de inventario');
});

// Incluir rutas de los productos, usuarios, e inventarios
const productoRoutes = require('./routes/productoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const inventarioRoutes = require('./routes/InventarioRoutes');

app.use('/api', productoRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', inventarioRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
