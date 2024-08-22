import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const Contact = () => {
    return (
        <footer id="contact" className="bg-black bg-opacity-65 text-white py-12 px-6 md:px-20 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
                {/* Left Section */}
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <motion.h2
                        className="text-3xl font-bold mb-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Let&apos;s Get in Touch
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at libero nec risus euismod facilisis nec ac ex.
                        Nullam fringilla metus ut sem bibendum, sit amet tempus urna aliquam.
                    </motion.p>
                </div>

                {/* Right Section (Form) */}
                <motion.form
                    className="md:w-1/2 space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-3 bg-gray-800 bg-opacity-65 text-white rounded pr-10"
                        />
                        <IoMdPerson className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-3 bg-gray-800 bg-opacity-65 text-white rounded pr-10"
                        />
                        <IoMdPerson className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <div className="relative mb-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 bg-gray-800 bg-opacity-65 text-white rounded pr-10"
                        />
                        <MdEmail className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-3 bg-gray-800 bg-opacity-65 text-white rounded pr-10"
                        />
                    </div>
                    <textarea
                        placeholder="Message"
                        className="w-full p-3 bg-gray-800 bg-opacity-65 text-white rounded h-32 mb-4"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full p-3 bg-slate-300 text-black font-bold rounded-lg hover:bg-transparent hover:text-white transition-colors"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </footer>
    );
};

export default Contact;
