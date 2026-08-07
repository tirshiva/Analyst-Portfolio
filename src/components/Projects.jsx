import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import profile from '../data/profile';
import ProjectCard from './ProjectCard';
import { FaBrain, FaCloud, FaCogs, FaSearch } from 'react-icons/fa';

const categoryIcons = {
  brain: FaBrain,
  cogs: FaCogs,
  cloud: FaCloud
};

const Projects = () => {
  const [search, setSearch] = useState('');

  const filteredProjects = projects.filter((project) => {
    const keyword = search.toLowerCase();
    return (
      project.title.toLowerCase().includes(keyword) ||
      project.description.toLowerCase().includes(keyword) ||
      (project.category && project.category.toLowerCase().includes(keyword)) ||
      (project.techStack && project.techStack.some((tech) => tech.toLowerCase().includes(keyword)))
    );
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => b.id - a.id);

  return (
    <section id="projects" className="text-supply-dark py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="px-4 py-1.5 bg-supply-primary/10 text-supply-primary rounded-full text-sm font-medium">
            {profile.sections.projects.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
            <span className="text-supply-dark">Featured </span>
            <span className="text-supply-primary">Projects</span>
          </h2>
          <p className="text-supply-gray text-base sm:text-lg max-w-2xl mx-auto mb-8 px-4">
            {profile.sections.projects.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {profile.projectCategories.map((cat, index) => {
              const Icon = categoryIcons[cat.icon] || FaBrain;
              return (
                <motion.div
                  key={cat.label}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="px-4 py-2.5 bg-white/80 backdrop-blur-sm shadow-sm rounded-xl border border-indigo-50 flex items-center text-supply-primary text-sm font-medium"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Icon className="mr-2 w-4 h-4" />
                  {cat.label}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="flex justify-center mb-10">
          <label htmlFor="project-search" className="sr-only">Search projects</label>
          <div className="relative w-full max-w-md">
            <input
              id="project-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by keyword or tech (e.g. Airflow, MLOps)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-indigo-100 bg-white/80 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
              aria-label="Search projects by keyword or technology"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-supply-gray w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sortedProjects.length > 0 ? (
            sortedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-supply-gray py-10 text-lg">
              No projects found.
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-supply-gray text-base sm:text-lg mb-6">
            {profile.projects.callToAction}
          </p>
          <motion.a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-xl transition-all duration-300 text-base font-semibold"
          >
            {profile.projects.githubText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
