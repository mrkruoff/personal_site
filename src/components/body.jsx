import Contact from "./contact";
import Experience from "./experience";
import About from "./about";
import { useEffect } from "react";

function Body({ page }) {
  return (
    <div className="flex justify-end p-4">
      {page === "about" && <About />}
      {page === "experience" && <Experience />}
      {page === "contact" && <Contact />}
    </div>
  );
}
export default Body;
