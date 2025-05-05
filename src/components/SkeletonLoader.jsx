import { motion } from 'framer-motion';

const SkeletonLoader = ({ className = '', count = 1 }) => {
  const shimmer = {
    initial: { backgroundPosition: '-200% 0' },
    animate: { 
      backgroundPosition: ['-200% 0', '200% 0'],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear'
      }
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] ${className}`}
          variants={shimmer}
          initial="initial"
          animate="animate"
          role="status"
          aria-label="Loading"
        />
      ))}
    </>
  );
};

export default SkeletonLoader; 