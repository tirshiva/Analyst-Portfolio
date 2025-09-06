import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaExternalLinkAlt, FaEye, FaMapMarkerAlt, FaTrophy, FaStar, FaTools } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Indira Gandhi National Open University",
      period: "2025 - 2027",
      status: "Pursuing",
      location: "Distance Learning",
      icon: <FaGraduationCap className="w-10 h-10 text-white" />,
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
      category: "Graduate Studies",
      description: "Advanced studies in computer applications, software development, and information technology.",
      focus: [
        "Software Development",
        "Database Management",
        "System Analysis & Design",
        "Web Technologies",
        "Mobile Application Development",
        "Project Management"
      ],
      achievements: [
        "Pursuing advanced degree in computer applications",
        "Focus on modern software development practices",
        "Comprehensive understanding of IT systems"
      ]
    },
    {
      degree: "Executive Diploma in Data Science and Artificial Intelligence",
      institution: "iHub, IIT Roorkee",
      period: "2024 - 2025",
      status: "Completed",
      location: "IIT Roorkee",
      icon: <FaUniversity className="w-10 h-10 text-white" />,
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
      category: "Professional Certification",
      description: "Comprehensive program covering advanced concepts in machine learning, deep learning, data analysis, and AI implementation strategies.",
      focus: [
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks",
        "Data Analysis & Visualization",
        "AI Implementation",
        "Statistical Modeling",
        "ML Ops & Deployment"
      ],
      achievements: [
        "Completed comprehensive AI and ML program at IIT Roorkee",
        "Gained expertise in advanced data science techniques",
        "Developed practical skills in machine learning implementation"
      ]
    },
    {
      degree: "Bachelor of Science in Mathematics and Computing",
      institution: "Chhatrapati Shahuji Maharaj University",
      period: "2019 - 2022",
      status: "Completed",
      location: "Kanpur",
      icon: <FaGraduationCap className="w-10 h-10 text-white" />,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      category: "Undergraduate Studies",
      description: "Foundation in mathematical concepts, computational methods, and analytical problem-solving techniques.",
      focus: [
        "Mathematical Analysis",
        "Computational Methods",
        "Statistical Mathematics",
        "Programming Fundamentals",
        "Data Structures & Algorithms",
        "Mathematical Modeling"
      ],
      achievements: [
        "Strong foundation in mathematical concepts",
        "Developed analytical and computational skills",
        "Gained programming and problem-solving expertise"
      ]
    }
  ];

  return (
    <section id="education" className="bg-white text-supply-dark py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-1/4">
          <FaGraduationCap className="w-64 h-64 text-supply-primary" />
        </div>
        <div className="absolute bottom-1/4 left-1/4">
          <FaUniversity className="w-64 h-64 text-supply-secondary" />
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
              Academic Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-supply-primary">Education</span>
          </h2>
          <p className="text-supply-gray text-xl max-w-2xl mx-auto">
            Comprehensive academic background in computer science, mathematics, and data science
          </p>
        </motion.div>
        
        {/* Education Grid */}
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Education card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-supply-lightgray">
                {/* Card header */}
                <div className={`${edu.color} p-6`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-full">
                        {edu.icon}
                      </div>
                      <div className="text-white">
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                        <p className="text-white/90 text-lg">{edu.institution}</p>
                        <p className="text-white/80 text-sm">{edu.category}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 text-white/90">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-200' 
                            : 'bg-blue-500/20 text-blue-200'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left column - Description and Focus Areas */}
                    <div>
                      <h5 className="text-sm uppercase text-supply-gray font-semibold mb-4 flex items-center gap-2">
                        <FaUniversity className="w-4 h-4" />
                        Program Overview
                      </h5>
                      <p className="text-supply-gray text-sm leading-relaxed mb-6">
                        {edu.description}
                      </p>
                      
                      <h5 className="text-sm uppercase text-supply-gray font-semibold mb-4 flex items-center gap-2">
                        <FaTools className="w-4 h-4" />
                        Focus Areas
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.focus.map((area, areaIdx) => (
                          <span 
                            key={areaIdx}
                            className="px-3 py-1 bg-gradient-to-r from-supply-primary/10 to-supply-secondary/10 text-supply-primary border border-supply-primary/20 rounded-full text-xs font-medium hover:bg-supply-primary/20 transition-colors duration-200"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right column - Achievements */}
                    <div>
                      <h5 className="text-sm uppercase text-supply-gray font-semibold mb-4 flex items-center gap-2">
                        <FaTrophy className="w-4 h-4" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-3 text-supply-dark">
                            <FaStar className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                            <span className="text-sm leading-relaxed text-supply-primary font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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
            Interested in my educational background and how it contributes to my professional expertise?
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
};

export default Education;
