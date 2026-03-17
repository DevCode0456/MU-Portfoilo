// src/pages/ProjectDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectImageGallery from '../components/ProjectImageGallery';
import {
  MdArrowBack,
  MdCode,
  MdStar,
  MdLaunch,
} from 'react-icons/md';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Project Not Found</h2>
          <button
            onClick={() => navigate('/projects')}
            className="text-violet-400 hover:text-violet-300 flex items-center gap-2 mx-auto transition-colors"
          >
            <MdArrowBack /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">

      {/* ── HERO ─────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        {/* bg glow */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: project.gradient }}
        />
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(rgba(139,92,246,0.6) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-10">

          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm sm:text-base"
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdArrowBack className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Back to Projects</span>
          </motion.button>

          {/* Header grid — stacks on mobile */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* ── LEFT: Project Info ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span
                  className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
                  style={{
                    backgroundColor: `${project.color}20`,
                    color: project.color,
                  }}
                >
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-amber-500/10 text-amber-400 flex items-center gap-1">
                    <MdStar className="w-3.5 h-3.5" />
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Stats — 3-col on all sizes, compact on mobile */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                {project.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="bg-slate-900/70 border border-slate-800 rounded-xl p-3 sm:p-4 text-center"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400 mx-auto mb-1 sm:mb-2" />
                    <div className="text-lg sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white rounded-xl font-medium transition-colors text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
                >
                  <MdLaunch className="w-4 h-4 sm:w-5 sm:h-5" />
                  View Live Demo
                </a>
              )}
            </motion.div>

            {/* ── RIGHT: Technologies ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 sm:p-6"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MdCode className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
                Technologies Used
              </h3>
              {/* 2-col always, slightly smaller cards on mobile */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {project.technologies.map((tech, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-slate-800/60 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <tech.icon
                      className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                      style={{ color: tech.color }}
                    />
                    <span className="text-white font-medium text-xs sm:text-sm leading-tight">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── SCREENSHOTS ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SectionHeading>Project Screenshots</SectionHeading>
          <ProjectImageGallery
            images={project.images}
            projectTitle={project.title}
          />
        </motion.div>
      </section>

      {/* ── KEY FEATURES ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionHeading>Key Features</SectionHeading>
          {/* 1-col → 2-col → 3-col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 p-3.5 sm:p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-violet-500/50 transition-colors"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-1.5 sm:p-2 bg-violet-500/20 rounded-lg flex-shrink-0">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
                </div>
                <span className="text-slate-300 text-sm sm:text-base">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <motion.div
          className="bg-gradient-to-br from-violet-600/30 to-purple-600/10 border border-violet-500/30 rounded-2xl p-6 sm:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Interested in working together?
          </h3>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 sm:px-8 py-3 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white rounded-xl font-medium transition-colors text-sm sm:text-base w-full sm:w-auto"
          >
            Get In Touch
          </button>
        </motion.div>
      </section>

    </div>
  );
}

/* ── tiny helper ── */
function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
      {children}
    </h2>
  );
}