import Workpage from "@/pages/Workpage";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

test("renders Header correctly", () => {
  render(<Workpage />);
  expect(
    screen.getByText(/ეს არის ჩემს მიერ შესრულებული სამუშაო/i)
  ).toBeInTheDocument();
});

test("renders Paragraph correctly", () => {
  render(<Workpage />);
  expect(
    screen.getByText(/This is the description of this work/i)
  ).toBeInTheDocument();
});
