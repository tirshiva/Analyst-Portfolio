import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import FooterComponent from './components/FooterComponent';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white font-sans antialiased">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-white to-white" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/80" />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-16 sm:space-y-24"
            >
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="projects">
                <Projects />
              </section>
            </motion.div>
          </main>
          <section id="contact">
            <FooterComponent />
          </section>
        </div>
      </div>
    </Router>
  );
};

export default App;