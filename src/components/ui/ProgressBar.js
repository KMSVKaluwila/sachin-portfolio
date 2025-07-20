import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 to 100 in 2 seconds
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 20); // 2000ms / 100 steps = 20ms per step

      return () => clearInterval(interval);
    }, 300); // Start after a short delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-64 mt-6">
      <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-indigo-500"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>
      <motion.div 
        className="text-sm text-indigo-300 text-right mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {progress}%
      </motion.div>
    </div>
  );
};

export default ProgressBar; 