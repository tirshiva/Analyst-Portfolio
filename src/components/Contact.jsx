import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] py-20 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-[#112240]/80 p-8 rounded-xl shadow-2xl max-w-lg w-full"
      >
        <div className="text-center mb-8">
          <motion.h2
            className="text-4xl font-bold text-[#ccd6f6] mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Get in <span className="text-[#64ffda]">Touch</span>
          </motion.h2>
          <motion.p
            className="text-[#8892b0] text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm currently open to new opportunities and collaborations. 
            Let's discuss how we can work together to create something amazing.
          </motion.p>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 p-4 bg-[#0a192f]/50 rounded-lg hover:bg-[#0a192f]/70 transition-colors duration-300"
          >
            <div className="p-3 bg-[#64ffda]/10 rounded-lg">
              <FaEnvelope className="w-6 h-6 text-[#64ffda]" />
            </div>
            <div>
              <h3 className="text-[#8892b0] text-sm">Email</h3>
              <a href="mailto:st955218@gmail.com" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300">st955218@gmail.com</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 p-4 bg-[#0a192f]/50 rounded-lg hover:bg-[#0a192f]/70 transition-colors duration-300"
          >
            <div className="p-3 bg-[#64ffda]/10 rounded-lg">
              <FaPhone className="w-6 h-6 text-[#64ffda]" />
            </div>
            <div>
              <h3 className="text-[#8892b0] text-sm">Phone</h3>
              <span className="text-[#ccd6f6]">+91 7052327079</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 p-4 bg-[#0a192f]/50 rounded-lg hover:bg-[#0a192f]/70 transition-colors duration-300"
          >
            <div className="p-3 bg-[#64ffda]/10 rounded-lg">
              <FaLinkedin className="w-6 h-6 text-[#64ffda]" />
            </div>
            <div>
              <h3 className="text-[#8892b0] text-sm">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/shivanshu2407/" target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300">linkedin.com/in/shivanshu2407</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 p-4 bg-[#0a192f]/50 rounded-lg hover:bg-[#0a192f]/70 transition-colors duration-300"
          >
            <div className="p-3 bg-[#64ffda]/10 rounded-lg">
              <FaGithub className="w-6 h-6 text-[#64ffda]" />
            </div>
            <div>
              <h3 className="text-[#8892b0] text-sm">GitHub</h3>
              <a href="https://github.com/Shivanshu2407" target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300">github.com/Shivanshu2407</a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact; 