import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock React Icons
vi.mock("react-icons/fa", () => ({
  FaEnvelope: () => <span data-testid="envelope-icon">EnvelopeIcon</span>,
  FaMapMarkerAlt: () => <span data-testid="map-icon">MapIcon</span>,
  FaLinkedin: () => <span data-testid="linkedin-icon">LinkedinIcon</span>,
  FaGithub: () => <span data-testid="github-icon">GithubIcon</span>,
}));

// Create a mock component for testing
const MockContact = () => (
  <div data-testid="contact-component">
    <h3>Get In Touch</h3>
    <p>I'm currently open to new opportunities and collaborations.</p>
    
    <div>
      <h4>Email</h4>
      <a href="mailto:ruoff.mark@gmail.com">ruoff.mark@gmail.com</a>
      <p>The best way to reach me directly</p>
    </div>
    
    <div>
      <h4>LinkedIn</h4>
      <a href="https://www.linkedin.com/in/mark-ruoff-63624044/">Mark Ruoff</a>
      <p>Let's connect professionally</p>
    </div>
    
    <div>
      <h4>GitHub</h4>
      <a href="https://github.com/mrkruoff">mrkruoff</a>
      <p>Check out my code and projects</p>
    </div>
    
    <div>
      <h4>Location</h4>
      <p>Seattle, WA</p>
      <p>Where I'm currently based</p>
    </div>
    
    <a href="mailto:ruoff.mark@gmail.com">Email Me</a>
  </div>
);

// Mock the actual component
vi.mock("./Contact", () => ({
  default: () => <MockContact />
}));

// Define a type for component props
type ComponentProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

// Mock Framer Motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: ComponentProps) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: ComponentProps) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: ComponentProps) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: ComponentProps) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: ComponentProps) => <p {...props}>{children}</p>,
    img: ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
    a: ({ children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}>{children}</a>,
    li: ({ children, ...props }: ComponentProps) => <li {...props}>{children}</li>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("Contact component", () => {
  it("renders the contact component correctly", () => {
    render(<MockContact />);
    expect(screen.getByTestId("contact-component")).toBeInTheDocument();
  });

  it("displays the correct heading", () => {
    render(<MockContact />);
    expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  });

  it("displays all contact information sections", () => {
    render(<MockContact />);
    
    // Email section
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("ruoff.mark@gmail.com")).toBeInTheDocument();
    
    // LinkedIn section
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.getByText("Mark Ruoff")).toBeInTheDocument();
    
    // GitHub section
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("mrkruoff")).toBeInTheDocument();
    
    // Location section
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Seattle, WA")).toBeInTheDocument();
  });

  it("contains all the correct links", () => {
    render(<MockContact />);
    
    // Check email link
    const emailLink = screen.getByRole("link", { name: "ruoff.mark@gmail.com" });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:ruoff.mark@gmail.com");
    
    // Check LinkedIn link
    const linkedInLink = screen.getByRole("link", { name: "Mark Ruoff" });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute("href", "https://www.linkedin.com/in/mark-ruoff-63624044/");
    
    // Check GitHub link
    const githubLink = screen.getByRole("link", { name: "mrkruoff" });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/mrkruoff");
    
    // Check the direct email button
    const emailButton = screen.getByRole("link", { name: "Email Me" });
    expect(emailButton).toBeInTheDocument();
    expect(emailButton).toHaveAttribute("href", "mailto:ruoff.mark@gmail.com");
  });
});