import React from "react";

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
    <div data-testid="experience-card" className="text-l md:text-xl">
      <h3>
        <strong data-testid="company-name">{company}</strong>
      </h3>
      <p data-testid="position" className="italic">
        {position}
      </p>
      <p data-testid="duration">{duration}</p>
      <p data-testid="location">{location}</p>
      {skills.length > 0 && (
        <div className="mt-2">
          <p className="text-sm text-primary-300">Skills:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                data-testid="skill-tag"
                className="px-2 py-1 text-xs bg-dark-700 text-primary-300 rounded-md border border-dark-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
