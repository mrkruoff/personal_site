import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Education from "./Education";

describe("Education component", () => {
  it("renders the correct university name", () => {
    render(<Education />);
    const universityName = screen.getByText("Oregon State University");
    expect(universityName).toBeInTheDocument();
  });

  it("renders the correct degree", () => {
    render(<Education />);
    const degree = screen.getByText(
      "Bacherlor's of Science in Computer Science",
    );
    expect(degree).toBeInTheDocument();
  });

  it("renders the correct graduation date", () => {
    render(<Education />);
    const graduationDate = screen.getByText("Graduated March 2018");
    expect(graduationDate).toBeInTheDocument();
  });
});
