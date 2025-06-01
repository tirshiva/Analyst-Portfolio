import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // Prevent modal from opening when clicking a link
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Modal with all details */}
      <AnimatePresence>
      {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-xl shadow-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            
              <div className="mb-6">
              <h3 className="text-2xl font-bold text-supply-dark">{project.title}</h3>
                <p className="text-supply-gray text-sm mt-1">Click the links below to explore the project</p>
            </div>
            
            {project.image && (
                <div className="mb-6 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '40vh' }}
                />
              </div>
            )}
            
              <div className="prose prose-sm max-w-none mb-6">
                <p className="text-supply-gray leading-relaxed">{project.description}</p>
              </div>
            
            <div className="mb-6">
                <h4 className="text-sm uppercase text-supply-gray font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack && project.techStack.map((tech, i) => (
                  <span
                    key={i}
                      className="px-3 py-1.5 bg-gray-50 text-supply-dark rounded-lg text-sm font-medium border border-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-supply-dark text-white rounded-lg text-sm font-medium hover:bg-supply-primary transition-all duration-300 shadow-sm hover:shadow-md"
                  onClick={handleLinkClick}
                >
                  <FaGithub className="w-5 h-5" />
                  View on GitHub
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-supply-primary text-white rounded-lg text-sm font-medium hover:bg-supply-highlight transition-all duration-300 shadow-sm hover:shadow-md"
                  onClick={handleLinkClick}
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  View Live Demo
                </a>
              )}
            </div>
          </motion.div>
          </motion.div>
      )}
      </AnimatePresence>

      {/* Project Card */}
      <motion.div
        className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-[420px] flex flex-col"
        onClick={() => setShowModal(true)}
        whileHover={{ y: -5 }}
      >
        {/* Project Image */}
        {project.image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
        
        {/* Card Content */}
        <div className="p-5 flex-grow flex flex-col">
          {/* Title and Description */}
          <h3 className="text-xl font-semibold text-supply-dark mb-2 group-hover:text-supply-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack && project.techStack.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md text-xs font-medium border border-gray-100"
              >
                {tech}
              </span>
            ))}
            {project.techStack && project.techStack.length > 3 && (
              <span className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md text-xs font-medium border border-gray-100">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        {/* View Details Button */}
        <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
          <button 
            className="w-full py-2 text-center text-supply-primary font-medium text-sm hover:text-supply-highlight transition-colors"
          >
            View Project Details
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard; 