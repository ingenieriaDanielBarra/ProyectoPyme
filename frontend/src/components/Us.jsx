import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FaBullseye, FaEye, FaHandshake} from "react-icons/fa";

function Us(){

    useEffect(() => {
        AOS.init({duration: 1000, once: false});
    },[]);

    const us = [
        {
         icon: <FaBullseye className="text-5xl text-blue-500 mb-4"/>,
         title: "Misión", 
         description:"“Acompañamos a negocios y profesionales en su camino digital, creando sitios modernos, optimizados y fáciles de usar, que reflejen su identidad, fortalezcan la confianza con sus clientes y les permitan crecer en un mundo cada vez más conectado.”",
         delay: "0",
        },
        
        {
         icon: <FaEye className="text-5xl text-blue-500 mb-4"/>,   
         title: "Visión", 
         description:"“Queremos ser más que un proveedor: nuestro objetivo es ser un aliado tecnológico cercano y confiable, capaz de generar relaciones duraderas basadas en la confianza, la innovación y la mejora constante, ayudando a las personas y organizaciones a alcanzar su máximo potencial en la era digital.”",
         delay: "200",
        },
        
        
        {
         icon: <FaHandshake className="text-5xl text-blue-500 mb-4"/>,
         title: "Valores", 
         description:"“Acompañamos a cada cliente con compromiso auténtico, construimos relaciones basadas en una comunicación clara y directa, y avanzamos con innovación y mejora constante.” ",
         delay: "400",
        },
    ];
    return(
        <section id="us" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
               
               <h2 className="text-4xl font-thin text-slate-800 mb-12" data-aos="fade-up">
                Nosotros
                </h2> 

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {us.map((us, index) => (
                        <div 
                         key={index} 
                         className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                         data-aos='fade-up'
                         data-aos-delay={us.delay}
                         >
                           {us.icon} 
                            <h3 className="text-black text-xl font-semibold mb-1">{us.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{us.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}
export default Us;