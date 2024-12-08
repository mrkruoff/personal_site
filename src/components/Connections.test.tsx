import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Connections from "./Connections";

describe("Connections component", () => {
  it("renders LinkedIn link with correct href", () => {
    render(<Connections />);
    const linkedInLink = screen.getByRole("link", { name: "LinkedIn" });
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/mark-ruoff-63624044/",
    );
  });

  it("renders LinkedIn image with correct alt text", () => {
    render(<Connections />);
    const linkedInImage = screen.getByAltText("LinkedIn");
    expect(linkedInImage).toBeInTheDocument();
  });

  it("renders GitHub link with correct href", () => {
    render(<Connections />);
    const gitHubLink = screen.getByRole("link", { name: "Github" });
    expect(gitHubLink).toHaveAttribute("href", "https://github.com/mrkruoff");
  });

  it("renders GitHub image with correct alt text", () => {
    render(<Connections />);
    const gitHubImage = screen.getByAltText("Github");
    expect(gitHubImage).toBeInTheDocument();
  });
});
