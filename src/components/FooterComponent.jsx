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
    <footer className="relative bg-supply-dark text-white py-16 sm:py-20">
      {/* Data analysis themed background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-10 left-10">
          <FaDatabase className="w-32 h-32" />
        </div>
        <div className="absolute bottom-10 right-10">
          <FaCode className="w-24 h-24" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FaChartLine className="w-48 h-48" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaDatabase className="text-supply-primary w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Data Analyst</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming complex data into actionable insights and driving business decisions through advanced analytics.
            </p>
            <div className="flex gap-4">
              <motion.a
                href={footerSocialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-2 rounded-md bg-supply-primary/20 hover:bg-supply-primary/30 text-supply-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={footerSocialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-2 rounded-md bg-supply-primary/20 hover:bg-supply-primary/30 text-supply-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
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
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-supply-primary transition-colors"
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
            <h3 className="text-lg font-semibold mb-4 text-white">Expertise</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Data Analysis</li>
              <li className="text-gray-300">Machine Learning</li>
              <li className="text-gray-300">Statistical Modeling</li>
              <li className="text-gray-300">Predictive Analytics</li>
              <li className="text-gray-300">Data Visualization</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <p className="text-gray-300 mb-4">
              Interested in working together? Let's connect.
            </p>
            <motion.a
              href={`mailto:${footerSocialLinks.email}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center gap-2 px-4 py-2 bg-supply-primary text-white rounded-md shadow-md hover:bg-supply-secondary transition-all duration-300"
            >
              <FaEnvelope className="w-4 h-4" />
              <span>Email Me</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-supply-primary/30 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Shivanshu Tiwari. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="p-3 rounded-md bg-supply-primary/20 hover:bg-supply-primary text-supply-primary hover:text-white transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent; 