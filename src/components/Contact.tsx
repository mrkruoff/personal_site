import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      value: "ruoff.mark@gmail.com",
      link: "mailto:ruoff.mark@gmail.com",
      description: "The best way to reach me directly"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      value: "Mark Ruoff",
      link: "https://www.linkedin.com/in/mark-ruoff-63624044/",
      description: "Let's connect professionally"
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      value: "mrkruoff",
      link: "https://github.com/mrkruoff",
      description: "Check out my code and projects"
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      label: "Location",
      value: "Seattle, WA",
      description: "Where I'm currently based"
    },
  ];

  return (
    <div data-testid="contact-component" className="max-w-4xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-primary-300 mb-4">Get In Touch</h3>
        <p className="text-primary-100 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((item, index) => (
          <motion.div 
            key={index}
            className="bg-dark-800 rounded-lg border border-dark-600 p-6 hover:border-primary-500 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(2, 132, 199, 0.2)" }}
          >
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center text-primary-400 mr-4">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-primary-300">{item.label}</p>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-lg font-medium text-primary-100 hover:text-primary-400 transition-colors"
                    target={item.label === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg font-medium text-primary-100">{item.value}</p>
                )}
              </div>
            </div>
            <p className="text-primary-300 text-sm pl-16">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p className="text-primary-300 mb-6">Prefer sending an email directly?</p>
        <motion.a 
          href="mailto:ruoff.mark@gmail.com" 
          className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg text-white font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope className="mr-2" />
          Email Me
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Contact;