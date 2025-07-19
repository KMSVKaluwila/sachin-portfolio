import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaReact, FaDatabase, FaDownload, FaBullseye } from 'react-icons/fa';
import { SiC, SiAdobephotoshop } from 'react-icons/si';
import { HiOutlineLightningBolt, HiOutlineLightBulb } from 'react-icons/hi';

const HomePage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8 
      }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };
  
  // Text animation variants
  const greetingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  
  // Wave animation for greeting
  const waveAnimation = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 5
      }
    }
  };
  
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  // Wave animation for individual letters
  const waveLetterVariants = {
    initial: { y: 0 },
    animate: { 
      y: [0, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };
  
  // Hover animation for name letters
  const letterHoverVariants = {
    hover: {
      y: -5,
      color: "#8B5CF6",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };
  
  // Split text into individual characters for animation
  const greetingText = "Hi, I'm";
  const nameText = "Sachin Kaluwila";

  // Skill icon variants
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    },
    hover: { 
      scale: 1.1, 
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };

  // Card variants
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };

  // Technical skills data
  const technicalSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "SQL", icon: <FaDatabase className="text-[#4479A1]" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-[#31A8FF]" /> },
  ];

  // Featured projects data
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with product catalog, cart functionality, and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "Task Management App",
      description: "A beautiful and intuitive task management application with drag-and-drop functionality and real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
      codeLink: "#",
      demoLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays current conditions and forecasts with beautiful visualizations.",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      codeLink: "#",
      demoLink: "#"
    }
  ];

  // Highlight cards data
  const highlights = [
    {
      icon: <HiOutlineLightningBolt className="w-8 h-8 text-primary-500" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: <HiOutlineLightBulb className="w-8 h-8 text-primary-500" />,
      title: "Creative Solutions",
      description: "Innovative approaches to solve complex problems"
    },
    {
      icon: <FaBullseye className="w-8 h-8 text-primary-500" />,
      title: "Results Focused",
      description: "Committed to delivering measurable outcomes"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%)' }}></div>
      </div>
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div 
              className="text-center lg:text-left order-2 lg:order-1"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div>
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
                  variants={itemVariants}
                >
                  <motion.span 
                    className="block text-text-primary"
                    variants={greetingVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.span
                      variants={waveAnimation}
                      initial="initial"
                      animate="animate"
                      style={{ display: "inline-block" }}
                    >
                      {greetingText.split("").map((char, index) => (
                        <motion.span
                          key={`greeting-${index}`}
                          variants={index === 0 ? {...letterVariants, ...waveLetterVariants} : letterVariants}
                          style={{ display: "inline-block" }}
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.span>
                  </motion.span>
                  <motion.span 
                    className="block gradient-text"
                    variants={nameVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {nameText.split("").map((char, index) => (
                      <motion.span
                        key={`name-${index}`}
                        variants={letterVariants}
                        whileHover={letterHoverVariants.hover}
                        style={{ display: "inline-block", cursor: "default" }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-xl sm:text-2xl text-text-secondary mb-8 font-medium"
                  variants={itemVariants}
                >
                  Software Programmer & ICT Undergraduate
                </motion.p>
                <motion.p 
                  className="text-lg text-text-secondary mb-8 max-w-2xl"
                  variants={itemVariants}
                >
                  I am passionate about creating innovative solutions through code.
                </motion.p>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    <Link to="/projects" className="block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-button font-medium transition-all duration-200">
                      View My Work
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                  >
                    <Link to="/contact" className="block border border-primary-600 text-primary-400 hover:bg-primary-600/10 px-8 py-3 rounded-button font-medium transition-all duration-200">
                      Get In Touch
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              className="order-1 lg:order-2 flex justify-center"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              <motion.div 
                className="relative"
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  ease: "easeInOut" 
                }}
              >
                {/* Firefly Animation */}
                <div className="absolute inset-0">
                  {[...Array(25)].map((_, i) => {
                    // Generate random positions across the entire screen
                    const generateRandomPosition = () => ({
                      x: Math.random() * window.innerWidth,  // Full screen width
                      y: Math.random() * window.innerHeight  // Full screen height
                    });

                    // Generate 3 random positions for each firefly
                    const pos1 = generateRandomPosition();
                    const pos2 = generateRandomPosition();
                    const pos3 = generateRandomPosition();
                    
                    return (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        animate={{
                          x: [pos1.x, pos2.x, pos3.x, pos1.x],
                          y: [pos1.y, pos2.y, pos3.y, pos1.y],
                          scale: [0.8, 1.8, 0.8, 0.8],
                          opacity: [0.4, 0.9, 0.4, 0.4],
                          background: [
                            'rgba(96, 165, 250, 0.9)',
                            'rgba(139, 92, 246, 1)',
                            'rgba(96, 165, 250, 0.9)',
                            'rgba(96, 165, 250, 0.9)'
                          ]
                        }}
                        transition={{
                          duration: Math.random() * 15 + 20, // Random duration between 20-35 seconds
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: Math.random() * 10,  // More varied delays
                        }}
                        style={{
                          boxShadow: '0 0 15px 6px rgba(96, 165, 250, 0.6)',
                          filter: 'blur(1px)',
                          willChange: 'transform',  // Performance optimization
                          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 1) 0%, rgba(96, 165, 250, 0.9) 50%, transparent 100%)'
                        }}
                      />
                    );
                  })}
                </div>

                {/* Glow effects */}
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute -inset-2 bg-gradient-to-tr from-primary-400/20 via-secondary-500/20 to-primary-600/20 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.6, 0.4],
                    rotate: [0, 45, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 6,
                    ease: "easeInOut" 
                  }}
                />
                <div className="relative bg-surface/80 backdrop-blur-sm p-3 rounded-full shadow-xl">
                  {/* Animated gradient border */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-400 via-secondary-500 to-primary-600 animate-border-glow blur-sm opacity-75"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-secondary-500 to-primary-600 animate-border-glow"></div>
                  
                  <motion.div 
                    className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden relative z-10 bg-background"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <img 
                      src="/images/profile.jpg" 
                      alt="Sachin Kaluwila" 
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={`highlight-${index}`}
                className="bg-surface p-8 rounded-xl border border-surface-light/20 shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-text-primary">{highlight.title}</h3>
                <p className="text-text-secondary">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-heading font-bold mb-4 inline-flex items-center gap-2"
              variants={itemVariants}
            >
              <span className="text-primary-500">🛠️</span> Technical Skills
            </motion.h2>
            <motion.p 
              className="text-text-secondary max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Here are some of the technologies I work with on a regular basis
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={`skill-${index}`}
                className="flex flex-col items-center justify-center p-4 bg-background rounded-xl border border-surface-light/20"
                variants={itemVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="text-4xl mb-2"
                  variants={iconVariants}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-text-secondary text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-block"
            >
              <Link to="/skills" className="inline-flex items-center text-primary-400 hover:text-primary-500 font-medium">
                Want to see more of my technical expertise? <span className="ml-2">→</span> <span className="ml-1 underline">View All Skills</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-heading font-bold mb-4 inline-flex items-center gap-2"
              variants={itemVariants}
            >
              <span className="text-primary-500">🚀</span> Featured Projects
            </motion.h2>
            <motion.p 
              className="text-text-secondary max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Check out some of my recent work
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={`project-${index}`}
                className="bg-surface rounded-xl overflow-hidden border border-surface-light/20 shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                  <span className="text-5xl">📱</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={`tech-${index}-${techIndex}`}
                        className="text-xs px-2 py-1 bg-primary-500/10 text-primary-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.a
                      href={project.codeLink}
                      className="flex-1 text-center py-2 border border-primary-600 text-primary-400 hover:bg-primary-600/10 rounded-button text-sm font-medium transition-all duration-200"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      className="flex-1 text-center py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-button text-sm font-medium transition-all duration-200"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-block"
            >
              <Link to="/projects" className="inline-flex items-center text-primary-400 hover:text-primary-500 font-medium">
                Interested in seeing more of my work? <span className="ml-2">→</span> <span className="ml-1 underline">View All Projects</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="py-20 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-heading font-bold mb-4 inline-flex items-center gap-2"
              variants={itemVariants}
            >
              <span className="text-primary-500">🤝</span> Let's Connect
            </motion.h2>
            <motion.p 
              className="text-text-secondary mb-8"
              variants={itemVariants}
            >
              I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we can bring your ideas to life.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link to="/contact" className="block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-button font-medium transition-all duration-200">
                  Get In Touch
                </Link>
              </motion.div>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <a href="/resume.pdf" className="flex items-center justify-center gap-2 border border-primary-600 text-primary-400 hover:bg-primary-600/10 px-8 py-3 rounded-button font-medium transition-all duration-200">
                  <FaDownload /> Download Resume
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-6"
              variants={itemVariants}
            >
              <motion.a 
                href="https://linkedin.com/in/sachin-kaluwila" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-primary-400 transition-colors duration-200 text-2xl"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://github.com/sachin-kaluwila" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-primary-400 transition-colors duration-200 text-2xl"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="https://x.com/sachin_kaluwila" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-secondary hover:text-primary-400 transition-colors duration-200 text-2xl"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;