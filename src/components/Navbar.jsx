import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { useReducedMotion } from '../utils/motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const reducedMotion = useReducedMotion();

  useFocusTrap(menuRef, isOpen);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);
    ['home', 'projects', 'skills', 'experience', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Contact', href: 'contact' }
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (location.pathname !== '/') navigate('/');
    setTimeout(() => {
      const section = document.getElementById(href);
      if (section) {
        const offset = section.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ top: offset, behavior: reducedMotion ? 'auto' : 'smooth' });
      }
    }, 100);
  };

  const linkClass = (href) =>
    `relative text-sm font-medium transition-colors duration-200 focus-ring py-2 ${
      activeSection === href
        ? 'text-supply-primary'
        : 'text-slate-700 hover:text-supply-primary'
    }`;

  return (
    <>
      <motion.nav
        className={`fixed w-full z-[90] transition-all duration-300 border-b ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-100'
            : 'bg-white/70 backdrop-blur-sm border-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
        initial={reducedMotion ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={() => handleNavClick('home')}
              className="focus-ring rounded-lg"
              whileTap={{ scale: 0.98 }}
              aria-label="Go to home"
            >
              <span className="text-lg font-semibold text-slate-900 tracking-tight">
                Portfolio
              </span>
            </motion.button>

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={linkClass(link.href)}
                  whileTap={{ scale: 0.98 }}
                  aria-current={activeSection === link.href ? 'true' : undefined}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div
                      className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-supply-primary rounded-full"
                      layoutId="navIndicator"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden p-2.5 rounded-lg text-slate-800 hover:bg-slate-50 focus-ring"
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[95] bg-slate-900/30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-label="Close menu overlay"
            />
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              className="md:hidden fixed inset-x-0 top-16 z-[100] bg-white border-b border-slate-100 shadow-xl"
            >
              <div className="flex flex-col p-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-3.5 rounded-xl text-base font-medium transition-colors focus-ring text-left ${
                      activeSection === link.href
                        ? 'bg-blue-50 text-supply-primary'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                    aria-current={activeSection === link.href ? 'true' : undefined}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
