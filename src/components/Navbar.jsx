import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload, FaChartLine, FaDatabase, FaLaptopCode, FaUserTie, FaEnvelope, FaChartBar } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
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
    { name: 'Home', href: 'home', icon: <FaChartLine className="w-4 h-4" /> },
    { name: 'Projects', href: 'projects', icon: <FaChartBar className="w-4 h-4" /> },
    { name: 'About', href: 'about', icon: <FaUserTie className="w-4 h-4" /> },
    { name: 'Experience', href: 'experience', icon: <FaLaptopCode className="w-4 h-4" /> },
    { name: 'Contact', href: 'contact', icon: <FaEnvelope className="w-4 h-4" /> }
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

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-white/70 backdrop-blur-md'}
        border-b border-supply-lightgray/30`}
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            className="text-supply-dark font-bold text-xl hover:text-supply-primary transition-colors duration-200 focus-ring flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Go to home"
          >
            <FaDatabase className="mr-2 text-supply-primary" />
            <span className="bg-gradient-to-r from-supply-primary to-supply-secondary bg-clip-text text-transparent">
              Data Analyst
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-sm font-medium transition-colors duration-200 focus-ring flex items-center py-2
                  ${activeSection === link.href 
                    ? 'text-supply-primary' 
                    : 'text-supply-dark hover:text-supply-primary'}`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                aria-current={activeSection === link.href ? 'page' : undefined}
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.name}
                {activeSection === link.href ? (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-supply-primary rounded-none" 
                    layoutId="activeSection"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-supply-primary/50 rounded-none opacity-0" 
                    whileHover={{ width: '100%', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
            {/* Resume Button */}
            <motion.button
              onClick={handleResumeDownload}
              className="ml-4 px-5 py-2 rounded-md text-sm font-medium bg-supply-primary text-white shadow-sm hover:shadow-md transition-all duration-300 focus-ring"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Download resume"
            >
              <FaDownload className="w-4 h-4 inline mr-2" />
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-supply-dark hover:text-supply-primary transition-colors duration-300 focus-ring bg-white/80 rounded-md shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-50 flex flex-col shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between h-16 px-6 border-b border-supply-lightgray/30 bg-white/80">
              <span className="text-supply-dark font-bold text-xl flex items-center">
                <FaDatabase className="mr-2 text-supply-primary" />
                <span className="bg-gradient-to-r from-supply-primary to-supply-secondary bg-clip-text text-transparent">
                  Menu
                </span>
              </span>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 text-supply-dark hover:text-supply-primary transition-colors duration-300 focus-ring bg-white/80 rounded-md shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close menu"
              >
                <FaTimes size={20} />
              </motion.button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center space-y-4 bg-white/50 p-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-lg font-medium transition-all duration-300 focus-ring w-full py-3 px-6 rounded-md flex items-center
                    ${activeSection === link.href 
                      ? 'bg-supply-primary text-white shadow-sm' 
                      : 'text-supply-dark hover:bg-supply-light/70 hover:shadow-sm'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01, x: 3 }}
                  whileTap={{ scale: 0.99 }}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                onClick={handleResumeDownload}
                className="mt-6 w-full px-6 py-3 rounded-md text-lg font-medium bg-supply-primary text-white shadow-sm hover:shadow-md transition-all duration-300 focus-ring flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                aria-label="Download resume"
              >
                <FaDownload className="w-5 h-5 inline mr-2" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 