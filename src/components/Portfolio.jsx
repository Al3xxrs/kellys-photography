import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import images
import portfolio1 from "../assets/portfolio-1.png";
import portfolio2 from "../assets/portfolio-2.png";
import portfolio3 from "../assets/portfolio-3.png";
import portfolio4 from "../assets/portfolio-4.png";
import portfolio5 from "../assets/portfolio-5.png";
import portfolio6 from "../assets/portfolio-6.png";
import portfolio7 from "../assets/portfolio-7.png";
import portfolio8 from "../assets/portfolio-8.png";
import portfolio9 from "../assets/portfolio-9.png";
import portfolio10 from "../assets/portfolio-10.png";
import portfolio11 from "../assets/portfolio-11.png";

const images = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
    portfolio5,
    portfolio6,
    portfolio7,
    portfolio8,
    portfolio9,
    portfolio10,
    portfolio11,
];

const Portfolio = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    React.useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, scale: 1 });
        }
    }, [controls, inView]);

    const handleClick = (src) => {
        if (isMobile) {
            window.location.href = `${src.replace(".png", "-full.png")}`;
        }
    };

    return (
        <section ref={ref} id="portfolio" className="bg-black bg-opacity-60 p-6 md:p-10 rounded-lg text-white max-w-6xl mx-auto mt-40">
            <motion.h2
                className="text-4xl font-bold mt-12"
                initial={{ opacity: 0, y: -50 }}
                animate={controls}
                transition={{ duration: 1 }}
            >
                Portfolio
            </motion.h2>

            <div className="masonry">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className="masonry-item rounded-lg overflow-hidden relative group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={controls}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        onClick={() => handleClick(src)}
                    >
                        <img
                            src={src}
                            alt={`Portfolio ${index + 1}`}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                            srcSet={`${src}?w=400 400w, ${src}?w=800 800w, ${src}?w=1200 1200w`}
                            sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
                        />
                        {/* Overlay */}
                        {!isMobile && (
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-500 ease-in-out flex items-center justify-center cursor-pointer">
                                <a
                                    href={`${src.replace(".png", "-full.png")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out text-white font-bold py-2 px-4 border border-white rounded"
                                >
                                    View Fullscreen
                                </a>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
