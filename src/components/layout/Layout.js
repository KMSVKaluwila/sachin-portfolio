import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-background text-text-primary font-sans min-h-screen flex flex-col relative overflow-hidden">
      {/* Floating Animation in Top Right Corner */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(var(--color-primary-500), 0.2) 0%, rgba(var(--color-primary-500), 0) 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="w-[400px] h-[400px] absolute top-20 right-20 opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(var(--color-secondary-400), 0.3) 0%, rgba(var(--color-secondary-400), 0) 70%)',
            filter: 'blur(30px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            y: [-20, 0, -20],
            x: [20, 0, 20],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="w-[300px] h-[300px] absolute top-40 right-40 opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(var(--color-primary-400), 0.25) 0%, rgba(var(--color-primary-400), 0) 70%)',
            filter: 'blur(25px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [-45, 45, -45],
            y: [-10, 10, -10],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>

      <Navbar />
      <main className="pt-16 flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;