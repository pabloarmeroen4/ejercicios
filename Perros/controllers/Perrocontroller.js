const Perro = require('../models/Perromodels');

exports.registrarPerro = async (req, res) => {
    try {
        const perro = await Perro.create(req.body);
        res.json(perro);
    } catch (error) {
        res.json({ mensaje: "Error al registrar el perro", error: error.message });
    }
};

exports.listarPerrosDisponibles = async (req, res) => {
    try {
        const perros = await Perro.find({ estado: 'disponible' });
        res.json(perros);
    } catch (error) {
        res.json({ mensaje: "Error al listar los perros disponibles", error: error.message });
    }
};
