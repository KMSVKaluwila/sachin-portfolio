import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

const SkillsPage = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };
  
  const technicalSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 70 },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Teamwork', level: 95 },
    { name: 'Time Management', level: 80 },
    { name: 'Adaptability', level: 85 },
    { name: 'Leadership', level: 75 },
  ];

  const SkillBar = ({ name, level }) => {
    const controls = useAnimation();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    
    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [controls, isInView]);
    
    return (
      <motion.div 
        className="mb-6"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={itemVariants}
      >
        <div className="flex justify-between mb-1">
          <span className="text-text-primary font-medium">{name}</span>
          <span className="text-text-secondary">{level}%</span>
        </div>
        <div className="h-2 bg-surface-light/30 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" 
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          ></motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1 
            className="text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h1>
          <motion.p 
            className="text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A comprehensive overview of my technical abilities and soft skills that I've developed throughout my academic and professional journey.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Technical Skills */}
          <motion.div 
            className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-surface-light/20 shadow-lg"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.h2 
              className="text-2xl font-heading font-bold mb-6 text-primary-400"
              variants={itemVariants}
            >
              Technical Skills
            </motion.h2>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div 
            className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-surface-light/20 shadow-lg"
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <motion.h2 
              className="text-2xl font-heading font-bold mb-6 text-secondary-400"
              variants={itemVariants}
            >
              Soft Skills
            </motion.h2>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Education & Certifications */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-heading font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Education & Certifications
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div 
              className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-surface-light/20 shadow-lg"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.h3 
                className="text-xl font-heading font-bold mb-4 text-primary-400"
                variants={itemVariants}
              >
                Education
              </motion.h3>
              <div className="space-y-6">
                <motion.div 
                  className="border-l-2 border-primary-500 pl-4 py-1"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <h4 className="text-lg font-medium">BSc in Information & Communication Technology</h4>
                  <p className="text-text-secondary">University of Kelaniya</p>
                  <p className="text-text-muted text-sm">2020 - Present</p>
                </motion.div>
                <motion.div 
                  className="border-l-2 border-primary-500 pl-4 py-1"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <h4 className="text-lg font-medium">Advanced Level</h4>
                  <p className="text-text-secondary">Royal College</p>
                  <p className="text-text-muted text-sm">2017 - 2019</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div 
              className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-surface-light/20 shadow-lg"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.h3 
                className="text-xl font-heading font-bold mb-4 text-secondary-400"
                variants={itemVariants}
              >
                Certifications
              </motion.h3>
              <div className="space-y-6">
                <motion.div 
                  className="border-l-2 border-secondary-500 pl-4 py-1"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <h4 className="text-lg font-medium">Full Stack Web Development</h4>
                  <p className="text-text-secondary">Udemy</p>
                  <p className="text-text-muted text-sm">2022</p>
                </motion.div>
                <motion.div 
                  className="border-l-2 border-secondary-500 pl-4 py-1"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <h4 className="text-lg font-medium">React - The Complete Guide</h4>
                  <p className="text-text-secondary">Udemy</p>
                  <p className="text-text-muted text-sm">2021</p>
                </motion.div>
                <motion.div 
                  className="border-l-2 border-secondary-500 pl-4 py-1"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <h4 className="text-lg font-medium">Python for Data Science</h4>
                  <p className="text-text-secondary">Coursera</p>
                  <p className="text-text-muted text-sm">2021</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-heading font-bold mb-8 text-center"
            variants={itemVariants}
          >
            Tools & Technologies
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL',
              'Python', 'Git', 'Docker', 'AWS', 'Firebase', 'TypeScript'
            ].map((tech, index) => (
              <motion.div 
                key={index} 
                className="bg-surface/50 backdrop-blur-sm rounded-lg p-4 text-center border border-surface-light/20 shadow-md hover:shadow-lg transition-all duration-200 hover:border-primary-500/50"
                custom={index}
                variants={gridItemVariants}
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <span className="text-text-primary font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;