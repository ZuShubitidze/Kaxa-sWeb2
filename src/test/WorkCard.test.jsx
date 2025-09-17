import WorkCard from "@/components/WorkCard";

test("render WorkCard component", () => {
  render(<WorkCard id="1" img="/path/to/image.jpg" name="Work 1" />);
  expect(screen.getByText(/Work 1/i)).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /image1/i })).toBeInTheDocument();
});
