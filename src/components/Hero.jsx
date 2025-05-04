import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import NeuralBackground from './NeuralBackground';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Neural Network Background */}
      <NeuralBackground />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Greeting */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ccd6f6] mb-4">
              Hi, I'm <span className="text-[#64ffda]">Shivanshu</span>
            </h1>
          </motion.div>

          {/* Role Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
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
                  wrapperClassName: 'text-[#c792ea] font-mono tracking-wide'
                }}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-[#8892b0] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
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
            <a
              href="https://github.com/Shivanshu2407"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-[#64ffda]/10 text-[#64ffda] rounded-lg hover:bg-[#64ffda]/20 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivanshu2407/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-[#64ffda]/10 text-[#64ffda] rounded-lg hover:bg-[#64ffda]/20 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 