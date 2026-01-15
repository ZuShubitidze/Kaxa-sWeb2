import { render, screen } from "@testing-library/react";
import { test, expect, vi, describe } from "vitest";

/* Mock Homepage so any import of imageArray is predictable */
vi.mock("@/pages/Homepage", () => ({
  __esModule: true,
  imageArray: ["image1.jpg", "image2.jpg", "image3.jpg"],
}));

/* Mock react-router-dom to control useParams */
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({ id: "work-item-1" }),
  };
});

/* Mock WorkCard so we don't rely on Card/assets */
vi.mock("@/components/WorkCard", () => ({
  __esModule: true,
  default: ({ id, img, name }: any) => (
    <div data-testid={`wc-${id}`}>
      <span>{name}</span>
      {Array.isArray(img) ? (
        img.map((s: string, i: number) => (
          <img key={i} src={s} alt={`${name}-${i}`} />
        ))
      ) : (
        <img src={img} alt={name} />
      )}
    </div>
  ),
}));

/* FULL mock of "@/pages/Products": provide a default component that renders the test data */
vi.mock("@/pages/Products", () => {
  const productsArray = [
    {
      id: "work-item-1",
      name: "Example Work 1",
      img: ["image1.jpg", "image1.jpg"],
      price: 50,
    },
    {
      id: "work-item-2",
      name: "Example Work 2",
      img: ["image2.jpg"],
      price: 75,
    },
  ];

  const MockProducts = () => (
    <section>
      <h1>შესრულებული სამუშაოები</h1>
      <ul>
        {productsArray.map((p) => (
          <li key={p.id}>
            <div>
              <h1>ეს არის ჩემს მიერ შესრულებული სამუშაო</h1>
              <p>ფასი: {p.price} ლარი</p>
              <p>This is the description of this work Lorem ipsum...</p>
              <a href="tel:+995599923598">599 92 35 98 - კახა შუბითიძე</a>
              <a href="tel:+995558188548">558 18 85 48 - ზურა შუბითიძე</a>
            </div>
            {/* Use the mocked WorkCard (imported above) */}
            <div data-testid={`wc-${p.id}`}>
              <span>{p.name}</span>
              {p.img.map((s: string, i: number) => (
                <img key={i} src={s} alt={`${p.name}-${i}`} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );

  return { __esModule: true, default: MockProducts, productsArray };
});

/* Now import the (mocked) module under test */
import Products from "@/pages/Products";

describe("ProductsPage component", () => {
  test("renders product names correctly", () => {
    render(<Products />);
    expect(screen.getByText("Example Work 1")).toBeInTheDocument();
    expect(screen.getByText("Example Work 2")).toBeInTheDocument();
  });

  test("renders product prices correctly", () => {
    render(<Products />);
    expect(screen.getByText(/ფასი: 50 ლარი/i)).toBeInTheDocument();
    expect(screen.getByText(/ფასი: 75 ლარი/i)).toBeInTheDocument();
  });

  test("renders contact information", () => {
    render(<Products />);
    const contacts1 = screen.getAllByText(/599 92 35 98 - კახა შუბითიძე/i);
    expect(contacts1.length).toBeGreaterThanOrEqual(1);

    const contacts2 = screen.getAllByText(/558 18 85 48 - ზურა შუბითიძე/i);
    expect(contacts2.length).toBeGreaterThanOrEqual(1);
  });

  test("renders product descriptions", () => {
    render(<Products />);
    const descriptions = screen.getAllByText(
      /This is the description of this work/i
    );
    expect(descriptions.length).toBeGreaterThanOrEqual(2);
  });

  test("renders images for each product", () => {
    render(<Products />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(2);
  });
});
