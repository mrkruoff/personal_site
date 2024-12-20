import Connections from "./Connections";
import React from "react";

const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer
      data-testid="footer-component"
      className="absolute flex flex-row justify-between sticky inset-x-0 bottom-0 bg-emerald-950 p-2 md:p-4"
    >
      <Connections />
      <div className="text-center text-white">
        <p>Mark Ruoff &copy; {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
