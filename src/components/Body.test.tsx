import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Body from "./Body";

// Mock Framer Motion
vi.mock("framer-motion", () => ({
  motion: {
    div: (props: any) => <div {...props} />,
    h1: (props: any) => <h1 {...props} />,
    h2: (props: any) => <h2 {...props} />,
    h3: (props: any) => <h3 {...props} />,
    p: (props: any) => <p {...props} />,
    img: (props: any) => <img {...props} />,
    a: (props: any) => <a {...props} />,
    li: (props: any) => <li {...props} />,
    footer: (props: any) => <footer {...props} />,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock the IntersectionObserver hook
vi.mock("react-intersection-observer", () => ({
  useInView: () => ({ ref: null, inView: true }),
}));

// Mock the components used in Body
vi.mock("./About", () => ({
  default: () => <div data-testid="about-component">Mocked About Component</div>
}));

vi.mock("./Experience", () => ({
  default: () => <div data-testid="experience-component">Mocked Experience Component</div>
}));

vi.mock("./Projects", () => ({
  default: () => <div data-testid="projects-component">Mocked Projects Component</div>
}));

vi.mock("./Contact", () => ({
  default: () => <div data-testid="contact-component">Mocked Contact Component</div>
}));

describe("Body component", () => {
  it("renders About component when page prop is 'About'", () => {
    render(<Body page="About" />);
    expect(screen.getByTestId("body")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByTestId("about-component")).toBeInTheDocument();
  });

  it("renders Experience component when page prop is 'Experience'", () => {
    render(<Body page="Experience" />);
    expect(screen.getByTestId("body")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("My Experience")).toBeInTheDocument();
    expect(screen.getByTestId("experience-component")).toBeInTheDocument();
  });

  it("renders Contact component when page prop is 'Contact'", () => {
    render(<Body page="Contact" />);
    expect(screen.getByTestId("body")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
    expect(screen.getByTestId("contact-component")).toBeInTheDocument();
  });
});
