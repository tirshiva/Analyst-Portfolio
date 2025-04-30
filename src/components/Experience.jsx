import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: "Seller Support Associate",
    company: "Amazon",
    location: "Gurgaon, IND",
    period: "March 2024 – Present",
    description: "Supporting Amazon sellers with account management, problem resolution, and ensuring smooth marketplace operations.",
    skills: ["Seller Support", "Account Management", "Problem Resolution", "Data Analysis"]
  }
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-blue-200 dark:bg-blue-900 group-last:h-[calc(100%-24px)]" />
      
      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 ring-4 ring-white dark:ring-gray-900 transition-colors duration-300" />
      
      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-gray-900/50 hover:shadow-xl transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <FaBriefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {experience.company}
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 dark:text-gray-400">
              {experience.location}
            </span>
            <span className="text-gray-500 dark:text-gray-400">
              {experience.period}
            </span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300">
            {experience.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Professional <span className="text-gradient dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in building expertise through various roles and responsibilities.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 