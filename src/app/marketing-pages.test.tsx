import { render, screen } from "@testing-library/react";

import ContactPage from "@/app/contact/page";
import Home from "@/app/page";
import RegisterPage from "@/app/register/page";
import { getEnv } from "@/lib/env";

describe("marketing routes", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_CONTACT_FORM_URL: undefined,
      NEXT_PUBLIC_REGISTER_FORM_URL: undefined,
    };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("renders the branded home page with primary navigation", () => {
    render(<Home />);

    expect(screen.getByRole("img", { name: /nubuaed logo/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /islamic learning for children/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /register your child/i })).toHaveAttribute(
      "href",
      "/register",
    );
    expect(screen.getByRole("link", { name: /contact us/i })).toHaveAttribute("href", "/contact");
    expect(screen.queryByText(/ready to build something/i)).not.toBeInTheDocument();
  });

  it("renders a contact page empty state until the form URL is configured", () => {
    render(<ContactPage />);

    expect(screen.getByRole("heading", { level: 1, name: /contact nubuaed/i })).toBeInTheDocument();
    expect(screen.getByText(/the contact form link is coming soon/i)).toBeInTheDocument();
  });

  it("links to the configured contact form", () => {
    process.env.NEXT_PUBLIC_CONTACT_FORM_URL = "https://forms.example.com/contact";

    render(<ContactPage />);

    expect(screen.getByRole("link", { name: /open contact form/i })).toHaveAttribute(
      "href",
      "https://forms.example.com/contact",
    );
  });

  it("renders a register page empty state until the form URL is configured", () => {
    render(<RegisterPage />);

    expect(screen.getByRole("heading", { level: 1, name: /register for nubuaed/i })).toBeInTheDocument();
    expect(screen.getByText(/the registration form link is coming soon/i)).toBeInTheDocument();
  });

  it("links to the configured registration form", () => {
    process.env.NEXT_PUBLIC_REGISTER_FORM_URL = "https://forms.example.com/register";

    render(<RegisterPage />);

    expect(screen.getByRole("link", { name: /open registration form/i })).toHaveAttribute(
      "href",
      "https://forms.example.com/register",
    );
  });
});

describe("environment validation", () => {
  const originalEnv = process.env;

  afterEach(() => {
    process.env = originalEnv;
  });

  it("accepts optional public form URLs", () => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_CONTACT_FORM_URL: "https://forms.example.com/contact",
      NEXT_PUBLIC_REGISTER_FORM_URL: "https://forms.example.com/register",
    };

    expect(getEnv()).toMatchObject({
      NEXT_PUBLIC_CONTACT_FORM_URL: "https://forms.example.com/contact",
      NEXT_PUBLIC_REGISTER_FORM_URL: "https://forms.example.com/register",
    });
  });
});
