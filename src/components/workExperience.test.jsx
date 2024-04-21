import { render, screen } from "@testing-library/react";
import WorkExperience from "./workExperience";

describe("WorkExperience component", () => {
  test("renders the correct number of ExperienceCard components", () => {
    render(<WorkExperience />);
    const experienceCards = screen.getAllByTestId("experience-card");
    expect(experienceCards.length).toBe(4);
  });

  test("renders the correct company name in each ExperienceCard component", () => {
    render(<WorkExperience />);
    const companyNames = screen.getAllByTestId("company-name");
    expect(companyNames[0]).toHaveTextContent("Point.me");
    expect(companyNames[1]).toHaveTextContent("Zulily");
    expect(companyNames[2]).toHaveTextContent("Opanga Networks");
    expect(companyNames[3]).toHaveTextContent("Forms on Fire");
  });

  test("renders the correct position in each ExperienceCard component", () => {
    render(<WorkExperience />);
    const positions = screen.getAllByTestId("position");
    expect(positions[0]).toHaveTextContent("Full Stack Software Engineer");
    expect(positions[1]).toHaveTextContent("Software Engineer II");
    expect(positions[2]).toHaveTextContent("Software Engineer II");
    expect(positions[3]).toHaveTextContent("Application Developer");
  });

  test("renders the correct duration in each ExperienceCard component", () => {
    render(<WorkExperience />);
    const durations = screen.getAllByTestId("duration");
    expect(durations[0]).toHaveTextContent("September 2023 - Present");
    expect(durations[1]).toHaveTextContent("October 2021 - September 2023");
    expect(durations[2]).toHaveTextContent("September 2018 - October 2021");
    expect(durations[3]).toHaveTextContent("January 2018 - August 2018");
  });

  test("renders the correct location in each ExperienceCard component", () => {
    render(<WorkExperience />);
    const locations = screen.getAllByTestId("location");
    expect(locations[0]).toHaveTextContent("Remote");
    expect(locations[1]).toHaveTextContent("Seattle, WA");
    expect(locations[2]).toHaveTextContent("Seattle, WA");
    expect(locations[3]).toHaveTextContent("Seattle, WA");
  });
});
