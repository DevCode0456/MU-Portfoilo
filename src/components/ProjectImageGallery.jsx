// src/components/ProjectImageGallery.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from '../components/LazzyImg';
import { 
  MdChevronLeft, 
  MdChevronRight, 
  MdClose,
  MdZoomIn,
  MdZoomOut,
  MdFullscreen,
  MdFullscreenExit
} from 'react-icons/md';

export default function ProjectImageGallery({ images, projectTitle }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage = images[selectedIndex];

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsZoomed(false);
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') setIsFullscreen(false);
  };

  return (
    <div className="w-full">
      {/* Main Image Display */}
      <div className="relative bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800">
        {/* Image Container */}
        <div className="relative aspect-video">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <LazyImage
                src={currentImage.src}
                alt={currentImage.heading || `${projectTitle} screenshot ${selectedIndex + 1}`}
                className={`w-full h-full transition-transform duration-300 ${
                  isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                objectFit="object-contain"
                priority={selectedIndex === 0}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-10"
            aria-label="Previous image"
          >
            <MdChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-10"
            aria-label="Next image"
          >
            <MdChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-slate-900/80 text-white px-2.5 py-1 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm text-xs sm:text-sm font-medium">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Controls */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1.5 sm:gap-2">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="hidden sm:flex bg-slate-900/80 hover:bg-slate-800 text-white p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110"
              aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
            >
              {isZoomed ? <MdZoomOut className="w-4 h-4 sm:w-5 sm:h-5" /> : <MdZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="bg-slate-900/80 hover:bg-slate-800 text-white p-1.5 sm:p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110"
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <MdFullscreenExit className="w-4 h-4 sm:w-5 sm:h-5" /> : <MdFullscreen className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Image Info */}
        <div className="p-3 sm:p-4 lg:p-6 bg-slate-900/50 border-t border-slate-800">
          <div className="flex items-start gap-3 sm:gap-4">
            {currentImage.icon && (
              <div 
                className="p-2 sm:p-3 rounded-lg shrink-0"
                style={{ backgroundColor: `${currentImage.color}20` }}
              >
                <currentImage.icon 
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" 
                  style={{ color: currentImage.color }}
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-0.5 sm:mb-1 truncate">
                {currentImage.heading}
              </h3>
              <p className="text-violet-400 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                {currentImage.subheading}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 sm:line-clamp-none">
                {currentImage.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-3 sm:mt-4 lg:mt-6">
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-3 sm:pb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 -mx-1 px-1">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setSelectedIndex(index);
                setIsZoomed(false);
              }}
              className={`relative shrink-0 rounded-md sm:rounded-lg overflow-hidden transition-all ${
                index === selectedIndex
                  ? 'ring-2 ring-violet-500 scale-105'
                  : 'ring-1 ring-slate-800 hover:ring-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-20 h-14 sm:w-28 sm:h-18 lg:w-32 lg:h-20">
                <LazyImage
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full"
                  objectFit="object-cover"
                />
              </div>
              
              {/* Active Indicator */}
              {index === selectedIndex && (
                <motion.div
                  layoutId="thumbnail-indicator"
                  className="absolute inset-0 bg-violet-500/20 border-2 border-violet-500 rounded-md sm:rounded-lg"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              {/* Thumbnail Number */}
              <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 bg-slate-900/80 text-white text-[9px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                {index + 1}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setIsFullscreen(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-slate-900/80 hover:bg-slate-800 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-10"
              aria-label="Close fullscreen"
            >
              <MdClose className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Fullscreen Image */}
            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.heading}
                    className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                      isZoomed ? 'scale-150' : 'scale-100'
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Fullscreen Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-1 sm:left-4 bg-slate-900/80 hover:bg-slate-800 text-white p-2 sm:p-3 lg:p-4 rounded-full backdrop-blur-sm transition-all hover:scale-110"
              >
                <MdChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-1 sm:right-4 bg-slate-900/80 hover:bg-slate-800 text-white p-2 sm:p-3 lg:p-4 rounded-full backdrop-blur-sm transition-all hover:scale-110"
              >
                <MdChevronRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              </button>

              {/* Fullscreen Counter + Info */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full backdrop-blur-sm text-xs sm:text-sm">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Compact Gallery Variant (for smaller displays)
export function CompactProjectGallery({ images, projectTitle }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative bg-slate-900 rounded-lg sm:rounded-xl overflow-hidden border border-slate-800">
        <div className="aspect-video">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <LazyImage
                src={images[selectedIndex].src}
                alt={images[selectedIndex].heading}
                className="w-full h-full"
                objectFit="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? 'bg-violet-500 w-4 sm:w-6'
                  : 'bg-slate-600 hover:bg-slate-500 w-1.5 sm:w-2'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Image Title */}
      <div className="mt-2 sm:mt-3 text-center">
        <p className="text-xs sm:text-sm font-medium text-white">
          {images[selectedIndex].heading}
        </p>
        <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 sm:mt-1">
          {selectedIndex + 1} of {images.length}
        </p>
      </div>
    </div>
  );
}