import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/FooterComponent';
import ScrollProgress from './components/ScrollProgress';
import ScrollAnimation from './components/ScrollAnimation';
import Documentation from './components/Documentation';
import './styles/theme.css';

const App = () => {
  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        <motion.div
          className="min-h-screen relative text-supply-dark overflow-x-hidden bg-white"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          {/* Main gradient background */}
          <div className="fixed inset-0 bg-gradient-to-b from-white via-gray-50/5 to-white"></div>
          
          {/* Minimal decorative elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Subtle gradient blob */}
            <motion.div 
              className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-gray-50/10 to-gray-100/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            ></motion.div>
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.01]"></div>
          </div>

          <ScrollProgress color="#2563EB" />
          <Navbar />
          
          <main className="pt-16 relative z-10">
            {/* Hero Section */}
            <section id="home" className="min-h-screen">
              <ScrollAnimation>
                <Hero />
              </ScrollAnimation>
            </section>
            
            {/* Projects Section */}
            <section id="projects" className="scroll-mt-20 py-20 relative z-10 bg-white">
              <ScrollAnimation>
                <Projects />
              </ScrollAnimation>
            </section>
            
            {/* About Section */}
            <section id="about" className="scroll-mt-20 py-20 relative z-10 bg-gray-50/50">
              <ScrollAnimation>
                <About />
              </ScrollAnimation>
            </section>

            {/* Documentation Section */}
            <section id="documentation" className="scroll-mt-20 py-20 relative z-10 bg-white">
              <Documentation />
            </section>

            {/* Contact Section */}
            <section id="contact" className="scroll-mt-20 py-20 relative z-10 bg-gray-50/50">
              <ScrollAnimation>
                <Contact />
              </ScrollAnimation>
            </section>
          </main>
          
          <Footer />
        </motion.div>
      </AnimatePresence>
    </Router>
  );
};

export default App;