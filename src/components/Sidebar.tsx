import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

type SidebarProps = {
  setPage: (page: string) => void;
  activePage?: string;
  onNavClick?: () => void;
};

type NavigationItem = {
  name: string;
  icon: React.ReactNode;
};

const navigation: NavigationItem[] = [
  { name: "About", icon: <FaUser className="text-lg" aria-hidden="true" /> },
  { name: "Experience", icon: <FaBriefcase className="text-lg" aria-hidden="true" /> },
  { name: "Contact", icon: <FaEnvelope className="text-lg" aria-hidden="true" /> },
];

const Sidebar: React.FC<SidebarProps> = ({ setPage, activePage = "About", onNavClick }) => {
  const handleClick = (page: string) => {
    setPage(page);
    if (onNavClick) onNavClick();
  };

  return (
    <div data-testid="sidebar" className="h-auto min-h-screen bg-mono-black md:w-64 lg:w-72 border-r border-mono-800">
      <nav className="text-mono-100 flex flex-col h-full" aria-label="Main navigation">
        <div className="p-6 border-b border-mono-800">
          <motion.h2
            className="text-2xl font-bold font-display gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Mark Ruoff
          </motion.h2>
          <motion.p
            className="text-sm text-mono-400 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Software Developer
          </motion.p>
        </div>
        <ul className="space-y-1 p-4" role="list">
          {navigation.map((item, index) => {
            const isActive = activePage === item.name;
            return (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <button
                  className={`w-full flex items-center gap-3 py-3 px-4 text-base rounded-lg transition-all duration-200 cursor-pointer relative
                    ${isActive
                      ? 'bg-mono-900 text-mono-white'
                      : 'hover:bg-mono-900/50 text-mono-300 hover:text-mono-100'
                    }
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink`}
                  onClick={() => handleClick(item.name)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {/* Active indicator - gradient line */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                      style={{ background: 'linear-gradient(180deg, #EC4899, #F97316)' }}
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className={`transition-colors duration-200 ${isActive ? 'text-mono-white' : 'text-mono-500'}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </button>
              </motion.li>
            );
          })}
        </ul>
        <div className="mt-auto p-4 border-t border-mono-800">
          <p className="text-xs text-mono-600">© {new Date().getFullYear()} Mark Ruoff</p>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
