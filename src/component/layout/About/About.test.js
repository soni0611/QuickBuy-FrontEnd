import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import About from "./About";

describe("About", () => {
  it("renders the Instagram button", () => {
    const { getByText } = render(<About />);
    expect(getByText("Visit Instagram")).toBeInTheDocument();
  });
});
