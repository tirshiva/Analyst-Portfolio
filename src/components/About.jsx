import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import profile from '../data/profile';
import { useReducedMotion } from '../utils/motion';

const About = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="text-supply-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-slate-900">
            Work <span className="text-supply-primary">Experience</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {profile.about.summary}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold text-slate-900 mb-4">Career Focus</h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              {profile.about.careerFocus.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-supply-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-6">
              <FaBriefcase className="w-4 h-4 text-supply-primary" />
              <h3 className="text-base font-semibold text-slate-900">Roles</h3>
            </div>
            <ol className="relative border-l-2 border-slate-100 ml-2 space-y-8">
              {profile.about.experiences.map((item) => (
                <li key={`${item.company}-${item.role}`} className="ml-6 relative">
                  <span className="absolute -left-[1.6rem] top-1.5 w-3 h-3 rounded-full bg-supply-primary ring-4 ring-white" />
                  <p className="font-semibold text-slate-900">{item.role}</p>
                  <p className="text-sm text-supply-primary font-medium">
                    {item.company} · {item.duration}
                  </p>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">{item.description}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-6 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <FaGraduationCap className="w-4 h-4 text-supply-primary" />
            <h3 className="text-base font-semibold text-slate-900">Education</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.about.education.map((item) => (
              <div
                key={item.institution}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <p className="font-semibold text-slate-900">{item.degree}</p>
                <p className="text-sm text-slate-500 mt-1">
                  {item.institution} · {item.duration}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
