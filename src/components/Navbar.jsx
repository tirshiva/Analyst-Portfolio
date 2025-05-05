import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeButton, setShowResumeButton] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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

  const handleSwipe = (direction) => {
    if (!isMobile) return;

    const currentIndex = navLinks.findIndex(link => link.href === currentSection);
    let newIndex;

    if (direction === 'left' && currentIndex < navLinks.length - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === 'right' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else {
      return;
    }

    setCurrentSection(navLinks[newIndex].href);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
    delta: 10, // min distance required for swipe
    swipeDuration: 500, // max time for swipe motion
    touchEventOptions: { passive: false }
  });

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
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
            {...swipeHandlers}
          >
            {/* Fixed Header */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-[#64ffda]/10">
              <span className="text-[#64ffda] font-bold text-xl">Menu</span>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes size={24} />
              </motion.button>
            </div>

            {/* Scrollable Content */}
            <div className="h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="px-6 py-8">
                <div className="space-y-6">
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
                      className={`w-full text-left text-lg font-medium transition-colors duration-300 ${
                        currentSection === link.href
                          ? 'text-[#64ffda] pl-4 border-l-2 border-[#64ffda]'
                          : 'text-[#ccd6f6] hover:text-[#64ffda] hover:pl-4 hover:border-l-2 hover:border-[#64ffda]/50'
                      }`}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.button>
                  ))}

                  {/* Mobile Resume Button */}
                  <motion.div
                    custom={navLinks.length}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="pt-4 border-t border-[#64ffda]/10"
                  >
                    <motion.button
                      onClick={handleResumeDownload}
                      className="w-full text-left text-lg font-medium text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 flex items-center gap-3"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaDownload className="w-5 h-5" />
                      <span>Download Resume</span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 