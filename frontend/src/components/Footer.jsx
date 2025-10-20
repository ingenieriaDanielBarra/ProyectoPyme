function Footer(){

    return(
        <footer className="bg-gradient-to-r from-[#0d0b1a] via-[#141130] to-[#1a1b64] text-gray-300 py-10 text-center">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 DB Soluciones Digitales. Todos los archivos reservados.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:text-blue-400">Facebook</a>
                    <a href="#" className="hover:text-blue-400">Twitter</a>
                    <a href="#" className="hover:text-blue-400">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;