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
          className="min-h-screen relative text-supply-dark overflow-x-hidden"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          {/* Main gradient background */}
          <div className="fixed inset-0 bg-white"></div>
          
          {/* Subtle gradient overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50/10 to-white"></div>
          
          {/* Minimal decorative elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Single subtle gradient blob */}
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
            <ScrollAnimation>
              <Hero />
            </ScrollAnimation>
            
            <section id="projects" className="scroll-mt-20 relative z-10">
              <ScrollAnimation>
                <Projects />
              </ScrollAnimation>
            </section>
            
            <section id="about" className="scroll-mt-20 relative z-10">
              <ScrollAnimation>
                <About />
              </ScrollAnimation>
            </section>

            {/* Documentation Section */}
            <Documentation />

            <section id="contact" className="scroll-mt-20 relative z-10">
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