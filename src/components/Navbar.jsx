// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiMenu, 
  HiX, 
  HiDownload, 
  HiMail,
  HiHome,
  HiUser,
  HiBriefcase,
  HiPhone
} from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';

// ========================================
// FRAMER MOTION VARIANTS
// ========================================
const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20 
    }
  }
};

const mobileMenuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  },
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const menuItemVariants = {
  closed: { x: 50, opacity: 0 },
  open: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  })
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 }
};

// ========================================
// NAVBAR COMPONENT
// ========================================
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navigation links with icons
  const links = [
    { name: 'Home', path: '/', icon: <HiHome /> },
    { name: 'About', path: '/about', icon: <HiUser /> },
    { name: 'Projects', path: '/projects', icon: <HiBriefcase /> },
    { name: 'Contact', path: '/contact', icon: <HiPhone /> }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 m-0 p-0 ${
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-lg shadow-slate-900/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO / BRAND */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30"
              >
                <span className="text-white font-bold text-sm tracking-tight">
                  MU
                </span>
              </motion.div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  {personalInfo.name.split(' ')[0]}
                </span>
                <span className="text-xl font-bold text-slate-300 ml-2">
                  {personalInfo.name.split(' ')[1]}
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center space-x-1">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-xl font-medium transition-all ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {link.name}
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl -z-10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* CTA BUTTONS - DESKTOP */}
            <div className="hidden lg:flex items-center space-x-3">
            

              <a href={personalInfo.resume} download>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-violet-500/30 flex items-center gap-2"
                >
                  <HiDownload />
                  <span>Resume</span>
                </motion.button>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-slate-950 border-l border-slate-800 z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm tracking-tight">
                        MU
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-white">{personalInfo.name}</p>
                      <p className="text-xs text-slate-400">{personalInfo.title}</p>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center bg-slate-900 rounded-xl text-slate-300 hover:text-white transition-colors"
                  >
                    <HiX size={24} />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 py-8 px-6">
                  <nav className="space-y-2">
                    {links.map((link, i) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <motion.div
                          key={link.path}
                          custom={i}
                          variants={menuItemVariants}
                          initial="closed"
                          animate="open"
                          exit="closed"
                        >
                          <Link
                            to={link.path}
                            className={`flex items-center space-x-4 px-4 py-4 rounded-xl transition-all ${
                              isActive
                                ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                                : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            <span className="text-2xl">{link.icon}</span>
                            <span className="font-medium text-lg">{link.name}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  {/* Mobile CTA Buttons */}
                  <motion.div
                    custom={links.length}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    className="mt-8 space-y-3"
                  >
                    

                    <a href={personalInfo.resume} download className="block">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-violet-500/30 flex items-center justify-center gap-2"
                      >
                        <HiDownload className="text-xl animate-fade-in" />
                        <span>Download Resume</span>
                      </motion.button>
                    </a>
                  </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                  custom={links.length + 1}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  className="p-6 border-t border-slate-800"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <HiMail />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <HiPhone />
                      <span>{personalInfo.phone}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <p className="text-xs text-slate-500 text-center">
                      © {new Date().getFullYear()} {personalInfo.name}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}