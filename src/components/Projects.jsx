import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { FaBoxes, FaChartLine, FaTruck } from 'react-icons/fa';

const Projects = () => (
  <section
    id="projects"
    className="bg-gradient-to-b from-supply-light to-white text-supply-dark py-16 sm:py-24 relative overflow-hidden"
  >
    {/* Background decorative elements */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-supply-primary/5 rounded-full -mr-32 -mt-32"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-supply-secondary/5 rounded-full -ml-48 -mb-48"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <div className="inline-block mb-3">
          <span className="px-4 py-1 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
            Portfolio
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          <span className="text-supply-dark">Featured </span>
          <span className="text-supply-primary">Projects</span>
        </h2>
        <p className="text-supply-gray text-base sm:text-lg max-w-2xl mx-auto mb-6 px-4">
          A showcase of my most impactful work in supply chain analytics, data science, and machine learning solutions.
        </p>
        
        {/* Project categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-white shadow-sm rounded-lg border border-supply-lightgray flex items-center text-supply-primary"
          >
            <FaChartLine className="mr-2" /> Analytics
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-white shadow-sm rounded-lg border border-supply-lightgray flex items-center text-supply-secondary"
          >
            <FaBoxes className="mr-2" /> Inventory
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-white shadow-sm rounded-lg border border-supply-lightgray flex items-center text-supply-accent"
          >
            <FaTruck className="mr-2" /> Logistics
          </motion.div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id || idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <p className="text-supply-gray mb-6">
          Looking for more examples of my work? Check out my GitHub repository for additional projects.
        </p>
        <motion.a
          href="https://github.com/tirshiva"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-supply-primary text-white rounded-lg shadow-md hover:bg-supply-highlight transition-all duration-300"
        >
          View More on GitHub
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Projects; 