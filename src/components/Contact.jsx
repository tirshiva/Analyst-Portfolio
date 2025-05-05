import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const socialLinks = {
  linkedin: "https://www.linkedin.com/in/shivanshu2407/",
  github: "https://github.com/Shivanshu2407",
  email: "st955218@gmail.com"
};

const Contact = () => (
  <section id="contact" className="bg-apple-white text-apple-black py-20">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Contact <span className="text-apple-blue">Me</span>
        </h2>
        <p className="text-apple-gray text-xl max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
      </motion.div>
      <div className="flex flex-col items-center gap-8">
        <motion.a
          href={`mailto:${socialLinks.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-6 py-3 bg-apple-blue text-white rounded-full text-lg font-medium shadow hover:bg-apple-black transition-all duration-300"
        >
          <FaEnvelope className="w-6 h-6" />
          <span>Email Me</span>
        </motion.a>
        <div className="flex gap-6">
          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-white shadow hover:bg-apple-blue/10 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6 text-apple-blue" />
          </motion.a>
          <motion.a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 rounded-full bg-white shadow hover:bg-apple-blue/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 text-apple-blue" />
          </motion.a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 