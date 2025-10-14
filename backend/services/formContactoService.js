const nodemailer = require('nodemailer');
const FormContacto = require('../models/formModel');

exports.guardarDatosFormulario = async (datosFormulario) => {

    const {nombre, telefono, correo, ciudad, mensaje} = datosFormulario;

    try {
        const formData = new FormContacto({nombre,telefono,correo,ciudad,mensaje});
        await formData.save();
        return {sucesso: true, message: 'Datos guardados correctamente'};
    } catch (error) {
        console.error('Error al guardar los datos del formulario:', error);
        throw new Error('Error al guardar los datos del formulario');
    }

};

exports.enviarCorreoContacto = async ({nombre, telefono, correo, ciudad, mensaje}) => {

    const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
    });
    
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'ingenieria.danielbarra@gmail.com',
        subject: 'Nuevo mensaje de contacto',
        text: `
            Datos del cliente:

            Nombre:   ${nombre},
            Telefono: ${telefono},
            Correo:   ${correo},
            Ciudad:   ${ciudad},
            Mensaje:  ${mensaje}
        
        `
    };
    await transporter.sendMail(mailOptions);
};