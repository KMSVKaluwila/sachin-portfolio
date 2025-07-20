import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';
import ProgressBar from './ProgressBar';

const SplashScreen = ({ finishLoading }) => {
  useEffect(() => {
    // Simulate loading time (2.5 seconds)
    const timer = setTimeout(() => {
      finishLoading();
    }, 2500);

    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-slate-900 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.5 }
      }}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          transition: { duration: 0.5 } 
        }}
      >
        <motion.div 
          className="w-32 h-32 mb-6 mx-auto relative"
          animate={{ 
            rotate: 360,
            transition: { 
              duration: 2,
              ease: "linear",
              repeat: Infinity
            }
          }}
        >
          <div className="absolute inset-0 rounded-full border-t-4 border-indigo-500 border-opacity-50"></div>
          <div className="absolute inset-0 rounded-full border-l-4 border-indigo-600"></div>
          <div className="absolute inset-0 rounded-full border-b-4 border-indigo-700"></div>
          <div className="absolute inset-0 rounded-full border-r-4 border-indigo-800"></div>
        </motion.div>

        <AnimatedLogo />
        
        <motion.p
          className="text-lg text-indigo-300 mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: { delay: 0.8, duration: 0.5 }
          }}
        >
          Welcome to my world
        </motion.p>
        
        <ProgressBar />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen; 