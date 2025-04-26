import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => {
  const [page, setPage] = useState("About");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div data-testid="page" className="flex flex-col min-h-screen bg-dark-900 text-primary-50">
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "bg-dark-800/90 backdrop-blur-sm shadow-md" : "bg-transparent"
        } transition-colors duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center p-4 md:hidden">
          <h2 className="text-xl font-bold text-primary-400">Mark Ruoff</h2>
          <button 
            onClick={toggleMobileMenu} 
            className="text-primary-50 p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-primary-400 transition-all duration-300 mb-1.5 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-primary-400 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-primary-400 transition-all duration-300 mt-1.5 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </motion.div>

      <div className="flex flex-grow min-h-screen pt-14 md:pt-0">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-dark-900 z-40 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-4 pt-16">
                <Sidebar setPage={setPage} onNavClick={() => setIsMobileMenuOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:block">
          <Sidebar setPage={setPage} />
        </div>
        
        <motion.div 
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Body page={page} />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
