const Adoptante = require('../models/Adoptantemodels');
const Perro = require('../models/Perromodels');

exports.registrarAdoptante = async (req, res) => {
    try {
        const nuevoAdoptante = new Adoptante(req.body);
        await nuevoAdoptante.save();
        res.json({ mensaje: 'Adoptante registrado con éxito', adoptante: nuevoAdoptante });
    } catch (error) {
        res.json({ mensaje: 'Error al registrar el adoptante', error: error.message });
    }
};

exports.asignarPerro = async (req, res) => {
    try {
        const { adoptanteId, perroId } = req.body;

        const perro = await Perro.findById(perroId);
        if (!perro) {
            return res.json({ mensaje: 'El perro no existe' });
        }

        if (perro.estado === 'adoptado') {
            return res.json({ mensaje: 'El perro ya ha sido adoptado' });
        }

        const adoptante = await Adoptante.findById(adoptanteId);
        if (!adoptante) {
            return res.json({ mensaje: 'El adoptante no existe' });
        }

        adoptante.perrosAdoptados.push({ perro: perroId, fechaAdopcion: new Date() });
        await adoptante.save();

        perro.estado = 'adoptado';
        await perro.save();

        res.json({ mensaje: 'Perro asignado con éxito', adoptante });
    } catch (error) {
        res.json({ mensaje: 'Error al asignar el perro', error: error.message });
    }
};


exports.historialAdopciones = async (req, res) => {
    try {
        const adoptantes = await Adoptante.find().populate('perrosAdoptados.perro');
        res.json(adoptantes);
    } catch (error) {
        res.json({ mensaje: 'Error al obtener el historial de adopciones', error: error.message });
    }
};

exports.adoptantes = async (req, res) => {
    try {
        const perros = await Adoptante.find();
        res.json(perros);
    } catch (error) {
        res.json({ mensaje: "Error al listar los perros disponibles", error: error.message });
    }
};
