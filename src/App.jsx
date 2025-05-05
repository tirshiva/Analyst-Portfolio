import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import DynamicBackground from './components/DynamicBackground';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6] overflow-x-hidden">
        <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <main className="pt-16">
          <div className="relative">
            <DynamicBackground section={currentSection} />
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSection}
                  variants={sectionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="min-h-[calc(100vh-4rem)]"
                >
                  {currentSection === 'home' && <Hero />}
                  {currentSection === 'projects' && <Projects />}
                  {currentSection === 'about' && <About />}
                  {currentSection === 'experience' && <Experience />}
                  {currentSection === 'contact' && <Contact />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;