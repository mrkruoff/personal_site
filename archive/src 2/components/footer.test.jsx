import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer component", () => {
  test("renders the Connections component", () => {
    render(<Footer />);
    const connectionsComponent = screen.getByTestId("connections-component");
    expect(connectionsComponent).toBeInTheDocument();
  });

  test("displays the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const yearElement = screen.getByText(`Mark Ruoff © ${currentYear}`);
    expect(yearElement).toBeInTheDocument();
  });
});
