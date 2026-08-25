import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import profile from '../data/profile';
import { useReducedMotion } from '../utils/motion';

const Contact = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let&apos;s <span className="text-supply-primary">Connect</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{profile.contact.intro}</p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-slate-100 text-center"
        >
          <p className="text-slate-500 text-sm mb-6">{profile.contact.availability}</p>

          <a
            href={`mailto:${profile.socialLinks.email}`}
            className="btn-pill px-8 py-3 text-sm focus-ring mb-8 inline-flex gap-2"
          >
            <FaEnvelope className="w-4 h-4" />
            Email Me
          </a>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { href: profile.socialLinks.github, icon: FaGithub, label: 'GitHub', className: 'text-slate-900' },
              { href: profile.socialLinks.linkedin, icon: FaLinkedin, label: 'LinkedIn', className: 'text-[#0A66C2]' },
              { href: profile.socialLinks.twitter, icon: FaTwitter, label: 'Twitter', className: 'text-sky-500' }
            ].map(({ href, icon: Icon, label, className }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-slate-50 hover:bg-slate-100 transition-all focus-ring ${className}`}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <FaEnvelope className="w-5 h-5 text-supply-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-slate-500">Email</h4>
                <a
                  href={`mailto:${profile.socialLinks.email}`}
                  className="text-slate-900 hover:text-supply-primary text-sm break-all focus-ring rounded"
                >
                  {profile.socialLinks.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <FaMapMarkerAlt className="w-5 h-5 text-supply-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-slate-500">Location</h4>
                <p className="text-slate-900 text-sm">{profile.contact.location}</p>
              </div>
            </div>
          </div>

          <a
            href={profile.contact.vcfFile}
            download={profile.contact.vcfDownloadName}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:border-supply-primary/40 hover:text-supply-primary transition-colors focus-ring"
          >
            Download vCard
          </a>

          <p className="text-slate-400 text-sm mt-6">
            I typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
