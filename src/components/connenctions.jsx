import li from "../icons/LI-In-Bug.png";
import git from "../icons/github-mark-white.png";

function Connenctions() {
  return (
    <span class="flex flex-row space-x-4">
      <a href="https://www.linkedin.com/in/mark-ruoff-63624044/">
        <img
          src={li}
          alt="LinkedIn"
          class="object-scale-down"
          width="30"
          height="30"
        />
      </a>{" "}
      <a href="https://github.com/mrkruoff">
        <img
          src={git}
          alt="Github"
          class="object-scale-down"
          width="30"
          height="30"
        />
      </a>
    </span>
  );
}
export default Connenctions;
