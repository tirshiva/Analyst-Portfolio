import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../data/projects';

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
    <section className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Hi, I'm <span className="text-blue-600">Shivanshu</span>
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl">Data Scientist</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl">
              Transforming data into actionable insights through machine learning and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl transform -rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-cyan-700 rounded-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 