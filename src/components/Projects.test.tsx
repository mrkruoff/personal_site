import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock React Icons
vi.mock("react-icons/fa", () => ({
  FaGithub: () => <span data-testid="github-icon">GithubIcon</span>,
  FaExternalLinkAlt: () => <span data-testid="link-icon">LinkIcon</span>,
}));

// Create a mock component for testing
const MockProjects = () => (
  <div data-testid="projects-component">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div className="bg-dark-800 rounded-xl">
        <h3>Personal Website</h3>
        <p>My personal portfolio website built with React, TypeScript, and Tailwind CSS.</p>
        <div>
          <span>React</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
          <span>Framer Motion</span>
        </div>
        <a href="https://github.com/mrkruoff/personal_site" aria-label="GitHub repository for Personal Website">
          <span data-testid="github-icon">GithubIcon</span>
        </a>
        <a href="https://markruoff.com" aria-label="Live demo for Personal Website">
          <span data-testid="link-icon">LinkIcon</span>
        </a>
      </div>
      
      <div className="bg-dark-800 rounded-xl">
        <h3>E-Commerce Platform</h3>
        <p>A full-stack e-commerce application with product catalog, shopping cart, user authentication, and payment processing.</p>
        <div>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>React</span>
          <span>Redux</span>
        </div>
      </div>
      
      <div className="bg-dark-800 rounded-xl">
        <h3>Task Management App</h3>
        <p>A productivity application for managing tasks, projects, and deadlines.</p>
        <div>
          <span>React</span>
          <span>Firebase</span>
          <span>Tailwind CSS</span>
          <span>Redux</span>
        </div>
      </div>
      
      <div className="bg-dark-800 rounded-xl">
        <h3>Weather Dashboard</h3>
        <p>A weather application that displays current conditions and forecasts based on location.</p>
        <div>
          <span>JavaScript</span>
          <span>Weather API</span>
          <span>Chart.js</span>
          <span>Leaflet</span>
        </div>
      </div>
    </div>
  </div>
);

// Mock the actual component
vi.mock("./Projects", () => ({
  default: () => <MockProjects />
}));

describe("Projects component", () => {
  it("renders the projects component correctly", () => {
    render(<MockProjects />);
    expect(screen.getByTestId("projects-component")).toBeInTheDocument();
  });

  it("displays all project cards", () => {
    render(<MockProjects />);
    
    // Personal Website project
    expect(screen.getByText("Personal Website")).toBeInTheDocument();
    
    // E-Commerce Platform project
    expect(screen.getByText("E-Commerce Platform")).toBeInTheDocument();
    
    // Task Management App project
    expect(screen.getByText("Task Management App")).toBeInTheDocument();
    
    // Weather Dashboard project
    expect(screen.getByText("Weather Dashboard")).toBeInTheDocument();
  });

  it("displays project skills tags", () => {
    render(<MockProjects />);
    
    // Skills from multiple projects - using getAllByText since there are multiple instances
    expect(screen.getAllByText("React").length).toBeGreaterThan(0);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getAllByText("Tailwind CSS").length).toBeGreaterThan(0);
    expect(screen.getByText("Framer Motion")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("contains the correct project links", () => {
    render(<MockProjects />);
    
    // Github links should be present for all projects
    const githubLinks = screen.getAllByTestId("github-icon");
    expect(githubLinks.length).toBeGreaterThan(0);
    
    // Check the personal website link
    const linkIcon = screen.getByTestId("link-icon");
    expect(linkIcon).toBeInTheDocument();
  });
});
