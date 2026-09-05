import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';
import ProjectThumbnail from './ProjectThumbnail';
import { useReducedMotion } from '../utils/motion';

const FeaturedProject = ({ project }) => {
  const reducedMotion = useReducedMotion();
  if (!project) return null;

  return (
    <motion.div
      {...(reducedMotion
        ? {}
        : {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.55 }
          })}
      className="mb-12 sm:mb-16"
    >
      <div className="flex items-center gap-2 mb-4">
        <FaStar className="w-4 h-4 text-amber-500" aria-hidden="true" />
        <span className="text-sm font-semibold text-supply-primary uppercase tracking-wide">
          Featured
        </span>
      </div>

      <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <ProjectThumbnail
          title={project.title}
          category={project.category}
          image={project.image}
          className="h-56 lg:h-auto min-h-[240px] lg:min-h-[320px]"
        />
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          {project.category && (
            <span className="inline-block w-fit px-2.5 py-1 mb-3 rounded-full text-xs font-semibold bg-blue-50 text-supply-primary">
              {project.category}
            </span>
          )}
          <h3 className="text-2xl sm:text-3xl font-bold text-supply-dark mb-3 group-hover:text-supply-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-supply-gray text-sm sm:text-base leading-relaxed mb-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack?.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-50 text-slate-600 border border-slate-100"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold hover:shadow-md transition-all focus-ring"
              >
                <FaGithub className="w-4 h-4" /> View Code
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-supply-primary text-sm font-semibold border border-slate-200 hover:border-supply-primary/40 transition-colors focus-ring"
              >
                <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
