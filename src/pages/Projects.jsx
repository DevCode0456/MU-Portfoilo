// src/pages/Projects.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import {  splineScenes } from '../data/portfolioData';
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

// ========================================
// FRAMER MOTION VARIANTS
// ========================================
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ========================================
// PROJECTS PAGE COMPONENT
// ========================================
export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'newest', 'oldest'

  // Get unique categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  // FIXED: Get unique technologies - extract .name property
  const allTechnologies = ['All', ...new Set(projects.flatMap(p => p.technologies.map(t => t.name)))];

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by search query - FIXED: Use tech.name
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

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((project) => project.category === selectedCategory);
    }

    // Filter by technology - FIXED: Compare tech.name
    if (selectedTech !== 'All') {
      filtered = filtered.filter((project) =>
        project.technologies.some(t => t.name === selectedTech)
      );
    }

    // Sort projects
    if (sortBy === 'featured') {
      filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (sortBy === 'newest') {
      filtered = [...filtered].sort((a, b) => b.id - a.id);
    } else if (sortBy === 'oldest') {
      filtered = [...filtered].sort((a, b) => a.id - b.id);
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedTech, sortBy]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedTech('All');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedTech !== 'All';

  return (
    <div className="projects-page bg-slate-950 text-slate-100">
      
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="projects-hero min-h-[60vh] relative flex items-center overflow-hidden pt-20">
        {/* Spline Background */}
        <div className="spline-bg absolute inset-0 pointer-events-none opacity-10">
          <Spline scene={splineScenes.projects} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-20">
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
              className="inline-block px-4 py-2 bg-white border  rounded-full text-violet-400 text-sm font-medium mb-6 animate-glow"
            >
              Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6 uppercase"
            >
              My{" "}
              <span className="text-yellow-500">
                Projects
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-400 mb-8"
            >
              A showcase of my work - from interactive dashboards to full-stack applications
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">{projects.length}+</div>
                <div className="text-sm text-slate-400">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">{categories.length - 1}</div>
                <div className="text-sm text-slate-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">{allTechnologies.length - 1}+</div>
                <div className="text-sm text-slate-400">Technologies</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== 2. FILTERS & SEARCH ==================== */}
      <section className="filters-section py-12 bg-slate-900   border-b border-slate-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:border-violet-500 focus:outline-none transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200"
                  >
                    <FiX />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.slice(0, 5).map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-violet-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FiGrid />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-violet-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FiList />
              </button>
            </div>
          </div>

          {/* Active Filters & Sort */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex items-center gap-3">
              {/* Technology Filter Dropdown */}
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 focus:border-violet-500 focus:outline-none"
              >
                <option value="All">All Technologies</option>
                {allTechnologies.slice(1).map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={clearFilters}
                  className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl font-medium hover:bg-red-500/20 transition-all flex items-center gap-2"
                >
                  <FiX />
                  Clear Filters
                </motion.button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-300 focus:border-violet-500 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-slate-400">
            Showing <span className="text-violet-400 font-semibold">{filteredProjects.length}</span> of {projects.length} projects
          </div>
        </div>
      </section>

      {/* ==================== 3. PROJECTS GRID/LIST ==================== */}
      <section className="projects-content py-24 bg-slate-950">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              // No Results
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiFilter className="text-4xl text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                <p className="text-slate-400 mb-6">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-all"
                >
                  Clear All Filters
                </button>
              </motion.div>
            ) : viewMode === 'grid' ? (
              // Grid View
              <motion.div
                key="grid-view"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </motion.div>
            ) : (
              // List View
              <motion.div
                key="list-view"
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                className="space-y-6"
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
function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -12 }}
      className="group bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all"
    >
      <Link to={`/projects/${project.id}`}>
        {/* Image */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="flex items-center gap-1 px-3 py-1 bg-amber-500/90 text-white text-xs font-bold rounded-full">
                <FiStar className="text-sm" />
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-violet-500/90 text-white text-xs font-semibold rounded-full">
              {project.category}
            </span>
          </div>

       
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {project.shortDesc}
          </p>

          {/* Technologies - FIXED: Render tech.name */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg border border-slate-700"
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-lg border border-slate-700">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-violet-400 text-sm font-semibold group-hover:gap-3 transition-all">
            View Details
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ========================================
// PROJECT LIST ITEM COMPONENT (List View)
// ========================================
function ProjectListItem({ project, index }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ x: 8 }}
      className="group bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all"
    >
      <Link to={`/projects/${project.id}`}>
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative overflow-hidden md:w-80 aspect-video md:aspect-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent opacity-60" />
            
            {project.featured && (
              <div className="absolute top-4 left-4">
                <span className="flex items-center gap-1 px-3 py-1 bg-amber-500/90 text-white text-xs font-bold rounded-full">
                  <FiStar />
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block px-3 py-1 bg-violet-500/20 text-violet-400 text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-400 mb-6 line-clamp-2">
              {project.description}
            </p>

            {/* Technologies - FIXED: Render tech.name */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg border border-slate-700"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-violet-400 font-semibold">
                View Project
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>

              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FiGithub className="text-xl" />
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
                  <FiExternalLink className="text-xl" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
