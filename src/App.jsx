import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/FooterComponent';
import ScrollProgress from './components/ScrollProgress';
import ScrollAnimation from './components/ScrollAnimation';
import './styles/theme.css';

const App = () => (
  <Router>
    <div className="min-h-screen bg-white text-supply-dark overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>
        
        <section className="scroll-mt-16">
          <ScrollAnimation>
            <Projects />
          </ScrollAnimation>
        </section>
        
        <section className="scroll-mt-16">
          <ScrollAnimation>
            <About />
          </ScrollAnimation>
        </section>
        
        <section className="scroll-mt-16">
          <ScrollAnimation>
            <Experience />
          </ScrollAnimation>
        </section>
        
        <section className="scroll-mt-16">
          <ScrollAnimation>
            <Contact />
          </ScrollAnimation>
        </section>
      </main>
      
      <Footer />
    </div>
  </Router>
);

export default App;