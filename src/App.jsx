import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/theme.css';
// import DynamicBackground from './components/DynamicBackground'; // Optional: comment out for Apple style

const App = () => (
  <Router>
    <div className="min-h-screen bg-apple-white text-apple-black overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>
        <section id="projects" className="scroll-mt-16">
          <Projects />
        </section>
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        <section id="experience" className="scroll-mt-16">
          <Experience />
        </section>
        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>
    </div>
  </Router>
);

export default App;