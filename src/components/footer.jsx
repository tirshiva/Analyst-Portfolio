// filepath: src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../data/projects';

const Footer = () => {
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
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        repeat: 1
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-slate-50 py-12 sm:py-16">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-center" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12"
        >
          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Get in Touch</h3>
            <p className="text-slate-600 max-w-md">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                href={`mailto:${socialLinks.email}`}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <FaEnvelope className="w-4 h-4" />
                <span>Email Me</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Connect</h3>
            <p className="text-slate-600">
              Follow me on social media to stay updated with my latest projects and insights.
            </p>
            <div className="flex gap-4">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-3 rounded-full border border-slate-200 hover:border-blue-600 transition-all duration-200 bg-white shadow-soft hover:bg-blue-50"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5 text-slate-900" />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-3 rounded-full border border-slate-200 hover:border-blue-600 transition-all duration-200 bg-white shadow-soft hover:bg-blue-50"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-blue-600" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-slate-200 text-center"
        >
          <p className="text-slate-600">
            © {new Date().getFullYear()} Shivanshu Tiwari. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;