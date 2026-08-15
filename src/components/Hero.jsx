import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowRight, FaBrain, FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../data/profile';
import { useReducedMotion } from '../utils/motion';

const Hero = () => {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 sm:py-16">
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={reducedMotion ? false : 'hidden'}
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="mb-5 flex justify-center" variants={itemVariants}>
            <span className="px-4 py-1.5 bg-supply-primary/10 text-supply-primary rounded-full text-xs sm:text-sm font-semibold inline-flex items-center gap-2 border border-supply-primary/20">
              <FaBrain className="w-3.5 h-3.5" aria-hidden="true" />
              {profile.title}
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight leading-tight"
            variants={itemVariants}
          >
            <span className="text-gradient-hero">
              {profile.name}
            </span>
          </motion.h1>

          <motion.p
            className="text-supply-gray mb-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-8 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              whileHover={reducedMotion ? {} : { scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-gradient-primary text-white rounded-xl text-base font-semibold shadow-button hover:shadow-lg transition-all flex items-center justify-center focus-ring"
            >
              {profile.ctaText}
              <FaArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={reducedMotion ? {} : { scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 bg-white text-supply-primary rounded-xl text-base font-semibold border border-supply-border shadow-sm hover:shadow-md transition-all flex items-center justify-center focus-ring"
            >
              {profile.secondaryCtaText}
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-xs text-supply-gray mb-3 font-medium uppercase tracking-widest">
              Highlights
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {profile.techStack.map((tech) => (
                <span
                  key={tech.label}
                  className="px-3 py-1.5 bg-white/90 rounded-lg text-sm font-medium text-supply-dark border border-supply-border shadow-sm"
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div className="flex gap-4 justify-center" variants={itemVariants}>
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-supply-gray hover:text-supply-primary bg-white rounded-xl shadow-sm border border-supply-border hover:shadow-md transition-all focus-ring"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-supply-gray hover:text-supply-primary bg-white rounded-xl shadow-sm border border-supply-border hover:shadow-md transition-all focus-ring"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-supply-gray hover:text-supply-primary transition-colors focus-ring rounded-lg p-2"
        aria-label="Scroll to about section"
        animate={reducedMotion ? {} : { y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-medium tracking-wide">Scroll</span>
        <FaArrowDown className="w-4 h-4" aria-hidden="true" />
      </motion.a>
    </div>
  );
};

export default Hero;
