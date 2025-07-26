import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaBrain, FaRobot, FaUserTie, FaEnvelope, FaChartBar, FaArrowUp, FaGraduationCap } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const returnFromArticle = useRef(false);

  // Handle initial route and article return navigation
  useEffect(() => {
    const handleNavigation = () => {
      // Handle direct URL navigation
      if (location.pathname === '/documentation') {
        navigate('/');
        setTimeout(() => {
          const section = document.getElementById('documentation');
          if (section) {
            const navbarHeight = 64;
            const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            window.scrollTo({
              top: sectionPosition,
              behavior: 'smooth'
            });
            setActiveSection('documentation');
          }
        }, 100);
      }
      // Handle article return
      else if (location.pathname.startsWith('/articles/')) {
        const articleId = location.pathname.split('/').pop();
        sessionStorage.setItem('returnToArticle', articleId);
        returnFromArticle.current = true;
      } else if (location.pathname === '/' && returnFromArticle.current) {
        returnFromArticle.current = false;
        const articleId = sessionStorage.getItem('returnToArticle');
        
        if (articleId) {
          sessionStorage.removeItem('returnToArticle');
          
          const checkForArticle = setInterval(() => {
            const articleElement = document.getElementById(`article-${articleId}`);
            if (articleElement) {
              clearInterval(checkForArticle);
              const navbarHeight = 64;
              const articlePosition = articleElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
              
              window.scrollTo({
                top: articlePosition,
                behavior: 'smooth'
              });
              
              setActiveSection('documentation');
            }
          }, 100);

          setTimeout(() => clearInterval(checkForArticle), 5000);
        }
      }
    };

    handleNavigation();
  }, [location.pathname, navigate]);

  // Setup intersection observer for section detection
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Observe all sections
    const sections = ['home', 'projects', 'experience', 'certification', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 50);
    setShowScrollTop(scrollPosition > 500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  
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
    { name: 'Experience', href: 'experience', icon: <FaUserTie className="w-4 h-4" /> },
    { name: 'Certification', href: 'certification', icon: <FaGraduationCap className="w-4 h-4" /> },
    { name: 'Contact', href: 'contact', icon: <FaEnvelope className="w-4 h-4" /> }
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    
    // Always navigate to home first if not already there
    if (location.pathname !== '/') {
      navigate('/');
    }
    
    // Wait for navigation to complete before scrolling
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
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
                  className={`relative text-xs lg:text-sm font-medium transition-all duration-200 focus-ring flex items-center py-2
                    ${activeSection === link.href 
                      ? 'text-supply-primary scale-105 font-semibold' 
                      : 'text-supply-dark hover:text-supply-primary'}`}
                  whileTap={{ scale: 0.98 }}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  <motion.span 
                    className="mr-1 lg:mr-1.5"
                    animate={{ 
                      scale: activeSection === link.href ? 1.1 : 1,
                      color: activeSection === link.href ? 'var(--supply-primary)' : 'inherit'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.icon}
                  </motion.span>
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-supply-primary rounded-none" 
                      layoutId="activeSection"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-md text-supply-dark hover:text-supply-primary focus-ring"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
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
              className="md:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-lg z-[100] flex flex-col shadow-xl"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex flex-col p-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative flex items-center px-4 py-4 rounded-lg text-base font-medium transition-all duration-200
                      ${activeSection === link.href 
                        ? 'bg-supply-primary/10 text-supply-primary scale-105 font-semibold' 
                        : 'text-supply-dark hover:bg-supply-light'}`}
                    whileTap={{ scale: 0.98 }}
                    aria-current={activeSection === link.href ? 'page' : undefined}
                  >
                    <motion.span 
                      className="mr-3 text-lg"
                      animate={{ 
                        scale: activeSection === link.href ? 1.1 : 1,
                        color: activeSection === link.href ? 'var(--supply-primary)' : 'inherit'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.icon}
                    </motion.span>
                    {link.name}
                    {activeSection === link.href && (
                      <motion.div 
                        className="absolute right-4 w-1.5 h-1.5 rounded-full bg-supply-primary"
                        layoutId="mobileActiveSection"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-supply-primary text-white shadow-lg hover:shadow-xl focus-ring z-[80]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 