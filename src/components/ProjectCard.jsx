import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col h-full border border-gray-100">
      <h3 className="font-bold text-lg mb-2 text-supply-dark">{project.title}</h3>
      <p className="text-gray-700 text-sm mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack && project.techStack.slice(0, 5).map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full text-xs font-semibold bg-supply-primary/10 text-supply-primary border border-supply-primary/20 shadow-sm"
          >
            {tech}
          </span>
        ))}
        {project.techStack && project.techStack.length > 5 && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500 border border-gray-200 shadow-sm">
            +{project.techStack.length - 5} more
          </span>
        )}
      </div>
      <div className="flex gap-3 justify-end mt-auto">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200 hover:bg-supply-primary hover:text-white hover:border-supply-primary transition-colors"
            title="GitHub"
          >
            <FaGithub className="w-4 h-4" /> GitHub
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-supply-primary/10 text-supply-primary text-xs font-medium border border-supply-primary/20 hover:bg-supply-primary hover:text-white hover:border-supply-primary transition-colors"
            title="Live Demo"
          >
            <FaExternalLinkAlt className="w-4 h-4" /> Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 