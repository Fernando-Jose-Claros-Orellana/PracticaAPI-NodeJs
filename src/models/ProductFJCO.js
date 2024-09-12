const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombreFJCO: { type: String, required: true }, // Campo obligatorio
    descripcionFJCO: { type: String, required: false }, // Campo opcional
    precio: { type: mongoose.Decimal128, required: true } // Campo obligatorio
});


module.exports = mongoose.model('ProductFJCO', productSchema);