import { render, screen } from "@testing-library/react";
import Body from "./body";

describe("Body component", () => {
  test("renders About component when page prop is 'About'", () => {
    render(<Body page="About" />);
    expect(screen.getByTestId("body")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByTestId("about-component")).toBeInTheDocument();
  });

  test("renders Experience component when page prop is 'Experience'", () => {
    render(<Body page="Experience" />);
    expect(screen.getByTestId("body")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByText("My Experience")).toBeInTheDocument();
    expect(screen.getByTestId("experience-component")).toBeInTheDocument();
  });
});
