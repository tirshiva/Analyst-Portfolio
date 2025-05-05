import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaChartLine, FaBrain } from 'react-icons/fa';

const skills = [
  {
    icon: <FaCode className="w-6 h-6 text-apple-blue" />,
    title: "Programming",
    description: "Proficient in Python, R, and SQL for data analysis and machine learning applications."
  },
  {
    icon: <FaDatabase className="w-6 h-6 text-apple-blue" />,
    title: "Data Management",
    description: "Expertise in handling and processing large datasets using various database systems."
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-apple-blue" />,
    title: "Data Analysis",
    description: "Strong analytical skills with experience in statistical analysis and data visualization."
  },
  {
    icon: <FaBrain className="w-6 h-6 text-apple-blue" />,
    title: "Machine Learning",
    description: "Experience in developing and deploying machine learning models for real-world applications."
  }
];

const About = () => (
  <section id="about" className="bg-apple-white text-apple-black py-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">About <span className="text-apple-blue">Me</span></h2>
        <p className="text-apple-gray text-xl max-w-3xl mx-auto">
          Data Scientist skilled in machine learning, analytics, and programming, with hands-on experience from real-world projects.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-xl shadow p-6 flex items-start gap-4"
          >
            <div>{skill.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-apple-gray">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About; 