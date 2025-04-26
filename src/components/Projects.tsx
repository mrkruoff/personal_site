import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  skills: string[];
  github?: string;
  live?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Personal Website",
    description: "My personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a responsive design, animations, and modern UI components.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/mrkruoff/personal_site",
    live: "https://markruoff.com",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with product catalog, shopping cart, user authentication, and payment processing.",
    skills: ["Node.js", "Express", "MongoDB", "React", "Redux"],
    github: "https://github.com/mrkruoff",
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and deadlines with customizable workflows and team collaboration features.",
    skills: ["React", "Firebase", "Tailwind CSS", "Redux"],
    github: "https://github.com/mrkruoff",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current conditions and forecasts based on location, with interactive charts and maps.",
    skills: ["JavaScript", "Weather API", "Chart.js", "Leaflet"],
    github: "https://github.com/mrkruoff",
  }
];

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div data-testid="projects-component" className="pb-16">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={ref}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-dark-800 rounded-xl overflow-hidden border border-dark-600 hover:border-primary-500 transition-all duration-300 h-full flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(2, 132, 199, 0.2)" }}
          >
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-primary-300 mb-2">{project.title}</h3>
              <p className="text-primary-100 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-2 py-1 rounded-full bg-primary-900/30 text-primary-300 border border-primary-700/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-4 p-4 border-t border-dark-600">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <FaGithub className="text-xl" />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Live demo for ${project.title}`}
                >
                  <FaExternalLinkAlt className="text-xl" />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;