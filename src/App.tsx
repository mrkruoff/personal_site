import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

type NavigationItem = {
  name: string;
  icon: React.ReactNode;
};

const navigation: NavigationItem[] = [
  { name: "About", icon: <FaUser className="text-sm" aria-hidden="true" /> },
  { name: "Experience", icon: <FaBriefcase className="text-sm" aria-hidden="true" /> },
  { name: "Contact", icon: <FaEnvelope className="text-sm" aria-hidden="true" /> },
];

const App = () => {
  const [page, setPage] = useState("About");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (pageName: string) => {
    setPage(pageName);
    setIsMobileMenuOpen(false);
  };

  return (
    <div data-testid="page" className="flex flex-col min-h-screen bg-mono-black text-mono-100">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top Navigation Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-mono-black/95 backdrop-blur-sm border-b border-mono-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Name */}
            <motion.h1
              className="text-xl md:text-2xl font-bold gradient-text cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setPage("About")}
            >
              Mark Ruoff
            </motion.h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1" aria-label="Main navigation">
              {navigation.map((item) => {
                const isActive = page === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.name)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                        ? "text-mono-white bg-mono-800"
                        : "text-mono-400 hover:text-mono-100 hover:bg-mono-900"
                      }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-mono-100 p-2 rounded-md"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className={`w-6 h-0.5 bg-mono-white transition-all duration-300 mb-1.5 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-mono-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`w-6 h-0.5 bg-mono-white transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden border-t border-mono-800"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="px-4 py-4 space-y-2">
                {navigation.map((item) => {
                  const isActive = page === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.name)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-200 ${isActive
                          ? "text-mono-white bg-mono-800"
                          : "text-mono-400 hover:text-mono-100 hover:bg-mono-900"
                        }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <motion.main
        id="main-content"
        className="flex-grow pt-20 md:pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        role="main"
      >
        <Body page={page} setPage={setPage} />
      </motion.main>

      <Footer />
    </div>
  );
};

export default App;
