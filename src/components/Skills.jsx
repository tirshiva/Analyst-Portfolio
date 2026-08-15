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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="px-4 py-1.5 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-3">
            AI & <span className="text-supply-primary">Data Engineering</span> Stack
          </h2>
          <p className="text-supply-gray text-sm sm:text-base max-w-2xl mx-auto">
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
                className="rounded-2xl border border-supply-border bg-white p-5 sm:p-6 shadow-sm hover:shadow-card transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-supply-primary/10">
                    <Icon className="w-4 h-4 text-supply-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-supply-dark">{config.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-supply-background-alt text-supply-dark border border-supply-border"
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
