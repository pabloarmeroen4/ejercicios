const mongoose = require('mongoose');

const PerroSchema = new mongoose.Schema({
    nombre: String,
    raza: String,
    edad: Number,
    tamaño: String,
    estado: {
        type: String,
        enum: ['disponible', 'adoptado'],
        default: 'disponible'
    }
});

module.exports = mongoose.model('Perro', PerroSchema);
