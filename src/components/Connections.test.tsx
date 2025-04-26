import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Connections from "./Connections";

// Mock React Icons
vi.mock("react-icons/fa", () => ({
  FaGithub: () => <span data-testid="github-icon">GithubIcon</span>,
  FaLinkedinIn: () => <span data-testid="linkedin-icon">LinkedinIcon</span>,
  FaTwitter: () => <span data-testid="twitter-icon">TwitterIcon</span>,
  FaDev: () => <span data-testid="dev-icon">DevIcon</span>,
}));

describe("Connections component", () => {
  it("renders the connections component with correct social links", () => {
    render(<Connections />);
    
    // Check if component is rendered
    expect(screen.getByTestId("connections-component")).toBeInTheDocument();
    
    // Check for LinkedIn link
    const linkedInLink = screen.getByRole("link", { name: "LinkedIn" });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute("href", "https://www.linkedin.com/in/mark-ruoff-63624044/");
    
    // Check for GitHub link
    const gitHubLink = screen.getByRole("link", { name: "GitHub" });
    expect(gitHubLink).toBeInTheDocument();
    expect(gitHubLink).toHaveAttribute("href", "https://github.com/mrkruoff");
  });
  
  it("has the correct attributes for accessibility", () => {
    render(<Connections />);
    
    // Check all links have target="_blank" and rel="noopener noreferrer"
    const allLinks = screen.getAllByRole("link");
    allLinks.forEach(link => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
