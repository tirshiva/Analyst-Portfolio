import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../data/projects';

const Contact = () => {
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
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-800 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-soft"
          >
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <motion.a
                href={`mailto:${socialLinks.email}`}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center space-x-3 p-3 rounded-xl border border-neutral-200 hover:border-neutral-900 transition-all duration-200"
              >
                <FaEnvelope className="w-5 h-5 text-primary-500" />
                <span className="text-neutral-800">{socialLinks.email}</span>
              </motion.a>
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center space-x-3 p-3 rounded-xl border border-neutral-200 hover:border-neutral-900 transition-all duration-200"
              >
                <FaGithub className="w-5 h-5 text-neutral-900" />
                <span className="text-neutral-800">GitHub</span>
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center space-x-3 p-3 rounded-xl border border-neutral-200 hover:border-neutral-900 transition-all duration-200"
              >
                <FaLinkedin className="w-5 h-5 text-primary-500" />
                <span className="text-neutral-800">LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 