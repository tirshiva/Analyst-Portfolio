import { motion } from 'framer-motion';
import { FaDatabase, FaChartLine, FaPython, FaRProject, FaTable, FaBrain } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiTableau, SiPowerbi, SiMicrosoftsqlserver, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';

const skills = [
  {
    category: "Data Analysis",
    icon: <FaChartLine className="w-6 h-6 text-blue-600" />,
    items: ["Statistical Analysis", "Data Visualization", "Exploratory Data Analysis", "A/B Testing"]
  },
  {
    category: "Machine Learning",
    icon: <FaBrain className="w-6 h-6 text-purple-600" />,
    items: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Natural Language Processing"]
  },
  {
    category: "Programming",
    icon: <FaPython className="w-6 h-6 text-yellow-600" />,
    items: ["Python", "R", "SQL", "NoSQL"]
  },
  {
    category: "Tools & Frameworks",
    icon: <FaTable className="w-6 h-6 text-green-600" />,
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy"]
  },
  {
    category: "Data Visualization",
    icon: <FaChartLine className="w-6 h-6 text-red-600" />,
    items: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"]
  },
  {
    category: "Databases",
    icon: <FaDatabase className="w-6 h-6 text-cyan-600" />,
    items: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive toolkit for data analysis, machine learning, and business intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-lg font-semibold text-slate-900">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Icons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-slate-200"
          >
            <h3 className="text-lg font-semibold text-slate-900 text-center mb-6">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <div className="flex flex-col items-center gap-2">
                <FaPython className="w-8 h-8 text-blue-600" />
                <span className="text-sm text-slate-600">Python</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FaRProject className="w-8 h-8 text-blue-600" />
                <span className="text-sm text-slate-600">R</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiTensorflow className="w-8 h-8 text-orange-600" />
                <span className="text-sm text-slate-600">TensorFlow</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiPytorch className="w-8 h-8 text-red-600" />
                <span className="text-sm text-slate-600">PyTorch</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiScikitlearn className="w-8 h-8 text-yellow-600" />
                <span className="text-sm text-slate-600">scikit-learn</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiTableau className="w-8 h-8 text-blue-600" />
                <span className="text-sm text-slate-600">Tableau</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiPowerbi className="w-8 h-8 text-yellow-600" />
                <span className="text-sm text-slate-600">Power BI</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiMicrosoftsqlserver className="w-8 h-8 text-red-600" />
                <span className="text-sm text-slate-600">SQL Server</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiMysql className="w-8 h-8 text-blue-600" />
                <span className="text-sm text-slate-600">MySQL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiPostgresql className="w-8 h-8 text-blue-600" />
                <span className="text-sm text-slate-600">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <SiMongodb className="w-8 h-8 text-green-600" />
                <span className="text-sm text-slate-600">MongoDB</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 