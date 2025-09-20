import { expect, test } from "vitest";
import Contact from "../pages/Contactpage";
import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";

test("renders Contact Page Header correctly", () => {
  render(<Contact />);
  expect(screen.getByText(/საკონტაქტო/i)).toBeInTheDocument();
});

test("renders Contact Page Email correctly", () => {
  render(<Contact />);
  expect(
    screen.getByText(/kaxabershubitidze123@gmail.com/i)
  ).toBeInTheDocument();
});

test("renders Contact Page Phone Number correctly", () => {
  render(<Contact />);
  expect(screen.getByText(/599 92 35 98/i)).toBeInTheDocument();
});
