const ExperienceCard = ({ company, position, duration, location }) => {
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
    </div>
  );
};

export default ExperienceCard;
