// import Experience from "./Experience";
import About from "./About";
import Experience from "./Experience";

type BodyProps = {
  page: string;
};

function Body({ page }: BodyProps) {
  const headerTitle = page === "About" ? "About Me" : "My Experience";

  return (
    <div data-testid="body" className="p-4 text-white w-full flex-grow">
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
