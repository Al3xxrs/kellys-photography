import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Use relative paths for images assuming they are in the public/assets folder
const imagePaths = [
    "portfolio-1.png",
    "portfolio-2.png",
    "portfolio-3.png",
    "portfolio-4.png",
    "portfolio-5.png",
    "portfolio-6.png",
    "portfolio-7.png",
    "portfolio-8.png",
    "portfolio-9.png",
    "portfolio-10.png",
    "portfolio-11.png",
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
            window.location.href = `/assets/${src.replace(".png", "-full.png")}`;
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
                {imagePaths.map((image, index) => (
                    <motion.div
                        key={index}
                        className="masonry-item rounded-lg overflow-hidden relative group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={controls}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        onClick={() => handleClick(image)}
                    >
                        <img
                            src={`/assets/${image}`}
                            alt={`Portfolio ${index + 1}`}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                            srcSet={`/assets/${image}?w=400 400w, /assets/${image}?w=800 800w, /assets/${image}?w=1200 1200w`}
                            sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
                        />
                        {/* Overlay */}
                        {!isMobile && (
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-500 ease-in-out flex items-center justify-center cursor-pointer">
                                <a
                                    href={`/assets/${image.replace(".png", "-full.png")}`}
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
