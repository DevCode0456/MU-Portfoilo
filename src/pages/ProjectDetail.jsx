// src/pages/ProjectDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectImageGallery from '../components/ProjectImageGallery';
import {
  MdArrowBack,
  MdOpenInNew,
  MdCode,
  MdStar,
  MdCheck,
  MdLaunch
} from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center  justify-center ">
        <div className="text-center  ">
          <h2 className="text-2xl font-bold text-white ">Project Not Found</h2>
          <button
            onClick={() => navigate('/projects')}
            className="text-violet-400 hover:text-violet-300 flex items-center gap-2 mx-auto "
          >
            <MdArrowBack /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ background: project.gradient }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdArrowBack className="w-5 h-5" />
            <span>Back to Projects</span>
          </motion.button>

          {/* Project Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left: Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span 
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${project.color}20`,
                    color: project.color 
                  }}
                >
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-black text-amber-400 flex items-center gap-1">
                    <MdStar className="w-4 h-4" />
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-300 mb-6">
                {project.longDescription}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {project.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <stat.icon className="w-6 h-6 text-violet-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <MdLaunch className="w-5 h-5" />
                    View Live Demo
                  </a>
                )}
                
              </div>
            </motion.div>

            {/* Right: Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MdCode className="w-6 h-6 text-violet-400" />
                Technologies Used
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <tech.icon 
                      className="w-8 h-8" 
                      style={{ color: tech.color }}
                    />
                    <span className="text-white font-medium text-sm">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Project Screenshots
          </h2>
          <ProjectImageGallery 
            images={project.images} 
            projectTitle={project.title}
          />
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-violet-500/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-2 bg-violet-500/20 rounded-lg">
                  <feature.icon className="w-5 h-5 text-violet-400" />
                </div>
                <span className="text-slate-300">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="bg-gradient-to-br from-violet-600 to-purple-600/20 border border-violet-500/30 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in working together?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
}
