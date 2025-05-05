import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeButton, setShowResumeButton] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Shivanshu_Tiwari_CV.pdf';
    link.download = 'Shivanshu_Tiwari_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Projects', href: 'projects' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Contact', href: 'contact' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: -20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a192f]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => setCurrentSection('home')}
            className="text-[#64ffda] font-bold text-xl hover:text-[#64ffda]/80 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => setCurrentSection(link.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentSection === link.href
                    ? 'text-[#64ffda] scale-110 shadow-lg shadow-[#64ffda]/20 bg-[#112240] px-4 py-2 rounded-md'
                    : 'text-[#8892b0] hover:text-[#64ffda]'
                }`}
                style={{ transition: 'transform 0.2s' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.button>
            ))}
            {/* Resume Button */}
            <div
              className="relative group"
              onMouseEnter={() => setShowResumeButton(true)}
              onMouseLeave={() => setShowResumeButton(false)}
            >
              <motion.button
                onClick={handleResumeDownload}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  showResumeButton
                    ? 'bg-[#64ffda] text-[#0a192f] shadow-lg shadow-[#64ffda]/20'
                    : 'text-[#8892b0] hover:text-[#64ffda] border border-[#64ffda]/20 hover:border-[#64ffda]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="w-4 h-4" />
                <span>Resume</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed inset-0 bg-[#0a192f]/95 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => {
                    setCurrentSection(link.href);
                    setIsOpen(false);
                  }}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className={`text-2xl font-medium transition-colors duration-300 ${
                    currentSection === link.href
                      ? 'text-[#64ffda] scale-110'
                      : 'text-[#ccd6f6] hover:text-[#64ffda]'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.name}
                </motion.button>
              ))}
              {/* Mobile Resume Button */}
              <motion.button
                onClick={handleResumeDownload}
                className="flex items-center gap-2 px-6 py-3 text-lg font-medium text-[#64ffda] border-2 border-[#64ffda] rounded-md hover:bg-[#64ffda]/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 