import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

type BodyProps = {
  page: string;
};

function Body({ page }: BodyProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getPageTitle = () => {
    switch (page) {
      case "About": return "About Me";
      case "Experience": return "My Experience";
      case "Contact": return "Get In Touch";
      default: return "About Me";
    }
  };

  const renderContent = () => {
    switch (page) {
      case "About": return <About />;
      case "Experience": return <Experience />;
      case "Contact": return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div data-testid="body" className="p-4 pt-8 md:p-8 lg:p-12 text-primary-50 w-full flex-grow max-w-6xl mx-auto">
      <header 
        data-testid="header" 
        ref={ref}
        className="mb-8 md:mb-12 border-b border-dark-600 pb-4"
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {getPageTitle()}
        </motion.h1>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="animate-slide-up"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Body;
