import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
                isScrolled || isMenuOpen ? "bg-black bg-opacity-75" : "bg-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto flex justify-between items-center p-4">
                <motion.div className="logo" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                    <img
                        src={isScrolled || isMenuOpen ? logoLight : logoDark}
                        alt="Logo"
                        className=" h-11 md:h-14 w-auto "
                        key={isScrolled || isMenuOpen ? "logoLight" : "logoDark"}
                    />
                </motion.div>
                <nav className="hidden md:flex space-x-12">
                    <a href="#about" className="text-white text-xl hover:text-gray-300">
                        About
                    </a>
                    <a href="#portfolio" className="text-white text-xl hover:text-gray-300">
                        Portfolio
                    </a>
                    <a href="#services" className="text-white text-xl hover:text-gray-300">
                        Services
                    </a>
                    <a href="#contact" className="text-white text-xl hover:text-gray-300">
                        Contact
                    </a>
                </nav>
                <div className="md:hidden flex items-center z-50">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                        <div className="space-y-2">
                            <motion.span
                                className={`block w-8 h-0.5 bg-white transform transition duration-300 ${
                                    isMenuOpen ? "rotate-45 translate-y-3" : ""
                                }`}
                            ></motion.span>
                            <motion.span
                                className={`block w-8 h-0.5 bg-white transform transition duration-300 ${
                                    isMenuOpen ? "translate-x-4 opacity-0" : ""
                                }`}
                            ></motion.span>
                            <motion.span
                                className={`block w-8 h-0.5 bg-white transform transition duration-300 ${
                                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                            ></motion.span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className={`md:hidden fixed inset-0 bg-black bg-opacity-85 flex flex-col items-center justify-center space-y-8 transition-transform transform ${
                    isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
                initial={{ y: -1000 }}
                animate={{ y: isMenuOpen ? 0 : -1000 }}
                transition={{ duration: 0.5 }}
                style={{ zIndex: 40 }}
            >
                <a href="#about" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
                    About
                </a>
                <a href="#portfolio" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
                    Portfolio
                </a>
                <a href="#services" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
                    Services
                </a>
                <a href="#contact" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
                    Contact
                </a>
            </motion.div>
        </motion.header>
    );
};

export default Navbar;
