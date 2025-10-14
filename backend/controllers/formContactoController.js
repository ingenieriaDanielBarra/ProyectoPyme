const {guardarDatosFormulario,enviarCorreoContacto} = require("../services/formContactoService");

exports.crearContacto = async (req, res) => {

    const {nombre, telefono, correo, ciudad, mensaje} = req.body;

    // Validaciones en el backend

    if(!nombre || !nombre.trim()){
        return res.status(400).send({error: 'El nombre es obligatorio'});
    }

    if(!telefono || !/^\d{9}$/.test(telefono)){
        return res.status(400).send({error: 'El teléfono debe tener 9 dígitos'});
    }

    if(!correo || !/\S+@\S+\.\S+/.test(correo)){
        return res.status(400).send({error: 'El correo electrónico no es válido'});
    }

    if(!ciudad || !ciudad.trim()){
        return res.status(400).send({error: 'La ciudad es obligatoria'});
    }
    if(!mensaje || !mensaje.trim()){
        return res.status(400).send({error: 'El mensaje es obligatorio'});
    }


    try {
        const response = await guardarDatosFormulario(req.body);
        await enviarCorreoContacto({nombre, telefono, correo, ciudad, mensaje});
        res.status(200).send(response.message);
    } catch (error) {
        res.status(500).send({
            error: 'Error al guardar los datos del formulario', message: error.message});
    }
};