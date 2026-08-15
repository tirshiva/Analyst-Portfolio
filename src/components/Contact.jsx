import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import profile from '../data/profile';
import { useReducedMotion } from '../utils/motion';

const Contact = () => {
  const reducedMotion = useReducedMotion();
  const titleParts = profile.sections.contact.title.split(' ');
  const titleFirst = titleParts[0];
  const titleRest = titleParts.slice(1).join(' ');

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="px-4 py-1.5 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
            {profile.sections.contact.badge}
          </span>
          <h2 className="text-4xl font-bold text-supply-dark mt-4 mb-4">
            {titleFirst}{' '}
            <span className="text-supply-primary">{titleRest}</span>
          </h2>
          <p className="text-supply-gray text-lg max-w-2xl mx-auto">{profile.contact.intro}</p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-supply-border text-center"
        >
          <p className="text-supply-gray text-sm mb-6">{profile.contact.availability}</p>

          <a
            href={`mailto:${profile.socialLinks.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-primary text-white rounded-xl shadow-button font-semibold hover:shadow-lg transition-all focus-ring mb-8"
          >
            <FaEnvelope className="w-5 h-5" />
            Email Me
          </a>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { href: profile.socialLinks.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
              { href: profile.socialLinks.github, icon: FaGithub, label: 'GitHub' },
              { href: profile.socialLinks.twitter, icon: FaTwitter, label: 'Twitter' }
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-supply-background-alt text-supply-primary hover:bg-supply-primary hover:text-white transition-all focus-ring"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-supply-background-alt border border-supply-border">
              <FaEnvelope className="w-5 h-5 text-supply-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-supply-gray">Email</h4>
                <a
                  href={`mailto:${profile.socialLinks.email}`}
                  className="text-supply-dark hover:text-supply-primary text-sm break-all focus-ring rounded"
                >
                  {profile.socialLinks.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-supply-background-alt border border-supply-border">
              <FaMapMarkerAlt className="w-5 h-5 text-supply-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-supply-gray">Location</h4>
                <p className="text-supply-dark text-sm">{profile.contact.location}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <a
              href={profile.contact.vcfFile}
              download={profile.contact.vcfDownloadName}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-supply-primary text-white text-sm font-medium hover:bg-supply-hover transition-colors focus-ring"
            >
              <FaEnvelope className="w-4 h-4" /> Download vCard
            </a>
          </div>

          <p className="text-supply-gray text-sm mt-6">
            I typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
