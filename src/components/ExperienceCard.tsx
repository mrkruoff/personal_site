import React from "react";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  skills?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  position,
  duration,
  location,
  skills = [],
}) => {
  return (
    <motion.article
      data-testid="experience-card"
      className="mono-card p-5 md:p-6 gradient-border rounded-lg"
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-3">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-mono-white">
            <span data-testid="company-name">{company}</span>
          </h3>
          <p data-testid="position" className="text-mono-300">
            {position}
          </p>
        </div>
        <div className="text-sm text-mono-500 md:text-right flex-shrink-0">
          <p data-testid="duration">{duration}</p>
          <p data-testid="location" className="text-mono-600">{location}</p>
        </div>
      </div>

      {skills.length > 0 && (
        <div className="mt-4 pt-4 border-t border-mono-800">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                data-testid="skill-tag"
                className="px-3 py-1 text-xs font-medium bg-mono-800 text-mono-300 rounded-full border border-mono-700 hover:border-mono-500 hover:text-mono-100 transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
};

export default ExperienceCard;
