import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//importaciones de swiper
import {Swiper,SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Projects(){

    useEffect(() => {
        AOS.init({duration: 1000, once: false});
    }, []);


    const proyectos = [
        {titulo: "Sitio Psicologia online",
         descripcion: "Sitio web con reservas y envio automatico de correos.", 
         imagenes: [
        "/images/Proyecto1.jpeg",
        "/images/Proyecto2.jpeg",
        "/images/Proyecto3.jpeg",
        "/images/Proyecto4.jpeg",
         ],
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
        className="bg-gradient-to-r from-[#1a0b2e] via-[#24124b] to-[#1a1b64] rounded-1xl shadow-lg p-4"
        data-aos='slide-down'
        data-aos-delay={index * 200}
        >
        
        <h3 className="text-xl font-semibold text-gray-700 mb-3">{proyecto.titulo}</h3>
        <p className="text-gray-500 text-sm">{proyecto.descripcion}</p>
        
        {/* 🔹 Carrusel de imágenes */}
          
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            //navigation
            pagination={{clickable: true}}
            autoplay={{delay: 3000}}
            loop= {true}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl"
        >
            {
             proyecto.imagenes.map((img, i) => (
                <SwiperSlide key={i}>
                    <img src={img} 
                     alt={`${proyecto.titulo} - ${i + 1}`} 
                     className="w-full h-64 object-contain rounded-lg mx-auto mt-5"
                     />
                </SwiperSlide>
             ))}

        </Swiper>
        <a href={proyecto.link}
           target="_blank"
           rel="noopener noreferrer"
           className="mt-6 inline-block text-indigo-300 hover:text-indigo-400 transition"
        >
            ver proyecto
        </a>
        </div>
        ))
        }
        </section>
    );
};

export default Projects;


