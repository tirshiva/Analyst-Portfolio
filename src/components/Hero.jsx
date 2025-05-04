import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { socialLinks } from '../data/projects';

const roles = ["Data Scientist", "ML Engineer", "Data Analyst"];

const TypingRole = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState(roles[0]);
  const [isTyping, setIsTyping] = useState(true);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayed(roles[index]);
      setIsTyping(true);
      setCurrentText('');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    if (isTyping && currentText.length < displayed.length) {
      const timeout = setTimeout(() => {
        setCurrentText(displayed.slice(0, currentText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (isTyping && currentText.length === displayed.length) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000);
      return () => clearTimeout(timeout);
    } else if (!isTyping) {
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentText, displayed, isTyping]);

  return (
    <motion.span 
      className="text-primary-500 font-semibold"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <span className="animate-pulse">|</span>
    </motion.span>
  );
};

const Hero = () => {
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
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        repeat: 1
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] py-12 sm:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/80" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight"
            >
              Hi, I'm{' '}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Shivanshu
              </motion.span>
            </motion.h1>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-900 flex items-center gap-2">
                <TypingRole />
              </span>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl mx-auto px-4"
            >
              I transform complex data into meaningful insights and help businesses make data-driven decisions.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
            >
              <div className="flex gap-3">
                <motion.a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="p-2 rounded-full border border-slate-200 hover:border-blue-600 transition-all duration-200 bg-white shadow-soft hover:bg-blue-50"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />
                </motion.a>
                <motion.a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="p-2 rounded-full border border-slate-200 hover:border-blue-600 transition-all duration-200 bg-white shadow-soft hover:bg-blue-50"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </motion.a>
              </div>
              <div className="flex gap-3">
                <motion.a
                  href="#contact"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-soft font-medium hover:shadow-lg focus:outline-none transition-all duration-300 text-sm sm:text-base"
                >
                  Let's Connect
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 