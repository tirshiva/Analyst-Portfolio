import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: "Seller Support Associate",
    company: "Amazon",
    location: "Gurgaon, IND",
    period: "March 2024 – Present",
    type: "Full Time",
    description: "Supporting Amazon sellers with account management, problem resolution, and ensuring smooth marketplace operations.",
    skills: ["Seller Support", "Account Management", "Data Visualization"]
  },
  {
    title: "Data Analyst",
    company: "AtliQ Technologies",
    location: "Virtual",
    period: "March 2025 – April 2025",
    type: "Internship",
    description: "Analyzed and visualized post-5G customer behavior by cleaning telecom data and delivering insights through agile-driven dashboards and multimedia presentations.",
    skills: ["Product Management", "Power BI", "Database Management", "Python"]
  }
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <FaBriefcase className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {experience.title}
              </h3>
              <p className="text-blue-600 font-medium">
                {experience.company}
              </p>
            </div>
          </div>
          <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            {experience.type}
          </span>
        </div>

        {/* Location and Period */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span>{experience.location}</span>
          <span>•</span>
          <span>{experience.period}</span>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 mb-4">
          {experience.description}
        </p>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full transition-colors duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey in building expertise through various roles and responsibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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