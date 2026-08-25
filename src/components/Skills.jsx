import { motion } from 'framer-motion';
import { FaBrain, FaCloud, FaCode, FaDatabase } from 'react-icons/fa';
import profile from '../data/profile';
import { useReducedMotion } from '../utils/motion';

const categoryConfig = {
  ai: { icon: FaBrain, label: 'AI & Machine Learning' },
  dataEngineering: { icon: FaDatabase, label: 'Data Engineering' },
  cloud: { icon: FaCloud, label: 'Cloud & DevOps' },
  languages: { icon: FaCode, label: 'Languages' }
};

const Skills = () => {
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
            Technical <span className="text-supply-primary">Skills</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            Full toolkit for building production AI systems and scalable data platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {Object.entries(profile.skills).map(([key, skills], index) => {
            const config = categoryConfig[key];
            const Icon = config.icon;
            return (
              <motion.div
                key={key}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-full bg-blue-50">
                    <Icon className="w-4 h-4 text-supply-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{config.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-50 text-slate-700 border border-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
