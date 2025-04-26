import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mark-ruoff-63624044/",
    icon: <FaLinkedinIn />
  },
  {
    name: "GitHub",
    url: "https://github.com/mrkruoff",
    icon: <FaGithub />
  }
];

const Connections: React.FC = () => {
  return (
    <div
      data-testid="connections-component"
      className="flex items-center space-x-5"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-300 hover:text-primary-400 transition-colors duration-300"
          whileHover={{ y: -2, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          aria-label={link.name}
        >
          <div className="text-xl md:text-2xl">
            {link.icon}
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default Connections;
