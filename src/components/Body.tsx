import { motion, AnimatePresence } from "framer-motion";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

type BodyProps = {
  page: string;
  setPage: (page: string) => void;
};

function Body({ page, setPage }: BodyProps) {
  return (
    <div data-testid="body" className="px-4 md:px-8 lg:px-12 text-mono-100 w-full max-w-6xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );

  function renderContent() {
    switch (page) {
      case "About": return <About onNavigateToContact={() => setPage("Contact")} />;
      case "Experience": return <Experience />;
      case "Contact": return <Contact />;
      default: return <About onNavigateToContact={() => setPage("Contact")} />;
    }
  }
}

export default Body;
