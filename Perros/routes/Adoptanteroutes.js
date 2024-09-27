const express = require('express');
const router = express.Router();

const adoptantecontrol = require('../controllers/Adoptantecontroller')


router.post('/adoptar',adoptantecontrol.registrarAdoptante);
router.post('/asignar',adoptantecontrol.asignarPerro);
router.get('/historial',adoptantecontrol.historialAdopciones);
router.get('/adoptantes',adoptantecontrol.adoptantes)

module.exports = router;