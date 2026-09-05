import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ProjectThumbnail from './ProjectThumbnail';
import { useReducedMotion } from '../utils/motion';

const ProjectCard = ({ project }) => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-md hover:border-blue-100 transition-all"
    >
      <ProjectThumbnail
        title={project.title}
        category={project.category}
        image={project.image}
        className="h-44 sm:h-48"
      />

      <div className="p-5 flex flex-col flex-grow">
        {project.category && (
          <span className="text-xs font-semibold text-supply-primary mb-2">{project.category}</span>
        )}
        <h3 className="font-bold text-lg mb-2 text-supply-dark group-hover:text-supply-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-supply-gray text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack?.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-100"
            >
              {tech}
            </span>
          ))}
          {project.techStack?.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-xs text-supply-gray">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex gap-2 mt-auto">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-100 hover:bg-supply-primary hover:text-white hover:border-supply-primary transition-colors focus-ring"
            >
              <FaGithub className="w-3.5 h-3.5" /> Code
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-blue-50 text-supply-primary text-xs font-semibold border border-blue-100 hover:bg-supply-primary hover:text-white transition-colors focus-ring"
            >
              <FaExternalLinkAlt className="w-3.5 h-3.5" /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
