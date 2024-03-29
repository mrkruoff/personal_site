const ExperienceCard = ({ company, position, duration, location }) => {
  return (
    <div>
      <h3>{company}</h3>
      <p>{position}</p>
      <p>{duration}</p>
      <p>{location}</p>
    </div>
  );
};

export default ExperienceCard;
