
import "./App.css";

// Importa tus secciones
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      {/* Header flotante */}
      <header className="fixed top-0 w-full z-10 bg-white shadow-md">
        <nav className="flex justify-center gap-6 py-4">
          <button onClick={() => scrollToSection("home")} className="hover:scale-110 transition-transform">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:scale-110 transition-transform">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:scale-110 transition-transform">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:scale-110 transition-transform">
            Contact
          </button>
        </nav>
      </header>

      {/* Secciones principales */}
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
