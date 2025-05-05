import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // Show navbar after user scrolls 80px
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowNav(window.scrollY > 80);
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
    <nav className={`fixed w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-white/80 backdrop-blur-md shadow' : 'bg-white/60 backdrop-blur-md'}
      border-b border-apple-lightgray`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('home')}
            className="text-apple-black font-bold text-xl hover:text-apple-blue transition-colors duration-200"
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
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-apple-black hover:text-apple-blue transition-colors duration-200"
                style={{ transition: 'transform 0.2s' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.button>
            ))}
            {/* Resume Button */}
            <motion.button
              onClick={handleResumeDownload}
              className="ml-4 px-4 py-2 rounded-full text-sm font-medium bg-apple-blue text-white hover:bg-apple-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="w-4 h-4 inline mr-2" />
              Resume
            </motion.button>
          </div>
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-apple-black hover:text-apple-blue transition-colors duration-300"
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
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-6 border-b border-apple-lightgray">
              <span className="text-apple-black font-bold text-xl">Menu</span>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 text-apple-black hover:text-apple-blue transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={24} />
              </motion.button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-lg font-medium text-apple-black hover:text-apple-blue"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={handleResumeDownload}
                className="mt-8 px-6 py-3 rounded-full text-lg font-medium bg-apple-blue text-white hover:bg-apple-black transition-all duration-300"
              >
                <FaDownload className="w-5 h-5 inline mr-2" />
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 