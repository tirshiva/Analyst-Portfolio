import { motion } from 'framer-motion';
import { FaBrain, FaDatabase, FaChartLine, FaCode, FaRobot, FaCloud, FaServer, FaChartBar, FaNetworkWired, FaIndustry, FaTools } from 'react-icons/fa';
import Certificate from './Certificate';

const skills = [
  {
    icon: <FaBrain className="w-8 h-8 text-supply-primary" />,
    title: "Machine Learning",
    description: "Expertise in developing and deploying ML models for predictive analytics, pattern recognition, and automated decision-making."
  },
  {
    icon: <FaDatabase className="w-8 h-8 text-supply-secondary" />,
    title: "E-commerce Analytics",
    description: "Specialized in inventory forecasting, demand prediction, and seller support analytics for Amazon's marketplace."
  },
  {
    icon: <FaRobot className="w-8 h-8 text-supply-accent" />,
    title: "NLP & AI Research",
    description: "Experience in NLP-based ticket classification, clustering algorithms, and AI research for customer support optimization."
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
    description: "Expert in time series forecasting, statistical modeling, and business intelligence for e-commerce operations."
  }
];

const experience = [
  {
    company: "Amazon",
    role: "Data Scientist",
    duration: "March 2024 - Present",
    team: "Seller Support Analytics Team",
    achievements: [
      "Developed inventory forecasting models for Amazon sellers using time series analysis and ML algorithms",
      "Contributed to AI research team for seller query ticket categorization using NLP and clustering techniques",
      "Improved client satisfaction by 15% through automated ticket classification and routing system",
      "Supported Fulfillment by Amazon (FBA) operations with data-driven insights and predictive analytics"
    ],
    technologies: ["Python", "Machine Learning", "NLP", "Time Series Analysis", "AWS", "SQL"]
  }
];

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
          Data Scientist at Amazon specializing in e-commerce analytics, inventory forecasting, and AI-powered customer support solutions.
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
      
      {/* Professional Experience Section */}
      <section id="experience" className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-supply-dark mb-3">
            Work <span className="text-supply-primary">Experience</span>
          </h3>
                  <p className="text-supply-gray text-base max-w-2xl mx-auto">
          Currently working at Amazon as a Data Scientist, contributing to seller support analytics and AI research initiatives.
        </p>
        </div>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-supply-lightgray overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-supply-dark mb-1">
                      {exp.role}
                    </h4>
                    <div className="flex items-center gap-2 mb-1">
                      <FaIndustry className="w-4 h-4 text-supply-primary" />
                      <span className="text-supply-primary font-semibold">{exp.company}</span>
                    </div>
                    <p className="text-supply-gray text-sm">{exp.team}</p>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <span className="px-3 py-1 bg-supply-secondary/10 text-supply-secondary rounded-full text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>
                </div>
                
                {/* Achievements */}
                <div className="mb-4">
                  <h5 className="text-supply-dark font-semibold mb-2 text-sm">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-supply-primary mt-1.5 flex-shrink-0"></span>
                        <span className="text-supply-gray text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h5 className="text-supply-dark font-semibold mb-2 text-sm">Technologies & Skills:</h5>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-supply-light text-supply-dark text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </motion.div>
      </section>
      
            {/* FBA Expertise Section */}
      <section className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Fulfillment by Amazon (FBA) Expertise
              </h3>
              <p className="text-blue-700 text-base">
                Supporting Amazon's FBA program with data-driven insights and AI-powered solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-1 text-sm">Inventory Forecasting</h4>
                <p className="text-sm text-gray-600">
                  ML models for inventory prediction, optimizing stock levels and reducing costs.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-1 text-sm">Seller Support Analytics</h4>
                <p className="text-sm text-gray-600">
                  Analytics systems to support seller queries and improve FBA experience.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-1 text-sm">AI Ticket Classification</h4>
                <p className="text-sm text-gray-600">
                  NLP algorithms for automatic ticket categorization and routing.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-1 text-sm">Customer Satisfaction</h4>
                <p className="text-sm text-gray-600">
                  15% improvement in client satisfaction through automated systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Certificate Section */}
      <section id="certification" className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-supply-dark mb-3">
            Professional <span className="text-supply-secondary">Certification</span>
          </h3>
                  <p className="text-supply-gray text-base max-w-2xl mx-auto">
          Executive Post Graduate Certification in Data Science & Artificial Intelligence from IIT Roorkee.
        </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Certificate />
        </div>
        </motion.div>
      </section>
    </div>
  </section>
);

export default About; 