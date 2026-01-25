import React from "react";
import { motion } from "framer-motion";
import Connections from "./Connections";
import { FaArrowUp } from "react-icons/fa";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <motion.footer
      data-testid="footer-component"
      className="sticky inset-x-0 bottom-0 bg-mono-black border-t border-mono-800 p-4 md:p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Connections />

        <div className="text-center text-mono-500 text-sm">
          <p>Designed & Built by Mark Ruoff &copy; {year}</p>
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="#main-content"
            className="w-10 h-10 rounded-lg bg-mono-900 border border-mono-700 flex items-center justify-center text-mono-400 hover:text-mono-100 hover:border-mono-500 transition-all duration-200"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll back to top"
          >
            <FaArrowUp className="text-sm" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
