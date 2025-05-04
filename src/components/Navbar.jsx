import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeButton, setShowResumeButton] = useState(false);

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-[#0a192f]/90 backdrop-blur-sm shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => setCurrentSection('home')}
            className="text-[#64ffda] font-bold text-xl hover:text-[#64ffda]/80 transition-colors duration-200"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setCurrentSection(link.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentSection === link.href
                    ? 'text-[#64ffda] scale-110 shadow-lg shadow-[#64ffda]/20 bg-[#112240] px-4 py-2 rounded-md'
                    : 'text-[#8892b0] hover:text-[#64ffda]'
                }`}
                style={{ transition: 'transform 0.2s' }}
              >
                {link.name}
              </button>
            ))}
            {/* Resume Button */}
            <div
              className="relative group"
              onMouseEnter={() => setShowResumeButton(true)}
              onMouseLeave={() => setShowResumeButton(false)}
            >
              <button
                onClick={handleResumeDownload}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  showResumeButton
                    ? 'bg-[#64ffda] text-[#0a192f] shadow-lg shadow-[#64ffda]/20'
                    : 'text-[#8892b0] hover:text-[#64ffda] border border-[#64ffda]/20 hover:border-[#64ffda]'
                }`}
              >
                <FaDownload className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#0a192f] shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setCurrentSection(link.href);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                currentSection === link.href
                  ? 'text-[#64ffda] scale-110 bg-[#112240] rounded-md'
                  : 'text-[#8892b0] hover:text-[#64ffda]'
              }`}
              style={{ transition: 'transform 0.2s' }}
            >
              {link.name}
            </button>
          ))}
          {/* Mobile Resume Button */}
          <button
            onClick={handleResumeDownload}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 border-t border-[#64ffda]/10"
          >
            <FaDownload className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 