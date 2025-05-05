import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <section
    id="projects"
    className="bg-gradient-to-b from-apple-white to-apple-lightgray text-apple-black py-12 sm:py-16"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 sm:mb-14"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          <span className="text-apple-black">Featured </span>
          <span className="text-apple-blue">Work</span>
        </h2>
        <p className="text-apple-gray text-base sm:text-lg max-w-2xl mx-auto mb-2 px-4">
          A showcase of my most impactful and innovative work in data science, analytics, and machine learning.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id || idx} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 