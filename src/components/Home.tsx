import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/Animation - 1733750709680.json"; // La animación de la computadora
import circuitBackground from "../assets/Animation - 1733753597766.json"; // La animación para el fondo

const Home = () => {
  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center text-text pt-24 bg-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animación de fondo con Lottie */}
      <div className="absolute inset-0 z-0">
        <Player
          autoplay
          loop
          src={circuitBackground}
          className="w-full h-full"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1, // Fondo detrás del contenido
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-0 flex flex-col items-center space-y-10 text-center">
        {/* Lottie Animation de la computadora */}
        <div className="lottie-container w-full max-w-sm mb-10">
          <Player autoplay loop src={animationData} className="w-full" />
        </div>

        {/* Texto de bienvenida */}
        <h1 className="text-4xl md:text-5xl font-heading text-primary z-10">
          Bienvenido a mi Portafolio
        </h1>
        <p className="mt-4 text-lg md:text-xl text-secondary z-10">
          Claudio Casagrande es un Fullstack Developer
        </p>

        {/* Tecnologías */}
        <div className="tech-stack mt-6 flex justify-center space-x-8 z-10">
          <img
            src="https://i.imgur.com/oh50tWs.png"
            alt="TS"
            className="w-12 h-12"
          />
          <img
            src="https://i.imgur.com/aU8DBJ2.png"
            alt="NestJS"
            className="w-12 h-12"
          />
          <img
            src="https://i.imgur.com/uljhJS5.png"
            alt="React"
            className="w-12 h-12"
          />
          <img
            src="https://i.imgur.com/LALNp3B.png"
            alt="JS"
            className="w-12 h-12"
          />
        </div>
      </div>

      {/* Triángulo para iniciar el color de About */}
      <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[100px] border-l-transparent border-b-[100px] border-b-primary z-0"></div>
    </motion.div>
  );
};

export default Home;
