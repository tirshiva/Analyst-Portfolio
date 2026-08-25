import { motion } from 'framer-motion';
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
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
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-white/70 backdrop-blur-[2px] border-t border-slate-100 py-12 sm:py-16">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 sm:col-span-2 md:col-span-1"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Portfolio</h3>
            <p className="text-slate-500 mb-5 text-sm leading-relaxed">
              {profile.contact.availability}
            </p>
            <div className="flex gap-3">
              <motion.a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-2 rounded-full bg-slate-50 text-slate-900 hover:text-supply-primary transition-colors focus-ring"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-2 rounded-full bg-slate-50 text-[#0A66C2] transition-colors focus-ring"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-base font-semibold mb-4 text-slate-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 hover:text-supply-primary transition-colors">
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
            <h3 className="text-base font-semibold mb-4 text-slate-900">Expertise</h3>
            <ul className="space-y-2 text-sm">
              {profile.expertise.map((item) => (
                <li key={item} className="text-slate-500 flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-supply-primary flex-shrink-0" />
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
            <h3 className="text-base font-semibold mb-4 text-slate-900">Contact</h3>
            <p className="text-slate-500 mb-4 text-sm">{profile.contact.location}</p>
            <motion.a
              href={`mailto:${profile.socialLinks.email}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn-pill px-4 py-2 text-sm gap-2 focus-ring"
            >
              <FaEnvelope className="w-3.5 h-3.5" />
              Email Me
            </motion.a>
          </motion.div>
        </div>

        <div className="h-px bg-slate-100 my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="p-2.5 rounded-full bg-slate-50 hover:bg-supply-primary hover:text-white text-supply-primary transition-all focus-ring"
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
