import Education from "./Education";
import WorkExperience from "./WorkExperience";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div data-testid="experience-component" className="py-8 md:py-12" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-mono-white mb-4">
          My <span className="gradient-text">Experience</span>
        </h1>
        <p className="text-mono-400 text-lg mb-12 max-w-2xl">
          A journey through software engineering, from telecommunications to modern web applications.
        </p>
      </motion.div>

      <div className="flex flex-col space-y-16 w-full">
        <section className="w-full" aria-labelledby="work-heading">
          <WorkExperience />
        </section>
        <section className="w-full" aria-labelledby="education-heading">
          <Education />
        </section>
      </div>
    </div>
  );
}

export default Experience;
