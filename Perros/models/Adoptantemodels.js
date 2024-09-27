const mongoose = require('mongoose');

const AdoptanteSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    direccion: String,
    perrosAdoptados: [
        {
            perro: { type: mongoose.Schema.Types.ObjectId, ref: 'Perro' },
            fechaAdopcion: { type: Date, default: Date.now }
        }
    ]
});

module.exports = mongoose.model('Adoptante', AdoptanteSchema);
