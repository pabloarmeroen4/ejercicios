const express = require('express');
const router = express.Router();

const perrocontrol = require('../controllers/Perrocontroller')


router.post('/registro',perrocontrol.registrarPerro);
router.get('/perros',perrocontrol.listarPerrosDisponibles);

module.exports = router;