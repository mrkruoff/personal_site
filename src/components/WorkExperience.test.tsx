import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WorkExperience from "./WorkExperience";

describe("WorkExperience component", () => {
  it("renders the correct number of ExperienceCard components", () => {
    render(<WorkExperience />);
    const experienceCards = screen.getAllByTestId("experience-card");
    expect(experienceCards.length).toEqual(6);
  });
});
