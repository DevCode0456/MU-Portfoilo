// src/pages/Projects.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect, useMemo } from 'react';
import { splineScenes } from '../data/portfolioData';
import { projects } from '../data/projects';
import {
  FiSearch,
  FiFilter,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiGrid,
  FiList,
  FiX,
  FiStar,
} from 'react-icons/fi';

const Spline = lazy(() => import('@splinetool/react-spline'));

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const allTechnologies = ['All', ...new Set(projects.flatMap((p) => p.technologies.map((t) => t.name)))];

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (searchQuery) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((project) => project.category === selectedCategory);
    }

    if (selectedTech !== 'All') {
      filtered = filtered.filter((project) =>
        project.technologies.some((t) => t.name === selectedTech)
      );
    }

    if (sortBy === 'featured') {
      filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (sortBy === 'newest') {
      filtered = [...filtered].sort((a, b) => b.id - a.id);
    } else if (sortBy === 'oldest') {
      filtered = [...filtered].sort((a, b) => a.id - b.id);
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedTech, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTech('All');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedTech !== 'All';

  return (
    <div className="projects-page bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="projects-hero min-h-[50vh] sm:min-h-[60vh] relative flex items-center overflow-hidden pt-20">
        {!isMobile && (
          <div className="spline-bg absolute inset-0 pointer-events-none opacity-10">
            <Suspense fallback={null}>
              <Spline scene={splineScenes.projects} />
            </Suspense>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-10 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white border rounded-full text-violet-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-glow"
            >
              Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 uppercase"
            >
              My <span className="text-yellow-500">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base lg:text-xl text-slate-400 mb-6 sm:mb-8"
            >
              A showcase of my work - from interactive dashboards to full-stack applications
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8"
            >
              {[
                { value: `${projects.length}+`, label: 'Total Projects' },
                { value: categories.length - 1, label: 'Categories' },
                { value: `${allTechnologies.length - 1}+`, label: 'Technologies' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-500">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== 2. FILTERS & SEARCH ==================== */}
      <section className="filters-section py-12 sm:py-8 lg:py-12 bg-slate-900 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Search + View Toggle Row */}
            <div className="flex gap-3">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <FiSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-10 py-2.5 sm:py-3 bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl text-sm sm:text-base text-slate-100 placeholder-slate-500 focus:border-violet-500 focus:outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl p-1 shrink-0">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md sm:rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-violet-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FiGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md sm:rounded-lg transition-all ${
                    viewMode === 'list'
                      ? 'bg-violet-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FiList className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Category Filter - Horizontal scroll on mobile */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none">
              {categories.slice(0, 5).map((category) => (
                <motion.button
                  key={category}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl text-xs sm:text-sm text-slate-300 focus:border-violet-500 focus:outline-none"
                >
                  <option value="All">All Technologies</option>
                  {allTechnologies.slice(1).map((tech) => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>

                {hasActiveFilters && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={clearFilters}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium hover:bg-red-500/20 transition-all flex items-center gap-1.5"
                  >
                    <FiX className="w-3 h-3 sm:w-4 sm:h-4" />
                    Clear
                  </motion.button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-slate-400 hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl text-xs sm:text-sm text-slate-300 focus:border-violet-500 focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-xs sm:text-sm text-slate-400">
              Showing{' '}
              <span className="text-violet-400 font-semibold">{filteredProjects.length}</span> of{' '}
              {projects.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. PROJECTS GRID/LIST ==================== */}
      <section className="projects-content py-12 sm:py-16 lg:py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12 sm:py-20"
              >
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <FiFilter className="text-2xl sm:text-4xl text-slate-600" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold mb-2">No projects found</h3>
                <p className="text-slate-400 text-sm sm:text-base mb-4 sm:mb-6">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={clearFilters}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-violet-600 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-violet-700 transition-all"
                >
                  Clear All Filters
                </button>
              </motion.div>
            ) : viewMode === 'grid' ? (
              <motion.div
                key="grid-view"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
              >
                {filteredProjects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="list-view"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                className="space-y-4 sm:space-y-6"
              >
                {filteredProjects.map((project, i) => (
                  <ProjectListItem key={project.id} project={project} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

// ========================================
// PROJECT CARD COMPONENT (Grid View)
// ========================================
function ProjectCard({ project }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -12 }}
      className="group bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all"
    >
      <Link to={`/projects/${project.id}`}>
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

          {project.featured && (
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
              <span className="flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 bg-amber-500/90 text-white text-[10px] sm:text-xs font-bold rounded-full">
                <FiStar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Featured
              </span>
            </div>
          )}

          <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
            <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-violet-500/90 text-white text-[10px] sm:text-xs font-semibold rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5 lg:p-6">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 group-hover:text-violet-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 sm:px-3 sm:py-1 bg-slate-800 text-slate-300 text-[10px] sm:text-xs rounded-md sm:rounded-lg border border-slate-700"
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-slate-800 text-slate-400 text-[10px] sm:text-xs rounded-md sm:rounded-lg border border-slate-700">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-violet-400 text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all">
            View Details
            <FiArrowRight className="group-hover:translate-x-1 transition-transform w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ========================================
// PROJECT LIST ITEM COMPONENT (List View)
// ========================================
function ProjectListItem({ project }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ x: 8 }}
      className="group bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all"
    >
      <Link to={`/projects/${project.id}`}>
        <div className="flex flex-col md:flex-row">
          <div className="relative overflow-hidden md:w-64 lg:w-80 aspect-video md:aspect-auto md:min-h-[180px]">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent opacity-60" />

            {project.featured && (
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                <span className="flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 bg-amber-500/90 text-white text-[10px] sm:text-xs font-bold rounded-full">
                  <FiStar className="w-3 h-3" />
                  Featured
                </span>
              </div>
            )}
          </div>

          <div className="flex-1 p-4 sm:p-6 lg:p-8">
            <div className="mb-2 sm:mb-4">
              <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 bg-violet-500/20 text-violet-400 text-[10px] sm:text-xs font-semibold rounded-full mb-2 sm:mb-3">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-violet-400 transition-colors">
                {project.title}
              </h3>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm mb-3 sm:mb-6 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-6">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 sm:px-3 sm:py-1 bg-slate-800 text-slate-300 text-[10px] sm:text-xs rounded-md sm:rounded-lg border border-slate-700"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5 sm:gap-2 text-violet-400 text-xs sm:text-sm font-semibold">
                View Project
                <FiArrowRight className="group-hover:translate-x-1 transition-transform w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}

              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}