import WorkExperience from "./workExperience";
import Education from "./education";

function Experience() {
  return (
    <div datatest-id="experience-component" className="flex justify-center">
      <div className="flex flex-col  mt-4 m-4 ">
        <div className="w-full">
          <WorkExperience />
        </div>
        <div className="w-full mt-4">
          <Education />
        </div>
      </div>
    </div>
  );
}

export default Experience;
