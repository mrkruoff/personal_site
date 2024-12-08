import { render, screen } from "@testing-library/react";
import WorkExperience from "./workExperience";

describe("WorkExperience component", () => {
  test("renders the correct number of ExperienceCard components", () => {
    render(<WorkExperience />);
    const experienceCards = screen.getAllByTestId("experience-card");
    expect(experienceCards.length).toBeGreaterThan(0);
  });
});
