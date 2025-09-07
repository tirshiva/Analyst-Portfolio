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
      {/* Intro summary card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-2xl shadow-lg border border-supply-lightgray p-6 sm:p-10 mb-10"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              About <span className="text-supply-primary">Me</span>
            </h2>
            <p className="text-supply-gray text-base sm:text-lg leading-relaxed">
              I’m Shivanshu Tiwari, a Data Scientist and AI Engineer focused on building usable, production‑grade ML solutions.
              I turn raw data into reliable models and insight‑driven products—from data pipelines and feature engineering to deployment and monitoring.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-supply-primary/10 text-supply-primary text-sm">End‑to‑End ML</span>
              <span className="px-3 py-1 rounded-full bg-supply-secondary/10 text-supply-secondary text-sm">MLOps</span>
              <span className="px-3 py-1 rounded-full bg-supply-accent/10 text-supply-accent text-sm">NLP</span>
              <span className="px-3 py-1 rounded-full bg-supply-highlight/10 text-supply-highlight text-sm">Analytics</span>
              <span className="px-3 py-1 rounded-full bg-supply-success/10 text-supply-success text-sm">Cloud ML</span>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/Resume_Data_Scientist.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-3 bg-supply-primary text-white rounded-lg hover:bg-supply-highlight transition-colors duration-200">
                View Resume
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 bg-white border border-supply-lightgray text-supply-dark rounded-lg hover:bg-supply-light/60 transition-colors duration-200">
                Contact Me
              </a>
            </div>
          </div>
          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-3 w-full sm:w-auto">
            <div className="rounded-xl border border-supply-lightgray bg-supply-background p-4 text-center">
              <div className="text-2xl font-bold text-supply-dark">10+</div>
              <div className="text-supply-gray text-sm">Projects</div>
            </div>
            <div className="rounded-xl border border-supply-lightgray bg-supply-background p-4 text-center">
              <div className="text-2xl font-bold text-supply-dark">End‑to‑End</div>
              <div className="text-supply-gray text-sm">ML Pipelines</div>
            </div>
            <div className="rounded-xl border border-supply-lightgray bg-supply-background p-4 text-center">
              <div className="text-2xl font-bold text-supply-dark">NLP</div>
              <div className="text-supply-gray text-sm">Clustering & LLM</div>
            </div>
            <div className="rounded-xl border border-supply-lightgray bg-supply-background p-4 text-center">
              <div className="text-2xl font-bold text-supply-dark">Cloud</div>
              <div className="text-supply-gray text-sm">AWS & CI/CD</div>
            </div>
          </div>
        </div>
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
      

    </div>
  </section>
);

export default About; 