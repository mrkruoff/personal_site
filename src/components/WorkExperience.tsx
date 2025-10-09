import ExperienceCard from "./ExperienceCard";
import React from "react";

const WorkExperience: React.FC = () => {
  return (
    <div
      data-testid="work-experience-component"
      className="flex flex-col space-y-8"
    >
      <h1 className="text-xl md:text-2xl">
        <strong>Work Experience</strong>
      </h1>
      <ExperienceCard
        company="Capital One"
        position="Lead Software Engineer"
        duration="August 2025 - Present"
        location="DC Metro"
        skills={["Java", "AWS"]}
      />
      <ExperienceCard
        company="Point.me"
        position="Senior Software Engineer"
        duration="July 2024 - July 2025"
        location="Remote"
        skills={["Next.js", "React", "Spring Boot"]}
      />
      <ExperienceCard
        company="Point.me"
        position="Full Stack Software Engineer"
        duration="September 2023 - July 2024"
        location="Remote"
        skills={["Next.js", "React", "Spring Boot", "Java"]}
      />
      <ExperienceCard
        company="Zulily"
        position="Software Engineer II"
        duration="October 2021 - September 2023"
        location="Seattle, WA"
        skills={["Java", "Python", "AWS", "MongoDB", "BigQuery", "Angular"]}
      />
      <ExperienceCard
        company="Opanga Networks"
        position="Software Engineer"
        duration="September 2018 - October 2021"
        location="Seattle, WA"
        skills={["C", "Spring Boot", "React", "Python", "Elasticsearch", "Kibana"]}
      />
      <ExperienceCard
        company="Forms on Fire"
        position="Application Developer"
        duration="January 2018 - August 2018"
        location="Seattle, WA"
        skills={["JavaScript", "PHP", "MySQL", "Google Apps Scripts"]}
      />
    </div>
  );
};

export default WorkExperience;
