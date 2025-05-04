import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaChartLine, FaBrain } from 'react-icons/fa';

const About = () => {
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

  const skills = [
    {
      icon: <FaCode className="w-6 h-6 text-[#64ffda]" />,
      title: "Programming",
      description: "Proficient in Python, R, and SQL for data analysis and machine learning applications."
    },
    {
      icon: <FaDatabase className="w-6 h-6 text-[#64ffda]" />,
      title: "Data Management",
      description: "Expertise in handling and processing large datasets using various database systems."
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-[#64ffda]" />,
      title: "Data Analysis",
      description: "Strong analytical skills with experience in statistical analysis and data visualization."
    },
    {
      icon: <FaBrain className="w-6 h-6 text-[#64ffda]" />,
      title: "Machine Learning",
      description: "Experience in developing and deploying machine learning models for real-world applications."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#0a192f]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#112240]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* About Me */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#ccd6f6] mb-6">
              About <span className="text-[#64ffda]">Me</span>
            </h2>
            <p className="text-lg text-[#8892b0] leading-relaxed">
              I'm a passionate Data Scientist with expertise in machine learning and data analysis. 
              My journey in data science began with a strong foundation in programming and statistics, 
              which I've built upon through various projects and real-world applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#112240]/50 backdrop-blur-sm rounded-lg p-6 border border-[#64ffda]/10 hover:border-[#64ffda]/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">{skill.title}</h3>
                    <p className="text-[#8892b0] leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 