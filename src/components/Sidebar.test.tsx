import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Sidebar from "./Sidebar";

describe("Sidebar component", () => {
  it("renders sidebar with correct content", () => {
    render(<Sidebar />);

    // Check if the sidebar is rendered
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();

    // Check if the name is rendered
    const nameElement = screen.getByText("Mark Ruoff");
    expect(nameElement).toBeInTheDocument();

    // Check if the About link is rendered
    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();

    // Check if the Experience link is rendered
    const experienceLink = screen.getByText("Experience");
    expect(experienceLink).toBeInTheDocument();
  });

  it("calls setPage function with correct value when link is clicked", () => {
    const setPageMock = vi.fn();
    render(<Sidebar setPage={setPageMock} />);

    // Simulate a click on the About link
    const aboutLink = screen.getByText("About");
    fireEvent.click(aboutLink);

    // Check if the setPage function is called with the correct value
    expect(setPageMock).toHaveBeenCalledWith("About");

    // Simulate a click on the Experience link
    const experienceLink = screen.getByText("Experience");
    fireEvent.click(experienceLink);

    // Check if the setPage function is called with the correct value
    expect(setPageMock).toHaveBeenCalledWith("Experience");
  });
});
