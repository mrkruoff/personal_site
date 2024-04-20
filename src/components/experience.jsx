import WorkExperience from "./workExperience";
import Education from "./education";
// function Experience() {
//   return (
//     <>
//       <strong className="flex justify-center mr-32">
//         For specific details please check out my&nbsp;
//         <a
//           className="underline"
//           href="https://www.linkedin.com/in/mark-ruoff-63624044/"
//         >
//           LinkedIn
//         </a>
//       </strong>
//       <div className="sm:flex sm:flex-row sm:mt-4 sm:m-4">
//         <div className="w-full sm:w-1/2 ml-16">
//           <WorkExperience />
//         </div>
//         <div className="w-full sm:w-1/2">
//           <Education />
//         </div>
//       </div>
//     </>
//   );
// }
// export default Experience;

function Experience() {
  return (
    <>
      <div className="">
        <strong className="flex justify-center mr-32 w-full">
          For specific details please check out my&nbsp;
          <a
            className="underline"
            href="https://www.linkedin.com/in/mark-ruoff-63624044/"
          >
            LinkedIn
          </a>
        </strong>
        <div className="flex flex-row mt-4 m-4 ">
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
