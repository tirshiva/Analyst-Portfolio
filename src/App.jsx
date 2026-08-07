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
import './styles/theme.css';

const App = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: {
      opacity: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    },
    out: {
      opacity: 0,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        <motion.div
          className="min-h-screen relative text-supply-dark overflow-x-hidden bg-supply-background"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          {/* Gradient mesh background */}
          <div
            className="fixed inset-0 pointer-events-none"
            style={{ background: 'var(--gradient-mesh)' }}
          />

          {/* Decorative elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.14, 0.08] }}
              transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.div
              className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-violet-400/8 rounded-full blur-3xl"
              animate={{ scale: [1, 1.06, 1], opacity: [0.06, 0.1, 0.06] }}
              transition={{ duration: 22, repeat: Infinity, repeatType: 'reverse' }}
            />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.4]" />
          </div>

          <ScrollProgress color="#4F46E5" />
          <Navbar />

          <main id="main-content" className="pt-16 relative z-10">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <section id="home" className="min-h-screen">
                      <ScrollAnimation>
                        <Hero />
                      </ScrollAnimation>
                    </section>

                    <section id="about" className="scroll-mt-20 py-20 relative z-10 bg-supply-background-alt/80 backdrop-blur-sm">
                      <ScrollAnimation>
                        <About />
                      </ScrollAnimation>
                    </section>

                    <section id="skills" className="scroll-mt-20 py-20 relative z-10 bg-supply-background">
                      <ScrollAnimation>
                        <Skills />
                      </ScrollAnimation>
                    </section>

                    <section id="projects" className="scroll-mt-20 py-20 relative z-10 bg-supply-background-alt/80 backdrop-blur-sm">
                      <ScrollAnimation>
                        <Projects />
                      </ScrollAnimation>
                    </section>

                    <section id="contact" className="scroll-mt-20 py-20 relative z-10 bg-supply-background">
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
