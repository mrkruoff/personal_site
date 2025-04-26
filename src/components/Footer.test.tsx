import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Footer from "./Footer";

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
    svg: (props: any) => <svg {...props} />,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock Connections component
vi.mock("./Connections", () => ({
  default: () => <div data-testid="connections-component">Mocked Connections</div>
}));

describe("Footer component", () => {
  it("renders the Connections component", () => {
    render(<Footer />);
    const connectionsComponent = screen.getByTestId("connections-component");
    expect(connectionsComponent).toBeInTheDocument();
  });

  it("displays the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    // Update the expected text to match the new format
    expect(screen.getByText(/Mark Ruoff/)).toBeInTheDocument();
    expect(screen.getByText(RegExp(currentYear.toString()))).toBeInTheDocument();
  });
  
  it("contains a back to top link", () => {
    render(<Footer />);
    const topLink = screen.getByRole("link", { name: "" }); // Empty name because it's an SVG
    expect(topLink).toBeInTheDocument();
    expect(topLink).toHaveAttribute("href", "#top");
  });
});
