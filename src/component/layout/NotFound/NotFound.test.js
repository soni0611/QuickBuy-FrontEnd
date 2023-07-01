import { render } from "@testing-library/react";
import NotFound from "./NotFound.js";
import { MemoryRouter } from "react-router-dom";

test("renders the NotFound component", () => {
  const { getByText, getByTestId } = render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
  const errorIcon = getByTestId("ErrorIcon");
  const typography = getByText("Page Not Found");
  const link = getByText("Home");

  expect(errorIcon).toBeInTheDocument();
  expect(typography).toBeInTheDocument();
  expect(link).toBeInTheDocument();
});
