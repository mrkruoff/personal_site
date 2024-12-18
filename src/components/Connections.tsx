import li from "../assets/LI-In-Bug.png";
import git from "../assets/github-mark-white.png";
import React from "react";

const Connections: React.FC = () => {
  return (
    <span
      data-testid="connections-component"
      className="flex flex-row space-x-4"
    >
      <a
        href="https://www.linkedin.com/in/mark-ruoff-63624044/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={li}
          alt="LinkedIn"
          className="object-scale-down"
          width={30}
          height={30}
        />
      </a>
      <a
        href="https://github.com/mrkruoff"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={git}
          alt="Github"
          className="object-scale-down"
          width={30}
          height={30}
        />
      </a>
    </span>
  );
};

export default Connections;
