import Work from "../pages/Workpage";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

test("renders Header correctly", () => {
  render(<Work />);
  expect(
    screen.getByText(/ეს არის ჩემს მიერ შესრულებული სამუშაო/i)
  ).toBeInTheDocument();
});

test("renders Paragraph correctly", () => {
  render(<Work />);
  expect(
    screen.getByText(/This is the description of this work/i)
  ).toBeInTheDocument();
});
