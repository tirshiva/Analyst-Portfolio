import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
          className="min-h-screen bg-gradient-to-br from-white via-supply-light/10 to-white text-supply-dark overflow-x-hidden"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <ScrollProgress color="#2563EB" />
          <Navbar />
          <main className="pt-16 relative">
            {/* Enhanced background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
              {/* Animated gradient blobs */}
              <motion.div 
                className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-supply-primary/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-supply-secondary/5 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }}
              ></motion.div>
              
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
              
              {/* Professional decorative elements */}
              <div className="absolute top-[10%] left-[5%] w-1 h-16 bg-gradient-to-b from-supply-primary to-transparent rounded-sm"></div>
              <div className="absolute top-[15%] left-[8%] w-1 h-10 bg-gradient-to-b from-supply-secondary to-transparent rounded-sm"></div>
              
              <div className="absolute bottom-[10%] right-[5%] w-1 h-16 bg-gradient-to-t from-supply-primary to-transparent rounded-sm"></div>
              <div className="absolute bottom-[15%] right-[8%] w-1 h-10 bg-gradient-to-t from-supply-secondary to-transparent rounded-sm"></div>
              
              {/* Subtle diagonal lines */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.03]">
                <div className="absolute top-0 left-0 w-full h-full border-t border-l border-supply-primary/20 transform -rotate-45 origin-top-left"></div>
                <div className="absolute top-0 right-0 w-full h-full border-t border-r border-supply-secondary/20 transform rotate-45 origin-top-right"></div>
              </div>
            </div>
            
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
            
            <section id="experience" className="scroll-mt-20 relative z-10">
              <ScrollAnimation>
                <Experience />
              </ScrollAnimation>
            </section>
            
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