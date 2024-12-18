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
        company="Point.me"
        position="Senior Software Engineer"
        duration="July 2024 - Present"
        location="Remote"
      />
      <ExperienceCard
        company="Point.me"
        position="Full Stack Software Engineer"
        duration="September 2023 - July 2024"
        location="Remote"
      />
      <ExperienceCard
        company="Zulily"
        position="Software Engineer II"
        duration="October 2021 - September 2023"
        location="Seattle, WA"
      />
      <ExperienceCard
        company="Opanga Networks"
        position="Software Engineer II"
        duration="September 2018 - October 2021"
        location="Seattle, WA"
      />
      <ExperienceCard
        company="Forms on Fire"
        position="Application Developer"
        duration="January 2018 - August 2018"
        location="Seattle, WA"
      />
    </div>
  );
};

export default WorkExperience;
