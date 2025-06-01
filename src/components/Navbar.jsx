import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload, FaBrain, FaRobot, FaUserTie, FaEnvelope, FaChartBar } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'about', 'documentation', 'contact'];
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
  
  // Control body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: 'home', icon: <FaBrain className="w-4 h-4" /> },
    { name: 'Projects', href: 'projects', icon: <FaChartBar className="w-4 h-4" /> },
    { name: 'About', href: 'about', icon: <FaUserTie className="w-4 h-4" /> },
    { name: 'Documentation', href: 'documentation', icon: <FaRobot className="w-4 h-4" /> },
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
    setIsOpen(false);
    
    setTimeout(() => {
      const section = document.getElementById(href);
      if (section) {
        const navbarHeight = 64;
        const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <motion.nav 
      className={`fixed w-full z-[90] transition-all duration-300
        ${scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md' 
          : 'bg-white/70 backdrop-blur-md'}
        border-b border-supply-lightgray/30`}
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            className="text-supply-dark font-bold text-base sm:text-xl hover:text-supply-primary transition-colors duration-200 focus-ring flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Go to home"
          >
            <FaBrain className="mr-1.5 sm:mr-2 text-supply-primary w-4 h-4 sm:w-5 sm:h-5" />
            <span className="bg-gradient-to-r from-supply-primary to-supply-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`relative text-xs lg:text-sm font-medium transition-colors duration-200 focus-ring flex items-center py-2
                  ${activeSection === link.href 
                    ? 'text-supply-primary' 
                    : 'text-supply-dark hover:text-supply-primary'}`}
                whileTap={{ scale: 0.98 }}
                aria-current={activeSection === link.href ? 'page' : undefined}
              >
                <span className="mr-1 lg:mr-1.5">{link.icon}</span>
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
              className="ml-2 lg:ml-4 px-3 lg:px-5 py-1.5 lg:py-2 rounded-md text-xs lg:text-sm font-medium bg-supply-primary text-white shadow-sm hover:shadow-md transition-all duration-300 focus-ring"
              whileTap={{ scale: 0.98 }}
              aria-label="Download resume"
            >
              <FaDownload className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-1.5" />
              Resume
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-supply-dark hover:text-supply-primary focus-ring"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
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
            className="md:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-lg z-[100] flex flex-col shadow-xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200
                    ${activeSection === link.href 
                      ? 'bg-supply-primary/10 text-supply-primary' 
                      : 'text-supply-dark hover:bg-supply-light'}`}
                  whileTap={{ scale: 0.98 }}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                onClick={handleResumeDownload}
                className="flex items-center justify-center px-4 py-3 mt-2 rounded-lg text-base font-medium bg-supply-primary text-white shadow-sm hover:shadow-md transition-all duration-300"
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="w-4 h-4 mr-2" />
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