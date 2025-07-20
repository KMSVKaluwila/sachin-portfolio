import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Text to animate
  const text = "SACHIN";
  
  return (
    <motion.div 
      className="flex items-center justify-center"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl font-bold inline-block"
          style={{ 
            color: index % 2 === 0 ? '#818cf8' : '#ffffff',
            textShadow: '0 0 10px rgba(129, 140, 248, 0.5)'
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedLogo; 