import { useState } from "react";
import WorkExperience from "./workExperience";
import Education from "./education";

function Experience() {
  const [subsection, setSubsection] = useState("work");

  return (
    <>
      <div className="flex flex-col shrink-0">
        <strong className="flex justify-center mr-32">
          For specific details please check out my&nbsp;
          <a
            className="underline"
            href="https://www.linkedin.com/in/mark-ruoff-63624044/"
          >
            LinkedIn
          </a>
        </strong>
        <div className="flex flex-row mt-4 m-4">
          <div className="w-1/2 ml-16">
            <WorkExperience />
          </div>
          <div className="w-1/2 ">
            <Education />
          </div>
        </div>
      </div>
    </>
  );
}
export default Experience;
