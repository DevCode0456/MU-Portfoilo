// src/pages/About.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import projects from "../data/projects";
import {
  personalInfo,
  developmentJourney,
  education,
  services,
  skills,
} from "../data/portfolioData";
import {
  FiArrowRight,
  FiMapPin,
  FiCalendar,
  FiAward,
  FiBook,
  FiCode,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiMail,
  FiDownload,
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";
import { FaGamepad } from "react-icons/fa";

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

// ========================================
// DECORATIVE BACKGROUND COMPONENT
// ========================================
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial gradient blobs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, #eab308 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-violet-400"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${10 + i * 7.5}%`,
            top: `${15 + (i % 4) * 20}%`,
            opacity: 0.3 + (i % 3) * 0.15,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ========================================
// COMPONENT
// ========================================
export default function About() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="about-page bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="about-hero min-h-screen relative flex items-center overflow-hidden pt-20">
        {/* Decorative Background */}
        <HeroBackground />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-10 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white border rounded-full text-violet-400 text-xs sm:text-sm font-medium mb-4 sm:mb-8 animate-glow"
            >
              Get to Know Me
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-8 uppercase"
            >
              About <span className="text-yellow-500">Me</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 sm:space-y-6"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed">
                {personalInfo.longBio}
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 lg:mt-16"
            >
              {[
                { icon: <FiCode />, value: "20+", label: "Projects" },
                { icon: <FiTrendingUp />, value: "2+", label: "Years Exp" },
                { icon: <FiUsers />, value: "200K+", label: "Users" },
                { icon: <FiAward />, value: "98%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 text-center hover:border-violet-500/50 transition-all"
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl text-yellow-500 mb-1 sm:mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-green-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== 2. WHAT I DO ==================== */}
      <section className="services py-12 sm:py-16 lg:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white border rounded-full text-violet-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4 animate-glow">
              Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase">
              What I <span className="text-yellow-500">Do</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              I specialize in creating modern, performant web applications with
              focus on user experience and clean code.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {services.map((service, index) => {
              const ServiceIcon = service.icon;

              return (
                <motion.article
                  key={service.id}
                  variants={item}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-slate-950/50 backdrop-blur border border-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all"
                >
                  <div
                    className="mb-4 sm:mb-6"
                    style={{ color: service.color }}
                  >
                    <ServiceIcon size={isMobile ? 36 : 48} />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {service.details.slice(0, 4).map((detail, i) => {
                      const detailText =
                        typeof detail === "string" ? detail : detail.text;
                      const DetailIcon =
                        typeof detail === "object" && detail.icon
                          ? detail.icon
                          : FiCheckCircle;

                      return (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-400"
                        >
                          <DetailIcon
                            className="text-violet-400 flex-shrink-0 mt-0.5"
                            size={14}
                          />
                          <span>{detailText}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.technologies.map((tech, i) => {
                      const techName =
                        typeof tech === "string" ? tech : tech.name;
                      return (
                        <span
                          key={i}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 bg-slate-800 text-slate-300 text-[10px] sm:text-xs rounded-md sm:rounded-lg border border-slate-700"
                        >
                          {techName}
                        </span>
                      );
                    })}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================== 3. MY JOURNEY TIMELINE ==================== */}
      <section className="journey-timeline py-12 sm:py-16 md:py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white border rounded-full text-violet-400 text-xs sm:text-sm font-medium mb-4 animate-glow">
              My Story
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase">
              Development <span className="text-yellow-500">Journey</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              From beginner to professional developer - here's my path of
              continuous learning and growth.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 via-purple-500 to-violet-500 transform -translate-x-1/2 hidden lg:block" />
              <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-violet-500 via-purple-500 to-violet-500 lg:hidden" />

              <div className="space-y-10 sm:space-y-16">
                {developmentJourney.map((phase, index) => {
                  const PhaseIcon = phase.icon;

                  return (
                    <motion.div
                      key={phase.year + index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6 }}
                      className={`relative grid lg:grid-cols-2 gap-4 sm:gap-8 items-center ${
                        index % 2 === 0 ? "" : "lg:direction-rtl"
                      }`}
                    >
                      <div
                        className="absolute left-5 sm:left-8 lg:left-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-slate-950 border-[3px] sm:border-4 rounded-full flex items-center justify-center transform -translate-x-1/2 lg:-translate-x-1/2 z-10"
                        style={{ borderColor: phase.color }}
                      >
                        <div style={{ color: phase.color }}>
                          <PhaseIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                        </div>
                      </div>

                      <div
                        className={`ml-12 sm:ml-20 lg:ml-0 ${
                          index % 2 === 0
                            ? "lg:text-right lg:pr-12"
                            : "lg:pl-12 lg:col-start-2"
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-violet-500/50 transition-all"
                          style={{
                            boxShadow: `0 10px 40px ${phase.color}15`,
                          }}
                        >
                          <div
                            className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4"
                            style={{
                              backgroundColor: `${phase.color}20`,
                              color: phase.color,
                              border: `2px solid ${phase.color}40`,
                            }}
                          >
                            {phase.year}
                          </div>

                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                            {phase.title}
                          </h3>
                          <p className="text-violet-400 text-sm sm:text-base font-semibold mb-2 sm:mb-4 italic">
                            {phase.subtitle}
                          </p>
                          <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                            {phase.description}
                          </p>

                          <div className="mb-4 sm:mb-6">
                            <h4 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2 sm:mb-3 flex items-center gap-2">
                              <FiStar className="text-violet-400" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {phase.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-400"
                                >
                                  <FiCheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2 sm:mb-3">
                              Skills Gained
                            </h4>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {phase.skills.map((skill, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.05 }}
                                  whileHover={{ scale: 1.1 }}
                                  className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium rounded-md sm:rounded-lg"
                                  style={{
                                    backgroundColor: `${phase.color}20`,
                                    color: phase.color,
                                    border: `1px solid ${phase.color}40`,
                                  }}
                                >
                                  {skill}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {index % 2 === 0 ? (
                        <div className="hidden lg:block" />
                      ) : null}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. EDUCATION SECTION ==================== */}
      <section className="education py-12 sm:py-16 lg:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white border rounded-full text-violet-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4 animate-glow">
              Education
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase">
              Academic <span className="text-yellow-500">Background</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              Combining formal education with continuous self-learning to stay
              at the forefront of technology.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto"
          >
            {education.map((edu, index) => {
              const EduIcon = edu.icon;

              return (
                <motion.article
                  key={edu.id}
                  variants={item}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px rgba(139, 92, 246, 0.15)",
                  }}
                  className="bg-slate-950/50 backdrop-blur border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-violet-500/50 transition-all"
                >
                  {/* Header */}
                  <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 p-4 sm:p-6 lg:p-8 border-b border-slate-800">
                    <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-slate-950 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden border border-slate-800 flex-shrink-0"
                        style={{ color: edu.color }}
                      >
                        <EduIcon size={isMobile ? 20 : 32} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                          <span
                            className={`px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold rounded-full ${
                              edu.status === "In Progress"
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                            }`}
                          >
                            {edu.status}
                          </span>
                          {edu.gpa && (
                            <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-slate-800 text-slate-300 text-[10px] sm:text-xs rounded-full border border-slate-700">
                              GPA: {edu.gpa}
                            </span>
                          )}
                        </div>
                        <h3 className="text-base sm:text-lg lg:text-2xl font-bold mb-1 sm:mb-2 leading-tight">
                          {edu.degreeShort || edu.degree}
                        </h3>
                        <p className="text-violet-400 text-sm sm:text-base font-semibold mb-1 sm:mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4" />
                            {edu.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {edu.description}
                    </p>

                    {edu.coursework && (
                      <div>
                        <h4 className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2 sm:mb-3">
                          <FiBook className="text-violet-400" />
                          Coursework
                        </h4>
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          {edu.coursework.map((course, i) => {
                            const courseText =
                              typeof course === "string" ? course : course.text;
                            return (
                              <span
                                key={i}
                                className="px-2 py-1.5 sm:px-3 sm:py-2 bg-slate-800 text-slate-300 text-[10px] sm:text-xs rounded-md sm:rounded-lg border border-slate-700"
                              >
                                {courseText}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {edu.projects && (
                      <div>
                        <h4 className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2 sm:mb-3">
                          <FiCode className="text-violet-400" />
                          Academic Projects
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {edu.projects.map((project, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-400"
                            >
                              <span className="text-violet-400 mt-0.5">•</span>
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.achievements && (
                      <div>
                        <h4 className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2 sm:mb-3">
                          <FiAward className="text-violet-400" />
                          Achievements
                        </h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {edu.achievements.map((achievement, i) => {
                            const achievementText =
                              typeof achievement === "string"
                                ? achievement
                                : achievement.text;
                            return (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-2 text-xs sm:text-sm text-slate-400"
                              >
                                <FiCheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span>{achievementText}</span>
                              </motion.li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {edu.platforms && (
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2 sm:mb-3">
                          Learning Platforms
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {edu.platforms.map((platform, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 sm:px-3 sm:py-1 bg-slate-800 text-slate-300 text-[10px] sm:text-xs rounded-md sm:rounded-lg border border-slate-700"
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.skills && (
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2 sm:mb-3">
                          Skills Developed
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {edu.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 sm:px-3 sm:py-1 bg-violet-500/10 text-violet-400 text-[10px] sm:text-xs rounded-md sm:rounded-lg border border-violet-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================== 5. SKILLS OVERVIEW ==================== */}
      <section className="skills-overview py-12 sm:py-16 lg:py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white border rounded-full text-violet-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4 animate-glow">
              Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase">
              Core <span className="text-yellow-500">Competencies</span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
            {Object.entries(
              skills.reduce((acc, skill) => {
                if (!acc[skill.category]) acc[skill.category] = [];
                acc[skill.category].push(skill);
                return acc;
              }, {}),
            ).map(([category, categorySkills], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold capitalize mb-4 sm:mb-6 text-violet-400">
                  {category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {categorySkills.map((skill, index) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-violet-500/50 transition-all"
                      >
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <span style={{ color: skill.color }}>
                              <SkillIcon size={isMobile ? 18 : 24} />
                            </span>
                            <span className="font-semibold text-sm sm:text-base">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-violet-400 font-bold text-xs sm:text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 sm:h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{
                              background:
                                skill.gradient ||
                                `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. PROJECT GALLERY PREVIEW ==================== */}
      <section className="project-gallery py-12 sm:py-16 lg:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white border rounded-full text-violet-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4 animate-glow">
              Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase">
              Project <span className="text-yellow-500">Gallery</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              A showcase of my work - from interactive dashboards to full-stack
              applications.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          >
            {projects.slice(0, 8).map((project, index) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="group relative aspect-[4/3] sm:aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
              >
                <Link to={`/projects/${project.id}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 text-center">
                    <h3 className="text-xs sm:text-sm lg:text-lg font-bold mb-1 sm:mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs lg:text-sm text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2 hidden sm:block">
                      {project.shortDesc}
                    </p>
                    <div className="mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-1 sm:gap-2 text-violet-400 text-[10px] sm:text-xs lg:text-sm font-semibold">
                        View Project
                        <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-12"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-slate-950 border border-slate-800 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:border-violet-500/50 transition-all animate-glow"
              >
                View All Projects
                <FiArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ==================== 7. PERSONAL INTERESTS ==================== */}
      <section className="interests py-12 sm:py-16 lg:py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white border rounded-full text-violet-400 text-xs sm:text-sm font-medium mb-3 sm:mb-4 animate-glow">
                Beyond Code
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase">
                Personal <span className="text-yellow-500">Interests</span>
              </h2>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
            >
              {[
                {
                  icon: <FiCode className="text-sky-400" />,
                  title: "Open Source",
                  desc: "Contributing to community projects",
                },
                {
                  icon: <FiBook className="text-amber-400" />,
                  title: "Continuous Learning",
                  desc: "Always exploring new technologies",
                },
                {
                  icon: <FaGamepad className="text-red-500" />,
                  title: "Gaming",
                  desc: "Passionate about gaming and interactive experiences",
                },
                {
                  icon: <FiUsers className="text-green-500" />,
                  title: "Mentoring",
                  desc: "Helping others grow in tech",
                },
                {
                  icon: <FiTarget className="text-pink-400" />,
                  title: "Problem Solving",
                  desc: "Love tackling complex challenges",
                },
                {
                  icon: <FiTrendingUp className="text-purple-500" />,
                  title: "Tech Trends",
                  desc: "Staying current with industry",
                },
              ].map((interest, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center hover:border-violet-500/50 transition-all"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4 flex justify-center">
                    {interest.icon}
                  </div>
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-slate-400">
                    {interest.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== 8. CTA SECTION ==================== */}
      <section className="cta py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-violet-900/20 via-slate-900 to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-slate-950/50 backdrop-blur border border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 uppercase"
              >
                Interested in{" "}
                <span className="text-yellow-500">Working Together?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-sm sm:text-base lg:text-lg text-slate-400 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto"
              >
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl shadow-lg text-sm sm:text-base font-semibold"
                  >
                    <FiMail />
                    Let's Talk
                  </motion.button>
                </Link>

                <a href={personalInfo.resume} download>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-slate-800 border border-slate-700 rounded-xl text-sm sm:text-base font-semibold hover:border-violet-500/50 transition-all"
                  >
                    <FiDownload />
                    Download Resume
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}