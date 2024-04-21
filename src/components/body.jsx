import Experience from "./experience";
import About from "./about";

function Body({ page }) {
  const headerTitle = page === "About" ? "About Me" : "My Experience";

  return (
    <div data-testid="body" className="p-4 md:h-full text-white w-5/6">
      <header data-testid="header" className="mb-4 bg-emerald-950">
        <h1 className="md:text-2xl">
          <strong>{headerTitle}</strong>
        </h1>
      </header>
      {page === "About" && <About />}
      {page === "Experience" && <Experience />}
    </div>
  );
}
export default Body;
