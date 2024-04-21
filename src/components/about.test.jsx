import { render, screen } from "@testing-library/react";
import About from "./about";

describe("About component", () => {
  test("renders the About component correctly", () => {
    render(<About />);
    expect(screen.getByTestId("about-component")).toBeInTheDocument();
  });

  test("displays the correct image", () => {
    render(<About />);
    const image = screen.getByAltText("Mark Ruoff");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "me.jpg");
  });

  test("displays the correct text content", () => {
    render(<About />);
    const textContent = screen.getByText("Mark Ruoff");
    expect(textContent).toBeInTheDocument();
  });

  test("contains the correct links", () => {
    render(<About />);
    const emailLink = screen.getByRole("link", { name: /email/i });
    const linkedInLink = screen.getByRole("link", { name: /LinkedIn/i });
    const githubLink = screen.getByRole("link", { name: /Github/i });

    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:ruoff.mark@gmail.com");

    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/mark-ruoff-63624044/"
    );

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/mrkruoff/personal_site"
    );
  });
});
