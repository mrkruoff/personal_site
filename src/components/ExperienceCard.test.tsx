import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ExperienceCard from "./ExperienceCard";

describe("ExperienceCard", () => {
  it("renders company name correctly", () => {
    const mockProps = {
      company: "Tech Corp",
      position: "Software Engineer",
      duration: "Jan 2020 - Dec 2022",
      location: "Remote",
    };

    render(<ExperienceCard {...mockProps} />);

    const companyName = screen.getByTestId("company-name");
    expect(companyName).toBeInTheDocument();
    expect(companyName).toHaveTextContent(mockProps.company);
  });

  it("renders position correctly", () => {
    const mockProps = {
      company: "Tech Corp",
      position: "Software Engineer",
      duration: "Jan 2020 - Dec 2022",
      location: "Remote",
    };

    render(<ExperienceCard {...mockProps} />);

    const position = screen.getByTestId("position");
    expect(position).toBeInTheDocument();
    expect(position).toHaveTextContent(mockProps.position);
  });

  it("renders duration correctly", () => {
    const mockProps = {
      company: "Tech Corp",
      position: "Software Engineer",
      duration: "Jan 2020 - Dec 2022",
      location: "Remote",
    };

    render(<ExperienceCard {...mockProps} />);

    const duration = screen.getByTestId("duration");
    expect(duration).toBeInTheDocument();
    expect(duration).toHaveTextContent(mockProps.duration);
  });

  it("renders location correctly", () => {
    const mockProps = {
      company: "Tech Corp",
      position: "Software Engineer",
      duration: "Jan 2020 - Dec 2022",
      location: "Remote",
    };

    render(<ExperienceCard {...mockProps} />);

    const location = screen.getByTestId("location");
    expect(location).toBeInTheDocument();
    expect(location).toHaveTextContent(mockProps.location);
  });
});