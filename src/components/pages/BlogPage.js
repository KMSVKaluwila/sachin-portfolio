import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPage = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state effectively.',
      date: 'June 15, 2023',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1000&auto=format&fit=crop',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Responsive Layouts with Tailwind CSS',
      excerpt: 'Discover how to create beautiful, responsive designs quickly using the utility-first approach of Tailwind CSS.',
      date: 'May 22, 2023',
      category: 'CSS',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1000&auto=format&fit=crop',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Introduction to Node.js and Express',
      excerpt: 'A beginner-friendly guide to setting up a server with Node.js and Express for your web applications.',
      date: 'April 10, 2023',
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1000&auto=format&fit=crop',
      readTime: '8 min read'
    },
    {
      id: 4,
      title: 'Understanding JavaScript Promises',
      excerpt: 'Dive deep into JavaScript Promises and learn how to handle asynchronous operations effectively.',
      date: 'March 5, 2023',
      category: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1000&auto=format&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Optimizing React Performance',
      excerpt: 'Learn advanced techniques to improve the performance of your React applications and provide a better user experience.',
      date: 'February 18, 2023',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1000&auto=format&fit=crop',
      readTime: '10 min read'
    },
    {
      id: 6,
      title: 'Introduction to TypeScript',
      excerpt: 'Discover how TypeScript can enhance your JavaScript development with static typing and improved tooling.',
      date: 'January 30, 2023',
      category: 'TypeScript',
      image: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1000&auto=format&fit=crop',
      readTime: '7 min read'
    },
  ];

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
            <span className="gradient-text">Blog & Insights</span>
          </motion.h1>
          <motion.p 
            className="text-text-secondary max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Explore my thoughts, tutorials, and insights on web development, programming, and technology.
          </motion.p>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          className="mb-16"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-surface/50 backdrop-blur-sm rounded-xl overflow-hidden border border-surface-light/20 shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <motion.img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                  alt="Featured Post" 
                  className="w-full h-64 md:h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop';
                    e.target.onError = null;
                  }}
                />
              </div>
              <motion.div 
                className="p-6 md:w-1/2 md:flex md:flex-col md:justify-center"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex items-center mb-4"
                  variants={itemVariants}
                >
                  <motion.span 
                    className="bg-primary-600/20 text-primary-400 text-xs px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    Featured
                  </motion.span>
                  <span className="mx-2 text-text-muted">•</span>
                  <span className="text-text-muted text-sm">July 5, 2023</span>
                  <span className="mx-2 text-text-muted">•</span>
                  <span className="text-text-muted text-sm">12 min read</span>
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl font-heading font-bold mb-4 text-text-primary"
                  variants={itemVariants}
                >
                  The Future of Web Development: Trends to Watch in 2023
                </motion.h2>
                <motion.p 
                  className="text-text-secondary mb-6"
                  variants={itemVariants}
                >
                  Explore the emerging technologies and methodologies that are shaping the future of web development, from WebAssembly to JAMstack architecture and beyond.
                </motion.p>
                <motion.div variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/blog/featured" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-button text-sm font-medium transition-colors duration-200 inline-block">
                      Read Full Article
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id} 
              className="bg-surface/50 backdrop-blur-sm rounded-xl overflow-hidden border border-surface-light/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary-500/50"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <motion.img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop';
                    e.target.onError = null;
                  }}
                />
                <motion.div 
                  className="absolute top-4 left-4"
                  variants={itemVariants}
                >
                  <motion.span 
                    className="bg-surface/80 backdrop-blur-sm text-text-primary text-xs px-2 py-1 rounded"
                    whileHover={{ scale: 1.1 }}
                  >
                    {post.category}
                  </motion.span>
                </motion.div>
              </div>
              <motion.div 
                className="p-6"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex justify-between items-center mb-3 text-text-muted text-sm"
                  variants={itemVariants}
                >
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </motion.div>
                <motion.h3 
                  className="text-xl font-heading font-bold mb-2 text-text-primary"
                  variants={itemVariants}
                >
                  {post.title}
                </motion.h3>
                <motion.p 
                  className="text-text-secondary mb-4"
                  variants={itemVariants}
                >
                  {post.excerpt}
                </motion.p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link to={`/blog/${post.id}`} className="text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors duration-200">
                    Read More →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div 
          className="mt-16 bg-surface/50 backdrop-blur-sm rounded-xl p-8 border border-surface-light/20 shadow-lg"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <motion.div 
            className="text-center mb-6"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-heading font-bold mb-2"
              variants={itemVariants}
            >
              Subscribe to My Newsletter
            </motion.h2>
            <motion.p 
              className="text-text-secondary"
              variants={itemVariants}
            >
              Get the latest articles, tutorials, and updates delivered to your inbox.
            </motion.p>
          </motion.div>
          <motion.form 
            className="max-w-md mx-auto"
            variants={itemVariants}
          >
            <div className="flex">
              <motion.input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 rounded-l-button bg-background border border-surface-light/30 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                whileFocus={{ scale: 1.02 }}
                required
              />
              <motion.button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-r-button font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPage;