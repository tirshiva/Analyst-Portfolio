import { AnimatePresence, motion } from 'framer-motion';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/FooterComponent';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollAnimation from './components/ScrollAnimation';
import ScrollProgress from './components/ScrollProgress';
import Skills from './components/Skills';
import { useReducedMotion } from './utils/motion';
import './styles/theme.css';

const App = () => {
  const reducedMotion = useReducedMotion();

  return (
    <Router>
      <AnimatePresence mode="wait">
        <motion.div
          className="min-h-screen relative text-supply-dark overflow-x-hidden bg-white"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <ScrollProgress color="var(--gradient-primary)" />
          <Navbar />

          <main id="main-content" className="pt-16 relative z-10">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <section id="home" className="scroll-mt-20">
                      <ScrollAnimation>
                        <Hero />
                      </ScrollAnimation>
                    </section>

                    <section id="projects" className="scroll-mt-20 py-16 sm:py-24">
                      <ScrollAnimation>
                        <Projects />
                      </ScrollAnimation>
                    </section>

                    <section id="skills" className="scroll-mt-20 py-16 sm:py-24 bg-slate-50">
                      <ScrollAnimation>
                        <Skills />
                      </ScrollAnimation>
                    </section>

                    <section id="experience" className="scroll-mt-20 py-16 sm:py-24">
                      <ScrollAnimation>
                        <About />
                      </ScrollAnimation>
                    </section>

                    <section id="contact" className="scroll-mt-20 py-16 sm:py-24 bg-slate-50">
                      <ScrollAnimation>
                        <Contact />
                      </ScrollAnimation>
                    </section>
                  </>
                }
              />
            </Routes>
          </main>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </Router>
  );
};

export default App;
