import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
  <div className="bg-white border border-apple-lightgray rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.025] hover:border-apple-blue transition-all duration-200 flex flex-col h-full group">
    {project.image && (
      <div className="aspect-w-16 aspect-h-9 w-full rounded-t-2xl overflow-hidden bg-apple-lightgray">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    )}
    <div className="flex flex-col flex-1 p-6">
      <h3 className="text-xl font-semibold text-apple-black mb-2">{project.title}</h3>
      <p className="text-apple-gray text-sm mb-4 line-clamp-2">{project.description}</p>
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
      <div className="mt-auto flex gap-3">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-apple-blue/10 text-apple-blue hover:bg-apple-blue/20 transition"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-apple-blue/10 text-apple-blue hover:bg-apple-blue/20 transition"
            aria-label="Live Demo"
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard; 