// ==========================================================================================
// COMPLETE PORTFOLIO DATA - ALL EXPORTS INCLUDED
// ==========================================================================================
import ResumeDownload from "../assets/Common/Muhammad Usman.pdf";

// ==================== REACT ICONS IMPORTS ====================
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaGit,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiStyledcomponents,
  SiFramer,
  SiWebpack,
  SiGraphql,
  SiJest,
  SiTestinglibrary,
  SiStripe,
  SiMongodb,
} from "react-icons/si";
import {
  IoMdSpeedometer,
  IoMdRocket,
  IoMdCheckmarkCircle,
  IoMdStar,
} from "react-icons/io";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdWork,
  MdSchool,
  MdCode,
  MdDesignServices,
  MdDashboard,
  MdSecurity,
  MdPayment,
  MdAnalytics,
  MdShoppingCart,
  MdHttp,
  MdTrendingUp,
  MdCloudDone,
  MdPalette,
  MdTimeline,
  MdBuild,
  MdSupportAgent,
  MdWhatsapp,
} from "react-icons/md";
import {
  BsLightningChargeFill,
  BsAwardFill,
  BsGraphUpArrow,
  BsCodeSlash,
} from "react-icons/bs";
import { HiSparkles, HiLightBulb } from "react-icons/hi";
import { FaUpwork } from "react-icons/fa6";

// ==================== COLOR SCHEMES ====================
export const colorSchemes = {
  primary: {
    main: "#3B82F6",
    light: "#60A5FA",
    dark: "#2563EB",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  secondary: {
    main: "#8B5CF6",
    light: "#A78BFA",
    dark: "#7C3AED",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  success: { main: "#10B981", light: "#34D399", dark: "#059669" },
  warning: { main: "#F59E0B", light: "#FBBF24", dark: "#D97706" },
  danger: { main: "#EF4444", light: "#F87171", dark: "#DC2626" },
  info: { main: "#06B6D4", light: "#22D3EE", dark: "#0891B2" },
  categories: {
    healthcare: "#10B981",
    finance: "#3B82F6",
    ecommerce: "#8B5CF6",
    realEstate: "#F59E0B",
    medical: "#EC4899",
    content: "#06B6D4",
  },
};

// ==================== ANIMATION VARIANTS ====================
export const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  },
  slideInLeft: {
    hidden: { x: "-100vw" },
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  },
  slideInRight: {
    hidden: { x: "100vw" },
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  },
  rotate: {
    animate: {
      rotate: 360,
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    },
  },
  float: {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  },
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
    },
  },
};

// ==========================
// PERSONAL INFO
// ==========================
export const personalInfo = {
  name: "Muhammad Usman",
  title: "Frontend Developer",
  tagline: "Crafting Digital Experiences with Code & Creativity",
  email: "m.usman.stack@gmail.com",
  phone: "+92 303 7777438",
  location: "Lahore, Pakistan",
  image: "https://res.cloudinary.com/dvgpgzibx/image/upload/v1773609701/me_xmd4lo.jpg",
  bio: "I am a passionate Frontend Developer specializing in React.js, Next.js, UI/UX, and modern interactive web experiences. I build highly responsive, fast, and visually stunning interfaces that push the boundaries of web development.",
  longBio:
    "As a dedicated Frontend Developer with 2+ years of professional experience, I transform complex problems into elegant, user-friendly solutions. My expertise spans across modern JavaScript frameworks, with a particular focus on React ecosystem and interactive UI/UX design. I'm currently pursuing my BSCS degree while working full-time at Argonteq, where I've successfully delivered 20+ production-ready projects.",
  social: {
    linkedin: {
      url: "https://www.linkedin.com/in/muhammad-usman-87761a2bb",
      icon: FaLinkedin,
      color: "#0A66C2",
    },
    github: {
      url: "https://github.com/DevCode0456",
      icon: FaGithub,
      color: "#181717",
    },
   
  },
  resume: ResumeDownload,
  availability: "Available for Work & Full-time Opportunities",
};

// ==========================
// HERO SECTION DATA
// ==========================
export const heroData = {
  greeting: "Hello, I'm",
  name: "Muhammad Usman",
  roles: [
    {
      text: "Frontend Developer",
      icon: BsCodeSlash,
      color: colorSchemes.primary.main,
    },
    { text: "React Specialist", icon: FaReact, color: "#61DAFB" },
    {
      text: "UI/UX Enthusiast",
      icon: MdDesignServices,
      color: colorSchemes.secondary.main,
    },
    {
      text: "Problem Solver",
      icon: HiLightBulb,
      color: colorSchemes.warning.main,
    },
  ],
  description:
    "I transform ideas into stunning digital experiences using modern web technologies. Let's build something amazing together.",
  ctaButtons: [
    {
      text: "View My Work",
      link: "/projects",
      primary: true,
      icon: MdDashboard,
      color: colorSchemes.primary.main,
    },
    {
      text: "Get In Touch",
      link: "/contact",
      primary: false,
      icon: MdEmail,
      color: colorSchemes.secondary.main,
    },
  ],
  // splineScene: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
  stats: [
    {
      number: "20+",
      label: "Projects Completed",
      icon: IoMdCheckmarkCircle,
      color: colorSchemes.success.main,
    },
    {
      number: "2+",
      label: "Years Experience",
      icon: BsAwardFill,
      color: colorSchemes.warning.main,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: IoMdStar,
      color: colorSchemes.info.main,
    },
    {
      number: "200K+",
      label: "Users Impacted",
      icon: BsGraphUpArrow,
      color: colorSchemes.secondary.main,
    },
  ],
};

// ==========================
// TECHNICAL SKILLS
// ==========================
export const skills = [
  {
    name: "React.js",
    level: 95,
    category: "frontend",
    icon: FaReact,
    color: "#61DAFB",
    gradient: "linear-gradient(135deg, #61DAFB 0%, #21a1c4 100%)",
  },
  {
    name: "Next.js",
    level: 90,
    category: "frontend",
    icon: SiNextdotjs,
    color: "#000000",
    gradient: "linear-gradient(135deg, #000000 0%, #434343 100%)",
  },
  {
    name: "Redux Toolkit",
    level: 92,
    category: "frontend",
    icon: SiRedux,
    color: "#764ABC",
    gradient: "linear-gradient(135deg, #764ABC 0%, #995fd4 100%)",
  },
  {
    name: "JavaScript (ES6+)",
    level: 93,
    category: "languages",
    icon: SiJavascript,
    color: "#F7DF1E",
    gradient: "linear-gradient(135deg, #F7DF1E 0%, #f5c500 100%)",
  },
  {
    name: "TypeScript",
    level: 80,
    category: "languages",
    icon: SiTypescript,
    color: "#3178C6",
    gradient: "linear-gradient(135deg, #3178C6 0%, #235a97 100%)",
  },
  {
    name: "HTML5",
    level: 98,
    category: "languages",
    icon: FaHtml5,
    color: "#E34F26",
    gradient: "linear-gradient(135deg, #E34F26 0%, #c43818 100%)",
  },
  {
    name: "CSS3",
    level: 95,
    category: "languages",
    icon: FaCss3Alt,
    color: "#1572B6",
    gradient: "linear-gradient(135deg, #1572B6 0%, #0e5a8e 100%)",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "styling",
    icon: SiTailwindcss,
    color: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4 0%, #0891b2 100%)",
  },
  {
    name: "Bootstrap",
    level: 85,
    category: "styling",
    icon: FaBootstrap,
    color: "#7952B3",
    gradient: "linear-gradient(135deg, #7952B3 0%, #563d7c 100%)",
  },
  {
    name: "Material UI",
    level: 82,
    category: "styling",
    icon: SiMui,
    color: "#007FFF",
    gradient: "linear-gradient(135deg, #007FFF 0%, #0059b3 100%)",
  },
  {
    name: "Styled Components",
    level: 78,
    category: "styling",
    icon: SiStyledcomponents,
    color: "#DB7093",
    gradient: "linear-gradient(135deg, #DB7093 0%, #c5577a 100%)",
  },
  {
    name: "Framer Motion",
    level: 83,
    category: "animation",
    icon: SiFramer,
    color: "#0055FF",
    gradient: "linear-gradient(135deg, #0055FF 0%, #0041cc 100%)",
  },
  {
    name: "Spline 3D",
    level: 75,
    category: "animation",
    icon: HiSparkles,
    color: "#FF3366",
    gradient: "linear-gradient(135deg, #FF3366 0%, #cc2952 100%)",
  },
  {
    name: "GSAP",
    level: 70,
    category: "animation",
    icon: BsLightningChargeFill,
    color: "#88CE02",
    gradient: "linear-gradient(135deg, #88CE02 0%, #6ba601 100%)",
  },
  {
    name: "Git & GitHub",
    level: 88,
    category: "tools",
    icon: FaGit,
    color: "#F05032",
    gradient: "linear-gradient(135deg, #F05032 0%, #c73e28 100%)",
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: MdCode,
    color: "#007ACC",
    gradient: "linear-gradient(135deg, #007ACC 0%, #005fa3 100%)",
  },
  {
    name: "Figma",
    level: 75,
    category: "tools",
    icon: FaFigma,
    color: "#F24E1E",
    gradient: "linear-gradient(135deg, #F24E1E 0%, #c93e18 100%)",
  },
  {
    name: "Webpack",
    level: 72,
    category: "tools",
    icon: SiWebpack,
    color: "#8DD6F9",
    gradient: "linear-gradient(135deg, #8DD6F9 0%, #6bc5f0 100%)",
  },
  {
    name: "REST APIs",
    level: 86,
    category: "backend",
    icon: MdDashboard,
    color: "#009688",
    gradient: "linear-gradient(135deg, #009688 0%, #00796b 100%)",
  },
  {
    name: "GraphQL",
    level: 68,
    category: "backend",
    icon: SiGraphql,
    color: "#E10098",
    gradient: "linear-gradient(135deg, #E10098 0%, #b80079 100%)",
  },
  {
    name: "Node.js Basics",
    level: 65,
    category: "backend",
    icon: FaNodeJs,
    color: "#339933",
    gradient: "linear-gradient(135deg, #339933 0%, #297a29 100%)",
  },
  {
    name: "Jest",
    level: 70,
    category: "testing",
    icon: SiJest,
    color: "#C21325",
    gradient: "linear-gradient(135deg, #C21325 0%, #9c0f1e 100%)",
  },
  {
    name: "React Testing Library",
    level: 72,
    category: "testing",
    icon: SiTestinglibrary,
    color: "#E33332",
    gradient: "linear-gradient(135deg, #E33332 0%, #b52928 100%)",
  },
  {
    name: "Responsive Design",
    level: 94,
    category: "design",
    icon: MdDesignServices,
    color: "#FF6B6B",
    gradient: "linear-gradient(135deg, #FF6B6B 0%, #ff5252 100%)",
  },
  {
    name: "Performance Optimization",
    level: 85,
    category: "optimization",
    icon: IoMdSpeedometer,
    color: "#4ECDC4",
    gradient: "linear-gradient(135deg, #4ECDC4 0%, #3ab8af 100%)",
  },
];

// ==========================
// PROJECTS
// ==========================


// ==========================
// PROFESSIONAL EXPERIENCE
// ==========================
export const experience = [
  {
    id: 1,
    company: "Argonteq",
    companyLogo:"https://res.cloudinary.com/dvgpgzibx/image/upload/v1773609689/Argontechdark-logo_hrblyd.png",
    position: "Frontend Developer",
    duration: "January 2023 – Present",
    location: "Lahore, Pakistan",
    type: "Full-time",
    icon: MdWork,
    color: colorSchemes.primary.main,
    description:
      "Building modern, scalable UI/UX solutions with React, Redux, and cutting-edge frontend technologies.",
    responsibilities: [
      {
        text: "Developed 20+ scalable, production-ready UI components",
        icon: IoMdCheckmarkCircle,
      },
      {
        text: "Integrated RESTful APIs with Redux Toolkit",
        icon: IoMdCheckmarkCircle,
      },
      {
        text: "Improved application performance by 3x",
        icon: IoMdCheckmarkCircle,
      },
      {
        text: "Built responsive layouts using Tailwind CSS",
        icon: IoMdCheckmarkCircle,
      },
      { text: "Mentored 3 junior developers", icon: IoMdCheckmarkCircle },
    ],
    achievements: [
      {
        stat: "20+",
        label: "Live Projects",
        icon: IoMdRocket,
        color: colorSchemes.success.main,
      },
      {
        stat: "98%",
        label: "Client Satisfaction",
        icon: IoMdStar,
        color: colorSchemes.warning.main,
      },
      {
        stat: "3x",
        label: "Faster Performance",
        icon: BsLightningChargeFill,
        color: colorSchemes.info.main,
      },
      {
        stat: "200zK+",
        label: "Users Served",
        icon: BsGraphUpArrow,
        color: colorSchemes.secondary.main,
      },
    ],
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
    highlights: [
      {
        text: "Developer of the Quarter award (Q2 2024)",
        icon: BsAwardFill,
        color: colorSchemes.warning.main,
      },
      {
        text: "Led migration to modern React",
        icon: IoMdRocket,
        color: colorSchemes.primary.main,
      },
      {
        text: "Implemented company design system",
        icon: MdDesignServices,
        color: colorSchemes.success.main,
      },
      {
        text: "Reduced load time by 60%",
        icon: IoMdSpeedometer,
        color: colorSchemes.info.main,
      },
    ],
  },
 
];

// ==========================
// DEVELOPMENT JOURNEY
// ==========================
export const developmentJourney = [
  {
    year: "2021",
    title: "Started Web Development Journey",
    subtitle: "The Foundation",
    description:
      "Began my journey into web development by learning HTML5, CSS3, and vanilla JavaScript through hands-on projects.",
    achievements: [
      "Completed 100+ hours of coding tutorials",
      "Built 10+ beginner projects",
      "Learned responsive design principles",
      "Started freelancing on Fiverr",
      "Joined developer communities",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git Basics"],
    icon: HiLightBulb,
    color: colorSchemes.primary.main,
    gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
  },
  {
    year: "2022",
    title: "Entered React Ecosystem",
    subtitle: "The Transformation",
    description:
      "Dove deep into modern JavaScript frameworks, with React becoming my primary focus.",
    achievements: [
      "Built 10+ React applications from scratch",
      "Mastered React Hooks",
      "Learned Redux and Redux Toolkit",
      "Implemented REST API integration",
      "Mastered Tailwind CSS",
      "Completed client projects",
    ],
    skills: [
      "React.js",
      "Redux",
      "Hooks",
      "Tailwind CSS",
      "REST APIs",
      "Axios",
    ],
    icon: FaReact,
    color: "#61DAFB",
    gradient: "linear-gradient(135deg, #61DAFB 0%, #21a1c4 100%)",
  },
  {
    year: "2023",
    title: "Professional Developer",
    subtitle: "The Breakthrough",
    description:
      "Joined Argonteq as a Frontend Developer, working on large-scale enterprise applications.",
    achievements: [
      "Joined Argonteq as full-time developer",
      "Worked on apps serving 200K+ users",
      "Implemented TypeScript in projects",
      "Led frontend architecture decisions",
      "Improved team code quality",
      "Delivered 10+ major features",
    ],
    skills: [
      "TypeScript",
      "Testing",
      "Performance Optimization",
      "Team Collaboration",
      "Agile",
    ],
    icon: MdWork,
    color: colorSchemes.success.main,
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  },
  {
    year: "2024–2025",
    title: "Advanced Interactive UI Specialist",
    subtitle: "The Innovation",
    description:
      "Expanded expertise into cutting-edge technologies including 3D graphics and advanced animations.",
    achievements: [
      "Mastered Spline 3D",
      "Proficient in Framer Motion",
      "Built portfolio with 3D elements",
      "Learned Next.js for SSR/SSG",
      "Advanced performance optimizations",
      "Created component library",
      "Achieved 98+ PageSpeed scores",
    ],
    skills: [
      "Next.js",
      "Spline 3D",
      "Framer Motion",
      "Three.js",
      "GSAP",
      "WebGL",
    ],
    icon: IoMdRocket,
    color: colorSchemes.warning.main,
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  },
];

// ==========================
// EDUCATION
// ==========================
export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    degreeShort: "BSCS",
    institution: "University of Lahore",
    institutionLogo:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200",
    location: "Lahore, Pakistan",
    duration: "2023 – Present (Expected 2027)",
    status: "In Progress",
    gpa: "3.6/4.0",
    icon: MdSchool,
    color: colorSchemes.primary.main,
    description:
      "Pursuing BSCS degree with focus on software engineering and web technologies.",
    coursework: [
      { text: "Programming Fundamentals", icon: MdCode },
      { text: "Data Structures & Algorithms", icon: MdCode },
      { text: "Object-Oriented Programming", icon: MdCode },
      { text: "Database Systems", icon: MdCode },
      { text: "Web Development Technologies", icon: MdCode },
    ],
    achievements: [
      {
        text: "Maintained 3.6/4.0 GPA while working full-time",
        icon: IoMdStar,
      },
      { text: "Completed 15+ programming projects", icon: IoMdCheckmarkCircle },
      { text: "Active in Computer Science Society", icon: IoMdCheckmarkCircle },
    ],
    skills: ["C++", "Java", "Python", "SQL", "Algorithm Design"],
  },
  {
    id: 2,
    degree: "Online Certifications & Courses",
    degreeShort: "Self-Learning",
    institution: "Multiple Platforms",
    institutionLogo:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200",
    location: "Online",
    duration: "2021 – Present",
    status: "Ongoing",
    icon: HiLightBulb,
    color: colorSchemes.secondary.main,
    description:
      "Continuously expanding skills through online courses and certifications.",
    coursework: [
      { text: "Complete React Developer Course", icon: FaReact },
      { text: "Advanced JavaScript Concepts", icon: SiJavascript },
      { text: "Modern React with Redux", icon: SiRedux },
      { text: "TypeScript Complete Guide", icon: SiTypescript },
    ],
    achievements: [
      {
        text: "Completed 20+ comprehensive courses",
        icon: IoMdCheckmarkCircle,
      },
      { text: "Built 30+ practice projects", icon: IoMdCheckmarkCircle },
    ],
    platforms: ["Udemy", "freeCodeCamp", "YouTube", "Coursera"],
    skills: ["Self-Learning", "Problem Solving", "Research"],
  },
];

// ==========================
// SERVICES OFFERED
// ==========================
export const services = [
  {
    id: 1,
    title: "Frontend Development",
    icon: MdCode,
    color: colorSchemes.primary.main,
    gradient: colorSchemes.primary.gradient,
    description:
      "Building responsive, high-performance web applications using modern JavaScript frameworks.",
    details: [
      { text: "React.js & Next.js development", icon: IoMdCheckmarkCircle },
      { text: "Redux state management", icon: IoMdCheckmarkCircle },
      { text: "RESTful API integration", icon: IoMdCheckmarkCircle },
      { text: "Responsive design implementation", icon: IoMdCheckmarkCircle },
    ],
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    id: 2,
    title: "UI/UX Design Implementation",
    icon: MdDesignServices,
    color: colorSchemes.secondary.main,
    gradient: colorSchemes.secondary.gradient,
    description:
      "Transforming designs into pixel-perfect, interactive user interfaces.",
    details: [
      { text: "Figma to React conversion", icon: IoMdCheckmarkCircle },
      { text: "Custom component development", icon: IoMdCheckmarkCircle },
      { text: "Animation & micro-interactions", icon: IoMdCheckmarkCircle },
    ],
    technologies: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    id: 3,
    title: "3D Web Experiences",
    icon: HiSparkles,
    color: colorSchemes.info.main,
    gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
    description:
      "Creating immersive 3D web experiences with Spline and advanced animations.",
    details: [
      { text: "3D model integration", icon: IoMdCheckmarkCircle },
      { text: "Interactive animations", icon: IoMdCheckmarkCircle },
      { text: "Scroll-based effects", icon: IoMdCheckmarkCircle },
    ],
    technologies: [
      { name: "Spline 3D", icon: HiSparkles, color: "#FF3366" },
      { name: "GSAP", icon: BsLightningChargeFill, color: "#88CE02" },
    ],
  },
  {
    id: 4,
    title: "Performance Optimization",
    icon: IoMdSpeedometer,
    color: colorSchemes.warning.main,
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    description: "Optimizing web applications for lightning-fast load times.",
    details: [
      { text: "Code splitting & lazy loading", icon: IoMdCheckmarkCircle },
      { text: "Bundle size optimization", icon: IoMdCheckmarkCircle },
      { text: "Image optimization", icon: IoMdCheckmarkCircle },
    ],
    technologies: [
      { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
    ],
  },
];



// CONTACT INFO
// ==========================
export const contactInfo = {
  email: {
    primary: "m.usman.stack@gmail.com",
    icon: MdEmail,
    label: "Email Me",
    color: colorSchemes.primary.main,
  },
  phone: {
    number: "+92 303 7777438",
    whatsapp: "https://wa.me/923037777438",
    icon: MdWhatsapp,
    label: "Text Me",
    color: colorSchemes.success.main,
  },
  upwork: {
    url: "https://www.upwork.com/freelancers/~0169ad01d075c4501e",
    icon: FaUpwork,
    label: "Hire Me on Upwork",
    color: colorSchemes.success.main,
  },
  
 
  social: {
    linkedin: {
      url: "https://www.linkedin.com/in/muhammad-usman-87761a2bb",
      icon: FaLinkedin,
      label: "LinkedIn",
      followers: "500+",
      color: "#0A66C2",
    },
    github: {
      url: "https://github.com/DevCode0456",
      icon: FaGithub,
      label: "GitHub",
      repos: "50+",
      color: "#181717",
    },
 
  },
};

// ==========================
// FAQ SECTION
// ==========================
export const faqs = [
  {
    id: 1,
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Next.js, Redux Toolkit, TypeScript, Tailwind CSS, and animation libraries.",
    icon: MdCode,
    color: colorSchemes.primary.main,
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. Simple landing pages take 1-2 weeks, full web applications take 4-8 weeks.",
    icon: MdWork,
    color: colorSchemes.success.main,
  },
  {
  id: 3,
  question: "Do you provide maintenance after project delivery?",
  answer:
    "Yes, I provide ongoing maintenance, bug fixes, and feature enhancements based on your needs.",
  icon: MdSupportAgent,
  color: colorSchemes.info.main,
},
{
  id: 4,
  question: "Can you work with existing codebases?",
  answer:
    "Absolutely. I can audit, refactor, optimize, or extend any existing React or Next.js codebase.",
  icon: MdBuild,
  color: colorSchemes.warning.main,
},
{
  id: 5,
  question: "What is your development workflow?",
  answer:
    "I follow an agile workflow: planning, UI/UX, development, testing, revisions, and final delivery.",
  icon: MdTimeline,
  color: colorSchemes.secondary.main,
},
{
  id: 6,
  question: "Do you offer UI/UX design services?",
  answer:
    "Yes, I create modern, responsive, and user-friendly UI/UX designs using Figma and Tailwind.",
  icon: MdPalette,
  color: colorSchemes.danger.main,
},
{
  id: 7,
  question: "What platforms do you deploy projects to?",
  answer:
    "I deploy on Vercel, Netlify, Firebase, DigitalOcean, and AWS depending on project requirements.",
  icon: MdCloudDone,
  color: colorSchemes.primary.light,
},
{
  id: 8,
  question: "Do you offer SEO optimization?",
  answer:
    "Yes, I implement on-page SEO, performance optimization, meta tags, and best practices.",
  icon: MdTrendingUp,
  color: colorSchemes.success.dark,
},
{
  id: 9,
  question: "Can you integrate external APIs?",
  answer:
    "Yes, I can integrate REST APIs, GraphQL, Firebase, Stripe, and third-party authentication services.",
  icon: MdHttp,
  color: colorSchemes.info.dark,
},
{
  id: 10,
  question: "Do you provide eCommerce development?",
  answer:
    "Yes, I build secure, scalable eCommerce platforms with cart systems, payments, and custom dashboards.",
  icon: MdShoppingCart,
  color: colorSchemes.secondary.dark,
},

];

// ==========================
// SPLINE SCENES
// ==========================
// export const splineScenes = {
//   hero: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
//   about: "https://prod.spline.design/XKVkKqZBZ7Iq8wF9/scene.splinecode",
//   projects: "https://prod.spline.design/9aXFqq1kf3rGBDfD/scene.splinecode",
//   contact: "https://prod.spline.design/2M3W5rqXKP5v3pVr/scene.splinecode",
// };

// ==========================
// METADATA FOR SEO
// ==========================
export const siteMetadata = {
  title: "Muhammad Usman - Frontend Developer",
  description:
    "Frontend Developer specializing in React.js, Next.js, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Web Developer",
    "UI/UX",
    "JavaScript",
    "Next.js",
  ],
  author: "Muhammad Usman",
  siteUrl: "https://muhammadusman.dev",
  image: "/og-image.jpg",
  twitterHandle: "@muhammadusman",
};

// ==========================
// EXPORT ALL DATA
// ==========================
export default {
  personalInfo,
  heroData,
  skills,
  experience,
  developmentJourney,
  education,
  services,
  contactInfo,
  faqs,
  // splineScenes,
  siteMetadata,
  colorSchemes,
  animationVariants,
};
