import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaChartLine, FaRobot } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      icon: <FaCode className="w-6 h-6 text-blue-600" />,
      title: "Programming",
      description: "Python, R, SQL, JavaScript, React"
    },
    {
      icon: <FaDatabase className="w-6 h-6 text-purple-600" />,
      title: "Data Analysis",
      description: "Pandas, NumPy, SQL, Excel, Tableau"
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-blue-600" />,
      title: "Machine Learning",
      description: "Scikit-learn, TensorFlow, PyTorch, XGBoost"
    },
    {
      icon: <FaRobot className="w-6 h-6 text-purple-600" />,
      title: "Deep Learning",
      description: "Neural Networks, NLP, Computer Vision"
    }
  ];

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

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a passionate data scientist and machine learning engineer with expertise in transforming complex data into actionable insights.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              With a strong foundation in mathematics and computer science, I've developed a deep understanding of data analysis and machine learning. My journey in data science has been driven by a passion for solving complex problems and creating innovative solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I specialize in developing machine learning models, analyzing large datasets, and creating data-driven solutions that help businesses make informed decisions. My experience spans across various industries, including finance, healthcare, and e-commerce.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="px-6 py-2 bg-neutral-900 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/Shivanshu_Tiwari_CV.pdf"
                download
                className="px-6 py-2 bg-white text-neutral-900 border border-neutral-900 rounded-xl hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h4>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 