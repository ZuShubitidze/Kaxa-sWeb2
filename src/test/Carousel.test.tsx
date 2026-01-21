import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CarouselComponent from "../components/ui/CarouselComponent";
import "@testing-library/jest-dom";

// Factory mock
vi.mock("@/components/ui/carousel", () => {
  return {
    Carousel: ({ children, ...props }: any) => (
      <div data-testid="mock-carousel" {...props}>
        {children}
      </div>
    ),
    CarouselContent: ({ children, ...props }: any) => (
      <div data-testid="mock-carousel-content" {...props}>
        {children}
      </div>
    ),
    CarouselItem: ({ children, ...props }: any) => (
      <div data-testid="mock-carousel-item" {...props}>
        {children}
      </div>
    ),
    CarouselPrevious: () => null,
    CarouselNext: () => null,
  };
});
// Mock data for testing
const mockItems = [
  { img: ["test1.jpg", "test1b.jpg"], name: "Test Item 1", id: "1" },
  { img: ["test2.jpg", "test2b.jpg"], name: "Test Item 2", id: "2" },
];

describe("Carousel component", () => {
  it("renders mock items correctly", () => {
    // Render Component
    render(
      <MemoryRouter>
        <CarouselComponent items={mockItems} />
      </MemoryRouter>
    );

    // Verify all carousel items are rendered.
    expect(screen.getAllByTestId("mock-carousel-item")).toHaveLength(
      mockItems.length
    );

    // Loop through the mock items to perform assertions.
    mockItems.forEach((item) => {
      expect(screen.getByText(`Name: ${item.name}`)).toBeInTheDocument();
      expect(screen.getByAltText(item.name)).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: new RegExp(item.name) })
      ).toHaveAttribute("href", `/${item.id}`);
    });
  });
  // Render with no items
  it("renders an empty state with no items", () => {
    render(
      <MemoryRouter>
        <CarouselComponent items={[]} />
      </MemoryRouter>
    );

    // Verify that the carousel content is rendered but no items exist.
    expect(screen.getByTestId("mock-carousel-content")).toBeInTheDocument();
    expect(screen.queryAllByTestId("mock-carousel-item")).toHaveLength(0);
  });
});
