import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTruck, FaBoxes, FaChartLine, FaWarehouse, FaShippingFast, FaDatabase } from 'react-icons/fa';

const experiences = [
  {
    company: "Amazon",
    role: "Supply Chain Data Analyst",
    period: "March 2024 - Present",
    location: "Gurgaon, India",
    icon: <FaBoxes className="w-10 h-10 text-white" />,
    color: "bg-supply-primary",
    category: "Supply Chain Operations",
    responsibilities: [
      "Analyzed 250+ FBA seller inventory cases monthly, improving resolution turnaround by 15% through data-driven insights",
      "Collaborated with Supply Chain, Inventory Management, and Logistics teams to optimize fulfillment processes",
      "Developed inventory forecasting models using historical data to reduce stockouts by 12% and overstock by 8%",
      "Created interactive Power BI dashboards to visualize supply chain KPIs and identify optimization opportunities"
    ],
    skills: ["Inventory Analytics", "Supply Chain Optimization", "Power BI", "SQL", "Excel"]
  },
  {
    company: "AtliQ Technologies",
    role: "Supply Chain Data Analyst Intern",
    period: "December 2023 - January 2024",
    location: "Virtual",
    icon: <FaDatabase className="w-10 h-10 text-white" />,
    color: "bg-supply-secondary",
    category: "Data Analytics",
    responsibilities: [
      "Engineered and optimized 20+ SQL queries to extract supply chain KPIs with 95% accuracy",
      "Transformed and cleaned logistics datasets (10,000+ records) using Python (Pandas) for transportation analysis",
      "Developed interactive dashboards to visualize inventory turnover, order fulfillment rates, and delivery performance",
      "Conducted time-series analysis to identify seasonal patterns in product demand and optimize inventory levels"
    ],
    skills: ["Python", "SQL", "Data Visualization", "Statistical Analysis", "Pandas"]
  }
];

const Experience = () => (
  <section id="experience" className="bg-white text-supply-dark py-20 relative overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
      <div className="absolute top-1/4 right-1/4">
        <FaTruck className="w-64 h-64 text-supply-primary" />
      </div>
      <div className="absolute bottom-1/4 left-1/4">
        <FaWarehouse className="w-64 h-64 text-supply-secondary" />
      </div>
    </div>
    
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="inline-block mb-3">
          <span className="px-4 py-1 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
            Career Path
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Professional <span className="text-supply-primary">Experience</span>
        </h2>
        <p className="text-supply-gray text-xl max-w-2xl mx-auto">
          Building expertise in supply chain analytics and data-driven decision making
        </p>
      </motion.div>
      
      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-supply-lightgray transform md:translate-x-px"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'} md:w-1/2 pl-12 md:pl-0`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-auto ${idx % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'} top-0 w-6 h-6 rounded-full border-4 border-white bg-supply-primary shadow-md z-10`}></div>
              
              {/* Experience card */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-supply-lightgray">
                {/* Card header */}
                <div className={`${exp.color} p-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                      {exp.icon}
                    </div>
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-white/80 text-sm">{exp.category}</p>
                    </div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-supply-primary mb-2 md:mb-0">{exp.company}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-supply-gray">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h5 className="text-sm uppercase text-supply-gray font-semibold mb-3">Key Responsibilities</h5>
                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="flex items-start gap-3 text-supply-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-supply-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h5 className="text-sm uppercase text-supply-gray font-semibold mb-3">Skills Applied</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className="px-3 py-1 bg-supply-light text-supply-dark rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <p className="text-supply-gray mb-6 max-w-2xl mx-auto">
          Interested in my professional background and how I can contribute to your supply chain analytics needs?
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-supply-primary text-white rounded-lg shadow-md hover:bg-supply-highlight transition-all duration-300"
        >
          Let's Connect
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Experience; 