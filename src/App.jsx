import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";
function App() {
    useEffect(() => {
        const adjustBackgroundHeight = () => {
            const bgImage = document.querySelector(".background-image");
            if (bgImage) {
                bgImage.style.height = `${window.innerHeight}px`;
            }
        };

        adjustBackgroundHeight();

        window.addEventListener("resize", adjustBackgroundHeight);

        return () => {
            window.removeEventListener("resize", adjustBackgroundHeight);
        };
    }, []);
    return (
        <>
            <div className="background-image"></div> {/* Fixed background */}
            <div className="content">
                {" "}
                {/* Content overlay */}
                <Navbar />
                <Hero />
                <About />
                <Portfolio />
                <Services />
                <Contact />
            </div>
        </>
    );
}

export default App;
