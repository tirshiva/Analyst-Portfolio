import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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

  return (
    <section id="experience" className="py-16 relative bg-[#0a192f] overflow-y-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#112240]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-bold text-[#ccd6f6] mb-4">
              Professional <span className="text-[#64ffda]">Experience</span>
            </h2>
            <p className="text-[#8892b0] max-w-xl mx-auto">
              Building a strong foundation in data analytics and business intelligence
            </p>
          </motion.div>

          {/* Experience Grid */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#112240]/50 backdrop-blur-sm rounded-lg p-6 border border-[#64ffda]/10 hover:border-[#64ffda]/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <FaBriefcase className="w-5 h-5 text-[#64ffda]" />
                    <h3 className="text-xl font-bold text-[#ccd6f6]">{exp.role}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-[#8892b0]">
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
                <h4 className="text-lg font-semibold text-[#64ffda] mb-4">{exp.company}</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2 text-[#8892b0]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64ffda] mt-2" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 