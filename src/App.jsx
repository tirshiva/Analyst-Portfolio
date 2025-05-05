import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import ScrollAnimation from './components/ScrollAnimation';
import './styles/theme.css';
// import DynamicBackground from './components/DynamicBackground'; // Optional: comment out for Apple style

const App = () => (
  <Router>
    <div className="min-h-screen bg-apple-white text-apple-black overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <section id="home" className="scroll-mt-16">
          <ScrollAnimation>
            <Hero />
          </ScrollAnimation>
        </section>
        <section id="projects" className="scroll-mt-16">
          <ScrollAnimation>
            <Projects />
          </ScrollAnimation>
        </section>
        <section id="about" className="scroll-mt-16">
          <ScrollAnimation>
            <About />
          </ScrollAnimation>
        </section>
        <section id="experience" className="scroll-mt-16">
          <ScrollAnimation>
            <Experience />
          </ScrollAnimation>
        </section>
        <section id="contact" className="scroll-mt-16">
          <ScrollAnimation>
            <Contact />
          </ScrollAnimation>
        </section>
      </main>
    </div>
  </Router>
);

export default App;