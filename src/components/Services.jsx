import { FaHeart } from "react-icons/fa6";
import { GiLargeDress } from "react-icons/gi";
import { FaMountain } from "react-icons/fa";

const Services = () => {
    return (
        <section id="services" className="bg-black bg-opacity-60 p-6 md:p-10 rounded-lg text-white max-w-6xl mx-auto mt-40">
            <h2 className="text-4xl font-bold mb-12 text-center">My Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Weddings Service */}
                <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg hover:bg-opacity-20 transition">
                    <FaHeart className="text-4xl text-white mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Weddings</h3>
                    <p>Capturing the beautiful moments of your special day with a blend of candid and creative photography.</p>
                </div>

                {/* Style Service */}
                <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg hover:bg-opacity-20 transition">
                    <GiLargeDress className="text-4xl text-white mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Style</h3>
                    <p>Showcasing the elegance and grace in every style shoot, creating timeless and fashionable images.</p>
                </div>

                {/* Nature Service */}
                <div className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 rounded-lg shadow-lg hover:bg-opacity-20 transition">
                    <FaMountain className="text-4xl text-white mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Nature</h3>
                    <p>Bringing the beauty of the natural world to life through vivid and breathtaking photography.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
