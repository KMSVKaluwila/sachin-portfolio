import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      link: '#',
      github: 'https://github.com/sachin-kaluwila/ecommerce-platform'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with team collaboration features.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: 'https://github.com/sachin-kaluwila/task-manager'
    },
    {
      id: 3,
      title: 'Weather Forecast Dashboard',
      description: 'A weather application that provides real-time forecasts, historical data, and interactive maps.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1000&auto=format&fit=crop',
      category: 'web',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'HTML/CSS'],
      link: '#',
      github: 'https://github.com/sachin-kaluwila/weather-dashboard'
    },
    {
      id: 4,
      title: 'Fitness Tracking System',
      description: 'A comprehensive fitness application for tracking workouts, nutrition, and progress with data visualization.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Fit API'],
      link: '#',
      github: 'https://github.com/sachin-kaluwila/fitness-tracker'
    },
    {
      id: 5,
      title: 'AI Image Generator',
      description: 'An application that uses machine learning to generate unique images based on text prompts.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
      category: 'ai',
      technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Flask'],
      link: '#',
      github: 'https://github.com/sachin-kaluwila/ai-image-generator'
    },
    {
      id: 6,
      title: 'Blockchain Voting System',
      description: 'A secure and transparent voting system built on blockchain technology for organizational elections.',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000&auto=format&fit=crop',
      category: 'blockchain',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
      link: '#',
      github: 'https://github.com/sachin-kaluwila/blockchain-voting'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <motion.div 
      className="py-16 md:py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl font-heading font-bold mb-4"
            variants={itemVariants}
          >
            <span className="gradient-text">Projects Gallery</span>
          </motion.h1>
          <motion.p 
            className="text-text-secondary max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Explore my portfolio of projects showcasing my skills in web development, mobile applications, AI, and blockchain technology.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <motion.button 
            onClick={() => setFilter('all')} 
            className={`px-6 py-2 rounded-button text-sm font-medium transition-colors duration-200 ${filter === 'all' ? 'bg-primary-600 text-white' : 'bg-surface text-text-secondary hover:bg-surface-light/20'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Projects
          </motion.button>
          <motion.button 
            onClick={() => setFilter('web')} 
            className={`px-6 py-2 rounded-button text-sm font-medium transition-colors duration-200 ${filter === 'web' ? 'bg-primary-600 text-white' : 'bg-surface text-text-secondary hover:bg-surface-light/20'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Web
          </motion.button>
          <motion.button 
            onClick={() => setFilter('mobile')} 
            className={`px-6 py-2 rounded-button text-sm font-medium transition-colors duration-200 ${filter === 'mobile' ? 'bg-primary-600 text-white' : 'bg-surface text-text-secondary hover:bg-surface-light/20'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mobile
          </motion.button>
          <motion.button 
            onClick={() => setFilter('ai')} 
            className={`px-6 py-2 rounded-button text-sm font-medium transition-colors duration-200 ${filter === 'ai' ? 'bg-primary-600 text-white' : 'bg-surface text-text-secondary hover:bg-surface-light/20'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            AI
          </motion.button>
          <motion.button 
            onClick={() => setFilter('blockchain')} 
            className={`px-6 py-2 rounded-button text-sm font-medium transition-colors duration-200 ${filter === 'blockchain' ? 'bg-primary-600 text-white' : 'bg-surface text-text-secondary hover:bg-surface-light/20'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Blockchain
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="bg-surface/50 backdrop-blur-sm rounded-xl overflow-hidden border border-surface-light/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary-500/50"
                variants={projectVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop';
                      e.target.onError = null;
                    }}
                  />
                </div>
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-heading font-bold mb-2 text-text-primary"
                    variants={itemVariants}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-text-secondary mb-4"
                    variants={itemVariants}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    variants={itemVariants}
                  >
                    {project.technologies.map((tech, index) => (
                      <motion.span 
                        key={index} 
                        className="bg-surface-light/20 text-text-secondary text-xs px-2 py-1 rounded"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.div 
                    className="flex justify-between"
                    variants={itemVariants}
                  >
                    <motion.a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      View Demo
                    </motion.a>
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-text-secondary hover:text-text-primary font-medium text-sm transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      GitHub
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;