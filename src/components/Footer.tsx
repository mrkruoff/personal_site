import React from "react";
import { motion } from "framer-motion";
import Connections from "./Connections";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <motion.footer
      data-testid="footer-component"
      className="sticky inset-x-0 bottom-0 bg-dark-800 border-t border-dark-600 p-4 md:p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Connections />
        
        <div className="text-center text-primary-300 text-sm">
          <p>Designed & Built by Mark Ruoff &copy; {year}</p>
        </div>
        
        <div className="flex items-center gap-4">
          <motion.a 
            href="#top" 
            className="text-primary-400 hover:text-primary-300 transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              aria-label="Scroll to top"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
