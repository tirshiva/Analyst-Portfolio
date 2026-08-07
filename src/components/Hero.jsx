import { motion } from 'framer-motion';
import { FaArrowRight, FaBrain, FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../data/profile';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: 'easeOut' }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="max-w-3xl mx-auto" variants={itemVariants}>
            <motion.div
              className="mb-5 sm:mb-6 flex justify-center"
              variants={itemVariants}
            >
              <span className="px-4 py-1.5 bg-indigo-50 text-supply-primary rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 border border-indigo-100 shadow-sm">
                <FaBrain className="w-3.5 h-3.5" />
                {profile.title}
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-6 tracking-tight leading-tight px-4 sm:px-0"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.h1>

            <motion.p
              className="text-supply-gray mb-8 sm:mb-10 text-base sm:text-lg md:text-xl leading-relaxed mx-auto px-4 sm:px-6 md:px-8 max-w-full sm:max-w-2xl"
              variants={itemVariants}
            >
              {profile.heroDescription}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 justify-center px-4"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl text-base sm:text-lg font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center"
              >
                {profile.ctaText}
                <FaArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-supply-primary rounded-xl text-base sm:text-lg font-semibold border border-indigo-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex items-center justify-center"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div variants={itemVariants} className="mb-10 px-2 sm:px-0">
              <p className="text-xs sm:text-sm text-supply-gray mb-4 font-medium uppercase tracking-widest">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {profile.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ y: -2 }}
                    className="flex items-center px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-indigo-50 text-sm font-medium text-supply-dark"
                  >
                    <span className={`${tech.color} w-2 h-2 rounded-full mr-2.5`} />
                    {tech.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex space-x-4 justify-center"
              variants={itemVariants}
            >
              <motion.a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                className="p-3 text-supply-gray hover:text-supply-primary transition-colors bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-indigo-50 hover:shadow-md"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                className="p-3 text-supply-gray hover:text-supply-primary transition-colors bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-indigo-50 hover:shadow-md"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
