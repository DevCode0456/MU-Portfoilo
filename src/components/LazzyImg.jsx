// src/components/LazyImage.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = 'aspect-video',
  objectFit = 'object-cover',
  priority = false,
  onLoad,
  ...props 
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (!src) return;

    // Reset states when src changes
    setIsLoading(true);
    setHasError(false);

    // Create new image to preload
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
      if (onLoad) onLoad();
    };

    img.onerror = () => {
      setHasError(true);
      setIsLoading(false);
    };

    // Start loading
    if (priority) {
      // Load immediately for priority images
      img.src = src;
    } else {
      // Use Intersection Observer for lazy loading
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              img.src = src;
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: '50px', // Start loading 50px before image enters viewport
        }
      );

      // Create a placeholder element to observe
      const placeholder = document.createElement('div');
      placeholder.setAttribute('data-src', src);
      observer.observe(placeholder);

      // Start loading immediately for now (fallback)
      img.src = src;

      return () => {
        observer.disconnect();
      };
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, priority, onLoad]);

  if (hasError) {
    return (
      <div className={`${aspectRatio} ${className} bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center`}>
        <div className="text-center p-6">
          <svg className="w-12 h-12 mx-auto mb-2 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm text-slate-500">Failed to load image</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${aspectRatio} ${className} overflow-hidden bg-slate-900`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-slate-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Animated Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-transparent to-slate-800/50" />
          
          {/* Icon Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-16 h-16 text-slate-700 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Loading Spinner */}
          <div className="absolute top-4 right-4">
            <motion.div
              className="w-6 h-6 border-2 border-slate-700 border-t-violet-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}

      {/* Actual Image */}
      {imageSrc && (
        <motion.img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full ${objectFit} ${className}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: isLoading ? 0 : 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          loading={priority ? 'eager' : 'lazy'}
          {...props}
        />
      )}
    </div>
  );
}

// Thumbnail variant for smaller images
export function LazyThumbnail({ src, alt, className = '', ...props }) {
  return (
    <LazyImage
      src={src}
      alt={alt}
      className={className}
      aspectRatio="aspect-square"
      {...props}
    />
  );
}

// Background image variant
export function LazyBackgroundImage({ src, children, className = '', ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    img.src = src;

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-900">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      )}
      {imageSrc && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          {...props}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
