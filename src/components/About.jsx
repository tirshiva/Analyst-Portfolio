import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaChartLine, FaBrain, FaTruck, FaBoxes, FaWarehouse, FaShippingFast, FaChartBar, FaNetworkWired, FaIndustry } from 'react-icons/fa';

const skills = [
  {
    icon: <FaChartLine className="w-8 h-8 text-supply-primary" />,
    title: "Supply Chain Analytics",
    description: "Expertise in analyzing supply chain data to identify bottlenecks, optimize inventory, and improve logistics efficiency."
  },
  {
    icon: <FaDatabase className="w-8 h-8 text-supply-secondary" />,
    title: "Data Management",
    description: "Proficient in handling large supply chain datasets using SQL, Python, and specialized data management tools."
  },
  {
    icon: <FaBoxes className="w-8 h-8 text-supply-accent" />,
    title: "Inventory Optimization",
    description: "Experience in developing models for optimal inventory levels, reducing costs while maintaining service levels."
  },
  {
    icon: <FaBrain className="w-8 h-8 text-supply-success" />,
    title: "Machine Learning",
    description: "Building predictive models for demand forecasting, supplier performance, and logistics optimization."
  },
  {
    icon: <FaShippingFast className="w-8 h-8 text-supply-highlight" />,
    title: "Logistics Analysis",
    description: "Analyzing transportation networks to optimize routes, reduce costs, and improve delivery performance."
  },
  {
    icon: <FaChartBar className="w-8 h-8 text-supply-chart1" />,
    title: "Performance Metrics",
    description: "Creating KPI dashboards to track and improve supply chain performance across multiple dimensions."
  }
];

const About = () => (
  <section id="about" className="bg-gradient-to-b from-white to-supply-light text-supply-dark py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          Supply Chain Data Analyst with expertise in analytics, machine learning, and business intelligence, 
          focused on transforming complex supply chain data into actionable insights.
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
                <FaNetworkWired className="w-24 h-24 text-supply-primary" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-supply-primary">Supply Chain Expertise</h3>
            <p className="text-supply-gray mb-4">
              My background in supply chain management combined with data analytics skills allows me to bridge the gap between 
              technical solutions and business needs. I specialize in:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-supply-primary mt-2"></span>
                <span className="text-supply-dark">End-to-end supply chain visibility and analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-supply-primary mt-2"></span>
                <span className="text-supply-dark">Demand forecasting and inventory optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-supply-primary mt-2"></span>
                <span className="text-supply-dark">Logistics network analysis and transportation optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-supply-primary mt-2"></span>
                <span className="text-supply-dark">Supplier performance analytics and risk management</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About; 