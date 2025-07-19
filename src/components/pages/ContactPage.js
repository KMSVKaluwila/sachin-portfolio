import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

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
            <span className="gradient-text">Contact & Connect</span>
          </motion.h1>
          <motion.p 
            className="text-text-secondary max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Have a question or want to work together? Feel free to reach out using the form below or connect with me on social media.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          {/* Contact Form */}
          <motion.div 
            className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-surface-light/20 shadow-lg"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.h2 
              className="text-2xl font-heading font-bold mb-6 text-primary-400"
              variants={itemVariants}
            >
              Send Me a Message
            </motion.h2>
            
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div 
                  className="mb-6 p-4 bg-success-500/20 border border-success-500/30 rounded-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <p className="text-success-500 font-medium">Your message has been sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.form 
              onSubmit={handleSubmit}
              variants={itemVariants}
            >
              <motion.div 
                className="mb-4"
                variants={itemVariants}
              >
                <label htmlFor="name" className="block text-text-secondary mb-2">Name</label>
                <motion.input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-surface-light/30 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </motion.div>
              
              <motion.div 
                className="mb-4"
                variants={itemVariants}
              >
                <label htmlFor="email" className="block text-text-secondary mb-2">Email</label>
                <motion.input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-surface-light/30 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </motion.div>
              
              <motion.div 
                className="mb-4"
                variants={itemVariants}
              >
                <label htmlFor="subject" className="block text-text-secondary mb-2">Subject</label>
                <motion.input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-surface-light/30 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  whileFocus={{ scale: 1.02 }}
                  required
                />
              </motion.div>
              
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
                <motion.textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  className="w-full px-4 py-2 rounded-lg bg-background border border-surface-light/30 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  whileFocus={{ scale: 1.02 }}
                  required
                ></motion.textarea>
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-button font-medium transition-colors duration-200 w-full flex justify-center items-center"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </motion.button>
            </motion.form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div variants={containerVariants}>
            <motion.div 
              className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-surface-light/20 shadow-lg mb-8"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.h2 
                className="text-2xl font-heading font-bold mb-6 text-secondary-400"
                variants={itemVariants}
              >
                Contact Information
              </motion.h2>
              
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="bg-surface-light/20 p-3 rounded-full mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-text-primary font-medium">Email</h3>
                    <motion.a 
                      href="mailto:kmsvsachin@gmail.com" 
                      className="text-text-secondary hover:text-primary-400 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      kmsvsachin@gmail.com
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="bg-surface-light/20 p-3 rounded-full mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-text-primary font-medium">Phone</h3>
                    <motion.a 
                      href="tel:+94766402239" 
                      className="text-text-secondary hover:text-primary-400 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      +94 76 640 2239
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="bg-surface-light/20 p-3 rounded-full mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-text-primary font-medium">Location</h3>
                    <p className="text-text-secondary">Anuradhapura, Sri Lanka</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Social Media */}
            <motion.div 
              className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-surface-light/20 shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.h2 
                className="text-2xl font-heading font-bold mb-6 text-secondary-400"
                variants={itemVariants}
              >
                Connect With Me
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={itemVariants}
              >
                <motion.a 
                  href="https://linkedin.com/in/sachin-kaluwila" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 bg-surface-light/20 rounded-lg hover:bg-primary-600/20 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="text-text-primary">LinkedIn</span>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/sachin-kaluwila" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 bg-surface-light/20 rounded-lg hover:bg-primary-600/20 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-primary">GitHub</span>
                </motion.a>
                
                <motion.a 
                  href="https://x.com/sachin_kaluwila" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 bg-surface-light/20 rounded-lg hover:bg-primary-600/20 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="text-text-primary">X (Twitter)</span>
                </motion.a>
                
                <motion.a 
                  href="https://instagram.com/sachin.kaluwila" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 bg-surface-light/20 rounded-lg hover:bg-primary-600/20 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 text-primary-400 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-primary">Instagram</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;