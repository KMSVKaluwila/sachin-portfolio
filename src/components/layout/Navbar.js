import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getLinkClasses = (path) => {
    return `${isActive(path) 
      ? 'text-primary-400 font-semibold' 
      : 'text-text-secondary hover:text-text-primary'
    } px-3 py-2 text-sm font-medium transition-colors duration-200`;
  };

  const getMobileLinkClasses = (path) => {
    return `${isActive(path)
      ? 'text-primary-400 font-semibold'
      : 'text-text-secondary hover:text-text-primary'
    } block px-3 py-2 text-base font-medium transition-colors duration-200`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-surface-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-heading font-bold gradient-text">
              SK
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={getLinkClasses('/')}>Home</Link>
              <Link to="/skills" className={getLinkClasses('/skills')}>Skills</Link>
              <Link to="/projects" className={getLinkClasses('/projects')}>Projects</Link>
              <Link to="/blog" className={getLinkClasses('/blog')}>Blog</Link>
              <Link to="/contact" className={getLinkClasses('/contact')}>Contact</Link>
            </div>
          </div>

          {/* Social Links & CV Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://linkedin.com/in/sachin-kaluwila" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-400 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://github.com/sachin-kaluwila" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-400 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://x.com/sachin_kaluwila" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary-400 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-button text-sm font-medium transition-colors duration-200 micro-interaction">
              Download CV
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-text-secondary hover:text-text-primary p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-surface border-t border-surface-light/20`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className={getMobileLinkClasses('/')}>Home</Link>
          <Link to="/skills" className={getMobileLinkClasses('/skills')}>Skills</Link>
          <Link to="/projects" className={getMobileLinkClasses('/projects')}>Projects</Link>
          <Link to="/blog" className={getMobileLinkClasses('/blog')}>Blog</Link>
          <Link to="/contact" className={getMobileLinkClasses('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;