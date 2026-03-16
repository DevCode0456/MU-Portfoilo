import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  skills,
  heroData,
  services,
  experience,
  personalInfo,
  developmentJourney,
} from "../data/portfolioData";
import {
  FiZap,
  FiMail,
  FiCode,
  FiClock,
  FiAward,
  FiUsers,
  FiMapPin,
  FiGithub,
  FiSearch,
  FiLayout,
  FiLayers,
  FiCalendar,
  FiDownload,
  FiLinkedin,
  FiArrowRight,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";
import {
  SiCss3,
  SiHtml5,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { AiFillRocket } from "react-icons/ai";

// ========================================
// FRAMER MOTION VARIANTS
// ========================================
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const animations = {
  react: {
    animate: { rotate: [0, 360] },
    transition: { duration: 5, repeat: Infinity, ease: "linear" },
  },
  javascript: {
    animate: { opacity: [1, 0.3, 1] },
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  },
  typescript: {
    animate: { y: [0, -15, 0] },
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
  html: {
    animate: { y: [0, -20, 0] },
    transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
  },
  css: {
    animate: { x: [0, -10, 10, 0] },
    transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
  },
  tailwind: {
    animate: { scale: [1, 1.15, 1] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  redux: {
    animate: { rotate: [0, 15, -15, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  next: {
    animate: { opacity: [1, 0.7, 1] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const FloatingIcon = ({ Icon, x, y, size, color, anim }) => {
  const animationConfig = animations[anim] || {
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  return (
    <motion.div
      className={`absolute ${size} flex items-center justify-center 
        bg-slate-900/80 backdrop-blur border border-slate-700/40 
        rounded-2xl shadow-lg cursor-pointer`}
      style={{ left: x, top: y }}
      whileHover={{ scale: 1.15 }}
      animate={animationConfig.animate}
      transition={animationConfig.transition}
    >
      <Icon className={color} size={size === "w-14 h-14" ? 40 : 28} />
    </motion.div>
  );
};

const techStack = [
  {
    Icon: SiReact,
    color: "text-sky-400",
    anim: "react",
    x: "-6%",
    y: "10%",
    size: "w-14 h-14",
  },
  {
    Icon: SiNextdotjs,
    color: "text-white",
    anim: "next",
    x: "8%",
    y: "42%",
    size: "w-12 h-12",
  },
  {
    Icon: SiJavascript,
    color: "text-yellow-400",
    anim: "javascript",
    x: "-12%",
    y: "70%",
    size: "w-12 h-12",
  },
  {
    Icon: SiTypescript,
    color: "text-blue-500",
    anim: "typescript",
    x: "95%",
    y: "10%",
    size: "w-12 h-12",
  },
  {
    Icon: SiHtml5,
    color: "text-orange-500",
    anim: "html",
    x: "100%",
    y: "45%",
    size: "w-12 h-12",
  },
  {
    Icon: SiCss3,
    color: "text-blue-400",
    anim: "css",
    x: "92%",
    y: "75%",
    size: "w-12 h-12",
  },
  {
    Icon: SiTailwindcss,
    color: "text-cyan-400",
    anim: "tailwind",
    x: "50%",
    y: "-8%",
    size: "w-14 h-14",
  },
  {
    Icon: SiRedux,
    color: "text-purple-500",
    anim: "redux",
    x: "50%",
    y: "95%",
    size: "w-12 h-12",
  },
];

const processSteps = [
  {
    id: 1,
    title: "Analyze Requirements",
    icon: FiSearch,
    color: "from-violet-500 to-purple-500",
    glowColor: "shadow-violet-500/30",
    description:
      "Deep dive into business goals, user needs, and technical requirements to establish a solid foundation.",
    details: [
      "Stakeholder interviews & workshops",
      "Market & competitor analysis",
      "Define success metrics & KPIs",
      "Technical feasibility assessment",
    ],
    metrics: { label: "Accuracy", value: "98%" },
  },
  {
    id: 2,
    title: "Design Architecture",
    icon: FiLayout,
    color: "from-blue-500 to-cyan-500",
    glowColor: "shadow-blue-500/30",
    description:
      "Create scalable system architecture with modern design patterns and best practices for optimal performance.",
    details: [
      "Database schema & data modeling",
      "API design & microservices planning",
      "UI/UX wireframes & prototypes",
      "Security & scalability strategy",
    ],
    metrics: { label: "Scalability", value: "10x" },
  },
  {
    id: 3,
    title: "Development",
    icon: FiCode,
    color: "from-emerald-500 to-teal-500",
    glowColor: "shadow-emerald-500/30",
    description:
      "Build robust solutions using cutting-edge technologies with continuous testing and quality assurance.",
    details: [
      "Agile development sprints",
      "Unit & integration testing",
      "Code reviews & optimization",
      "Performance monitoring",
    ],
    metrics: { label: "Code Quality", value: "A+" },
  },
  {
    id: 4,
    title: "Delivery",
    icon: AiFillRocket,
    color: "from-orange-500 to-red-500",
    glowColor: "shadow-orange-500/30",
    description:
      "Seamless deployment with CI/CD pipelines, monitoring, and continuous optimization for growth.",
    details: [
      "Automated CI/CD deployment",
      "Cloud infrastructure setup",
      "Real-time monitoring & alerts",
      "Continuous improvements & updates",
    ],
    metrics: { label: "Uptime", value: "99.9%" },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ========================================
// DECORATIVE HERO BACKGROUND
// ========================================
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial blobs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #eab308 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-violet-400"
          style={{
            width: (i % 3) + 2,
            height: (i % 3) + 2,
            left: `${8 + i * 7.5}%`,
            top: `${15 + (i % 4) * 20}%`,
            opacity: 0.25 + (i % 3) * 0.12,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.25, 0.5, 0.25] }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.35,
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
export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="home-page bg-slate-950 text-white">
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="hero min-h-screen relative flex items-center overflow-hidden">
        <HeroBackground />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-950/80 pointer-events-none" />

        <div className="hero-content container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Title + Greeting */}
            <div>
              <motion.p className="text-slate-400 text-lg mb-2 font-light">
                {heroData.greeting}
              </motion.p>

              <h1 className="text-4xl lg:text-7xl font-bold uppercase leading-tight">
                <span className="text-white">
                  Muhammad <span className="text-green-500">Usman </span>
                </span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="h-12">
              <TypeAnimation
                sequence={[
                  heroData.roles[0].text,
                  2000,
                  heroData.roles[1].text,
                  2000,
                  heroData.roles[2].text,
                  2000,
                  heroData.roles[3].text,
                  2000,
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className="text-2xl lg:text-3xl font-semibold text-yellow-500"
              />
            </div>

            {/* Description */}
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl shadow-lg font-semibold transition-all"
                >
                  View My Work
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl font-semibold hover:text-violet-300 transition-all"
                >
                  <FiMail />
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-6"
            >
              <a
                href={personalInfo.social.github.url}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl hover:text-violet-400 transition-all animate-glow"
              >
                <FiGithub className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.social.linkedin.url}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl hover:text-violet-400 transition-all animate-glow"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — IMAGE + FLOATING ICONS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center p-2 sm:p-3 min-h-[350px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px]"
          >
            {/* Background Glows */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/15 to-pink-600/15 blur-2xl rounded-full" />

            {/* Orbiting Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-full border border-violet-500/20"
              style={{
                width: "120%",
                height: "120%",
                left: "-10%",
                top: "-10%",
              }}
            />

            {/* Image */}
            <div className="relative z-10 w-full max-w-[250px] sm:max-w-[320px] md:max-w-md">
              <div className="relative w-full aspect-square">
                {techStack.map((tech, i) => (
                  <FloatingIcon
                    key={i}
                    Icon={tech.Icon}
                    x={tech.x}
                    y={tech.y}
                    color={tech.color}
                    size={tech.size}
                    anim={tech.anim}
                  />
                ))}

                <motion.div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative">
                    <img
                      src={personalInfo.image}
                      alt={personalInfo.name}
                      className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-2 sm:border-4 border-slate-800 ring-1 sm:ring-2 ring-violet-500/30"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-xl sm:rounded-2xl shadow-xl animate-glow"
                >
                  <div className="text-xs sm:text-sm md:text-2xl font-bold">
                    2+ Years
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm opacity-90 font-medium">
                    Experience
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="animate-fade-in-move-up py-12"
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 rounded-t-3xl p-6 lg:p-8 shadow-2xl">
              {heroData.stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group cursor-default"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-white hover:text-purple-500 transition-all">
                      {stat.number}
                    </div>
                    <div className="text-sm text-green-500 mt-1 group-hover:text-yellow-500 transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==================== 2. ABOUT ME PREVIEW ==================== */}
      <section className="about-preview py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-white rounded-full text-violet-400 text-sm font-medium mb-4 animate-glow"
              >
                About Me
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl text-white lg:text-5xl font-bold uppercase"
              >
                Passionate{" "}
                <span className="text-white uppercase">About Creating</span>{" "}
                <span className="text-yellow-500 uppercase">
                  Digital Experiences
                </span>
              </motion.h2>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-300 leading-relaxed text-center mb-12"
            >
              {personalInfo.longBio}
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              <motion.div
                variants={item}
                className="bg-slate-700/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-violet-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4 hover:bg-white transition-all">
                  <FiAward className="w-6 h-6 text-violet-400 hover:text-yellow-500 animate-float" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-500">
                  Professional
                </h3>
                <p className="text-slate-100 text-sm">
                  Full-time Frontend Developer at Argonteq with proven track
                  record
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-slate-700/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-violet-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4 hover:bg-white transition-all">
                  <FiTrendingUp className="w-6 h-6 text-green-400 hover:text-yellow-500 animate-bounce-slow" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-500">
                  Results-Driven
                </h3>
                <p className="text-slate-200 text-sm">
                  Delivered 20+ production apps serving 200K+ users globally
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-violet-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 hover:bg-white transition-all">
                  <FiUsers className="w-6 h-6 text-purple-400 hover:text-green-500 animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-green-500">
                  Team Player
                </h3>
                <p className="text-slate-400 text-sm">
                  Collaborate effectively with designers, developers, and
                  stakeholders
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl font-semibold hover:border-violet-500/50 transition-all animate-glow"
                >
                  Learn More About Me
                  <FiArrowRight />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== 3. TECHNICAL SKILLS ==================== */}
      <section className="skills py-24 bg-slate-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-white rounded-full text-violet-400 text-sm font-medium mb-4 animate-glow"
            >
              Technical Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold uppercase"
            >
              My <span className="text-yellow-500">Expertise</span>
            </motion.h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            {skills.map((skill, idx) => {
              const SkillIcon = skill.icon;
              return (
                <motion.article
                  key={skill.name + idx}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2 sm:mb-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center bg-slate-800 rounded-lg sm:rounded-xl group-hover:bg-violet-500/10 transition-all"
                      style={{ color: skill.color }}
                    >
                      <SkillIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base md:text-lg truncate">
                        {skill.name}
                      </h3>
                      <div className="text-[10px] sm:text-xs text-white uppercase truncate">
                        {skill.category}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================== 4. FEATURED PROJECTS ==================== */}
      <section className="projects-preview py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-white rounded-full text-violet-400 text-sm font-medium mb-4 animate-glow"
              >
                Portfolio
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold uppercase"
              >
                Featured <span className="text-yellow-500">Projects</span>
              </motion.h2>
            </div>

            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-xl hover:border-violet-500/50 transition-all mt-4 md:mt-0 animate-glow"
              >
                View All Projects
                <FiArrowRight />
              </motion.button>
            </Link>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((project) => (
                <motion.article
                  key={project.id}
                  variants={item}
                  whileHover={{ y: -12 }}
                  className="group bg-slate-950/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all"
                >
                  <Link to={`/projects/${project.id}`}>
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-violet-500/90 text-white text-xs font-semibold rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                        {project.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={tech.name + i}
                            className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg"
                          >
                            {tech.name}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-lg">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-violet-400 text-sm font-semibold group-hover:gap-3 transition-all">
                        View Details
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== 5. PROFESSIONAL EXPERIENCE ==================== */}
      <section className="experience py-24 bg-slate-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-white rounded-full text-violet-400 text-sm font-medium mb-4 animate-glow"
            >
              Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold uppercase"
            >
              Professional <span className="text-yellow-500">Journey</span>
            </motion.h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {experience.map((exp, idx) => {
              const ExpIcon = exp.icon;
              return (
                <motion.article
                  key={exp.company + idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative"
                >
                  {idx !== experience.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-violet-500 to-transparent hidden md:block" />
                  )}

                  <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-violet-500/50 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center overflow-hidden">
                          <img
                            src={exp.companyLogo}
                            alt={exp.company}
                            loading="lazy"
                            className="w-full h-full object-contain transition-transform group-hover:scale-110 bg-white"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {exp.company}
                            </h3>
                            <p className="text-violet-400 font-semibold mt-1">
                              {exp.position}
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-sm text-slate-400">
                              <span className="flex items-center gap-1">
                                <FiClock className="w-4 h-4" />
                                {exp.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <FiMapPin className="w-4 h-4" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-300 mb-6">{exp.description}</p>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                            Key Responsibilities
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {exp.responsibilities.slice(0, 6).map((resp, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-slate-400"
                              >
                                <span className="text-violet-400 mt-1">•</span>
                                <span>{resp.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {exp.achievements.map((ach, i) => {
                            const AchIcon = ach.icon;
                            return (
                              <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700 hover:border-violet-500/50 transition-all"
                              >
                                <div className="text-2xl font-bold text-violet-400">
                                  {ach.stat}
                                </div>
                                <div className="text-xs text-slate-400 mt-1">
                                  {ach.label}
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg border border-slate-700"
                              >
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CAPABILITIES ==================== */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(139, 92, 246) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-full text-violet-400 text-sm font-medium backdrop-blur-sm animate-glow">
                <FiZap className="w-4 h-4" />
                What I Offer
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6 uppercase">
              <span className="text-white">
                my <span className="text-yellow-500">Capabilities</span>
              </span>
            </h2>

            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Delivering cutting-edge web solutions with modern technologies and
              best practices to bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto"
          >
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const isHovered = hoveredCard === index;

              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative"
                >
                  <div
                    className={`relative h-full bg-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 lg:p-10 transition-all duration-500 ${
                      isHovered
                        ? "border-violet-500/50 shadow-2xl shadow-violet-500/20 -translate-y-2"
                        : "border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{ background: service.gradient }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="inline-block mb-6"
                      >
                        <div
                          className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl p-0.5 shadow-lg"
                          style={{ background: service.gradient }}
                        >
                          <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                            <ServiceIcon
                              className="w-8 h-8 lg:w-10 lg:h-10"
                              style={{ color: service.color }}
                            />
                          </div>
                        </div>
                      </motion.div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 mb-8 leading-relaxed font-light">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {service.details.map((detail, idx) => {
                          const DetailIcon = detail.icon;
                          return (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * idx }}
                              className="flex items-start gap-3 text-slate-300"
                            >
                              <DetailIcon
                                className="w-5 h-5 mt-0.5 flex-shrink-0"
                                style={{ color: service.color }}
                              />
                              <span className="group-hover:text-white transition-colors">
                                {detail.text}
                              </span>
                            </motion.li>
                          );
                        })}
                      </ul>

                      <div className="border-t border-slate-800 pt-6">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-4 font-semibold">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {service.technologies.map((tech, idx) => {
                            const TechIcon = tech.icon;
                            return (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * idx }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="group/tech relative"
                              >
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-violet-500/50 transition-all backdrop-blur-sm">
                                  <TechIcon
                                    className="w-4 h-4"
                                    style={{ color: tech.color }}
                                  />
                                  <span className="text-sm text-slate-300 font-medium">
                                    {tech.name}
                                  </span>
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white opacity-0 group-hover/tech:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                  {tech.name}
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-2xl opacity-10">
                      <div
                        className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl"
                        style={{ background: service.gradient }}
                      />
                    </div>

                    <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-slate-900 border-2 border-violet-500/30 flex items-center justify-center font-bold text-violet-400 shadow-lg text-sm">
                      {service.id}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================== 6. DEVELOPMENT JOURNEY ==================== */}
      <section className="journey relative py-24 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-1/4 left-20 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-1/4 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-full text-violet-400 text-sm font-medium backdrop-blur-sm animate-glow">
                <FiTrendingUp className="w-4 h-4" />
                My Journey
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold mb-4 uppercase"
            >
              <span className="text-white">
                Development <span className="text-yellow-500">Timeline</span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto font-light"
            >
              A continuous evolution of skills, achievements, and milestones in
              my development career
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-violet-500/50 to-transparent">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-b from-violet-500 via-purple-500 to-violet-500 origin-top"
                />
              </div>

              <div className="space-y-12 md:space-y-16 lg:space-y-24">
                {developmentJourney.map((phase, index) => {
                  const PhaseIcon = phase.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={phase.year + index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="absolute left-4 md:left-8 lg:left-1/2 lg:-translate-x-1/2 z-20">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.3 + index * 0.1,
                            type: "spring",
                          }}
                          className="relative"
                        >
                          <div className="absolute inset-0 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 blur-md opacity-50 animate-pulse" />
                          <div
                            className="relative w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 md:border-4 border-slate-950 flex items-center justify-center shadow-xl"
                            style={{ backgroundColor: phase.color }}
                          >
                            <PhaseIcon className="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                          </div>
                        </motion.div>
                      </div>

                      <div
                        className={`ml-16 md:ml-24 lg:ml-0 ${
                          isEven
                            ? "lg:w-[calc(50%-4rem)] lg:mr-auto lg:pr-16"
                            : "lg:w-[calc(50%-4rem)] lg:ml-auto lg:pl-16"
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="group relative bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/20 transition-all"
                        >
                          <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                            style={{
                              background: `linear-gradient(135deg, ${phase.color}40 0%, transparent 100%)`,
                            }}
                          />

                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="absolute -top-3 -right-3 md:-top-4 md:-right-4 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg md:rounded-xl shadow-lg font-bold flex items-center gap-1.5 md:gap-2 text-sm md:text-base"
                          >
                            <FiCalendar className="w-3 h-3 md:w-4 md:h-4" />
                            {phase.year}
                          </motion.div>

                          <div className="relative z-10">
                            <div className="mb-4 md:mb-6">
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                                {phase.title}
                              </h3>
                              <p className="text-sm md:text-base text-slate-400 italic font-light">
                                {phase.subtitle}
                              </p>
                            </div>

                            <p className="text-sm md:text-base text-slate-300 mb-6 md:mb-8 leading-relaxed font-light">
                              {phase.description}
                            </p>

                            <div className="mb-6 md:mb-8">
                              <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3 md:mb-4 flex items-center gap-2">
                                <span className="w-6 md:w-8 h-px bg-violet-500/50" />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2 md:space-y-3">
                                {phase.achievements.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                      delay: 0.5 + index * 0.1 + i * 0.05,
                                    }}
                                    className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-slate-300"
                                  >
                                    <span
                                      className="w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-[10px] md:text-xs mt-0.5"
                                      style={{ backgroundColor: phase.color }}
                                    >
                                      ✓
                                    </span>
                                    <span className="group-hover:text-white transition-colors">
                                      {achievement}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                                Skills & Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {phase.skills.map((skill, i) => (
                                  <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                      delay: 0.6 + index * 0.1 + i * 0.03,
                                    }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-2.5 py-1 md:px-3 md:py-1.5 bg-slate-800/70 backdrop-blur-sm text-slate-300 text-[11px] md:text-xs rounded-lg border border-slate-700 hover:border-violet-500/50 hover:text-violet-300 transition-all font-medium"
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 overflow-hidden rounded-br-2xl opacity-10">
                            <div
                              className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 w-16 h-16 md:w-24 md:h-24 rounded-full blur-xl"
                              style={{ backgroundColor: phase.color }}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4-STEP APPROACH ==================== */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),
                                 linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-full text-violet-400 text-sm font-medium animate-glow backdrop-blur-sm">
                <FiLayers className="w-4 h-4" />
                Development Process
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6 uppercase">
              <span className="text-white">
                My <span className="text-yellow-500">4-Step</span> Approach
              </span>
            </h2>

            <p className="text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto font-light">
              A proven 4-step methodology that transforms ideas into
              high-performance, scalable web applications built for growth.
            </p>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-violet-500/20">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-orange-500 origin-left"
              />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-4 gap-8 lg:gap-6"
            >
              {processSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={step.id}
                    variants={itemVariants}
                    onHoverStart={() => setActiveStep(index)}
                    className="relative group"
                  >
                    <div
                      className={`relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 lg:p-8 transition-all duration-500 ${
                        isActive
                          ? "border-violet-500/50 shadow-2xl shadow-violet-500/20 scale-105"
                          : "hover:border-slate-700 hover:shadow-xl"
                      }`}
                    >
                      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-violet-500/30 flex items-center justify-center font-bold text-violet-400 shadow-lg">
                        {step.id}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mb-6 ${step.glowColor} shadow-lg group-hover:shadow-xl transition-all`}
                      >
                        <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                          <StepIcon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                        </div>
                      </motion.div>

                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 mb-6 leading-relaxed font-light">
                        {step.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {step.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * idx }}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <FiCheckCircle
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                            />
                            <span className="group-hover:text-slate-300 transition-colors">
                              {detail}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${step.color} bg-opacity-10 border border-white/10`}
                      >
                        <FiTrendingUp className="w-4 h-4 text-white" />
                        <span className="text-sm font-semibold text-white">
                          {step.metrics.label}: {step.metrics.value}
                        </span>
                      </div>

                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                      />
                    </div>

                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`hidden lg:block absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br ${step.color} border-4 border-slate-950 ${step.glowColor} shadow-lg z-10 ${isActive ? "scale-125" : ""} transition-transform`}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== 8. CTA SECTION ==================== */}
      <section className="cta py-24 bg-gradient-to-br from-violet-900/20 via-slate-900 to-purple-900/20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-slate-950/50 backdrop-blur border border-slate-800 rounded-3xl p-12 lg:p-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold mb-6 uppercase"
              >
                Let's Build Something{" "}
                <span className="text-yellow-500">Amazing Together</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto"
              >
                I'm currently available for freelance projects and full-time
                opportunities. Let's discuss how I can help bring your ideas to
                life!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl shadow-lg font-semibold"
                  >
                    <FiMail />
                    Get In Touch
                  </motion.button>
                </Link>

                <a href={personalInfo.resume} download>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl font-semibold hover:border-violet-500/50 transition-all"
                  >
                    <FiDownload />
                    Download Resume
                  </motion.button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-slate-800"
              >
                <div className="flex items-center gap-2 text-slate-400">
                  <FiMail className="text-violet-400" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <FiMapPin className="text-violet-400" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
