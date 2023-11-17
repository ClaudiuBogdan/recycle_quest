import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import NavigationButton from "@/components/NavigationButton"; // Adjust the import path as needed

describe("NavigationButton", () => {
  test("renders the button with the correct label", () => {
    render(<NavigationButton path="/test" buttonName="Go to Test" />);
    const buttonElement = screen.getByRole("button", { name: "Go to Test" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("button is disabled when the disabled prop is true", () => {
    render(<NavigationButton path="/test" buttonName="Go to Test" disabled />);
    const buttonElement = screen.getByRole("button", { name: "Go to Test" });
    expect(buttonElement).toBeDisabled();
  });

  test("button is not disabled when the disabled prop is false", () => {
    render(
      <NavigationButton
        path="/test"
        buttonName="Go to Test"
        disabled={false}
      />,
    );
    const buttonElement = screen.getByRole("button", { name: "Go to Test" });
    expect(buttonElement).not.toBeDisabled();
  });
});
