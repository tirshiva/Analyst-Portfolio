import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Article from './components/Article';
import './styles/theme.css';

const App = () => {
  // Page transition variants with optimized timing
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Section animation variants with optimized timing
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05
      }
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
          {/* Main gradient background */}
          <div className="fixed inset-0 bg-gradient-to-b from-white via-supply-background-alt/5 to-white"></div>
          
          {/* Minimal decorative elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Subtle gradient blob */}
              <motion.div 
              className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-supply-background-alt/10 to-supply-background-dark/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ 
                duration: 20, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              {/* Subtle grid pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.01]"></div>
            </div>
            
          <ScrollProgress color="#2C3E50" />
          <Navbar />
          
          <main className="pt-16 relative z-10">
            <Routes>
              <Route path="/" element={
                <>
                  {/* Hero Section */}
                  <section id="home" className="min-h-screen">
                    <ScrollAnimation>
                      <Hero />
                    </ScrollAnimation>
                  </section>
            
                  {/* Projects Section */}
                  <section id="projects" className="scroll-mt-20 py-20 relative z-10 bg-supply-background">
                    <ScrollAnimation>
                      <Projects />
                    </ScrollAnimation>
                  </section>
            
                  {/* Documentation Section */}
                  <section id="documentation" className="scroll-mt-20 py-20 relative z-10 bg-supply-background">
                    <Documentation />
                  </section>
            
                  {/* About Section */}
                  <section id="about" className="scroll-mt-20 py-20 relative z-10 bg-supply-background-alt">
                    <ScrollAnimation>
                      <About />
                    </ScrollAnimation>
                  </section>
            
                  {/* Contact Section */}
                  <section id="contact" className="scroll-mt-20 py-20 relative z-10 bg-supply-background-alt">
                    <ScrollAnimation>
                      <Contact />
                    </ScrollAnimation>
                  </section>
                </>
              } />
              <Route path="/documentation" element={
                <>
                  <section id="documentation" className="min-h-screen py-20 relative z-10 bg-supply-background">
                    <Documentation />
                  </section>
                </>
              } />
              <Route path="/articles/:articleId" element={
                <div className="min-h-screen">
                  <Article />
                </div>
              } />
            </Routes>
          </main>
          
          <Footer />
        </motion.div>
      </AnimatePresence>
    </Router>
  );
};

export default App;