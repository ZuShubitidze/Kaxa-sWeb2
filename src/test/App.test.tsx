import App from "../App";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

test("navigates to about page on link click", () => {
  render(<App />);
  expect(screen.getByText(/kaxa/i)).toBeInTheDocument();
});
