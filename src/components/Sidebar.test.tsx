import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Sidebar from "./Sidebar";

// Mock the icons
vi.mock("react-icons/fa", () => ({
  FaUser: () => <span>UserIcon</span>,
  FaBriefcase: () => <span>BriefcaseIcon</span>,
  FaCode: () => <span>CodeIcon</span>,
  FaEnvelope: () => <span>EnvelopeIcon</span>,
}));

describe("Sidebar component", () => {
  it("renders sidebar with correct content", () => {
    const setPageMock = vi.fn();
    render(<Sidebar setPage={setPageMock} />);

    // Check if the sidebar is rendered
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();

    // Check if the name is rendered
    const nameElement = screen.getByText("Mark Ruoff");
    expect(nameElement).toBeInTheDocument();

    // Check if all navigation items are rendered
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("calls setPage function with correct value when link is clicked", () => {
    const setPageMock = vi.fn();
    render(<Sidebar setPage={setPageMock} />);

    // Simulate a click on the About link
    const aboutLink = screen.getByText("About");
    fireEvent.click(aboutLink);
    expect(setPageMock).toHaveBeenCalledWith("About");

    // Simulate a click on the Experience link
    const experienceLink = screen.getByText("Experience");
    fireEvent.click(experienceLink);
    expect(setPageMock).toHaveBeenCalledWith("Experience");
    
    // Simulate a click on the Projects link
    const projectsLink = screen.getByText("Projects");
    fireEvent.click(projectsLink);
    expect(setPageMock).toHaveBeenCalledWith("Projects");
    
    // Simulate a click on the Contact link
    const contactLink = screen.getByText("Contact");
    fireEvent.click(contactLink);
    expect(setPageMock).toHaveBeenCalledWith("Contact");
  });
  
  it("calls onNavClick callback when provided and link is clicked", () => {
    const setPageMock = vi.fn();
    const onNavClickMock = vi.fn();
    render(<Sidebar setPage={setPageMock} onNavClick={onNavClickMock} />);

    // Simulate a click on the About link
    const aboutLink = screen.getByText("About");
    fireEvent.click(aboutLink);
    
    // Check if both callbacks were called
    expect(setPageMock).toHaveBeenCalledWith("About");
    expect(onNavClickMock).toHaveBeenCalled();
  });
});
