import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Indira Gandhi National Open University",
      period: "2025 - 2027",
      status: "Pursuing",
      icon: <FaGraduationCap className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-br from-supply-primary to-supply-secondary",
      description: "Advanced studies in computer applications, software development, and information technology."
    },
    {
      degree: "Executive Diploma in Data Science and Artificial Intelligence",
      institution: "iHub, IIT Roorkee",
      period: "2024 - 2025",
      status: "Completed",
      icon: <FaUniversity className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-br from-supply-secondary to-supply-accent",
      description: "Comprehensive program covering advanced concepts in machine learning, deep learning, data analysis, and AI implementation strategies.",
      skills: [
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks",
        "Data Analysis & Visualization",
        "AI Implementation",
        "Statistical Modeling",
        "ML Ops & Deployment"
      ]
    },
    {
      degree: "Bachelor of Science in Mathematics and Computing",
      institution: "Chhatrapati Shahuji Maharaj University",
      location: "Kanpur",
      period: "2019 - 2022",
      status: "Completed",
      icon: <FaGraduationCap className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-br from-supply-accent to-supply-success",
      description: "Foundation in mathematical concepts, computational methods, and analytical problem-solving techniques."
    }
  ];

  return (
    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-lg border border-supply-lightgray overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={`p-3 ${edu.color} rounded-full`}>
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-supply-dark">
                    {edu.degree}
                  </h3>
                  <p className="text-supply-primary font-medium">{edu.institution}</p>
                  {edu.location && (
                    <p className="text-supply-gray text-sm">{edu.location}</p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  edu.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {edu.status}
                </span>
              </div>
            </div>

            {/* Institution and Period */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <FaUniversity className="w-4 h-4 text-supply-secondary" />
                <span className="text-supply-dark font-medium">{edu.institution}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4 text-supply-accent" />
                <span className="text-supply-dark text-base font-medium">{edu.period}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-supply-gray text-base mb-6 leading-relaxed">
              {edu.description}
            </p>

            {/* Skills (for Executive Diploma) */}
            {edu.skills && (
              <div className="mb-6">
                <h4 className="text-supply-dark font-semibold mb-3">Key Skills Acquired:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-supply-light text-supply-dark text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Status indicator */}
            <div className="pt-4 border-t border-supply-lightgray">
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium flex items-center gap-2 ${
                  edu.status === 'Completed' 
                    ? 'text-green-600' 
                    : 'text-blue-600'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    edu.status === 'Completed' 
                      ? 'bg-green-500' 
                      : 'bg-blue-500'
                  }`}></div>
                  {edu.status}
                </span>
                <span className="text-supply-gray text-sm">{edu.period}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
