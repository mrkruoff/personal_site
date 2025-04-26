import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import me from "../assets/me.jpg";
import { FaCode, FaServer, FaMobile, FaDatabase } from "react-icons/fa";

const skills = [
  { name: "Frontend Development", icon: <FaCode className="text-xl" />, description: "React, TypeScript, Tailwind CSS" },
  { name: "Backend Development", icon: <FaServer className="text-xl" />, description: "Node.js, Express, RESTful APIs" },
  { name: "Mobile Development", icon: <FaMobile className="text-xl" />, description: "React Native, iOS, Android" },
  { name: "Database Design", icon: <FaDatabase className="text-xl" />, description: "SQL, MongoDB, Data Modeling" },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div data-testid="about-component" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <motion.div 
        className="md:col-span-2 space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <motion.div variants={itemVariants} className="prose prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-primary-100">
            Hello! I'm <span className="font-semibold text-primary-300">Mark Ruoff</span>, a passionate software developer specializing in full-stack development based in Seattle, WA. With a Bachelor's Degree in Computer Science from Oregon State University, I've built a career spanning from low-level telecommunications systems to modern web applications.
          </p>
          
          <p className="text-lg leading-relaxed text-primary-100">
            My experience ranges from working directly with packet-level protocols to crafting seamless e-commerce experiences. I bring a deep understanding of technology across all layers to deliver reliable, user-focused solutions that solve real-world problems.
          </p>
          
          <p className="text-lg leading-relaxed text-primary-100">
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors. I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-8">
          <h3 className="text-xl font-semibold text-primary-300 mb-4">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="bg-dark-700 p-4 rounded-lg border border-dark-600 hover:border-primary-500 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-2">
                  <span className="mr-3 text-primary-400">{skill.icon}</span>
                  <h4 className="font-medium">{skill.name}</h4>
                </div>
                <p className="text-sm text-primary-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="md:col-span-1 flex flex-col items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative mb-6">
          <div className="absolute inset-0 -m-3 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-xl blur-md opacity-20"></div>
          <motion.img
            src={me}
            alt="Mark Ruoff"
            className="relative rounded-xl w-full max-w-md object-cover shadow-xl border-2 border-dark-600"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
        </div>
        
        <div className="text-center space-y-3 w-full">
          <h3 className="text-lg font-medium text-primary-300">Let's Connect</h3>
          <div className="flex justify-center space-x-4">
            <motion.a 
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-md text-white font-medium transition-colors duration-300"
              href="mailto:ruoff.mark@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Me
            </motion.a>
            
            <motion.a 
              className="px-4 py-2 bg-dark-700 hover:bg-dark-600 border border-dark-600 rounded-md text-primary-50 font-medium transition-colors duration-300"
              href="https://github.com/mrkruoff/personal_site"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Source
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
