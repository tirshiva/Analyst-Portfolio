import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // Prevent modal from opening when clicking a link
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Modal with all details */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-lg p-6 max-w-2xl w-full">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-apple-lightgray text-apple-darkgray hover:bg-apple-blue hover:text-white transition"
              aria-label="Close"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full h-auto object-contain mb-6"
                style={{ maxHeight: '40vh' }}
              />
            )}
            <h3 className="text-2xl font-bold text-apple-black mb-2">{project.title}</h3>
            <p className="text-apple-gray text-base mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack && project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-0.5 bg-apple-lightgray text-apple-darkgray rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-base">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-apple-blue hover:underline font-medium"
                  onClick={handleLinkClick}
                >
                  <FaGithub className="w-5 h-5" />
                  GitHub
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-apple-blue hover:underline font-medium"
                  onClick={handleLinkClick}
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Project Card */}
      <div
        className="bg-white border border-apple-lightgray rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.025] hover:border-apple-blue transition-all duration-200 flex flex-col h-full group relative cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-xl font-semibold text-apple-black mb-2">{project.title}</h3>
          <p className="text-apple-gray text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack && project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-0.5 bg-apple-lightgray text-apple-darkgray rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm mb-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-apple-blue hover:underline font-medium"
                onClick={handleLinkClick}
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-apple-blue hover:underline font-medium"
                onClick={handleLinkClick}
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard; 