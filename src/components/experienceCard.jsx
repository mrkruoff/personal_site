const ExperienceCard = ({ company, position, duration, location }) => {
  return (
    <div className="md:text-xl">
      <h3>
        <strong>{company}</strong>
      </h3>
      <p className="italic">{position}</p>
      <p>{duration}</p>
      <p>{location}</p>
    </div>
  );
};

export default ExperienceCard;
