import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";

function ContactForm() {

    useEffect(() => {
          AOS.init({ duration: 1000, once: false });
      }, []);


  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    ciudad: '',
    mensaje: '',
  });
  
  
  const [errores,      setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const validarFormulario = () => {
    const newErrores = {};
    
    if (!formData.nombre.trim()) {
      newErrores.nombre = "El nombre es obligatorio";
    }
    
    if (!formData.telefono.trim()) {
      newErrores.telefono = "El teléfono es obligatorio";
    }else if (!/^\d{9}$/.test(formData.telefono)) {
      newErrores.telefono = "El teléfono debe tener 9 dígitos";
    }
    
    if (!formData.correo.trim()) {
      newErrores.correo = "El correo electrónico es obligatorio";
    }else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrores.correo = "El correo electrónico no es válido";
    }
  
    if (!formData.ciudad.trim()){
      newErrores.ciudad = "La ciudad es obligatoria";
    }
  
    if (!formData.mensaje.trim()) {
      newErrores.mensaje = "El mensaje es obligatorio";
    }
  
    setErrores(newErrores);
    console.log("Errores:", newErrores);   
  
    // retorna true si no hay errores, false si hay errores
    return Object.keys(newErrores).length === 0;
  };


  const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({ ...formData,[name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar el formulario
    if (!validarFormulario()) {
      return; // Detiene el envio si hay errores
    }

    setIsSubmitting(true); // Activa el cargador de carga
    
    try {
      const response = await axios.post('http://localhost:5000/contacto', formData);
      
      // Limpia el formulario
            setFormData({
              nombre: '',
              telefono: '',
              correo: '',
              ciudad: '',
              mensaje: '',
            });

      setErrores({}); // Limpia los errores
      //alert("Datos enviados correctamente: " + response.data);
            // Muestra mensaje de éxito
            setMensajeExito("Mensaje enviado correctamente");

                 // Opcional: Ocultar mensaje después de 3 segundos
      setTimeout(() => {
        setMensajeExito('');
      }, 3000);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Error al enviar los datos. Por favor, inténtalo de nuevo más tarde.");
    }finally{
      setIsSubmitting(false); // Desactiva el cargador de carga
    }

  };
  
  return (
      <section id="contact" className="bg-gradient-to-r from-[#1a0b2e] via-[#24124b] to-[#1a1b64] text-white py-20">
        <div className="max-w-4xl mx-auto px-6" data-aos="zoom-in">
          <h3 className="text-4xl font-extralight text-center text-slate-400 mb-10">
            ¡Hablemos!
          </h3>

          {mensajeExito && (
          <div className="mb-6 text-green-600 font-semibold text-center" data-aos="fade-down">
            {mensajeExito}
          </div>
          )}

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-slate-700/80 to-slate-900/70 rounded-1xl shadow-xl p-10 space-y-6" data-aos="fade-down">
            {/* Nombre y Teléfono */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre *"
                  className="w-full px-4 py-3 border bg-white border-gray-300  shadow-xl focus:ring-2 focus:ring-slate-300 focus:outline-none text-black"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                {errores.nombre && <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-400 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Tu número *"
                  className="w-full px-4 py-3 border bg-white border-gray-300 shadow-xl focus:ring-2 focus:ring-slate-300 focus:outline-none text-black"
                  value={formData.telefono}
                  onChange={handleChange}
                />
                {errores.telefono && <p className="text-red-500 text-sm mt-1">{errores.telefono}</p>}
              </div>
            </div>
  
            {/* Correo y Ciudad */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="correo@ejemplo.com *"
                  className="w-full px-4 py-3 border bg-white border-gray-300 shadow-xl focus:ring-2 focus:ring-slate-300 focus:outline-none text-black"
                  value={formData.correo}
                  onChange={handleChange}
                />
                {errores.correo && <p className="text-red-500 text-sm mt-1">{errores.correo}</p>}
              </div>
              <div>
                <label htmlFor="ciudad" className="block text-sm font-semibold text-gray-400 mb-2">
                  Ciudad
                </label>
                <input
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  placeholder="Tu ciudad *"
                  className="w-full px-4 py-3 border bg-white border-gray-300  shadow-xl focus:ring-2 focus:ring-slate-300 focus:outline-none text-black"
                  value={formData.ciudad}
                  onChange={handleChange}
                />
                {errores.ciudad && <p className="text-red-500 text-sm mt-1">{errores.ciudad}</p>}
              </div>
            </div>
  
            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-400 mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                placeholder="Escribe tu mensaje aquí... *"
                className="w-full px-4 py-3 border bg-white border-gray-300  shadow-xl focus:ring-2 focus:ring-slate-300 focus:outline-none text-black"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
              {errores.mensaje && <p className="text-red-500 text-sm mt-1">{errores.mensaje}</p>}
            </div>
  
            {/* Botón */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-slate-400 text-white px-8 py-3 text-lg font-semibold hover:bg-slate-300 transition-all shadow-md hover:shadow-lg"
                disabled={isSubmitting} // Desactiva el botón mientras se envían los datos
              >
              {isSubmitting ? (
               <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className='opacity-25'
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className='opacity-75'
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
               </span>
              ) : (
                "Enviar Mensaje"
              )}
              </button>
            </div>
          </form>
        </div>
      </section>
    );
}
export default ContactForm;