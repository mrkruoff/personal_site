import { motion } from "framer-motion";

const Education = () => {
  return (
    <div data-testid="education-component" className="flex flex-col">
      <h2 id="education-heading" className="text-xl md:text-2xl font-bold text-mono-white mb-8">
        Education
      </h2>

      <motion.article
        className="mono-card p-5 md:p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-mono-white">
              Oregon State University
            </h3>
            <p className="text-mono-300">Bachelor's of Science in Computer Science</p>
          </div>
          <div className="text-sm text-mono-500 md:text-right flex-shrink-0">
            <time dateTime="2018-03">Graduated March 2018</time>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default Education;
