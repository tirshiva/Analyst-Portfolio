import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChartLine, FaBoxes, FaTruck, FaDatabase, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // Prevent modal from opening when clicking a link
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  // Get project icon based on tech stack
  const getProjectIcon = () => {
    const techString = project.techStack ? project.techStack.join(' ').toLowerCase() : '';
    
    if (techString.includes('power bi') || techString.includes('tableau') || techString.includes('dashboard')) {
      return <FaChartLine className="w-6 h-6 text-supply-primary" />;
    } else if (techString.includes('sql') || techString.includes('database')) {
      return <FaDatabase className="w-6 h-6 text-supply-secondary" />;
    } else if (techString.includes('python') || techString.includes('machine learning')) {
      return <FaCode className="w-6 h-6 text-supply-accent" />;
    } else {
      return <FaBoxes className="w-6 h-6 text-supply-highlight" />;
    }
  };

  return (
    <>
      {/* Modal with all details */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-supply-light text-supply-dark hover:bg-supply-primary hover:text-white transition-colors"
              aria-label="Close"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-supply-primary/10 rounded-full">
                {getProjectIcon()}
              </div>
              <h3 className="text-2xl font-bold text-supply-dark">{project.title}</h3>
            </div>
            
            {project.image && (
              <div className="mb-6 rounded-lg overflow-hidden border border-supply-lightgray">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '40vh' }}
                />
              </div>
            )}
            
            <p className="text-supply-gray text-base mb-6 leading-relaxed">{project.description}</p>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase text-supply-gray font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack && project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-supply-light text-supply-dark rounded-md text-xs font-medium"
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
                  className="inline-flex items-center gap-2 px-4 py-2 bg-supply-dark text-white rounded-lg text-sm font-medium hover:bg-supply-primary transition-colors"
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
                  className="inline-flex items-center gap-2 px-4 py-2 bg-supply-primary text-white rounded-lg text-sm font-medium hover:bg-supply-highlight transition-colors"
                  onClick={handleLinkClick}
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  View Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Project Card */}
      <motion.div
        className="bg-white border border-supply-lightgray rounded-xl shadow-md hover:shadow-lg hover:border-supply-primary transition-all duration-300 flex flex-col h-full group relative cursor-pointer overflow-hidden"
        onClick={() => setShowModal(true)}
        whileHover={{ y: -5 }}
      >
        {/* Card header with icon */}
        <div className="p-5 border-b border-supply-lightgray flex items-center justify-between">
          <div className="p-2 bg-supply-primary/10 rounded-full">
            {getProjectIcon()}
          </div>
          <div className="flex gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-supply-gray hover:text-supply-primary transition-colors"
                onClick={handleLinkClick}
                aria-label="GitHub repository"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-supply-gray hover:text-supply-primary transition-colors"
                onClick={handleLinkClick}
                aria-label="Live demo"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
        
        {/* Card content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-xl font-semibold text-supply-dark mb-3 group-hover:text-supply-primary transition-colors">{project.title}</h3>
          <p className="text-supply-gray text-sm mb-4 flex-grow">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack && project.techStack.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-supply-light text-supply-dark rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.techStack && project.techStack.length > 3 && (
              <span className="px-2 py-0.5 bg-supply-light text-supply-dark rounded-md text-xs font-medium">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        {/* View details button */}
        <div className="p-4 bg-supply-light border-t border-supply-lightgray">
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