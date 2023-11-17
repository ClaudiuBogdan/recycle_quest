import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import TextInput from "@/components/TextInput";

describe("TextInput", () => {
  test("renders the input field with the correct placeholder", () => {
    render(<TextInput value="" onChange={() => {}} placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  test("allows users to enter text", () => {
    const onChange = jest.fn();
    render(<TextInput value="" onChange={onChange} placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "Hello World" } });
    expect(onChange).toHaveBeenCalledWith("Hello World");
  });

  test("displays the correct value", () => {
    render(<TextInput value="Sample Text" onChange={() => {}} />);
    const inputElement = screen.getByDisplayValue("Sample Text");
    expect(inputElement).toBeInTheDocument();
  });
});
