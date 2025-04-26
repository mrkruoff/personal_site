import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Footer from "./Footer";

// Define a type for component props
type ComponentProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

// Mock Framer Motion
vi.mock("framer-motion", () => ({
  motion: {
    div: (props: ComponentProps) => <div {...props} />,
    h1: (props: ComponentProps) => <h1 {...props} />,
    h2: (props: ComponentProps) => <h2 {...props} />,
    h3: (props: ComponentProps) => <h3 {...props} />,
    p: (props: ComponentProps) => <p {...props} />,
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
    li: (props: ComponentProps) => <li {...props} />,
    footer: (props: ComponentProps) => <footer {...props} />,
    svg: (props: React.SVGAttributes<SVGSVGElement>) => <svg {...props} />,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
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
    const topLink = screen.getByRole("link", { name: "Scroll to top" }); 
    expect(topLink).toBeInTheDocument();
    expect(topLink).toHaveAttribute("href", "#top");
  });
});
