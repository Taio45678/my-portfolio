import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import gifAnimation from "../assets/Animation - 1733755777476.json"; // Asegúrate de importar correctamente el archivo JSON desde assets

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-primary flex flex-col md:flex-row items-center justify-center md:justify-between gap-12" // Fondo igual a Home
    >
      {/* GIF en JSON (Lottie) */}
      <motion.div
        className="w-full md:w-1/3 flex justify-center" // Ajustamos la anchura para no sobrecargar
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Player
          autoplay
          loop
          src={gifAnimation} // Aquí pasamos el archivo importado
          className="w-56 h-56 md:w-80 md:h-80" // Tamaño ligeramente más grande
        />
      </motion.div>

      {/* Texto */}
      <motion.div
        className="mt-6 md:mt-0 md:ml-12 w-full md:w-1/3 text-center md:text-left"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-heading text-secondary">Sobre mí</h2>
        <p className="mt-4 text-lg text-black">
          Soy un desarrollador web apasionado con experiencia en crear aplicaciones modernas y
          funcionales usando tecnologías de vanguardia.
        </p>
      </motion.div>

      {/* Foto de perfil a la derecha */}
      <motion.img
        src="https://i.imgur.com/DRTtCEk.jpeg" // Mantén tu foto aquí
        alt="Foto personal"
        className="rounded-full w-48 h-48 shadow-lg md:w-64 md:h-64 mt-6 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default About;
