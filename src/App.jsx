import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";
function App() {
    return (
        <div className="background-image">
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Services />
            <Contact />
        </div>
    );
}

export default App;
