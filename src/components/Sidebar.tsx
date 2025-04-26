import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

type SidebarProps = {
  setPage: (page: string) => void;
  onNavClick?: () => void;
};

type NavigationItem = {
  name: string;
  icon: React.ReactNode;
};

const navigation: NavigationItem[] = [
  { name: "About", icon: <FaUser className="text-lg" /> },
  { name: "Experience", icon: <FaBriefcase className="text-lg" /> },
  { name: "Contact", icon: <FaEnvelope className="text-lg" /> },
];

const Sidebar: React.FC<SidebarProps> = ({ setPage, onNavClick }) => {
  const handleClick = (page: string) => {
    setPage(page);
    if (onNavClick) onNavClick();
  };

  return (
    <div data-testid="sidebar" className="h-auto bg-dark-800 md:w-64 lg:w-72 border-r border-dark-600">
      <nav className="text-primary-50 flex flex-col h-full">
        <div className="p-6 border-b border-dark-600">
          <motion.h2 
            className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mark Ruoff
          </motion.h2>
          <motion.p 
            className="text-sm text-primary-300 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Software Developer
          </motion.p>
        </div>
        <ul className="space-y-1 p-4">
          {navigation.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <button
                className="w-full flex items-center gap-3 py-3 px-4 text-base rounded-lg hover:bg-dark-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 cursor-pointer"
                onClick={() => handleClick(item.name)}
              >
                <span className="text-primary-400">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </motion.li>
          ))}
        </ul>
        <div className="mt-auto p-4 border-t border-dark-600">
          <p className="text-xs text-primary-300">© {new Date().getFullYear()} Mark Ruoff</p>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
