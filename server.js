const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./src/routes/ProductRoutes');
const database = require('./src/config/database');

const app = express();
const PORT = 3000;

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Rutas de la API
app.use('/products', productRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});