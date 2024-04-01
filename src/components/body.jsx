import Contact from "./contact";
import Experience from "./experience";
import About from "./about";

function Body({ page }) {
  return (
    <div className="p-4 h-full w-5/6">
      {page === "about" && <About />}
      {page === "experience" && <Experience />}
      {page === "contact" && <Contact />}
    </div>
  );
}
export default Body;
