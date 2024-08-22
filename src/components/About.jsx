import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImage from "../assets/about.png";

const About = () => {
    const textControls = useAnimation();
    const imageControls = useAnimation();

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    React.useEffect(() => {
        if (inView) {
            textControls.start({ opacity: 1, x: 0 });
            imageControls.start({ opacity: 1, x: 0 });
        }
    }, [textControls, imageControls, inView]);

    return (
        <section
            ref={ref}
            id="about"
            className="bg-black bg-opacity-60 p-6 md:p-10 rounded-lg text-white max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between"
        >
            <motion.div
                className="max-w-full md:max-w-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={textControls}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-bold mb-4">Who is Kelly?</h2>
                <p>
                    Kelly is a passionate photographer with a keen eye for capturing the beauty of nature and the joy of weddings. Her love
                    for photography began in the great outdoors, where she discovered a profound connection with the natural world.
                    Kelly&apos;s nature photography highlights the intricate details and breathtaking landscapes that often go unnoticed,
                    offering viewers a glimpse into the serenity and splendor of the environment. <br />
                    <br /> When it comes to weddings, Kelly brings the same dedication and artistry to capturing those special moments. She
                    understands that a wedding is one of the most important days in a couple&apos;s life, and she strives to document every
                    emotion, from the quiet, intimate exchanges to the joyous celebrations. Her approach is both candid and creative,
                    ensuring that every photo tells a story and preserves memories that will be cherished for a lifetime. <br />
                    <br />
                    With years of experience and a portfolio that reflects her versatility, Kelly is committed to providing her clients with
                    stunning images that are as unique as their stories. Whether she&apos;s photographing a majestic mountain range or the
                    tender moments of a wedding day, Kelly&apos;s work is infused with her love for capturing life&apos;s most beautiful and
                    meaningful moments.
                </p>
            </motion.div>

            <motion.div
                className="mt-6 md:mt-0 md:ml-10 w-full md:w-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={imageControls}
                transition={{ duration: 1 }}
            >
                <img src={aboutImage} alt="About Kelly" className="rounded-lg max-w-full md:max-w-xs" />
            </motion.div>
        </section>
    );
};

export default About;
