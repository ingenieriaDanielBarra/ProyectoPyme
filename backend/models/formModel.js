const mongoose = require('mongoose');

const formEsquema = new mongoose.Schema({

    nombre:  {type: String, required: true},
    telefono:{type: Number, required: true},
    correo:   {type: String, required: true},
    ciudad:{type: String, required: true},
    mensaje: {type: String, required: true},
    fechaCreacion: {type: Date, default: Date.now}

});

module.exports = mongoose.model('FormContacto', formEsquema);