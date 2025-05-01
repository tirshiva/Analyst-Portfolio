import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/50 overflow-hidden hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      {project.image && (
        <div className="relative w-full pb-[56.25%] overflow-hidden"> {/* 16:9 aspect ratio */}
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
          )}
          
          {/* Image with blur-up loading */}
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Overlay with gradient and content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 text-sm line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tech stack tags on hover */}
          <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white rounded-full text-xs font-medium backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 transition-colors duration-300">
          {project.description}
        </p>

        {/* Links with enhanced hover effects */}
        <div className="pt-4 flex items-center space-x-4 border-t border-gray-100 dark:border-gray-700">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group/link"
            >
              <FaGithub className="mr-2 group-hover/link:animate-bounce" />
              <span className="relative">
                GitHub
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover/link:w-full transition-all duration-300" />
              </span>
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group/link"
            >
              <FaExternalLinkAlt className="mr-2 group-hover/link:animate-bounce" />
              <span className="relative">
                Live Demo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover/link:w-full transition-all duration-300" />
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 