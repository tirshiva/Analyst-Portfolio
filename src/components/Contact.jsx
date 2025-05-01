import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { socialLinks } from '../data/projects';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href={`mailto:${socialLinks.email}`}
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div className="p-2 bg-blue-50 rounded-lg">
              <FaEnvelope className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Email</h3>
              <p className="text-sm text-gray-500">{socialLinks.email}</p>
            </div>
          </a>

          <a
            href={`tel:+917052327079`}
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div className="p-2 bg-blue-50 rounded-lg">
              <FaPhone className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">Phone</h3>
              <p className="text-sm text-gray-500">+91 7052327079</p>
            </div>
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div className="p-2 bg-blue-50 rounded-lg">
              <FaLinkedin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">LinkedIn</h3>
              <p className="text-sm text-gray-500">Connect professionally</p>
            </div>
          </a>

          {/* <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div className="p-2 bg-blue-50 rounded-lg">
              <FaGithub className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">GitHub</h3>
              <p className="text-sm text-gray-500">View my projects</p>
            </div>
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 