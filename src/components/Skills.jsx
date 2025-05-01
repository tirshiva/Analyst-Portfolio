import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const skills = [
  {
    category: "Data Analysis",
    color: "blue",
    items: [
      { name: "Excel", level: 85, description: "Advanced data analysis, pivot tables, and financial modeling" },
      { name: "SQL", level: 85, description: "Complex queries, database design, and optimization for efficient data retrieval" },
      { name: "Power BI", level: 85, description: "Interactive dashboards and business intelligence solutions" },
      { name: "Python", level: 80, description: "Advanced data manipulation and analysis using pandas, numpy, and other scientific computing libraries" }
    ]
  },
  {
    category: "Machine Learning",
    color: "purple",
    items: [
      { name: "Statistical Analysis", level: 80, description: "Hypothesis testing, A/B testing, and statistical modeling" },
      { name: "Feature Engineering", level: 85, description: "Data preprocessing, feature selection, and dimensionality reduction" },
      { name: "Scikit-learn", level: 85, description: "Building and deploying machine learning models for classification and regression" },
      { name: "TensorFlow", level: 70, description: "Deep learning model development and neural network implementation" }
    ]
  },
  {
    category: "Visualization",
    color: "emerald",
    items: [
      // { name: "Power BI", level: 85, description: "Interactive dashboards and data visualization" },
      { name: "Matplotlib", level: 75, description: "Custom data visualization and plotting" },
      { name: "Seaborn", level: 70, description: "Statistical data visualization and analysis" },
      { name: "Streamlit", level: 70, description: "Web applications for data science projects" }
    ]
  }
];

const getColorClasses = (color) => {
  const colorMap = {
    blue: {
      card: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800",
      text: "text-blue-600 dark:text-blue-400",
      badge: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
      progress: {
        bg: "bg-blue-100 dark:bg-blue-900",
        bar: "bg-blue-600 dark:bg-blue-400"
      }
    },
    purple: {
      card: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800",
      text: "text-purple-600 dark:text-purple-400",
      badge: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
      progress: {
        bg: "bg-purple-100 dark:bg-purple-900",
        bar: "bg-purple-600 dark:bg-purple-400"
      }
    },
    emerald: {
      card: "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800",
      text: "text-emerald-600 dark:text-emerald-400",
      badge: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400",
      progress: {
        bg: "bg-emerald-100 dark:bg-emerald-900",
        bar: "bg-emerald-600 dark:bg-emerald-400"
      }
    }
  };
  return colorMap[color];
};

const SkillCard = ({ skill, category }) => {
  const colors = getColorClasses(category.color);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`${colors.card} rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 h-full`}
    >
      <div className="text-center mb-4">
        <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
          {skill.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {skill.description}
        </p>
      </div>
      
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${colors.badge}`}>
              Proficiency
            </span>
          </div>
          <div className="text-right">
            <span className={`text-xs font-semibold inline-block ${colors.text}`}>
              {skill.level}%
            </span>
          </div>
        </div>
        <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded ${colors.progress.bg}`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${colors.progress.bar}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Flatten all skills into a single array
  const allSkills = skills.flatMap(category => 
    category.items.map(skill => ({
      ...skill,
      category: category
    }))
  );

  // Calculate total pages
  const skillsPerPage = 3;
  const totalPages = Math.ceil(allSkills.length / skillsPerPage);

  // Get current page skills
  const currentSkills = allSkills.slice(
    currentPage * skillsPerPage,
    (currentPage + 1) * skillsPerPage
  );

  // Reset to first page when component mounts
  useEffect(() => {
    setCurrentPage(0);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentPage(prev => (prev + 1) % totalPages);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentPage(prev => (prev + 1) % totalPages);
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Technical <span className="text-gradient dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my technical expertise and proficiency in various data analysis tools and technologies.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              {currentSkills.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${index}`}
                  skill={skill}
                  category={skill.category}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? 'bg-blue-600 dark:bg-blue-400 w-4'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 