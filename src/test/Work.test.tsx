import Workpage from "@/pages/WorkPage";
import { render, screen } from "@testing-library/react";
import { test, expect, vi, describe } from "vitest";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ id: "work-item-1" }), // Mock the ID
  };
});
vi.mock("@/pages/Homepage", () => ({
  array: [
    { id: "work-item-1", name: "Example Work 1", img: "image1.jpg" },
    { id: "work-item-2", name: "Example Work 2", img: "image2.jpg" },
  ],
}));

describe("Workpage component", () => {
  test("renders header correctly", () => {
    render(<Workpage />);
    expect(
      screen.getByText(/ეს არის ჩემს მიერ შესრულებული სამუშაო/i),
    ).toBeInTheDocument();
  });

  test("renders paragraph correctly", () => {
    render(<Workpage />);
    expect(
      screen.getByText(/This is the description of this work/i),
    ).toBeInTheDocument();
  });
});
