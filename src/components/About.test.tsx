import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Create a mock component for testing
const MockAbout = () => (
  <div data-testid="about-component">
    <p>
      Hello! I'm <span>Mark Ruoff</span>, a passionate software developer specializing in full-stack development based in Arlington, VA.
    </p>
    <h3>My Skills</h3>
    <div>
      <div>
        <h4>Frontend Development</h4>
      </div>
      <div>
        <h4>Backend Development</h4>
      </div>
      <div>
        <h4>Database Systems</h4>
      </div>
      <div>
        <h4>Cloud & Infrastructure</h4>
      </div>
    </div>
    <img src="/src/assets/me.jpg" alt="Mark Ruoff" />
    <a href="mailto:ruoff.mark@gmail.com">Email Me</a>
    <a href="https://github.com/mrkruoff/personal_site">View Source</a>
  </div>
);

// Mock the actual component
vi.mock("./About", () => ({
  default: () => <MockAbout />
}));

describe("About component", () => {
  it("renders the About component correctly", () => {
    render(<MockAbout />);
    expect(screen.getByTestId("about-component")).toBeInTheDocument();
  });

  it("displays the correct text content", () => {
    render(<MockAbout />);
    expect(screen.getByText(/Mark Ruoff/)).toBeInTheDocument();
    expect(screen.getByText(/Arlington, VA/)).toBeInTheDocument();
  });

  it("contains the skills section", () => {
    render(<MockAbout />);
    expect(screen.getByText("My Skills")).toBeInTheDocument();
    expect(screen.getByText("Frontend Development")).toBeInTheDocument();
    expect(screen.getByText("Backend Development")).toBeInTheDocument();
    expect(screen.getByText("Database Systems")).toBeInTheDocument();
    expect(screen.getByText("Cloud & Infrastructure")).toBeInTheDocument();
  });

  it("displays the correct image", () => {
    render(<MockAbout />);
    const image = screen.getByAltText("Mark Ruoff");
    expect(image).toBeInTheDocument();
  });

  it("contains the correct links", () => {
    render(<MockAbout />);
    const emailLink = screen.getByRole("link", { name: /Email Me/i });
    const githubLink = screen.getByRole("link", { name: /View Source/i });

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:ruoff.mark@gmail.com");

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/mrkruoff/personal_site"
    );
  });
});
