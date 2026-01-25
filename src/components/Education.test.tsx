import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Education from "./Education";

// Define a type for component props
type ComponentProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

// Mock Framer Motion
vi.mock("framer-motion", () => ({
  motion: {
    div: (props: ComponentProps) => <div {...props} />,
    article: (props: ComponentProps) => <article {...props} />,
  },
}));

describe("Education component", () => {
  it("renders the correct university name", () => {
    render(<Education />);
    const universityName = screen.getByText("Oregon State University");
    expect(universityName).toBeInTheDocument();
  });

  it("renders the correct degree", () => {
    render(<Education />);
    // Fixed typo: "Bacherlor's" -> "Bachelor's"
    const degree = screen.getByText("Bachelor's of Science in Computer Science");
    expect(degree).toBeInTheDocument();
  });

  it("renders the correct graduation date", () => {
    render(<Education />);
    const graduationDate = screen.getByText("Graduated March 2018");
    expect(graduationDate).toBeInTheDocument();
  });
});
