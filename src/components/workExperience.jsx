import ExperienceCard from "./experienceCard";

const workExperience = () => {
  return (
    <div className="space-y-2">
      <ExperienceCard
        company="Point.me"
        position="Software Engineer"
        duration="September 2023 - Present"
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
        duration="September 2018 - September 2021"
        location="Seattle, WA"
      />
      <ExperienceCard
        company="Forms on Fire"
        position="Application Developer"
        duration="January 2018 - August 2029"
        location="Seattle, WA"
      />
    </div>
  );
};

export default workExperience;
