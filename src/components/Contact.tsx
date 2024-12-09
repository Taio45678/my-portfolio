

import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
       
        <h2 className="text-4xl font-heading text-primary">Contáctame</h2>
        <p className="mt-4 text-lg text-gray-600">
          Estoy disponible para proyectos, colaboraciones y oportunidades laborales.
        </p>

        
        <motion.div
          className="mt-8 flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="https://www.facebook.com/Taio4567" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl text-secondary hover:text-primary transition duration-300" />
          </a>
          <a href="https://www.instagram.com/taioxd/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-secondary hover:text-primary transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/claudio-david-casagrande-bethouart-27839524b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-secondary hover:text-primary transition duration-300" />
          </a>
          <a href="mailto:claudiodavid339@gmail.com">
            <FaEnvelope className="text-3xl text-secondary hover:text-primary transition duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
