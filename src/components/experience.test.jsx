import { render, screen } from "@testing-library/react";
import Experience from "./experience";

describe("Experience component", () => {
  test("renders the WorkExperience component", () => {
    render(<Experience />);
    const workExperienceComponent = screen.getByTestId(
      "work-experience-component"
    );
    expect(workExperienceComponent).toBeInTheDocument();
  });

  test("renders the Education component", () => {
    render(<Experience />);
    const educationComponent = screen.getByTestId("education-component");
    expect(educationComponent).toBeInTheDocument();
  });
});
