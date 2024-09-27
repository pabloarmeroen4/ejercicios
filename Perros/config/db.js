require('dotenv').config();
const mongoose = require('mongoose'); 


const conexionDB = async () => {
    try {
        await mongoose.connect(process.env.DB);
        console.log('Conectado a MongoDB');
    } catch (e) {
        console.error('Error al conectar a MongoDB', e);
    }
}

module.exports = conexionDB;
