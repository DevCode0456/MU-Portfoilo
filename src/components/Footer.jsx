// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { HiMail, HiPhone } from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';

// Framer Motion variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: 'spring', stiffness: 300, damping: 24 },
  }),
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-slate-950 border-t border-slate-800 text-slate-400 mt-auto"
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between">

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <motion.div
            custom={0}
            variants={itemVariants}
            className="flex items-center gap-2 text-sm"
          >
            <HiMail className="text-slate-400" />
            <span>{personalInfo.email}</span>
          </motion.div>

          <motion.div
            custom={1}
            variants={itemVariants}
            className="flex items-center gap-2 text-sm"
          >
            <HiPhone className="text-slate-400" />
            <span>{personalInfo.phone}</span>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          custom={2}
          variants={itemVariants}
          className="mt-4 md:mt-0 text-xs text-slate-500 text-center"
        >
          © {new Date().getFullYear()} {personalInfo.name}
        </motion.div>
      </div>
    </motion.footer>
  );
}
