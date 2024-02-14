import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

// Render
// Query
// Expect(Assert)

// Groping test cases using describe method
// we can Use (test or it)

describe("Contact Us Page Test Case", () => {
  test("Should load contact us Component", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should Load button inside the Contact page", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  // same button with Text

  it("Should Load button inside the Contact page", () => {
    render(<ContactUs />);
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should Load Input name  inside the Contact page", () => {
    render(<ContactUs />);
    //   quering return the react node or react object
    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should Load two Input  inside the Contact page", () => {
    render(<ContactUs />);
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
