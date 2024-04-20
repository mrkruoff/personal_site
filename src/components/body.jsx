import Experience from "./experience";
import About from "./about";
import Footer from "./footer";

function Body({ page }) {
  return (
    <div data-testid="body" className="p-4 md:h-full text-white w-5/6">
      {page === "about" && <About />}
      {page === "experience" && <Experience />}
      <Footer />
    </div>
  );
}
export default Body;
