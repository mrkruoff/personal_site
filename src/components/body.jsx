import Contact from "./contact";
import Experience from "./experience";
import About from "./about";

function Body({ page }) {
  return (
    <div className="p-4">
      {page === "about" && <About />}
      {page === "experience" && <Experience />}
      {page === "contact" && <Contact />}
    </div>
  );
}
export default Body;
