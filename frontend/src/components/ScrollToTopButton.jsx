import {useState, useEffect} from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {

    const [isVisible, setIsVisible] = useState(false);

    //detecta cuando el usuario hace scroll
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 200) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //funcion para volver arriba
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

      return (
        <>
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-20 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300"
            >
              <FaArrowUp />
            </button>
          )}
        </>
      );

}

export default ScrollToTopButton;