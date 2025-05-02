import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../data/projects';

const roles = ["Data Scientist", "ML Engineer", "Data Analyst"];

const TypingRole = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState(roles[0]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayed(roles[index]);
    }, 100);
    return () => clearTimeout(timeout);
  }, [index]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="text-blue-700 font-semibold transition-all duration-300">{displayed}</span>
  );
};

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden font-sans">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 pointer-events-none" />
      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Shivanshu
              </span>
            </h1>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 flex items-center gap-2">
                <TypingRole />
              </span>
            </div>
            <p className="text-base sm:text-lg text-gray-500 font-light max-w-xl mx-auto">
              I transform complex data into meaningful stories and help businesses make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <div className="flex gap-3">
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="p-2 rounded-full border border-gray-200 hover:border-blue-400 transition-all duration-200 bg-white shadow hover:bg-blue-50 focus:outline-none"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5 text-gray-800" />
                </motion.a>
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="p-2 rounded-full border border-gray-200 hover:border-blue-400 transition-all duration-200 bg-white shadow hover:bg-blue-50 focus:outline-none"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 text-blue-600" />
                </motion.a>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.06, boxShadow: "0 0 16px 2px #6366f1" }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 sm:mt-0 px-7 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow font-medium text-base hover:shadow-lg focus:outline-none transition-all duration-300 ring-1 ring-blue-100"
                style={{ boxShadow: '0 2px 8px 0 rgba(99,102,241,0.08)' }}
                aria-label="Let's Connect"
              >
                Let's Connect
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 