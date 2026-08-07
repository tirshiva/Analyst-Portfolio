import { motion } from 'framer-motion';
import { FaBrain, FaCloud, FaCode, FaDatabase } from 'react-icons/fa';
import profile from '../data/profile';

const categoryConfig = {
  ai: { icon: FaBrain, label: 'AI & Machine Learning', color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-100' },
  dataEngineering: { icon: FaDatabase, label: 'Data Engineering', color: 'text-violet-600', bg: 'bg-violet-50 border-violet-100' },
  cloud: { icon: FaCloud, label: 'Cloud & DevOps', color: 'text-sky-600', bg: 'bg-sky-50 border-sky-100' },
  languages: { icon: FaCode, label: 'Languages', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' }
};

const Skills = () => (
  <section id="skills" className="text-supply-dark py-12 sm:py-16 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="px-4 py-1.5 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
          Technical Skills
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-3">
          AI & <span className="text-supply-primary">Data Engineering</span> Stack
        </h2>
        <p className="text-supply-gray text-sm sm:text-base max-w-2xl mx-auto">
          Tools and technologies I use to build production AI systems and scalable data platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {Object.entries(profile.skills).map(([key, skills], index) => {
          const config = categoryConfig[key];
          const Icon = config.icon;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl border p-5 sm:p-6 ${config.bg} hover-lift`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Icon className={`w-5 h-5 ${config.color}`} />
                <h3 className="text-base sm:text-lg font-semibold text-supply-dark">{config.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/80 text-supply-dark border border-white shadow-sm"
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
  </section>
);

export default Skills;
