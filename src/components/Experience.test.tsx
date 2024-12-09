import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Experience from "./Experience";

describe("Experience component", () => {
  it("renders the WorkExperience component", () => {
    render(<Experience />);
    const workExperienceComponent = screen.getByTestId(
      "work-experience-component",
    );
    expect(workExperienceComponent).toBeInTheDocument();
  });

  it("renders the Education component", () => {
    render(<Experience />);
    const educationComponent = screen.getByTestId("education-component");
    expect(educationComponent).toBeInTheDocument();
  });
});
