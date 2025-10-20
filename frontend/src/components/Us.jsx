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
        <section id="us" className="bg-gradient-to-r from-[#1a0b2e] via-[#24124b] to-[#1a1b64] text-white py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
               
               <h2 className="text-6xl font-thin text-slate-400 mb-12" data-aos="fade-up">
                Nosotros
                </h2> 

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {us.map((us, index) => (
                        <div 
                         key={index} 
                         className="bg-gradient-to-br from-indigo-800/80 to-slate-900/70 rounded-1xl shadow-lg p-4"
                         data-aos='fade-up'
                         data-aos-delay={us.delay}
                         >
                           {us.icon} 
                            <h3 className="text-xl font-semibold text-indigo-400 mb-2">{us.title}</h3>
                            <p className="text-slate-300">{us.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}
export default Us;