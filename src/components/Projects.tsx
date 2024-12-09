
import { motion } from "framer-motion";

const projects = [
  {
    title: "ProdElevate",
    description: "Sistema de Administración y Ventas en Línea",
    img: "https://i.imgur.com/JbWdWGe.png",
    techs: ["Postgresql", "React", "Node.js", "Tailwind"],
    link: "https://prodelevatepf.onrender.com/",
  },
  {
    title: "Luz del Alma",
    description: "Pagina dedicada al trabajo sobre el misticismo",
    img: "https://i.imgur.com/CJJ4Jk9.png",
    techs: [ "React", "Tailwind"],
    link: "https://luzdelalma.vercel.app/",
  },
  {
    title: "AllMarket",
    description: "Una pagina inspirada en Mercadolibre",
    img: "https://i.imgur.com/K9mp1nJ.png",
    techs: ["React", "Node.js", "Postgresql"],
    link: "https://e-commerce-front-alpha.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-dark"> 
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-heading text-primary text-center">Proyectos</h2>

        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              
              <img src={project.img} alt={project.title} className="rounded-lg mb-4" />

              
              <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>

              
              <p className="mt-2 text-gray-600">{project.description}</p>

              
              <div className="mt-4 flex space-x-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-white text-sm py-1 px-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              
              <a
                href={project.link}
                className="mt-6 block text-secondary font-bold hover:underline"
              >
                Ver más &rarr;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
