import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);

  // Assert that the sidebar and body components are rendered
  const sidebarElement = screen.getByTestId("sidebar");
  const bodyElement = screen.getByTestId("body");
  expect(sidebarElement).toBeInTheDocument();
  expect(bodyElement).toBeInTheDocument();
});

test('initial page state is set to "About"', () => {
  render(<App />);

  // Assert that the initial page state is set to "about"
  const pageElement = screen.getByTestId("page");
  expect(pageElement.textContent).toContain("Mark Ruoff");
});

test("renders Footer component", () => {
  render(<App />);
  expect(screen.getByTestId("footer-component")).toBeInTheDocument();
});
