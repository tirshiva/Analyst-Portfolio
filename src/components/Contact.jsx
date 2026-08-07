import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import profile from '../data/profile';

const Contact = () => (
  <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div className="max-w-5xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="px-4 py-1.5 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
          {profile.sections.contact.badge}
        </span>
        <h2 className="text-4xl font-bold text-supply-dark mt-4 mb-4">
          {profile.sections.contact.title.split(' ')[0]}{' '}
          <span className="text-supply-primary">{profile.sections.contact.title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <p className="text-supply-gray text-lg max-w-2xl mx-auto">
          {profile.contact.intro}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-indigo-50"
        >
          <h3 className="text-xl font-semibold text-supply-dark mb-6">
            {profile.sections.contact.formHeading}
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-supply-gray mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2.5 border border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors bg-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-supply-gray mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2.5 border border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors bg-white"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-supply-gray mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2.5 border border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors bg-white resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-xl transition-all font-semibold"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-indigo-50">
            <h3 className="text-xl font-semibold text-supply-dark mb-6">Contact Information</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-xl">
                  <FaEnvelope className="w-5 h-5 text-supply-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-supply-gray">Email</h4>
                  <a href={`mailto:${profile.socialLinks.email}`} className="text-supply-dark hover:text-supply-primary transition-colors text-sm">
                    {profile.socialLinks.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 rounded-xl">
                  <FaMapMarkerAlt className="w-5 h-5 text-supply-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-supply-gray">Location</h4>
                  <p className="text-supply-dark text-sm">{profile.contact.location}</p>
                </div>
              </div>
              <a
                href={profile.contact.vcfFile}
                download={profile.contact.vcfDownloadName}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-100 transition-colors border border-indigo-100"
                aria-label="Download vCard"
              >
                <FaEnvelope className="w-4 h-4" /> Download vCard
              </a>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-indigo-50">
            <h3 className="text-xl font-semibold text-supply-dark mb-6">Connect With Me</h3>
            <div className="flex gap-3">
              {[
                { href: profile.socialLinks.linkedin, icon: FaLinkedin, label: 'LinkedIn profile' },
                { href: profile.socialLinks.github, icon: FaGithub, label: 'GitHub profile' },
                { href: profile.socialLinks.twitter, icon: FaTwitter, label: 'Twitter profile' },
                { href: `mailto:${profile.socialLinks.email}`, icon: FaEnvelope, label: 'Send email' }
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3.5 rounded-xl bg-indigo-50 text-supply-primary hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="mt-6 p-4 bg-indigo-50/80 rounded-xl border border-indigo-100">
              <p className="text-supply-dark text-sm">
                {profile.contact.availability}. I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
