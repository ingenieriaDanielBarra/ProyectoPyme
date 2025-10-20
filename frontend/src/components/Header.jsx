import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { text: "Nosotros", href: "#us" },
    { text: "Servicios", href: "#services" },
    { text: "Contacto", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        {/* <h1 className="text-2xl font-bold text-slate-400">DB Soluciones Digitales</h1> */}
        <img src="/images/DBO2.jpeg" 
         alt="DBO Soluciones Digitales" 
         className="h-12 w-auto md:h-14 lg:h-16 object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
         />

        {/* Menú Desktop */}
        <nav className="hidden md:flex gap-12 items-center">
          {navItems.map(({ text, href }) => (
            <a
              key={text}
              href={href}
              className="relative group py-2 transition-colors duration-300"
            >
              <span className="font-extralight hover:text-slate-300 transition">{text}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Botón desktop */}
        <button onClick={() => document.getElementById("contact").scrollIntoView({behavior: "smooth"})} className="hidden md:inline-block border border-white text-white px-4 py-2  hover:bg-white hover:text-gray-900 transition duration-700">
          Contáctanos
        </button>

        {/* Menú hamburguesa móvil */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <Menu size={28} />
        </button>
      </div>

      {/* Menú móvil tipo slide-in */}
      <div
          className={`fixed top-0 left-0 h-full w-[280px] bg-slate-800/70 backdrop-blur-md text-white z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">DB Soluciones Digitales</h1>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 pt-4">
          {navItems.map(({ text, href }) => (
            <a
              key={text}
              href={href}
              onClick={() => setIsOpen(false)}
              className="group px-6 py-4 text-lg font-medium border-b border-slate-600 hover:bg-slate-700 transition relative"
            >
              <span className="font-extralight hover:text-slate-300">{text}</span>
              <span className="absolute bottom-2 left-6 w-0 h-0.5 bg-slate-400 group-hover:w-4/5 transition-all duration-300"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;