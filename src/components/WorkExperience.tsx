import ExperienceCard from "./ExperienceCard";
import React from "react";
import { motion } from "framer-motion";

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      company: "Capital One",
      position: "Lead Software Engineer",
      duration: "August 2025 - Present",
      location: "DC Metro",
      skills: ["Java", "AWS"],
    },
    {
      company: "Point.me",
      position: "Senior Software Engineer",
      duration: "July 2024 - July 2025",
      location: "Remote",
      skills: ["Next.js", "React", "Spring Boot"],
    },
    {
      company: "Point.me",
      position: "Full Stack Software Engineer",
      duration: "September 2023 - July 2024",
      location: "Remote",
      skills: ["Next.js", "React", "Spring Boot", "Java"],
    },
    {
      company: "Zulily",
      position: "Software Engineer II",
      duration: "October 2021 - September 2023",
      location: "Seattle, WA",
      skills: ["Java", "Python", "AWS", "MongoDB", "BigQuery", "Angular"],
    },
    {
      company: "Opanga Networks",
      position: "Software Engineer",
      duration: "September 2018 - October 2021",
      location: "Seattle, WA",
      skills: ["C", "Spring Boot", "React", "Python", "Elasticsearch", "Kibana"],
    },
    {
      company: "Forms on Fire",
      position: "Application Developer",
      duration: "January 2018 - August 2018",
      location: "Seattle, WA",
      skills: ["JavaScript", "PHP", "MySQL", "Google Apps Scripts"],
    },
  ];

  return (
    <div
      data-testid="work-experience-component"
      className="flex flex-col"
    >
      <h2 id="work-heading" className="text-xl md:text-2xl font-bold text-mono-white mb-8">
        Work Experience
      </h2>

      {/* Timeline container */}
      <div className="relative">
        {/* Timeline line - mono style */}
        <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-mono-800 hidden md:block" aria-hidden="true"></div>

        <div className="space-y-4 md:pl-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}-${exp.duration}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute left-0 md:-left-9 w-2 h-2 rounded-full bg-mono-500 mt-5"
                aria-hidden="true"
              ></div>
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
