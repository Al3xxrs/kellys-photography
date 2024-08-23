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

// Import fullscreen images
import fullscreen1 from "../assets/fullscreen-1.png";
import fullscreen2 from "../assets/fullscreen-2.png";
import fullscreen3 from "../assets/fullscreen-3.png";
import fullscreen4 from "../assets/fullscreen-4.png";
import fullscreen5 from "../assets/fullscreen-5.png";
import fullscreen6 from "../assets/fullscreen-6.png";
import fullscreen7 from "../assets/fullscreen-7.png";
import fullscreen8 from "../assets/fullscreen-8.png";
import fullscreen9 from "../assets/fullscreen-9.png";
import fullscreen10 from "../assets/fullscreen-10.png";
import fullscreen11 from "../assets/fullscreen-11.png";

const images = [
    { preview: portfolio1, full: fullscreen1 },
    { preview: portfolio2, full: fullscreen2 },
    { preview: portfolio3, full: fullscreen3 },
    { preview: portfolio4, full: fullscreen4 },
    { preview: portfolio5, full: fullscreen5 },
    { preview: portfolio6, full: fullscreen6 },
    { preview: portfolio7, full: fullscreen7 },
    { preview: portfolio8, full: fullscreen8 },
    { preview: portfolio9, full: fullscreen9 },
    { preview: portfolio10, full: fullscreen10 },
    { preview: portfolio11, full: fullscreen11 },
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

    const handleClick = (fullImage) => {
        if (isMobile) {
            window.location.href = fullImage;
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
                {images.map(({ preview, full }, index) => (
                    <motion.div
                        key={index}
                        className="masonry-item rounded-lg overflow-hidden relative group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={controls}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        onClick={() => handleClick(full)}
                    >
                        <img
                            src={preview}
                            alt={`Portfolio ${index + 1}`}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                            srcSet={`${preview}?w=400 400w, ${preview}?w=800 800w, ${preview}?w=1200 1200w`}
                            sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
                        />
                        {!isMobile && (
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-500 ease-in-out flex items-center justify-center cursor-pointer">
                                <a
                                    href={full}
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
