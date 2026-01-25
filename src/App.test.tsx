import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";

// Define a type for component props
type ComponentProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

// Mock Framer Motion
vi.mock("framer-motion", () => ({
  motion: {
    div: (props: ComponentProps) => <div {...props} />,
    h1: (props: ComponentProps) => <h1 {...props} />,
    h2: (props: ComponentProps) => <h2 {...props} />,
    h3: (props: ComponentProps) => <h3 {...props} />,
    p: (props: ComponentProps) => <p {...props} />,
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
    li: (props: ComponentProps) => <li {...props} />,
    footer: (props: ComponentProps) => <footer {...props} />,
    main: (props: ComponentProps) => <main {...props} />,
    header: (props: ComponentProps) => <header {...props} />,
    section: (props: ComponentProps) => <section {...props} />,
    nav: (props: ComponentProps) => <nav {...props} />,
    button: (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => <button {...props} />,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock react-icons
vi.mock("react-icons/fa", () => ({
  FaUser: () => <span>UserIcon</span>,
  FaBriefcase: () => <span>BriefcaseIcon</span>,
  FaEnvelope: () => <span>EnvelopeIcon</span>,
  FaCode: () => <span>CodeIcon</span>,
  FaServer: () => <span>ServerIcon</span>,
  FaDatabase: () => <span>DatabaseIcon</span>,
  FaCloud: () => <span>CloudIcon</span>,
  FaArrowRight: () => <span>ArrowIcon</span>,
  FaArrowUp: () => <span>ArrowUpIcon</span>,
  FaLinkedin: () => <span>LinkedInIcon</span>,
  FaGithub: () => <span>GithubIcon</span>,
  FaLinkedinIn: () => <span>LinkedInIcon</span>,
  FaMapMarkerAlt: () => <span>MapIcon</span>,
  FaExternalLinkAlt: () => <span>ExternalIcon</span>,
}));

vi.mock("./components/Body", () => ({
  default: ({ page, setPage }: { page: string; setPage: (page: string) => void }) => (
    <div data-testid="body-component">
      Body Component showing {page} page
      <button onClick={() => setPage("Contact")}>Navigate to Contact</button>
    </div>
  ),
}));

vi.mock("./components/Footer", () => ({
  default: () => <div data-testid="footer-component">Footer Component</div>,
}));

describe("App component", () => {
  it("renders the main layout components", () => {
    render(<App />);

    // Check that main components are rendered
    expect(screen.getByTestId("page")).toBeInTheDocument();
    expect(screen.getByTestId("body-component")).toBeInTheDocument();
    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  });

  it("renders the top navigation with name", () => {
    render(<App />);
    expect(screen.getByText("Mark Ruoff")).toBeInTheDocument();
  });

  it("renders navigation items", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Contact" })).toBeInTheDocument();
  });

  it("initially renders the About page", () => {
    render(<App />);
    expect(screen.getByText("Body Component showing About page")).toBeInTheDocument();
  });

  it("includes skip to content link for accessibility", () => {
    render(<App />);
    expect(screen.getByText("Skip to main content")).toBeInTheDocument();
  });
});