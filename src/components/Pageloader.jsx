// src/components/PageLoader.jsx
import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <motion.div
          className="relative w-24 h-24 mx-auto mb-8"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-violet-500/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Inner Ring */}
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-purple-500/40"
            animate={{
              scale: [1, 0.8, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          
          {/* Center Circle */}
          <motion.div
            className="absolute inset-6 rounded-full bg-gradient-to-br from-violet-600 to-purple-600"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Rotating Arc */}
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full rounded-full border-4 border-transparent border-t-violet-400 border-r-purple-400" />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <p className="text-lg font-semibold text-slate-100">Loading</p>
          <div className="flex items-center justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-violet-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Optional Loading Bar */}
        <motion.div
          className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden mt-8 mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
