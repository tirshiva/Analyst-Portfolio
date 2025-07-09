import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { FaBrain, FaRobot, FaChartLine, FaCloud, FaSearch } from 'react-icons/fa';

const Projects = () => {
  const [search, setSearch] = useState('');
  const filteredProjects = projects.filter(project => {
    const keyword = search.toLowerCase();
    return (
      project.title.toLowerCase().includes(keyword) ||
      project.description.toLowerCase().includes(keyword) ||
      (project.techStack && project.techStack.some(tech => tech.toLowerCase().includes(keyword)))
    );
  });

  return (
    <section
      id="projects"
      className="text-supply-dark py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-4 py-1.5 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-supply-dark">Featured </span>
            <span className="text-supply-primary">Projects</span>
          </h2>
          <p className="text-supply-gray text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            A showcase of my machine learning, data science, and ML Ops projects demonstrating end-to-end AI solutions.
          </p>
          {/* Project categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2.5 bg-white shadow-sm rounded-lg border border-supply-lightgray flex items-center text-supply-primary text-sm sm:text-base"
            >
              <FaBrain className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Machine Learning
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2.5 bg-white shadow-sm rounded-lg border border-supply-lightgray flex items-center text-supply-secondary text-sm sm:text-base"
            >
              <FaRobot className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> ML Ops
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2.5 bg-white shadow-sm rounded-lg border border-supply-lightgray flex items-center text-supply-accent text-sm sm:text-base"
            >
              <FaChartLine className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Data Science
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2.5 bg-white shadow-sm rounded-lg border border-supply-lightgray flex items-center text-supply-highlight text-sm sm:text-base"
            >
              <FaCloud className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Cloud ML
            </motion.div>
          </div>
        </motion.div>

        {/* Search/filter bar */}
        <div className="flex justify-center mb-10">
          <label htmlFor="project-search" className="sr-only">Search projects</label>
          <div className="relative w-full max-w-md">
            <input
              id="project-search"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by keyword or tech (e.g. Python, MLOps)"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-supply-primary text-sm sm:text-base"
              aria-label="Search projects by keyword or technology"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-supply-gray py-10 text-lg">No projects found.</div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-supply-gray text-base sm:text-lg mb-6 sm:mb-8">
            Explore more of my machine learning and data science projects on GitHub.
          </p>
          <motion.a
            href="https://github.com/tirshiva"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 sm:py-3.5 bg-supply-primary text-white rounded-lg shadow-md hover:bg-supply-highlight transition-all duration-300 text-base sm:text-lg font-medium"
          >
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 