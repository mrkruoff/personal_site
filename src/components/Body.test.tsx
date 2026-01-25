import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Body from "./Body";

// Define a type for component props
type ComponentProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

// Mock Framer Motion
vi.mock("framer-motion", () => ({
  motion: {
    div: (props: ComponentProps) => <div {...props} />,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock the page components
vi.mock("./About", () => ({
  default: ({ onNavigateToContact }: { onNavigateToContact: () => void }) => (
    <div data-testid="about-page">
      About Page Content
      <button onClick={onNavigateToContact}>Navigate to Contact</button>
    </div>
  ),
}));

vi.mock("./Experience", () => ({
  default: () => <div data-testid="experience-page">Experience Page Content</div>,
}));

vi.mock("./Contact", () => ({
  default: () => <div data-testid="contact-page">Contact Page Content</div>,
}));

describe("Body component", () => {
  it("renders the body container", () => {
    const setPageMock = vi.fn();
    render(<Body page="About" setPage={setPageMock} />);
    expect(screen.getByTestId("body")).toBeInTheDocument();
  });

  it("renders About page when page prop is About", () => {
    const setPageMock = vi.fn();
    render(<Body page="About" setPage={setPageMock} />);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  it("renders Experience page when page prop is Experience", () => {
    const setPageMock = vi.fn();
    render(<Body page="Experience" setPage={setPageMock} />);
    expect(screen.getByTestId("experience-page")).toBeInTheDocument();
  });
});
