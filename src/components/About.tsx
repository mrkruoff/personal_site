import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import me from "../assets/me.jpg";
import { FaCode, FaServer, FaDatabase, FaCloud, FaArrowRight } from "react-icons/fa";

type AboutProps = {
  onNavigateToContact: () => void;
};

const skills = [
  { name: "Frontend", icon: <FaCode className="text-lg" aria-hidden="true" />, techs: ["React", "Next.js", "TypeScript", "Angular"] },
  { name: "Backend", icon: <FaServer className="text-lg" aria-hidden="true" />, techs: ["Java", "Spring Boot", "Python", "Node.js"] },
  { name: "Database", icon: <FaDatabase className="text-lg" aria-hidden="true" />, techs: ["PostgreSQL", "MongoDB", "MySQL", "Elasticsearch"] },
  { name: "Cloud", icon: <FaCloud className="text-lg" aria-hidden="true" />, techs: ["AWS", "Docker", "Kubernetes", "Lambda"] },
];

const About = ({ onNavigateToContact }: AboutProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div data-testid="about-component" className="py-8 md:py-12" ref={ref}>
      {/* Hero Section - Swiss Style */}
      <motion.section
        className="mb-16 md:mb-24"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mono-white mb-6 leading-tight">
              Full-Stack<br />
              <span className="gradient-text">Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-mono-300 mb-8 leading-relaxed max-w-lg">
              Building reliable, user-focused solutions from low-level systems to modern web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                onClick={onNavigateToContact}
                className="btn-gradient inline-flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
                <FaArrowRight className="text-sm" />
              </motion.button>
              <motion.a
                href="https://github.com/mrkruoff/personal_site"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Source
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Gradient border effect */}
              <div
                className="absolute inset-0 -m-1 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #EC4899, #F97316)',
                  padding: '2px',
                }}
                aria-hidden="true"
              >
                <div className="w-full h-full bg-mono-black rounded-2xl"></div>
              </div>
              <motion.img
                src={me}
                alt="Mark Ruoff - Software Developer based in Arlington, VA"
                className="relative rounded-2xl w-64 md:w-80 lg:w-96 object-cover border border-mono-700"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Text */}
      <motion.section
        className="mb-16 md:mb-24"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="max-w-3xl">
          <h2 className="text-sm font-medium text-mono-500 uppercase tracking-wider mb-4">About</h2>
          <div className="space-y-4 text-mono-200 text-lg leading-relaxed">
            <p>
              I'm <span className="text-mono-white font-medium">Mark Ruoff</span>, a software developer based in Arlington, VA specializing in full-stack development.
            </p>
            <p>
              With a Bachelor's in Computer Science from Oregon State University, I've built a career spanning from low-level telecommunications systems to modern web applications. My experience ranges from packet-level protocols to crafting e-commerce experiences.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Grid - Bento Style */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="text-sm font-medium text-mono-500 uppercase tracking-wider mb-6">
          Expertise
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mono-card p-6 gradient-border rounded-xl group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="w-10 h-10 rounded-lg bg-mono-800 flex items-center justify-center mb-4 group-hover:bg-mono-700 transition-colors">
                <span className="text-mono-400 group-hover:text-mono-200 transition-colors">{skill.icon}</span>
              </div>
              <h3 className="font-semibold text-mono-white mb-3">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-mono-400 bg-mono-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
