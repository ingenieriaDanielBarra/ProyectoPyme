import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Projects(){

    useEffect(() => {
        AOS.init({duration: 1000, once: false});
    }, []);


    const proyectos = [
        {titulo: "Sitio Psicologia online",
         descripcion: "Sitio web con reservas y envio automatico de correos.", 
         imagen : "/images/Proyecto1.jpeg",
         link: "https://www.pselizabethbarra.cl/"
        },
   ];

    return(
        <section id="proyect" className="bg-gradient-to-r from-[#1a0b2e] via-[#24124b] to-[#1a1b64] py-20 text-center">
         <h2 className="text-4xl font-thin mb-12 text-slate-400" data-aos="fade-up">
         Proyectos
        </h2>
        {proyectos.map((proyecto, index) => (
        <div 
        key={index}
        className="bg-gradient-to-br from-indigo-800/80 to-slate-900/70 rounded-1xl shadow-lg p-4"
        data-aos='fade-up'
        data-aos-delay={index * 200}
        >
        
        <h3 className="text-xl font-semibold text-gray-700 mb-3">{proyecto.titulo}</h3>
        <p className="text-gray-500 text-sm">{proyecto.descripcion}</p>
        
        <img 
        src={proyecto.imagen} 
        alt={proyecto.titulo} 
        className="w-full max-w-sm h-auto mx-auto object-contain rounded-lg mb-4"
        />
        {proyecto.link}
        </div>
        ))
        }
        </section>
    );
};

export default Projects;


