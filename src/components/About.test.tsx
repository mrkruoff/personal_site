import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import About from "./About";

// Mock the image import
vi.mock("../assets/me.jpg", () => ({
  default: "test-image.jpg",
}));

// Mock react-icons
vi.mock("react-icons/fa", () => ({
  FaCode: () => <span data-testid="code-icon">CodeIcon</span>,
  FaServer: () => <span data-testid="server-icon">ServerIcon</span>,
  FaDatabase: () => <span data-testid="database-icon">DatabaseIcon</span>,
  FaCloud: () => <span data-testid="cloud-icon">CloudIcon</span>,
  FaArrowRight: () => <span>ArrowIcon</span>,
}));

describe("About component", () => {
  it("renders the about component", () => {
    const mockNavigate = vi.fn();
    render(<About onNavigateToContact={mockNavigate} />);
    const aboutElement = screen.getByTestId("about-component");
    expect(aboutElement).toBeInTheDocument();
  });

  it("renders the hero heading", () => {
    const mockNavigate = vi.fn();
    render(<About onNavigateToContact={mockNavigate} />);
    expect(screen.getByText("Full-Stack")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
  });

  it("renders Get In Touch button that navigates to contact", () => {
    const mockNavigate = vi.fn();
    render(<About onNavigateToContact={mockNavigate} />);
    const button = screen.getByRole("button", { name: /Get In Touch/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalled();
  });

  it("renders the profile image", () => {
    const mockNavigate = vi.fn();
    render(<About onNavigateToContact={mockNavigate} />);
    const image = screen.getByAltText(/Mark Ruoff/i);
    expect(image).toBeInTheDocument();
  });

  it("renders skill cards", () => {
    const mockNavigate = vi.fn();
    render(<About onNavigateToContact={mockNavigate} />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
    expect(screen.getByText("Backend")).toBeInTheDocument();
    expect(screen.getByText("Database")).toBeInTheDocument();
    expect(screen.getByText("Cloud")).toBeInTheDocument();
  });
});
