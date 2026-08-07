import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ duration: 0.25 }}
    className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-indigo-50 overflow-hidden flex flex-col h-full hover:shadow-lg hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-300"
  >
    {project.image && (
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        {project.category && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/90 text-indigo-700 backdrop-blur-sm">
            {project.category}
          </span>
        )}
      </div>
    )}

    <div className="p-5 flex flex-col flex-grow">
      <h3 className="font-bold text-lg mb-2 text-supply-dark group-hover:text-supply-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-supply-gray text-sm mb-4 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack?.slice(0, 5).map((tech, i) => (
          <span
            key={i}
            className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100"
          >
            {tech}
          </span>
        ))}
        {project.techStack?.length > 5 && (
          <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-500 border border-slate-100">
            +{project.techStack.length - 5}
          </span>
        )}
      </div>

      <div className="flex gap-2 mt-auto">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-100 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors"
          >
            <FaGithub className="w-3.5 h-3.5" /> Code
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors"
          >
            <FaExternalLinkAlt className="w-3.5 h-3.5" /> Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
