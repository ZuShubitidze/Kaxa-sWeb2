import About from "../pages/Aboutpage";

test("renders About Page correctly", () => {
  render(<About />);
  expect(screen.getByText(/kaxa/i)).toBeInTheDocument();
});

test("renders About Page Header correctly", () => {
  render(<About />);
  expect(screen.getByText(/გვერდი ჩემს შესახებ/i)).toBeInTheDocument();
});

test("renders About Page Phone Number correctly", () => {
  render(<About />);
  expect(screen.getByText(/599 92 35 98/i)).toBeInTheDocument();
});
