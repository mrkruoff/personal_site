import { render, screen } from "@testing-library/react";
import Connenctions from "./connenctions";

describe("Connenctions component", () => {
  test("renders LinkedIn link with correct href", () => {
    render(<Connenctions />);
    const linkedInLink = screen.getByRole("link", { name: "LinkedIn" });
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/mark-ruoff-63624044/"
    );
  });

  test("renders LinkedIn image with correct alt text", () => {
    render(<Connenctions />);
    const linkedInImage = screen.getByAltText("LinkedIn");
    expect(linkedInImage).toBeInTheDocument();
  });

  test("renders GitHub link with correct href", () => {
    render(<Connenctions />);
    const gitHubLink = screen.getByRole("link", { name: "Github" });
    expect(gitHubLink).toHaveAttribute("href", "https://github.com/mrkruoff");
  });

  test("renders GitHub image with correct alt text", () => {
    render(<Connenctions />);
    const gitHubImage = screen.getByAltText("Github");
    expect(gitHubImage).toBeInTheDocument();
  });
});
