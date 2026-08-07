import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import profile from '../data/profile';

const About = () => (
  <section className="text-supply-dark py-12 sm:py-16 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8"
      >
        <span className="px-4 py-1.5 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-3">
          AI Engineer with a <span className="text-supply-primary">Data Engineering</span> Foundation
        </h2>
        <p className="text-supply-gray text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          {profile.about.summary}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card border border-indigo-50 p-5 sm:p-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-supply-dark mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-indigo-500 rounded-full" />
              Career Focus
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-supply-gray">
              {profile.about.careerFocus.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaBriefcase className="w-4 h-4 text-supply-primary" />
              <h3 className="text-sm sm:text-base font-semibold text-supply-dark">Experience</h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm">
              {profile.about.experiences.map((item, index) => (
                <li key={index} className="border-l-2 border-indigo-100 pl-3">
                  <p className="font-semibold text-supply-dark">{item.role}</p>
                  <p className="text-supply-gray">{item.company} · {item.duration}</p>
                  <p className="text-supply-gray mt-1 leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaGraduationCap className="w-4 h-4 text-supply-secondary" />
              <h3 className="text-sm sm:text-base font-semibold text-supply-dark">Education</h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm">
              {profile.about.education.map((item, index) => (
                <li key={index} className="border-l-2 border-violet-100 pl-3">
                  <p className="font-semibold text-supply-dark">{item.degree}</p>
                  <p className="text-supply-gray">{item.institution} · {item.duration}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
