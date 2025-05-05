import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import DynamicHeroBackground from './DynamicHeroBackground';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Shivanshu_Tiwari_CV.pdf';
    link.download = 'Shivanshu_Tiwari_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-y-auto bg-apple-white text-apple-black"
      role="banner"
      aria-label="Hero section"
    >
      {/* Dynamic, professional background */}
      <DynamicHeroBackground />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-apple-black mb-4">
              Hi, I'm <span className="text-apple-blue hover-scale inline-block">Shivanshu</span>
            </h1>
          </motion.div>

          {/* Role Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-apple-gray">
              <Typewriter
                options={{
                  strings: [
                    'Data Analyst',
                    'Data Scientist',
                    'Machine Learning Engineer'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                  wrapperClassName: 'font-mono tracking-wide'
                }}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-apple-gray text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              I transform complex data into actionable insights, helping businesses make data-driven decisions.
              Specializing in SQL, Python, and data visualization.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/Shivanshu2407"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-apple-blue/10 text-apple-blue rounded-lg hover:bg-apple-blue/20 transition-all duration-300 transform hover:scale-110 focus-ring"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Visit GitHub profile"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shivanshu2407/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-apple-blue/10 text-apple-blue rounded-lg hover:bg-apple-blue/20 transition-all duration-300 transform hover:scale-110 focus-ring"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex justify-center gap-6 mt-8"
          >
            <motion.button
              onClick={handleResumeDownload}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-apple-blue text-white font-semibold text-lg shadow hover:bg-apple-black transition-all duration-300 focus-ring hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Download resume"
            >
              <FaDownload className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 