const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbFJCO202409012')
  .then(() => console.log('Conexión exitosa a MongoDB'))

  .catch(err => console.error('Error de conexión a MongoDB:', err));