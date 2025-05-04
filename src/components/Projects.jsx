import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/projects';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaExpand } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        repeat: 1
      }
    },
    tap: { scale: 0.95 }
  };

  const cardVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const imageVariants = {
    initial: { scale: 1 },
    expanded: { scale: 1.1 }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-800 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-neutral-800 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-neutral-50 to-neutral-100 text-neutral-800 rounded-lg text-sm font-medium border border-neutral-200/50 hover:border-primary-200 hover:from-primary-50 hover:to-primary-100 hover:text-primary-600 transition-all duration-300 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-4 py-2 bg-neutral-900 text-white rounded-xl text-center shadow-soft font-medium hover:shadow-lg focus:outline-none transition-all duration-300"
                    >
                      View Code
                    </motion.a>
                  )}
                  {project.demoLink && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-4 py-2 bg-white text-neutral-900 border border-neutral-900 rounded-xl text-center shadow-soft font-medium hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-900 focus:outline-none transition-all duration-300"
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative group">
                  <motion.div
                    variants={imageVariants}
                    initial="initial"
                    animate={isImageExpanded ? "expanded" : "initial"}
                    transition={{ duration: 0.3 }}
                    className="relative h-80 overflow-hidden"
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  
                  {/* Image Controls */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsImageExpanded(!isImageExpanded);
                      }}
                      className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-300"
                    >
                      <FaExpand className="w-5 h-5 text-neutral-900" />
                    </button>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors duration-300"
                    >
                      <FaTimes className="w-5 h-5 text-neutral-900" />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-neutral-800 mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-neutral-50 to-neutral-100 text-neutral-800 rounded-lg text-sm font-medium border border-neutral-200/50 hover:border-primary-200 hover:from-primary-50 hover:to-primary-100 hover:text-primary-600 transition-all duration-300 shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {selectedProject.githubLink && (
                      <motion.a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-xl shadow-soft font-medium hover:shadow-lg focus:outline-none transition-all duration-300"
                      >
                        <FaGithub className="w-5 h-5" />
                        View Code
                      </motion.a>
                    )}
                    {selectedProject.demoLink && (
                      <motion.a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-neutral-900 border border-neutral-900 rounded-xl shadow-soft font-medium hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-900 focus:outline-none transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 