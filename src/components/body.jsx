import Experience from "./experience";
import About from "./about";

function Body({ page }) {
  return (
    <div className="p-4 h-full text-white w-5/6">
      {page === "about" && <About />}
      {page === "experience" && <Experience />}
    </div>
  );
}
export default Body;
