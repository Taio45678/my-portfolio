// src/components/Hero.tsx

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-dark bg-center flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url('/path-to-your-image.jpg')", // Aquí colocamos la imagen de fondo
      }}
    >
      {/* Texto principal */}
      <motion.h1
        className="text-6xl md:text-7xl font-heading text-white drop-shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenidos a mi mundo
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        className="mt-6 text-lg md:text-2xl text-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Desarrollo web, diseño moderno y soluciones digitales.
      </motion.p>

      {/* Tecnologías */}
      <motion.div
        className="flex mt-8 space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <img src="/tech1.png" alt="Tech 1" className="w-16 h-16" />
        <img src="/tech2.png" alt="Tech 2" className="w-16 h-16" />
        <img src="/tech3.png" alt="Tech 3" className="w-16 h-16" />
      </motion.div>
    </section>
  );
};

export default Hero;
