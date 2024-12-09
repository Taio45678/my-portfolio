import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/Animation - 1733750709680.json";
import circuitBackground from "../assets/Animation - 1733753597766.json";

const Home = () => {
  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center text-text pt-16 bg-secondary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
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

      
      <div className="relative z-0 flex flex-col items-center justify-center space-y-6 px-4 text-center">
       
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-black mb-4">
          Bienvenido a mi Portafolio
        </h1>

        
        <div className="lottie-container w-full max-w-[220px] sm:max-w-[280px] md:max-w-[350px] mb-4 sm:mb-6 mt-0 sm:mt-4 md:mt-6">
          <Player autoplay loop src={animationData} className="w-full" />
        </div>

        
        <p className="text-sm sm:text-base md:text-lg text-black mb-4">
          Claudio Casagrande es un Fullstack Developer
        </p>

        
        <div className="tech-stack flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          <img
            src="https://i.imgur.com/oh50tWs.png"
            alt="TS"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <img
            src="https://i.imgur.com/aU8DBJ2.png"
            alt="NestJS"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <img
            src="https://i.imgur.com/uljhJS5.png"
            alt="React"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <img
            src="https://i.imgur.com/LALNp3B.png"
            alt="JS"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>
      </div>

      
      <div className="absolute bottom-0 w-full h-[60px] sm:h-[80px] bg-transparent">
        <div className="w-full h-full clip-triangle bg-primary"></div>
      </div>
    </motion.div>
  );
};

export default Home;
