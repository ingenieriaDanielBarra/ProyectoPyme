import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero(){

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return(
       //<section className="bg-[url('/images/imagen4.jpg')] bg-cover bg-center text-white w-full py-20 text-center">
       <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
                {/* Imagen con animación */}
                <img
                    src="/images/Fondo.jpg"
                    alt="Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                />
            <div className="container mx-auto px-4">
           
             <h2 className="text-7xl font-bold drop-shadow-lg" data-aos="fade-up">Crea tu sitio web profesional</h2>
            
            <p className="mt-4 text-lg text-gray-50 drop-shadow" data-aos="fade-up" data-aos-delay="300">Transformamos tu idea en un sitio web moderno, atractivo y diseñado para crecer.</p>
            
            <button onClick={() => document.getElementById("contact").scrollIntoView({behavior:"smooth"})} 
                className="bg-indigo-700 text-white px-3 py-3 font-semibold hover:bg-indigo-500 transition duration-700" 
                data-aos="zoom-in" 
                data-aos-delay="600">
                Comienza ahora
            </button>
        </div>
       </section>
    );
}
export default Hero;