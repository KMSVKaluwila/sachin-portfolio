import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.footer 
      className="bg-surface border-t border-surface-light/20 py-2 sm:py-3 mt-4 sm:mt-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Copyright */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:justify-between items-center text-text-muted text-xs"
          variants={itemVariants}
        >
          <div className="flex items-center mb-1 sm:mb-0">
            <Link to="/" className="text-sm sm:text-base font-heading font-bold gradient-text inline-block mr-1">
              SK
            </Link>
            <span className="text-sm sm:text-base font-heading">Sachin Kaluwila</span>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xs">© {new Date().getFullYear()} Sachin Kaluwila. All rights reserved.</p>
            <motion.p 
              className="mt-0.5 text-xs opacity-75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Built with React & Tailwind CSS
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;