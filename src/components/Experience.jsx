import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTruck, FaBoxes, FaChartLine, FaWarehouse, FaShippingFast, FaDatabase, FaEye, FaHeadset, FaShoppingCart, FaChartBar, FaCode, FaTools, FaUsers, FaGlobe, FaTrophy, FaStar } from 'react-icons/fa';

const experiences = [
  {
    company: "Amazon",
    role: "Seller Support Associate",
    period: "March 2024 - Present",
    location: "Gurgaon, India",
    icon: <FaShoppingCart className="w-10 h-10 text-white" />,
    color: "bg-gradient-to-r from-orange-500 to-orange-600",
    category: "Customer Support & Analytics",
    responsibilities: [
      "Assist Amazon sellers with inventory management, payment processing, and tax-related queries",
      "Resolve complex account data issues and provide comprehensive seller support solutions",
      "Utilize Amazon's internal MLU (Machine Learning Utilities) for advanced data analytics",
      "Perform root cause analysis to identify and resolve seller account discrepancies",
      "Collaborate with cross-functional teams to improve seller experience and platform efficiency"
    ],
    skills: ["Data Analytics", "SQL", "Python", "MS Excel", "Root Cause Analysis", "Customer Support", "Problem Solving"],
    achievements: [
      "Mastered Amazon's internal analytics tools and MLU platform",
      "Developed expertise in seller account management and troubleshooting",
      "Contributed to improved seller satisfaction through efficient query resolution"
    ]
  },
  {
    company: "Concentrix",
    role: "Sales Advisor",
    period: "October 2022 - February 2024",
    location: "Gurgaon, India",
    icon: <FaHeadset className="w-10 h-10 text-white" />,
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    category: "Customer Service & Technical Support",
    responsibilities: [
      "Resolved complex service tickets escalated by Tier 1 associates for US-based Comcast clients",
      "Specialized in billing inquiries, payment processing, and account management issues",
      "Provided technical support for network troubleshooting and connectivity problems",
      "Mentored Tier 1 associates and improved their resolution capabilities",
      "Maintained high customer satisfaction scores through effective problem resolution"
    ],
    skills: ["Customer Service", "Technical Support", "Billing Systems", "Network Troubleshooting", "Team Leadership", "US Client Management"],
    achievements: [
      "Successfully resolved 95%+ of escalated tickets within SLA",
      "Trained and mentored multiple Tier 1 associates",
      "Maintained excellent customer satisfaction ratings for Comcast clients"
    ]
  },
  {
    company: "Lenskart",
    role: "Consultant - Home Try-On Service",
    period: "January 2022 - September 2022",
    location: "Gurgaon, India",
    icon: <FaEye className="w-10 h-10 text-white" />,
    color: "bg-gradient-to-r from-purple-500 to-purple-600",
    category: "E-commerce & Customer Experience",
    responsibilities: [
      "Specialized in Lenskart's innovative Home Try-On service for eyewear customers",
      "Provided personalized consultation for frame selection and style recommendations",
      "Managed end-to-end customer journey from virtual try-on to final purchase",
      "Resolved customer queries related to frame fitting, prescription accuracy, and delivery",
      "Contributed to improving customer experience and conversion rates for online eyewear sales"
    ],
    skills: ["E-commerce", "Customer Consultation", "Product Knowledge", "Virtual Try-On Technology", "Sales Support", "Customer Experience"],
    achievements: [
      "Enhanced customer satisfaction for Home Try-On service",
      "Developed expertise in virtual eyewear fitting and consultation",
      "Contributed to improved conversion rates for online eyewear sales"
    ]
  },
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
          Diverse professional experience across customer support, e-commerce, and data analytics
        </p>
      </motion.div>
      
      {/* Experience Grid */}
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
              
            {/* Experience card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-supply-lightgray">
              {/* Card header */}
              <div className={`${exp.color} p-6`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                      {exp.icon}
                    </div>
                    <div className="text-white">
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-white/90 text-lg">{exp.company}</p>
                      <p className="text-white/80 text-sm">{exp.category}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 text-white/90">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left column - Responsibilities */}
                  <div>
                    <h5 className="text-sm uppercase text-supply-gray font-semibold mb-4 flex items-center gap-2">
                      <FaBriefcase className="w-4 h-4" />
                      Key Responsibilities
                    </h5>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="flex items-start gap-3 text-supply-dark">
                          <span className="w-1.5 h-1.5 rounded-full bg-supply-primary mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right column - Achievements and Skills */}
                  <div className="space-y-6">
                    {exp.achievements && (
                      <div>
                        <h5 className="text-sm uppercase text-supply-gray font-semibold mb-4 flex items-center gap-2">
                          <FaTrophy className="w-4 h-4" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIdx) => (
                            <li key={achIdx} className="flex items-start gap-3 text-supply-dark">
                              <FaStar className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-sm leading-relaxed text-supply-primary font-medium">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div>
                      <h5 className="text-sm uppercase text-supply-gray font-semibold mb-4 flex items-center gap-2">
                        <FaTools className="w-4 h-4" />
                        Skills & Technologies
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIdx) => (
                          <span 
                            key={skillIdx}
                            className="px-3 py-1 bg-gradient-to-r from-supply-primary/10 to-supply-secondary/10 text-supply-primary border border-supply-primary/20 rounded-full text-xs font-medium hover:bg-supply-primary/20 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
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
          Interested in my diverse professional background and how I can contribute to your business needs?
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