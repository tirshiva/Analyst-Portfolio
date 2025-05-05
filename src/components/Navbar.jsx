import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowNav(window.scrollY > 80);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'about', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Projects', href: 'projects' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Contact', href: 'contact' }
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Shivanshu_Tiwari_CV.pdf';
    link.download = 'Shivanshu_Tiwari_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavClick = (href) => {
    const section = document.getElementById(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  if (!showNav) return null;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300
        ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white/60 backdrop-blur-md'}
        border-b border-apple-lightgray`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            className="text-apple-black font-bold text-xl hover:text-apple-blue transition-colors duration-200 focus-ring"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Go to home"
          >
            Portfolio
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors duration-200 focus-ring
                  ${activeSection === link.href 
                    ? 'text-apple-blue' 
                    : 'text-apple-black hover:text-apple-blue'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-current={activeSection === link.href ? 'page' : undefined}
              >
                {link.name}
              </motion.button>
            ))}
            {/* Resume Button */}
            <motion.button
              onClick={handleResumeDownload}
              className="ml-4 px-4 py-2 rounded-full text-sm font-medium bg-apple-blue text-white hover:bg-apple-black transition-all duration-300 focus-ring hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download resume"
            >
              <FaDownload className="w-4 h-4 inline mr-2" />
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-apple-black hover:text-apple-blue transition-colors duration-300 focus-ring"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between h-16 px-6 border-b border-apple-lightgray">
              <span className="text-apple-black font-bold text-xl">Menu</span>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 text-apple-black hover:text-apple-blue transition-colors duration-300 focus-ring"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </motion.button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center space-y-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-lg font-medium transition-colors duration-200 focus-ring
                    ${activeSection === link.href 
                      ? 'text-apple-blue' 
                      : 'text-apple-black hover:text-apple-blue'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                onClick={handleResumeDownload}
                className="mt-8 px-6 py-3 rounded-full text-lg font-medium bg-apple-blue text-white hover:bg-apple-black transition-all duration-300 focus-ring hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Download resume"
              >
                <FaDownload className="w-5 h-5 inline mr-2" />
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 