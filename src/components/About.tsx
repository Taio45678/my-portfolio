import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import gifAnimation from "../assets/Animation - 1733755777476.json"; 
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-primary text-white py-16 px-6"
    >
      
      <motion.div
        className="flex justify-center items-center w-full md:w-1/3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://i.imgur.com/DRTtCEk.jpeg" 
          alt="Foto personal"
          className="rounded-full w-48 h-48 md:w-64 md:h-64 shadow-lg"
        />
      </motion.div>

      
      <motion.div
        className="mt-6 md:mt-0 text-center md:text-left w-full md:w-1/3 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-heading font-bold mb-4">Sobre mí</h2>
        <p className="text-lg leading-relaxed">
          Soy un desarrollador web apasionado con experiencia en crear
          aplicaciones modernas y funcionales usando tecnologías de vanguardia.
        </p>
      </motion.div>

      
      <motion.div
        className="flex justify-center items-center w-full md:w-1/3 mt-6 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Player
          autoplay
          loop
          src={gifAnimation} 
          className="w-56 h-56 md:w-80 md:h-80"
        />
      </motion.div>
    </section>
  );
};

export default About;
