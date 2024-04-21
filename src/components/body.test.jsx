import { render, screen } from "@testing-library/react";
import Body from "./body";

describe("Body component", () => {
  test("renders About component when page prop is 'about'", () => {
    render(<Body page="about" />);
    expect(screen.getByTestId("about-component")).toBeInTheDocument();
  });

  test("renders Experience component when page prop is 'experience'", () => {
    render(<Body page="experience" />);
    expect(screen.getByTestId("experience-component")).toBeInTheDocument();
  });
});
