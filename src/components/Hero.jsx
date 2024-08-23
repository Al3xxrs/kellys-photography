import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import "./Hero.css";

const Hero = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    const [typingComplete, setTypingComplete] = useState(false);

    useEffect(() => {
        // Set a timeout to remove the cursor after typing animation completes
        const timer = setTimeout(() => {
            setTypingComplete(true);
        }, 2660);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    const scrollToAbout = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="flex items-center justify-center min-h-screen text-white relative">
            <div className="text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    transition={{ duration: 1 }}
                >
                    Hello! This is Kelly McCurtney
                </motion.h1>
                <p className={`text-xl md:text-2xl typing-effect ${typingComplete ? "typing-complete" : ""}`}>
                    I capture moments and memories
                </p>
                <div className="mt-12 flex justify-center">
                    <motion.div
                        className="cursor-pointer"
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
                        onClick={scrollToAbout}
                    >
                        <IoIosArrowDown size={32} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
