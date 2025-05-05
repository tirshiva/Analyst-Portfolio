import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const experiences = [
  {
    company: "Amazon",
    role: "Seller Support Associate",
    period: "March 2024 - Present",
    location: "Gurgaon, India",
    responsibilities: [
      "Resolved 250+ FBA seller reimbursement cases monthly, improving resolution turnaround by 15%",
      "Collaborated with Finance (FinOps), Inventory, and Compliance teams to achieve 15% SLA adherence",
      "Developed analytical skills by working with large datasets and identifying patterns in seller issues",
      "Enhanced problem-solving abilities through systematic analysis of complex seller cases"
    ]
  },
  {
    company: "AtliQ Technologies",
    role: "Data Analyst Intern",
    period: "December 2024 - January 2025",
    location: "Virtual",
    responsibilities: [
      "Engineered and debugged 20+ SQL queries to extract business KPIs with 95% accuracy",
      "Transformed and cleaned large datasets (10,000+ records) using Python (Pandas) and Excel for data analysis and reporting",
      "Gained hands-on experience with data visualization tools and techniques",
      "Developed foundational skills in data analysis and business intelligence"
    ]
  }
];

const Experience = () => (
  <section id="experience" className="bg-apple-white text-apple-black py-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Professional <span className="text-apple-blue">Experience</span>
        </h2>
        <p className="text-apple-gray text-xl max-w-2xl mx-auto">
          Building a strong foundation in data analytics and business intelligence
        </p>
      </motion.div>
      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-xl shadow p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="flex items-center gap-3 mb-4 md:mb-0">
                <FaBriefcase className="w-5 h-5 text-apple-blue" />
                <h3 className="text-xl font-bold">{exp.role}</h3>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-apple-gray">
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
            <h4 className="text-lg font-semibold text-apple-blue mb-4">{exp.company}</h4>
            <ul className="space-y-2">
              {exp.responsibilities.map((resp, respIdx) => (
                <li key={respIdx} className="flex items-start gap-2 text-apple-gray">
                  <span className="w-1.5 h-1.5 rounded-full bg-apple-blue mt-2" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience; 