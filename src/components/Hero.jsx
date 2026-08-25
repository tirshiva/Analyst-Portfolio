import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../data/profile';
import { useReducedMotion } from '../utils/motion';

const Hero = () => {
  const reducedMotion = useReducedMotion();
  const firstName = profile.name.split(' ')[0];

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
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 sm:py-24">
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={reducedMotion ? false : 'hidden'}
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-8 sm:mb-10">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40">
              <div
                className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-400/40 via-indigo-400/25 to-violet-400/40 blur-xl"
                aria-hidden="true"
              />
              <div className="relative h-full w-full rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 p-[3px] shadow-[0_18px_40px_rgba(37,99,235,0.18)]">
                <div className="h-full w-full rounded-full bg-white p-[3px]">
                  <img
                    src={profile.photo.src}
                    alt={profile.photo.alt}
                    width={160}
                    height={160}
                    fetchPriority="high"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-tight text-slate-900"
            variants={itemVariants}
          >
            Hi, I&apos;m{' '}
            <span className="text-gradient-hero">{firstName}</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 tracking-tight mb-6"
            variants={itemVariants}
          >
            {profile.shortTitle}
          </motion.p>

          <motion.p
            className="text-slate-500 mb-10 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
            variants={itemVariants}
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-900 hover:text-supply-primary transition-colors focus-ring rounded-full"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#0A66C2] hover:opacity-80 transition-opacity focus-ring rounded-full"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <motion.a
              href="#contact"
              whileHover={reducedMotion ? {} : { scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="btn-pill px-7 py-2.5 text-sm sm:text-base focus-ring"
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
