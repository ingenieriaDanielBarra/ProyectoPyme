const express = require('express');
const router = express.Router();
const {crearContacto} = require('../controllers/formContactoController');

router.post("/contacto", crearContacto);

module.exports = router;
