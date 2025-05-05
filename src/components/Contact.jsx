import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const socialLinks = {
  email: "st955218@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivanshu2407/",
  github: "https://github.com/Shivanshu2407",
  twitter: "https://x.com/shivanshut24"
};

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-apple-black mb-4">Let's Connect</h2>
          <p className="text-apple-gray text-lg mb-8">
            Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Email Button */}
          <motion.a
            href={`mailto:${socialLinks.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-apple-blue text-white rounded-full text-lg font-medium shadow hover:bg-apple-black transition-all duration-300 focus-ring hover-lift"
            aria-label="Send email"
          >
            <FaEnvelope className="w-6 h-6" />
            <span>Email Me</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-white shadow hover:bg-apple-blue/10 transition-all duration-300 focus-ring hover-lift"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className="w-6 h-6 text-apple-blue" />
            </motion.a>

            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-white shadow hover:bg-apple-blue/10 transition-all duration-300 focus-ring hover-lift"
              aria-label="GitHub profile"
            >
              <FaGithub className="w-6 h-6 text-apple-blue" />
            </motion.a>

            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-white shadow hover:bg-apple-blue/10 transition-all duration-300 focus-ring hover-lift"
              aria-label="Twitter profile"
            >
              <FaTwitter className="w-6 h-6 text-apple-blue" />
            </motion.a>
          </div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-apple-gray text-sm mt-8"
          >
            I typically respond within 24 hours. Looking forward to connecting with you!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 