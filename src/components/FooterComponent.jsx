import { motion } from 'framer-motion';
import { FaArrowUp, FaBrain, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaRobot } from 'react-icons/fa';
import profile from '../data/profile';

const FooterComponent = () => {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-white/90 backdrop-blur-sm border-t border-indigo-50 py-16 sm:py-20">
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
        <FaBrain className="absolute top-10 left-10 w-32 h-32 text-indigo-500" />
        <FaRobot className="absolute bottom-10 right-10 w-24 h-24 text-violet-500" />
        <FaCode className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-indigo-400" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 sm:col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">ST</span>
              </div>
              <h3 className="text-lg font-bold text-supply-dark">{profile.shortTitle}</h3>
            </div>
            <p className="text-supply-gray mb-5 text-sm leading-relaxed">
              {profile.contact.availability}
            </p>
            <div className="flex gap-3">
              <motion.a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-supply-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-supply-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-base font-semibold mb-4 text-supply-dark">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-supply-gray hover:text-supply-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-base font-semibold mb-4 text-supply-dark">Expertise</h3>
            <ul className="space-y-2 text-sm">
              {profile.expertise.map((item) => (
                <li key={item} className="text-supply-gray flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-base font-semibold mb-4 text-supply-dark">Contact</h3>
            <p className="text-supply-gray mb-4 text-sm">{profile.contact.location}</p>
            <motion.a
              href={`mailto:${profile.socialLinks.email}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all text-sm font-medium"
            >
              <FaEnvelope className="w-3.5 h-3.5" />
              Email Me
            </motion.a>
          </motion.div>
        </div>

        <div className="h-px bg-indigo-50 my-8 sm:my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-supply-gray text-xs sm:text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} {profile.name}. AI Engineer & Data Engineering Portfolio.
          </p>
          <motion.button
            onClick={scrollToTop}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="p-2.5 rounded-lg bg-indigo-50 hover:bg-indigo-600 hover:text-white text-supply-primary transition-all"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
