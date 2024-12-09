import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer component", () => {
  it("renders the Connections component", () => {
    render(<Footer />);
    const connectionsComponent = screen.getByTestId("connections-component");
    expect(connectionsComponent).toBeInTheDocument();
  });

  it("displays the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const yearElement = screen.getByText(`Mark Ruoff © ${currentYear}`);
    expect(yearElement).toBeInTheDocument();
  });
});
