import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/projects';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(100, 255, 218, 0.2)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        repeat: 1
      }
    },
    tap: { scale: 0.95 }
  };

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

  if (!projects || !Array.isArray(projects)) {
    return (
      <div className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ccd6f6] mb-4">
            Projects
          </h2>
          <p className="text-[#8892b0]">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.h2
              className="text-4xl font-bold text-[#ccd6f6] mb-4 drop-shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Featured <span className="text-[#64ffda]">Projects</span>
            </motion.h2>
            <motion.p
              className="text-[#8892b0] text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              A collection of my recent work in data analysis, machine learning, and business intelligence
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-[#112240]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-[#64ffda]/10 hover:border-[#64ffda]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#64ffda]/5"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                          className="p-2 bg-[#64ffda]/10 text-[#64ffda] rounded-lg hover:bg-[#64ffda]/20 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="w-4 h-4" />
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
                          className="p-2 bg-[#64ffda]/10 text-[#64ffda] rounded-lg hover:bg-[#64ffda]/20 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <p className="text-[#8892b0] mb-6 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack && project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm text-[#64ffda] bg-[#64ffda]/10 rounded-full hover:bg-[#64ffda]/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center gap-1.5 px-4 py-2 bg-[#64ffda]/10 text-[#64ffda] rounded-lg text-sm font-medium hover:bg-[#64ffda]/20 transition-all duration-300"
                    >
                      <FaCode className="w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#112240] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#ccd6f6]">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-[#8892b0] mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm text-[#64ffda] bg-[#64ffda]/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {selectedProject.githubLink && (
                    <motion.a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="flex items-center gap-2 px-4 py-2 bg-[#64ffda]/10 text-[#64ffda] rounded-lg text-sm font-medium hover:bg-[#64ffda]/20 transition-all duration-300"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>View Code</span>
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
                      className="flex items-center gap-2 px-4 py-2 bg-[#64ffda]/10 text-[#64ffda] rounded-lg text-sm font-medium hover:bg-[#64ffda]/20 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects; 