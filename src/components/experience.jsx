import { useState } from "react";
import WorkExperience from "./workExperience";
import Education from "./education";

function Experience() {
  const [subsection, setSubsection] = useState("work");

  return (
    <>
      <strong className="fixed">
        For specific details please check out my{" "}
        <a href="https://www.linkedin.com/in/mark-ruoff-63624044/">LinkedIn</a>{" "}
        page
      </strong>
      <div className="flex flex-col shrink-0">
        <div className="flex justify-center mt-4">
          <button
            className={`mr-2 ${
              subsection === "work" ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setSubsection("work")}
          >
            Work
          </button>
          <button
            className={`ml-2 ${
              subsection === "education" ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setSubsection("education")}
          >
            Education
          </button>
        </div>
        <div className="flex-none  justify-center mt-4">
          {subsection === "work" && <WorkExperience />}
          {subsection === "education" && <Education />}
        </div>
      </div>
    </>
  );
}
export default Experience;
