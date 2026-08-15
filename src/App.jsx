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
          className="min-h-screen relative text-supply-dark overflow-x-hidden bg-supply-background"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <div
            className="fixed inset-0 pointer-events-none"
            style={{ background: 'var(--gradient-mesh)' }}
            aria-hidden="true"
          />

          <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-supply-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-supply-accent/5 rounded-full blur-3xl" />
            {!reducedMotion && (
              <>
                <motion.div
                  className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-supply-primary/10 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.06, 1], opacity: [0.05, 0.09, 0.05] }}
                  transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
                />
                <motion.div
                  className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-supply-accent/8 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.04, 1], opacity: [0.04, 0.07, 0.04] }}
                  transition={{ duration: 24, repeat: Infinity, repeatType: 'reverse' }}
                />
              </>
            )}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          </div>

          <ScrollProgress color="var(--color-primary)" />
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

                    <section
                      id="about"
                      className="scroll-mt-20 py-16 sm:py-20 bg-supply-background-alt/80"
                    >
                      <ScrollAnimation>
                        <About />
                      </ScrollAnimation>
                    </section>

                    <section
                      id="projects"
                      className="scroll-mt-20 py-16 sm:py-20"
                    >
                      <ScrollAnimation>
                        <Projects />
                      </ScrollAnimation>
                    </section>

                    <section
                      id="skills"
                      className="scroll-mt-20 py-16 sm:py-20 bg-supply-background-alt/80"
                    >
                      <ScrollAnimation>
                        <Skills />
                      </ScrollAnimation>
                    </section>

                    <section
                      id="contact"
                      className="scroll-mt-20 py-16 sm:py-20"
                    >
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
