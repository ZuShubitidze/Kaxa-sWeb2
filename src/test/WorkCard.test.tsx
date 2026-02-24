import WorkCard from "@/components/WorkCard";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

test("render WorkCard component", () => {
  render(<WorkCard img="/path/to/image.jpg" name="Work 1" />);
  expect(screen.getByText(/Work 1/i)).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /image1/i })).toBeInTheDocument();
});
