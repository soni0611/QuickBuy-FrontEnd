import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact", () => {
  it("renders the contact button", () => {
    const { getByText } = render(<Contact />);
    expect(getByText("Contact: shivam.soni1998@gmail.com")).toBeInTheDocument();
  });

  it("renders the email address in the href attribute of the anchor tag", () => {
    const { getByTestId } = render(<Contact />);
    const mailButton = getByTestId("mail-button");
    expect(mailButton.getAttribute("href")).toBe(
      "mailto:shivam.soni1998@gmail.com"
    );
  });
});
