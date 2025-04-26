import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";

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

// Mock the components used in App
vi.mock("./components/Sidebar", () => ({
  default: ({ setPage, onNavClick }: any) => (
    <div data-testid="sidebar-component">
      Sidebar Component
      <button onClick={() => setPage("About")}>About</button>
      <button onClick={() => onNavClick && onNavClick()}>Navigation Click</button>
    </div>
  ),
}));

vi.mock("./components/Body", () => ({
  default: ({ page }: any) => (
    <div data-testid="body-component">
      Body Component showing {page} page
    </div>
  ),
}));

vi.mock("./components/Footer", () => ({
  default: () => <div data-testid="footer-component">Footer Component</div>,
}));

describe("App component", () => {
  it("renders the main layout components", () => {
    render(<App />);
    
    // Check that all main components are rendered
    expect(screen.getByTestId("page")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-component")).toBeInTheDocument();
    expect(screen.getByTestId("body-component")).toBeInTheDocument();
    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  });

  it("initially renders the About page", () => {
    render(<App />);
    expect(screen.getByText("Body Component showing About page")).toBeInTheDocument();
  });

  it("handles mobile menu toggle", () => {
    window.innerWidth = 500; // Simulate mobile viewport
    render(<App />);
    
    // The mobile menu button should be present
    expect(screen.getByRole("button", { name: "Toggle mobile menu" })).toBeInTheDocument();
  });
});