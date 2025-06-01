import { motion } from 'framer-motion';
import { FaBrain, FaDatabase, FaChartLine, FaCode, FaRobot, FaCloud, FaServer, FaChartBar, FaNetworkWired, FaIndustry, FaTools } from 'react-icons/fa';

const skills = [
  {
    icon: <FaBrain className="w-8 h-8 text-supply-primary" />,
    title: "Machine Learning",
    description: "Expertise in developing and deploying ML models for predictive analytics, pattern recognition, and automated decision-making."
  },
  {
    icon: <FaDatabase className="w-8 h-8 text-supply-secondary" />,
    title: "Data Science",
    description: "Proficient in data analysis, statistical modeling, and extracting actionable insights from complex datasets."
  },
  {
    icon: <FaRobot className="w-8 h-8 text-supply-accent" />,
    title: "ML Ops",
    description: "Experience in building scalable ML pipelines, model versioning, and production deployment of machine learning systems."
  },
  {
    icon: <FaCloud className="w-8 h-8 text-supply-success" />,
    title: "Cloud ML",
    description: "Building and deploying ML solutions on cloud platforms with focus on scalability and performance."
  },
  {
    icon: <FaTools className="w-8 h-8 text-supply-highlight" />,
    title: "ML Tools & Frameworks",
    description: "Proficient in TensorFlow, PyTorch, scikit-learn, and other modern ML frameworks and tools."
  },
  {
    icon: <FaChartBar className="w-8 h-8 text-supply-chart1" />,
    title: "Data Visualization",
    description: "Creating intuitive visualizations to communicate complex ML results and data insights effectively."
  }
];

const About = () => (
  <section id="about" className="text-supply-dark py-16 sm:py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 sm:mb-20"
      >
        <div className="inline-block mb-3">
          <span className="px-4 py-1 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
            My Expertise
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-supply-primary">Me</span>
        </h2>
        <p className="text-supply-gray text-base sm:text-xl max-w-3xl mx-auto px-4">
          Data Scientist and ML Engineer with expertise in machine learning, data science, and ML Ops, 
          focused on building scalable and production-ready AI solutions.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center text-center group hover:border-supply-primary border border-transparent"
          >
            <div className="mb-4 p-3 bg-supply-light rounded-full group-hover:bg-supply-primary/10 transition-colors duration-300">
              {skill.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-supply-dark">{skill.title}</h3>
              <p className="text-supply-gray text-sm sm:text-base">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 bg-white p-8 rounded-xl shadow-md border border-supply-lightgray"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-supply-primary/20 rounded-full blur-xl"></div>
              <div className="relative flex items-center justify-center w-48 h-48 bg-supply-primary/10 rounded-full">
                <FaServer className="w-24 h-24 text-supply-primary" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-supply-primary">ML & Data Science Expertise</h3>
            <p className="text-supply-gray mb-4">
              My background in machine learning and data science allows me to build end-to-end AI solutions. I specialize in:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-supply-primary mt-2"></span>
                <span className="text-supply-dark">End-to-end ML pipeline development and deployment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-supply-primary mt-2"></span>
                <span className="text-supply-dark">Model development, training, and optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-supply-primary mt-2"></span>
                <span className="text-supply-dark">ML Ops and production deployment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-supply-primary mt-2"></span>
                <span className="text-supply-dark">Data preprocessing and feature engineering</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About; 