import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaDatabase,
  FaBrain,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaUserTie,
  FaPalette,
  FaChartLine,
  FaNode,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFireAlt,
} from "react-icons/fa";
import {
  SiC,
  SiAdobephotoshop,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

const SkillsPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  const technicalSkills = [
    {
      name: "HTML/CSS",
      level: 90,
      icon: (
        <div className="flex gap-1">
          <FaHtml5 className="text-[#E34F26] text-xl" />
          <FaCss3Alt className="text-[#1572B6] text-xl" />
        </div>
      ),
    },
    {
      name: "JavaScript",
      level: 85,
      icon: <FaJs className="text-[#F7DF1E] text-xl" />,
    },
    {
      name: "React",
      level: 80,
      icon: <FaReact className="text-[#61DAFB] text-xl" />,
    },
    {
      name: "Python",
      level: 75,
      icon: <FaPython className="text-[#3776AB] text-xl" />,
    },
    {
      name: "Java",
      level: 70,
      icon: <FaJava className="text-[#007396] text-xl" />,
    },
    { name: "C", level: 65, icon: <SiC className="text-[#A8B9CC] text-xl" /> },
    {
      name: "SQL",
      level: 70,
      icon: <FaDatabase className="text-[#4479A1] text-xl" />,
    },
    {
      name: "Photoshop",
      level: 75,
      icon: <SiAdobephotoshop className="text-[#31A8FF] text-xl" />,
    },
  ];

  const softSkills = [
    {
      name: "Problem Solving",
      level: 85,
      icon: <FaBrain className="text-primary-400 text-xl" />,
    },
    {
      name: "Communication",
      level: 80,
      icon: <FaUsers className="text-primary-400 text-xl" />,
    },
    {
      name: "Teamwork",
      level: 90,
      icon: <FaUsers className="text-primary-400 text-xl" />,
    },
    {
      name: "Time Management",
      level: 85,
      icon: <FaClock className="text-primary-400 text-xl" />,
    },
    {
      name: "Adaptability",
      level: 80,
      icon: <FaLightbulb className="text-primary-400 text-xl" />,
    },
    {
      name: "Leadership",
      level: 75,
      icon: <FaUserTie className="text-primary-400 text-xl" />,
    },
    {
      name: "Creativity",
      level: 85,
      icon: <FaPalette className="text-primary-400 text-xl" />,
    },
    {
      name: "Critical Thinking",
      level: 80,
      icon: <FaChartLine className="text-primary-400 text-xl" />,
    },
  ];

  const toolsAndTech = [
    {
      name: "JavaScript",
      icon: <FaJs className="text-[#F7DF1E] text-3xl" />,
      category: "Language",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-[#3178C6] text-3xl" />,
      category: "Language",
    },
    {
      name: "React",
      icon: <FaReact className="text-[#61DAFB] text-3xl" />,
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: <FaNode className="text-[#339933] text-3xl" />,
      category: "Backend",
    },
    {
      name: "Express",
      icon: <SiExpress className="text-[#000000] text-3xl" />,
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-[#47A248] text-3xl" />,
      category: "Database",
    },
    {
      name: "SQL",
      icon: (
        <div className="flex gap-2">
          <SiPostgresql className="text-[#4169E1] text-3xl" />
          <SiMysql className="text-[#4479A1] text-3xl" />
        </div>
      ),
      category: "Database",
    },
    {
      name: "Python",
      icon: <FaPython className="text-[#3776AB] text-3xl" />,
      category: "Language",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-[#F05032] text-3xl" />,
      category: "Tool",
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-[#2496ED] text-3xl" />,
      category: "DevOps",
    },
    {
      name: "AWS",
      icon: <FaAws className="text-[#FF9900] text-3xl" />,
      category: "Cloud",
    },
    {
      name: "Firebase",
      icon: <FaFireAlt className="text-[#FFCA28] text-3xl" />,
      category: "Cloud",
    },
  ];

  const SkillBar = ({ name, level, icon }) => {
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
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2">
            {icon}
            <span className="text-text-primary font-medium">{name}</span>
          </div>
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
            A comprehensive overview of my technical abilities and soft skills
            that I've developed throughout my academic and professional journey.
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
                <SkillBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
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
                <SkillBar
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
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
                  <h4 className="text-lg font-medium">
                    BHSc (Hons) in Health Information & Communication Technology
                  </h4>
                  <p className="text-text-secondary">
                    Gampaha Wickramarachchi University of Indigenous Medicine,
                    Sri Lanka
                  </p>
                  <p className="text-text-muted text-sm">2022 - Present</p>
                </motion.div>
                <motion.div
                  className="border-l-2 border-primary-500 pl-4 py-1"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <h4 className="text-lg font-medium">Advanced Level (A/L)</h4>
                  <p className="text-text-secondary">
                    Walisinghe Harischandra College, Anuradhapura
                  </p>
                  <p className="text-text-muted text-sm">Completed</p>
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
                  <h4 className="text-lg font-medium">
                    Full Stack Web Development
                  </h4>
                  <p className="text-text-secondary">Udemy</p>
                  <p className="text-text-muted text-sm">2022</p>
                </motion.div>
                <motion.div
                  className="border-l-2 border-secondary-500 pl-4 py-1"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <h4 className="text-lg font-medium">
                    React - The Complete Guide
                  </h4>
                  <p className="text-text-secondary">Udemy</p>
                  <p className="text-text-muted text-sm">2021</p>
                </motion.div>
                <motion.div
                  className="border-l-2 border-secondary-500 pl-4 py-1"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <h4 className="text-lg font-medium">
                    Python for Data Science
                  </h4>
                  <p className="text-text-secondary">Coursera</p>
                  <p className="text-text-muted text-sm">2021</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tools & Technologies */}
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
            Tools & Technologies
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={containerVariants}
          >
            {toolsAndTech.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-surface/50 backdrop-blur-sm rounded-xl p-4 border border-surface-light/20 shadow-lg flex flex-col items-center gap-3 hover:bg-surface/70 transition-all duration-300"
                variants={gridItemVariants}
                custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {tool.icon}
                <div className="text-center">
                  <p className="text-text-primary font-medium">{tool.name}</p>
                  <p className="text-text-secondary text-sm">{tool.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
