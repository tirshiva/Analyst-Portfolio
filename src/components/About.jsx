import { motion } from 'framer-motion';
import { FaBrain, FaDatabase, FaChartLine, FaCode, FaRobot, FaCloud, FaServer, FaChartBar, FaNetworkWired, FaIndustry, FaTools } from 'react-icons/fa';
import Education from './Education';

const skills = [
  {
    icon: <FaBrain className="w-8 h-8 text-supply-primary" />,
    title: "Machine Learning",
    description: "Expertise in developing and deploying ML models for predictive analytics, pattern recognition, and automated decision-making."
  },
  {
    icon: <FaDatabase className="w-8 h-8 text-supply-secondary" />,
    title: "Data Analytics",
    description: "Specialized in data analysis, statistical modeling, and business intelligence for various industries."
  },
  {
    icon: <FaRobot className="w-8 h-8 text-supply-accent" />,
    title: "NLP & AI Research",
    description: "Experience in natural language processing, clustering algorithms, and AI research for various applications."
  },
  {
    icon: <FaCloud className="w-8 h-8 text-supply-success" />,
    title: "AWS & Cloud ML",
    description: "Building and deploying ML solutions on AWS cloud platform with focus on scalability and production performance."
  },
  {
    icon: <FaTools className="w-8 h-8 text-supply-highlight" />,
    title: "ML Tools & Frameworks",
    description: "Proficient in TensorFlow, PyTorch, scikit-learn, and other modern ML frameworks and tools."
  },
  {
    icon: <FaChartBar className="w-8 h-8 text-supply-chart1" />,
    title: "Time Series Analysis",
    description: "Expert in time series forecasting, statistical modeling, and business intelligence for various industries."
  }
];

const experience = [];

const About = () => (
  <section className="text-supply-dark py-16 sm:py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About <span className="text-supply-primary">Me</span>
        </h2>
        <p className="text-supply-gray text-base sm:text-lg max-w-2xl mx-auto">
          Data Scientist specializing in analytics, machine learning, and data-driven solutions.
        </p>
      </motion.div>
      
      {/* Compact Skills Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg border border-supply-lightgray p-6 sm:p-8"
      >
        <h3 className="text-xl font-bold text-supply-dark mb-6 text-center">Core Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-supply-light/50 transition-colors duration-200">
              <div className="p-2 bg-supply-primary/10 rounded-lg">
                {skill.icon}
              </div>
                              <div>
                  <h4 className="font-semibold text-supply-dark text-base">{skill.title}</h4>
                  <p className="text-supply-gray text-sm">{skill.description}</p>
                </div>
            </div>
          ))}
        </div>
      </motion.div>
      

      {/* Education Section */}
      <section id="education" className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-supply-dark mb-3">
            <span className="text-supply-secondary">Education</span>
          </h3>
          <p className="text-supply-gray text-base max-w-2xl mx-auto">
            Academic journey and professional development in computer science and data science.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Education />
        </div>
        </motion.div>
      </section>
    </div>
  </section>
);

export default About; 