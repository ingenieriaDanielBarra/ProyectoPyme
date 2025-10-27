import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaSearch, FaCogs, FaHeadset} from "react-icons/fa";

function Services(){

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const servicios = [
        {
            icon: <FaLaptopCode className="text-5xl text-blue-500 mb-4"/>,
            titulo: "Diseño Web Responsivo",
            descripcion: "Creamos sitios atractivos y adaptables a cualquier dispositivo.",
            anim: "fade-up",
        },
        {
            icon: <FaSearch className="text-5xl text-blue-500 mb-4"/>,
            titulo: "Optimización SEO",
            descripcion: "Mejoramos tu visibilidad en buscadores y atrae mas clientes.",
            anim: "fade-up",
        },
        {
            icon: <FaCogs className="text-5xl text-blue-500 mb-4"/>,
            titulo: "Desarrollo de sistemas",
            descripcion: "Soluciones personalizadas para tu negocio.",
            anim: "fade-up",
        },
        {
            icon: <FaHeadset className="text-5xl text-blue-500 mb-4"/>,
            titulo: "Soporte Técnico",
            descripcion: "Asistencia continua qpara mantener tu sitio siempre activo.",
            anim: "fade-up",
        }
    ];

 return (
 <section id="services" className="bg-gradient-to-r from-[#1a0b2e] via-[#24124b] to-[#1a1b64] text-white py-20 text-center">
    <h2 className="text-4xl font-thin mb-12 text-slate-400" data-aos="fade-up">
        Servicios que ofrecemos
    </h2>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
    {servicios.map((servicio, index) =>(
        <div
        key={index}
        className="bg-gradient-to-br from-indigo-800/80 to-slate-900/70 shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
        data-aos={servicio.anim}
        data-aos-delay={index * 200} // retrasa cada tarjeta para efecto escalonado
        >
         {servicio.icon}
        <h3 className="text-xl font-semibold text-gray-700 mb-3">{servicio.titulo}</h3>
        <p className="text-gray-500 text-sm">{servicio.descripcion}</p>
        </div>
    
    ))}
 </div>
 {/* <a href=""
   target="_blank"
   rel="noopener noreferrer"
   className="inline-block mt-10 bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
   data-aos="fade-up"
 >
    Solicitar cotización
 </a> */}
   
 </section>
 );

};

export default Services;






// function Pricing(){
//     const plans = [
//         {name: "Basico", price: "$99", features: ["1 pagina","Soporte basico"]},
//         {name: "Profesional", price: "$199", features: ["5 páginas", "SEO básico", "Soporte 24/7"]},
//         {name: "Premium", price: "$299", features: ["10 páginas", "SEO avanzado", "Soporte dedicado"]},
//     ];
//     return(
//         <section id="pricing" className="py-16 bg-gray-200">
//          <div className="container mx-auto text-center">
//          <h3 className="text-blue-600  text-3xl font-bold mb-8">Precios</h3>
//          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {plans.map((plan, index) => (
//                 <div key={index} className="p-6 border rounded-lg shadow-md">
//                     <h4 className="text-xl font-semibold mb-2 text-blue-600">{plan.name}</h4>
//                     <p className="text-2xl font-bold mb-4 text-red-700">{plan.price}</p>
//                     <ul className="mb-4">
//                         {plan.features.map((feature, index) => (
//                             <li key={index} className="text-gray-600">{feature}</li>
//                         ))}
//                     </ul>
//                     <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//                         Contratar
//                     </button>
//                 </div>
//             ))}
//          </div>
//          </div>
//         </section>
//     );
// }
