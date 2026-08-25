import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { projects, getProjectCategories } from '../data/projects';
import profile from '../data/profile';
import ProjectCard from './ProjectCard';
import FeaturedProject from './FeaturedProject';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useReducedMotion } from '../utils/motion';

const Projects = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const reducedMotion = useReducedMotion();

  const categories = useMemo(() => ['All', ...getProjectCategories()], []);

  const featuredProject = useMemo(
    () => projects.find((p) => p.id === profile.featuredProjectId),
    []
  );

  const filteredProjects = useMemo(() => {
    const keyword = search.toLowerCase().trim();
    return projects
      .filter((p) => p.id !== profile.featuredProjectId)
      .filter((project) => {
        const matchesCategory =
          activeCategory === 'All' || project.category === activeCategory;
        if (!keyword) return matchesCategory;
        return (
          matchesCategory &&
          (project.title.toLowerCase().includes(keyword) ||
            project.description.toLowerCase().includes(keyword) ||
            project.category?.toLowerCase().includes(keyword) ||
            project.techStack?.some((tech) => tech.toLowerCase().includes(keyword)))
        );
      })
      .sort((a, b) => b.id - a.id);
  }, [search, activeCategory]);

  const applySuggestion = (term) => {
    setSearch(term);
    setActiveCategory('All');
  };

  return (
    <div className="text-supply-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-slate-900">
            Featured <span className="text-supply-primary">Projects</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
            {profile.sections.projects.subtitle}
          </p>
        </motion.div>

        <FeaturedProject project={featuredProject} />

        <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all focus-ring ${
                activeCategory === cat
                  ? 'bg-supply-primary text-white border-supply-primary shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-supply-primary/40'
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mb-4">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <div className="relative w-full max-w-md mx-auto">
            <FaSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-supply-gray w-4 h-4 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="project-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by keyword or tech..."
              className="w-full pl-10 pr-10 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-supply-primary/30 text-sm"
              aria-label="Search projects by keyword or technology"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-supply-gray hover:text-supply-primary focus-ring rounded"
                aria-label="Clear search"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            )}
          </div>
          <p className="text-center text-sm text-supply-gray mt-3">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
          </p>
        </div>

        {!search && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="text-xs text-supply-gray self-center mr-1">Try:</span>
            {profile.searchSuggestions.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => applySuggestion(term)}
                className="px-3 py-1 rounded-full text-xs font-medium bg-supply-background-alt text-supply-primary border border-supply-border hover:border-supply-primary/30 transition-colors focus-ring"
              >
                {term}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 px-4 rounded-2xl bg-supply-background-alt border border-supply-border">
              <p className="text-supply-dark font-medium mb-2">No projects match your filters</p>
              <p className="text-supply-gray text-sm mb-4">
                Try a different category or search term.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setActiveCategory('All');
                }}
                className="px-4 py-2 rounded-lg bg-supply-primary text-white text-sm font-medium hover:bg-supply-hover transition-colors focus-ring"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-supply-gray mb-6">{profile.projects.callToAction}</p>
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill px-7 py-3 text-sm focus-ring"
          >
            {profile.projects.githubText}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
