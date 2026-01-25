import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" aria-hidden="true" />,
      label: "Email",
      value: "ruoff.mark@gmail.com",
      link: "mailto:ruoff.mark@gmail.com",
      description: "The best way to reach me directly",
      isExternal: false,
    },
    {
      icon: <FaLinkedin className="text-xl" aria-hidden="true" />,
      label: "LinkedIn",
      value: "Mark Ruoff",
      link: "https://www.linkedin.com/in/mark-ruoff-63624044/",
      description: "Let's connect professionally",
      isExternal: true,
    },
    {
      icon: <FaGithub className="text-xl" aria-hidden="true" />,
      label: "GitHub",
      value: "mrkruoff",
      link: "https://github.com/mrkruoff",
      description: "Check out my code and projects",
      isExternal: true,
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" aria-hidden="true" />,
      label: "Location",
      value: "Arlington, VA",
      description: "Where I'm currently based",
      isExternal: false,
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div data-testid="contact-component" className="py-8 md:py-12" ref={ref}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-mono-white mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-mono-400 text-lg max-w-2xl mb-8">
          I'm always open to discussing new opportunities, collaborations, or simply connecting.
        </p>
        <motion.a
          href="mailto:ruoff.mark@gmail.com"
          className="btn-gradient inline-flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send an Email
          <FaArrowRight className="text-sm" />
        </motion.a>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        className="text-sm font-medium text-mono-500 uppercase tracking-wider mb-6"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Contact Details
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mono-card p-5 gradient-border rounded-xl group"
            whileHover={{ y: -2 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-mono-800 flex items-center justify-center text-mono-400 group-hover:bg-mono-700 group-hover:text-mono-200 transition-colors flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-xs text-mono-500 uppercase tracking-wider mb-1">{item.label}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-mono-100 hover:text-mono-white transition-colors inline-flex items-center gap-2 group/link"
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                  >
                    <span className="truncate">{item.value}</span>
                    {item.isExternal && (
                      <FaExternalLinkAlt className="text-xs text-mono-500 group-hover/link:text-mono-400 flex-shrink-0" aria-label="(opens in new tab)" />
                    )}
                  </a>
                ) : (
                  <p className="text-mono-100">{item.value}</p>
                )}
                <p className="text-mono-500 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;