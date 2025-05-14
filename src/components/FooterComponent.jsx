import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDatabase, FaChartLine, FaCode, FaArrowUp } from 'react-icons/fa';
import { socialLinks } from '../data/projects';

// Add twitter link if not in the data file
const footerSocialLinks = {
  ...socialLinks
};

const FooterComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    },
    tap: { scale: 0.95 }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-white border-t border-gray-200 py-16 sm:py-20">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
        <div className="absolute top-10 left-10">
          <FaDatabase className="w-32 h-32 text-supply-primary" />
        </div>
        <div className="absolute bottom-10 right-10">
          <FaCode className="w-24 h-24 text-supply-secondary" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FaChartLine className="w-48 h-48 text-supply-primary" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 sm:col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <FaDatabase className="text-supply-primary w-5 h-5 sm:w-6 sm:h-6" />
              <h3 className="text-lg sm:text-xl font-bold text-supply-dark">Data Analyst</h3>
            </div>
            <p className="text-supply-gray mb-4 sm:mb-6 text-sm sm:text-base">
              Transforming complex data into actionable insights and driving business decisions through advanced analytics.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <motion.a
                href={footerSocialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-1.5 sm:p-2 rounded-md bg-supply-light hover:bg-supply-light/80 text-supply-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href={footerSocialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-1.5 sm:p-2 rounded-md bg-supply-light hover:bg-supply-light/80 text-supply-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-supply-dark">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-supply-gray hover:text-supply-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-supply-dark">Expertise</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li className="text-supply-gray">Data Analysis</li>
              <li className="text-supply-gray">Machine Learning</li>
              <li className="text-supply-gray">Statistical Modeling</li>
              <li className="text-supply-gray">Predictive Analytics</li>
              <li className="text-supply-gray">Data Visualization</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 sm:col-span-2 md:col-span-1"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-supply-dark">Contact</h3>
            <p className="text-supply-gray mb-3 sm:mb-4 text-sm sm:text-base">
              Interested in working together? Let's connect.
            </p>
            <motion.a
              href={`mailto:${footerSocialLinks.email}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-supply-primary text-white rounded-md shadow-sm hover:bg-supply-secondary transition-all duration-300 text-sm sm:text-base"
            >
              <FaEnvelope className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Email Me</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-8 sm:my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-supply-gray text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} Shivanshu Tiwari. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="p-2 sm:p-3 rounded-md bg-supply-light hover:bg-supply-primary hover:text-white text-supply-primary transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent; 