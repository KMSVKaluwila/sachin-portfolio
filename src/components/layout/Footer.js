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
      className="bg-surface border-t border-surface-light/20 py-6 mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Copyright */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-center text-text-muted text-sm gap-4"
          variants={itemVariants}
        >
          <div className="flex items-center">
            <Link to="/" className="text-lg font-heading font-bold gradient-text inline-block mr-2">
              SK
            </Link>
            <span className="text-lg font-heading">Sachin Kaluwila</span>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xs sm:text-sm">© {new Date().getFullYear()} Sachin Kaluwila. All rights reserved.</p>
            <motion.p 
              className="text-xs sm:text-sm mt-1"
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