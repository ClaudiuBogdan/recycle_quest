import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import SubmitButton from "@/components/SubmitButton"; // Adjust the import path as needed

describe("SubmitButton", () => {
  test("renders the button with the correct label", () => {
    render(<SubmitButton label="Submit" onClick={() => {}} />);
    const buttonElement = screen.getByRole("button", { name: "Submit" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const onClick = jest.fn();
    render(<SubmitButton label="Submit" onClick={onClick} />);
    const buttonElement = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalled();
  });

  test("does not call onClick handler when disabled", () => {
    const onClick = jest.fn();
    render(<SubmitButton label="Submit" onClick={onClick} disabled />);
    const buttonElement = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(buttonElement);
    expect(onClick).not.toHaveBeenCalled();
  });
});
