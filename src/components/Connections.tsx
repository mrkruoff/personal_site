import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mark-ruoff-63624044/",
    icon: <FaLinkedinIn aria-hidden="true" />
  },
  {
    name: "GitHub",
    url: "https://github.com/mrkruoff",
    icon: <FaGithub aria-hidden="true" />
  }
];

const Connections: React.FC = () => {
  return (
    <div
      data-testid="connections-component"
      className="flex items-center space-x-3"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-mono-900 border border-mono-700 flex items-center justify-center text-mono-400 hover:text-mono-100 hover:border-mono-500 transition-all duration-200"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          aria-label={`Visit ${link.name} profile (opens in new tab)`}
        >
          <span className="text-lg">
            {link.icon}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default Connections;
