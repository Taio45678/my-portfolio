import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/Animation - 1733750709680.json";
import circuitBackground from "../assets/Animation - 1733753597766.json";

const Home = () => {
  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center text-text pt-24 bg-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Fondo animado */}
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
            zIndex: -1,
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-0 flex flex-col items-center space-y-10 text-center">
        <div className="lottie-container w-full max-w-sm mb-10">
          <Player autoplay loop src={animationData} className="w-full" />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading text-black z-10">
          Bienvenido a mi Portafolio
        </h1>
        <p className="mt-4 text-lg md:text-xl text-black z-10">
          Claudio Casagrande es un Fullstack Developer
        </p>
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

      {/* Triángulo diagonal al final */}
      <div className="absolute bottom-0 w-full h-[100px] bg-transparent">
        <div className="w-full h-full clip-triangle bg-primary"></div>
      </div>
    </motion.div>
  );
};

export default Home;
